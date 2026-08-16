'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import TreatmentDivider from '@/components/treatment-sections/TreatmentDivider';
import TreatmentTripleVideoSlider from '@/components/treatment-sections/TreatmentTripleVideoSlider';
import TreatmentVeneerRightTreatmentAccordion from '@/components/treatment-sections/TreatmentVeneerRightTreatmentAccordion';
import TreatmentDoctorsSection from '@/components/treatment-sections/TreatmentDoctorsSection';
import TreatmentVeneerBeforeAfterSliderSection from './treatment-sections/TreatmentVeneerBeforeAfterSliderSection';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentCostBreakdownAndPackageBannerSection from '@/components/treatment-sections/TreatmentCostBreakdownAndPackageBannerSection';
import TreatmentVeneerPackagesSlider from './treatment-sections/TreatmentVeneerPackagesSlider';
import TreatmentReviewsSection from './treatment-sections/TreatmentReviewsSection';
import TreatmentParallaxBanner from './treatment-sections/TreatmentParallaxBanner';
import TreatmentVeneerFAQSection from './treatment-sections/TreatmentVeneerFAQSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
import styles from './DentalImplantsDetailView.module.css';

interface VeneerI18n {
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

const VENEER_DATA: Record<string, VeneerI18n> = {
  en: {
    introHeading: 'Dental Veneers & Laminates in Istanbul, Turkey',
    introP1:
      'Dental veneers (porcelain laminates) are the gold standard of modern aesthetic dentistry, designed to transform stained, chipped, gapped, or misaligned teeth into a symmetrical, dazzling Hollywood smile in just 4 to 6 days. Crafted from high-density glass-ceramics like Swiss Ivoclar E-Max, each veneer is an ultra-thin shell bonded permanently to the outer enamel with microscopic precision.',
    partsTitle: 'The 3-Part Anatomy of an Aesthetic Porcelain Veneer Restoration:',
    part1Label: '1. Ultra-Thin Ceramic Shell (0.3mm - 0.5mm)',
    part1Desc:
      'The visible front restoration, custom-milled and hand-layered with natural incisal translucency, opalescence, and customized shade gradient (BL1–BL4, A1, B1).',
    part2Label: '2. Enamel Conditioning & Silane Coupling Layer',
    part2Desc:
      'The micro-etched interface that chemically bonds the ceramic glass matrix directly to natural tooth enamel, ensuring long-term adhesion.',
    part3Label: '3. Dual-Cure Resin Adhesive Cement',
    part3Desc:
      'The high-strength, biocompatible bonding agent that locks the veneer onto the tooth structure with zero micro-leakage and permanent retention.',
    healingP:
      'Unlike invasive dental crowns, porcelain veneers require minimal micro-preparation (0.3mm to 0.5mm strictly on the outer enamel surface), preserving up to 90% of your healthy natural tooth structure. There is zero downtime, no pain, and you leave Istanbul with an immediate life-changing smile.',
    solutionP:
      'Whether you need to close midline gaps (diastema), mask deep tetracycline or fluorosis discoloration, or undergo a full 20-tooth Hollywood Smile makeover, our master cosmetic dentists and in-house laboratory artisans deliver world-class aesthetic results at a fraction of UK and European costs.',
    whyChooseHeading: 'Why Choose Dental Veneers at Master Smile Studio in Istanbul?',
    whyChooseIntroLead: 'For thousands of international patients each year, ',
    whyChooseIntroLink: 'Master Smile Studio Istanbul',
    whyChooseIntroTail:
      ' is the premier destination for cosmetic smile transformations. Here is why discerning patients from the UK, Germany, USA, and across the globe trust us:',
    reason1Title: 'Expert Cosmetic Dentists & Master Ceramic Ceramists',
    reason1P1:
      'Our senior cosmetic dentists hold master’s degrees and certifications in Aesthetic Dentistry and Digital Smile Design. Each smile is treated as a unique work of art tailored to your facial proportions.',
    reason1P2:
      'Every veneer is hand-crafted and custom-layered by our master dental ceramists using authentic Swiss Ivoclar E-Max and Empress materials, ensuring lifelike light refraction and depth.',
    reason1P3:
      'You will work directly with our clinic founders and aesthetic specialists from your initial 3D digital mock-up preview to final bonding.',
    reason2Title: 'Unbeatable Veneer Packages & Up to 70% Cost Savings',
    reason2P:
      'Private dental veneer treatments in London, Berlin, or New York often cost £800 to £1,500 per tooth. At Master Smile Studio, complete smile packages including 5-star hotel accommodation and VIP chauffeur transfers save you up to 70% without compromising on Swiss ceramic quality.',
    viewAllPackagesBtn: 'View All Veneer Packages & Prices →',
    reason3Title: 'Advanced 3D Digital Smile Design (DSD) & Mock-Up Try-In',
    reason3P:
      'We use high-precision 3Shape digital intraoral scanners and CAD/CAM robotic milling. Before any preparation begins, a physical 3D "mock-up" is placed over your natural teeth so you can see, feel, and approve your new smile in the mirror.',
    reason4Title: 'Documented Before & After Patient Transformations',
    reason4P:
      'Browse our extensive gallery of genuine clinical cases showing flawless diastema gap closures, tetracycline stain masking, and Hollywood smile makeovers completed at our clinic.',
    reason5Title: 'Luxury 5-Star Travel & VIP Care in Istanbul',
    reason5PText:
      'We handle your entire journey: luxury 5-star hotel accommodation in central Istanbul, private VIP Mercedes airport and clinic transfers, and dedicated personal patient coordinators. ',
    reason5PLink: 'Contact our team for your personalized veneer consultation.',
    typesHeading: 'Types of Aesthetic Veneers & Smile Makeovers at Master Smile Studio',
    typesIntro:
      'We offer a comprehensive spectrum of ceramic and composite options to match your aesthetic desires, biological requirements, and budget:',
    singleTitle: '1. Ivoclar E-Max Porcelain Veneers (The Gold Standard)',
    singleP:
      'Swiss-made lithium disilicate glass-ceramic renowned for its unmatched translucency, natural opalescence, and strength. Ideal for front teeth aesthetic makeovers.',
    singleLinkLead: 'Learn more about ',
    singleLinkText: 'Ivoclar E-Max Porcelain Veneers →',
    multipleTitle: '2. Lumineers & No-Prep Ultra-Thin Veneers (0.2mm)',
    multipleP:
      'Contact lens-thin veneers bonded directly onto natural enamel without drilling, shaving, or anesthesia. Fully reversible and ultra-conservative.',
    multipleLinkLead: 'Explore ',
    multipleLinkText: 'No-Prep Lumineers in Istanbul →',
    allOn4Title: '3. Zirconium Veneers & Aesthetic Crowns',
    allOn4P:
      'High-strength biocompatible zirconia offering maximum fracture resistance, ideal for patients with heavy bite forces or combined bridge makeovers.',
    allOn4LinkLead: 'Discover ',
    allOn4LinkText: 'Zirconium Aesthetic Restorations →',
    allOn6Title: '4. Composite Bonding & Same-Day Veneers',
    allOn6P:
      'Direct composite resin sculpted chairside in a single visit to repair small chips, minor gaps, or edge wear quickly and cost-effectively.',
    allOn6LinkLead: 'Read about ',
    allOn6LinkText: 'Composite Smile Bonding →',
  },
  tr: {
    introHeading: 'İstanbul Diş Kaplama & Lamina Tedavisi',
    introP1:
      'Diş laminaları (yaprak porselenler), renk bozukluğu, kırık, aralık veya şekil bozukluğu olan dişleri sadece 4 ila 6 gün içinde kusursuz, simetrik ve doğal bir Hollywood gülüşüne dönüştüren estetik diş hekimliğinin altın standardıdır. İsviçre menşeli Ivoclar E-Max cam seramikten üretilen her bir lamina, diş minesine mikroskobik hassasiyetle yapıştırılır.',
    partsTitle: 'Estetik Bir Porselen Lamina Restorasyonunun 3 Temel Anatomisi:',
    part1Label: '1. Ultra İnce Seramik Tabaka (0.3mm - 0.5mm)',
    part1Desc:
      'Doğal diş minesinin ışık geçirgenliğini, derinliğini ve parlaklığını birebir taklit eden, kişiye özel renk geçişli (BL1–BL4, A1 vb.) estetik ön restorasyon.',
    part2Label: '2. Mine Asitleme & Silan Bağlayıcı Katman',
    part2Desc:
      'Cam seramik matriksini doğal diş minesine kimyasal ve mekanik olarak kilitleyen mikro pürüzlendirilmiş bağlayıcı tabaka.',
    part3Label: '3. Çift Kürlü Rezin Adeziv Siman',
    part3Desc:
      'Laminayı dişe mikron düzeyinde sabitleyen, renk değiştirmeyen ve sızdırmazlık sağlayan yüksek mukavemetli yapıştırıcı ajan.',
    healingP:
      'Geleneksel kaplamaların aksine, porselen laminalarda dişin sadece ön yüzeyinde 0.3 - 0.5 mm minimal mikro aşındırma yapılır ve doğal diş dokusunun %90’ı korunur. İyileşme süresi gerektirmez, ağrısızdır ve klinikten ayrıldığınız anda yeni gülüşünüzü kullanmaya başlarsınız.',
    solutionP:
      'İster ön dişlerinizdeki ayrıklıkları (diastema) kapatmak, ister inatçı sararmaları ve lekeleri gidermek, ister 20 dişlik komple bir Hollywood Smile yaptırmak isteyin; uzman estetik diş hekimlerimiz ve kendi laboratuvarımız Avrupa standartlarında sonuçları %70’e varan fiyat avantajıyla sunar.',
    whyChooseHeading: 'Neden Master Smile Studio İstanbul’da Lamina Tedavisi?',
    whyChooseIntroLead: 'Her yıl binlerce uluslararası hasta için ',
    whyChooseIntroLink: 'Master Smile Studio İstanbul',
    whyChooseIntroTail:
      ', estetik gülüş dönüşümlerinde ilk tercihtir. İngiltere, Almanya, ABD ve dünyanın dört bir yanından gelen hastalarımızın bizi tercih etme nedenleri:',
    reason1Title: 'Uzman Estetik Diş Hekimleri & Usta Seramistler',
    reason1P1:
      'Estetik diş hekimlerimiz Dijital Gülüş Tasarımı ve mikroskobik lamina uygulamalarında uzmanlaşmıştır. Her gülüş yüz oranlarınıza göre özel olarak tasarlanır.',
    reason1P2:
      'Her lamina, usta seramistlerimiz tarafından orijinal İsviçre Ivoclar E-Max ve Empress blokları kullanılarak el işçiliğiyle katmanlanır ve renklendirilir.',
    reason1P3:
      'İlk 3D dijital mock-up denemenizden kalıcı yapıştırma aşamasına kadar doğrudan klinik kurucularımız ve uzman hekimlerimizle çalışırsınız.',
    reason2Title: 'Her Şey Dahil Paketler & %70’e Varan Fiyat Tasarrufu',
    reason2P:
      'Avrupa ve İngiltere’de diş başına £800 - £1,500 olan lamina tedavileri, Master Smile Studio’da 5 yıldızlı otel konaklaması ve VIP transfer dahil paketlerle %70 daha uygundur.',
    viewAllPackagesBtn: 'Tüm Lamina Paketleri ve Fiyatları İncele →',
    reason3Title: '3D Dijital Gülüş Tasarımı (DSD) & Mock-Up Provası',
    reason3P:
      '3Shape dijital ağız içi tarayıcılar ve CAD/CAM sistemleri kullanıyoruz. Dişlerinize hiçbir işlem yapılmadan önce 3D mock-up modeliyle yeni gülüşünüzü aynada deneyimlersiniz.',
    reason4Title: 'Kayıtlı Gerçek Öncesi / Sonrası Vaka Dönüşümleri',
    reason4P:
      'Kliniğimizde başarıyla tamamlanan ayrık diş kapatma, ileri derece renk düzeltme ve Hollywood smile vakalarını inceleyin.',
    reason5Title: 'Lüks 5 Yıldızlı Konaklama ve VIP Seyahat Deneyimi',
    reason5PText:
      'İstanbul’un merkezinde 5 yıldızlı otel konaklaması, havalimanı ve klinik arası özel VIP Mercedes transferleri ve kendi dilinizde hasta danışmanı hizmeti. ',
    reason5PLink: 'Kişiye özel lamina teklifiniz için hemen iletişime geçin.',
    typesHeading: 'Master Smile Studio’da Uygulanan Lamina & Kaplama Türleri',
    typesIntro:
      'Estetik beklentilerinize ve diş yapınıza uygun en gelişmiş seramik ve kompozit seçenekleri:',
    singleTitle: '1. Ivoclar E-Max Porselen Lamina (Altın Standart)',
    singleP:
      'Doğal ışık geçirgenliği ve saydamlığıyla ön diş estetiğinde dünya genelinde 1 numaralı tercih olan lityum disilikat cam seramik.',
    singleLinkLead: 'Detaylı bilgi için: ',
    singleLinkText: 'Ivoclar E-Max Porselen Lamina →',
    multipleTitle: '2. Lumineers & Sıfır Kesim (No-Prep) Laminalar',
    multipleP:
      '0.2 mm lens inceliğinde, diş minesine hiç dokunulmadan, anestezi ve törpüleme gerektirmeden yapıştırılan ultra koruyucu laminalar.',
    multipleLinkLead: 'İnceleyin: ',
    multipleLinkText: 'Sıfır Kesim Lumineers İstanbul →',
    allOn4Title: '3. Zirkonyum Lamina & Estetik Kaplamalar',
    allOn4P:
      'Yüksek çiğneme kuvvetine dayanıklı, biyouyumlu ve estetik zirkonyum restorasyonlar.',
    allOn4LinkLead: 'Keşfedin: ',
    allOn4LinkText: 'Zirkonyum Estetik Restorasyonlar →',
    allOn6Title: '4. Kompozit Bonding & Tek Seansta Gülüş Tasarımı',
    allOn6P:
      'Diş kesimi olmadan, tek seansta klinikte hekim tarafından uygulanan pratik ve ekonomik estetik dolgu yöntemi.',
    allOn6LinkLead: 'Bilgi alın: ',
    allOn6LinkText: 'Kompozit Gülüş Bonding →',
  },
  de: {
    introHeading: 'Veneers & Porzellan-Laminate in Istanbul, Türkei',
    introP1:
      'Veneers (hauchdünne Keramikschalen) sind der Goldstandard der ästhetischen Zahnmedizin für ein perfektes, symmetrisches Lächeln in nur 4 bis 6 Tagen.',
    partsTitle: 'Die 3-Komponenten-Anatomie einer ästhetischen Veneer-Versorgung:',
    part1Label: '1. Hauchdünne Keramikschale (0,3mm - 0,5mm)',
    part1Desc: 'Individuell geschichtete Ivoclar E-Max Glaskeramik mit natürlicher Transluzenz.',
    part2Label: '2. Schmelzkonditionierung & Silanschicht',
    part2Desc: 'Chemische Haftbrücke zwischen Zahnschmelz und Keramikmatrix.',
    part3Label: '3. Dualhärtender Adhäsivzement',
    part3Desc: 'Hochfester Verbundwerkstoff für dauerhaften Halt ohne Randspalten.',
    healingP:
      'Bei Veneers werden nur 0,3–0,5 mm des äußeren Zahnschmelzes minimal abgetragen (90% der natürlichen Zahnsubstanz bleibt erhalten).',
    solutionP:
      'Ob Lückenschluss (Diastema), Farbkorrektur oder komplettes Hollywood Smile – unsere Spezialisten bieten Schweizer Qualität mit 70% Ersparnis.',
    whyChooseHeading: 'Warum Veneers bei Master Smile Studio in Istanbul?',
    whyChooseIntroLead: 'Für tausende internationale Patienten jedes Jahr ist ',
    whyChooseIntroLink: 'Master Smile Studio Istanbul',
    whyChooseIntroTail: ' die erste Adresse für Lächeln-Transformationen. Unsere Vorteile:',
    reason1Title: 'Spezialisierte Zahnärzte & Meisterkeramiker',
    reason1P1: 'Erfahrene Spezialisten für Digital Smile Design und ästhetische Zahnheilkunde.',
    reason1P2: 'Individuelle Handarbeit im Meisterlabor mit original Ivoclar E-Max Keramik.',
    reason1P3: 'Direkte Betreuung durch unsere Klinikgründer vom 3D Mock-Up bis zur Fertigstellung.',
    reason2Title: 'All-Inclusive-Pakete & Bis zu 70% Ersparnis',
    reason2P: 'Sparen Sie bis zu 70% gegenüber europäischen Preisen inklusive 5-Sterne-Hotel und VIP-Transfers.',
    viewAllPackagesBtn: 'Alle Veneer-Pakete & Preise ansehen →',
    reason3Title: '3D Digital Smile Design & Mock-Up Anprobe',
    reason3P: 'Probieren Sie Ihr neues Lächeln vor der Behandlung im Spiegel aus.',
    reason4Title: 'Dokumentierte Vorher & Nachher Patientenfälle',
    reason4P: 'Sehen Sie echte Ergebnisse von Diastemaschlüssen und Farbkorrekturen.',
    reason5Title: '5-Sterne-Luxushotel & VIP-Chauffeurservice in Istanbul',
    reason5PText: 'Komplette Reiseorganisation mit Chauffeur und deutschsprachiger Betreuung. ',
    reason5PLink: 'Kontaktieren Sie uns für Ihr persönliches Angebot.',
    typesHeading: 'Veneer-Arten bei Master Smile Studio',
    typesIntro: 'Modernste Keramik- und Kompositoptionen für Ihr individuelles Wunschergebnis:',
    singleTitle: '1. Ivoclar E-Max Porzellan-Veneers (Goldstandard)',
    singleP: 'Schweizer Glaskeramik mit unvergleichlicher Natürlichkeit.',
    singleLinkLead: 'Mehr erfahren: ',
    singleLinkText: 'Ivoclar E-Max Veneers →',
    multipleTitle: '2. Lumineers & No-Prep Veneers (0,2 mm)',
    multipleP: 'Hauchdünne Verblendungen ohne Bohren und ohne Schmerzen.',
    multipleLinkLead: 'Entdecken Sie ',
    multipleLinkText: 'No-Prep Lumineers Istanbul →',
    allOn4Title: '3. Zirkon-Veneers & Ästhetische Kronen',
    allOn4P: 'Hochfeste Restaurationen für starke Kaukräfte.',
    allOn4LinkLead: 'Erfahren Sie mehr über ',
    allOn4LinkText: 'Zirkon-Restaurationen →',
    allOn6Title: '4. Komposit-Bonding (Direct Veneers)',
    allOn6P: 'Schnelle Korrektur kleiner Mängel in nur einer Sitzung.',
    allOn6LinkLead: 'Details zu ',
    allOn6LinkText: 'Komposit-Bonding →',
  },
  pl: {
    introHeading: 'Licówki Porcelanowe i E-Max w Stambule, Turcja',
    introP1:
      'Licówki stomatologiczne (płatki porcelanowe) to złoty standard współczesnej stomatologii estetycznej, pozwalający przekształcić przebarwione, ukruszone lub nierówne zęby w symetryczny uśmiech Hollywood w zaledwie 4 do 6 dni.',
    partsTitle: '3-Częściowa Anatomia Odbudowy Licówką Porcelanową:',
    part1Label: '1. Ultracienka Płytka Ceramiczna (0,3mm - 0,5mm)',
    part1Desc: 'Widoczna część odbudowy z naturalną przeziernością i indywidualnym odcieniem (BL1–BL4, A1).',
    part2Label: '2. Wytrawione Szkliwo & Warstwa Silanowa',
    part2Desc: 'Mikroskopijne połączenie chemiczne matrycy ceramicznej ze szkliwem.',
    part3Label: '3. Cement Żywiczny Dual-Cure',
    part3Desc: 'Wysokowytrzymały materiał wiążący gwarantujący wieloletnią stabilność.',
    healingP:
      'W przeciwieństwie do tradycyjnych koron, licówki wymagają mikro-preparacji zaledwie 0,3–0,5 mm w obrębie szkliwa (90% naturalnego zęba pozostaje nienaruszone).',
    solutionP:
      'Niezależnie czy chcesz zamknąć diastemę, czy wykonać metamorfozę 20 zębów – oferujemy szwajcarską jakość Ivoclar E-Max z oszczędnością do 70%.',
    whyChooseHeading: 'Dlaczego Licówki w Master Smile Studio w Stambule?',
    whyChooseIntroLead: 'Dla tysięcy pacjentów z całej Europy ',
    whyChooseIntroLink: 'Master Smile Studio Stambuł',
    whyChooseIntroTail: ' to wiodąca klinika metamorfozy uśmiechu. Nasze atuty:',
    reason1Title: 'Doświadczeni Stomatolodzy Estetyczni i Mistrzowie Ceramiki',
    reason1P1: 'Lekarze z certyfikatami Digital Smile Design i stomatologii estetycznej.',
    reason1P2: 'Ręczne warstwowanie każdej licówki z oryginalnych bloczków Ivoclar E-Max.',
    reason1P3: 'Bezpośrednia opieka założycieli kliniki od przymiarki 3D po cementowanie.',
    reason2Title: 'Pakiety All-Inclusive & Oszczędność do 70%',
    reason2P: 'Luksusowy 5-gwiazdkowy hotel i transfery VIP w cenie pakietu z gwarancją jakości.',
    viewAllPackagesBtn: 'Zobacz Pakiety Licówek i Ceny →',
    reason3Title: 'Cyfrowe Projektowanie Uśmiechu (DSD) i Przymiarka 3D Mock-Up',
    reason3P: 'Zobacz i przetestuj swój nowy uśmiech w lustrze przed rozpoczęciem leczenia.',
    reason4Title: 'Udokumentowane Efekty Przed i Po',
    reason4P: 'Sprawdź metamorfozy pacjentów wykonane w naszej klinice.',
    reason5Title: 'Hotel 5★ i Prywatny Kierowca w Stambule',
    reason5PText: 'Prywatny transfer Mercedesem i polskojęzyczny opiekun na miejscu. ',
    reason5PLink: 'Skontaktuj się po bezpłatną wycenę.',
    typesHeading: 'Rodzaje Licówek w Master Smile Studio',
    typesIntro: 'Najlepsze rozwiązania dopasowane do Twoich potrzeb:',
    singleTitle: '1. Licówki Porcelanowe Ivoclar E-Max (Złoty Standard)',
    singleP: 'Szwajcarska ceramika szklana o doskonałej przezierności i naturalnym blasku.',
    singleLinkLead: 'Dowiedz się więcej: ',
    singleLinkText: 'Licówki Ivoclar E-Max →',
    multipleTitle: '2. Lumineers & Licówki No-Prep (0,2 mm)',
    multipleP: 'Cienkie jak soczewki kontaktowe, bez szlifowania i bez znieczulenia.',
    multipleLinkLead: 'Sprawdź: ',
    multipleLinkText: 'Licówki Bez Szlifowania Lumineers →',
    allOn4Title: '3. Licówki Cyrkonowe i Korony Estetyczne',
    allOn4P: 'Wysoka odporność na siły żucia i pęknięcia.',
    allOn4LinkLead: 'Odkryj: ',
    allOn4LinkText: 'Odbudowy Cyrkonowe →',
    allOn6Title: '4. Bonding Kompozytowy (Jedna Wizyta)',
    allOn6P: 'Szybka i ekonomiczna korekta kształtu zębów.',
    allOn6LinkLead: 'Szczegóły: ',
    allOn6LinkText: 'Bonding Kompozytowy →',
  },
  pt: {
    introHeading: 'Facetas Dentárias & Lentes de Contato em Istambul',
    introP1:
      'As facetas de porcelana são a solução de excelência para transformar o sorriso em apenas 4 a 6 dias.',
    partsTitle: 'A Anatomia em 3 Partes de uma Faceta de Porcelana:',
    part1Label: '1. Lâmina Cerâmica Ultrafina (0,3mm - 0,5mm)',
    part1Desc: 'Dissilicato de lítio Ivoclar E-Max com translucidez idêntica ao esmalte.',
    part2Label: '2. Condicionamento do Esmalte & Silano',
    part2Desc: 'Adesão química e mecânica permanente com o dente.',
    part3Label: '3. Cimento Resinoso Dual',
    part3Desc: 'Fixação de alta resistência e vedamento total.',
    healingP: 'Preparo mínimo de 0,3 mm preservando 90% do dente natural.',
    solutionP: 'Qualidade suíça e economia de até 70% em relação aos custos europeus.',
    whyChooseHeading: 'Por Que Fazer Facetas na Master Smile Studio Istambul?',
    whyChooseIntroLead: 'Para pacientes de todo o mundo, ',
    whyChooseIntroLink: 'Master Smile Studio Istambul',
    whyChooseIntroTail: ' é a escolha número 1 em estética dental:',
    reason1Title: 'Especialistas em Estética Dental & Mestres Ceramistas',
    reason1P1: 'Planejamento personalizado com Design Digital do Sorriso.',
    reason1P2: 'Cerâmica original Ivoclar E-Max suíça.',
    reason1P3: 'Acompanhamento direto pelos cirurgiões fundadores.',
    reason2Title: 'Pacotes All-Inclusive com 70% de Economia',
    reason2P: 'Hotel 5 estrelas e transfers VIP inclusos no tratamento.',
    viewAllPackagesBtn: 'Ver Pacotes e Preços de Facetas →',
    reason3Title: 'Design Digital 3D & Mock-Up na Boca',
    reason3P: 'Veja o resultado no espelho antes de tocar no dente.',
    reason4Title: 'Casos Reais de Antes e Depois',
    reason4P: 'Transformações comprovadas de diastemas e alinhamento.',
    reason5Title: 'Hotel 5★ e Transfers VIP Mercedes',
    reason5PText: 'Atendimento exclusivo em português durante toda a viagem. ',
    reason5PLink: 'Solicite seu orçamento gratuito.',
    typesHeading: 'Tipos de Facetas na Master Smile Studio',
    typesIntro: 'Soluções personalizadas em cerâmica e resina:',
    singleTitle: '1. Facetas Ivoclar E-Max (Padrão Ouro)',
    singleP: 'Máxima estética e translucidez natural.',
    singleLinkLead: 'Saiba mais: ',
    singleLinkText: 'Facetas E-Max →',
    multipleTitle: '2. Lentes de Contato No-Prep (0,2 mm)',
    multipleP: 'Sem desgaste dental e sem dor.',
    multipleLinkLead: 'Conheça: ',
    multipleLinkText: 'Lentes No-Prep →',
    allOn4Title: '3. Facetas de Zircônia',
    allOn4P: 'Alta resistência para dentes posteriores.',
    allOn4LinkLead: 'Veja: ',
    allOn4LinkText: 'Restaurações de Zircônia →',
    allOn6Title: '4. Resina Composta (Bonding)',
    allOn6P: 'Transformação rápida em sessão única.',
    allOn6LinkLead: 'Leia sobre: ',
    allOn6LinkText: 'Bonding em Resina →',
  },
  es: {
    introHeading: 'Carillas Dentales de Porcelana en Estambul, Turquía',
    introP1:
      'Las carillas de porcelana son el tratamiento estrella para lograr una sonrisa simétrica y blanca en 4 a 6 días.',
    partsTitle: 'La Anatomía en 3 Partes de una Carilla de Porcelana:',
    part1Label: '1. Fina Lámina Cerámica (0.3mm - 0.5mm)',
    part1Desc: 'Disilicato de litio Ivoclar E-Max con translucidez y brillo natural.',
    part2Label: '2. Grabado de Esmalte y Capa de Silano',
    part2Desc: 'Adhesión química y mecánica de alta precisión.',
    part3Label: '3. Cemento Resinoso de Fijación',
    part3Desc: 'Máxima retención y sellado marginal permanente.',
    healingP: 'Tallado mínimo de 0.3 mm preservando el 90% del diente natural.',
    solutionP: 'Ahorro de hasta el 70% con tecnología suiza Ivoclar E-Max.',
    whyChooseHeading: '¿Por Qué Elegir Carillas en Master Smile Studio Estambul?',
    whyChooseIntroLead: 'Para pacientes de toda Europa y América, ',
    whyChooseIntroLink: 'Master Smile Studio Estambul',
    whyChooseIntroTail: ' es la clínica de referencia en estética dental:',
    reason1Title: 'Odontólogos Cosméticos y Maestros Ceramistas',
    reason1P1: 'Diseño Digital de Sonrisa personalizado a sus facciones.',
    reason1P2: 'Cerámica suiza Ivoclar E-Max de alta gama.',
    reason1P3: 'Atención personalizada por los directores médicos.',
    reason2Title: 'Paquetes Todo Incluido con 70% de Ahorro',
    reason2P: 'Hotel 5 estrellas y chófer privado Mercedes incluidos.',
    viewAllPackagesBtn: 'Ver Paquetes de Carillas y Precios →',
    reason3Title: 'Diseño Digital 3D y Prueba Mock-Up',
    reason3P: 'Pruebe su sonrisa en el espejo antes de iniciar el tratamiento.',
    reason4Title: 'Casos Reales de Antes y Después',
    reason4P: 'Vea resultados de cierre de diastemas y blanqueamiento.',
    reason5Title: 'Hotel 5★ y Traslados VIP en Mercedes',
    reason5PText: 'Atención en español y chófer durante toda su estancia. ',
    reason5PLink: 'Pida su presupuesto personalizado.',
    typesHeading: 'Tipos de Carillas en Master Smile Studio',
    typesIntro: 'Las mejores opciones en porcelana y composite:',
    singleTitle: '1. Carillas Ivoclar E-Max (Estándar de Oro)',
    singleP: 'Máxima translucidez y naturalidad.',
    singleLinkLead: 'Más información: ',
    singleLinkText: 'Carillas Ivoclar E-Max →',
    multipleTitle: '2. Microcarillas No-Prep (Sin Tallado)',
    multipleP: 'Grosor de 0.2 mm sin necesidad de anestesia ni desgaste.',
    multipleLinkLead: 'Descubra: ',
    multipleLinkText: 'Carillas Sin Tallado Lumineers →',
    allOn4Title: '3. Carillas de Zirconio',
    allOn4P: 'Máxima resistencia para altas cargas masticatorias.',
    allOn4LinkLead: 'Ver detalles: ',
    allOn4LinkText: 'Restauraciones de Zirconio →',
    allOn6Title: '4. Carillas de Composite (Bonding)',
    allOn6P: 'Tratamiento rápido y económico en una sola cita.',
    allOn6LinkLead: 'Detalles sobre: ',
    allOn6LinkText: 'Bonding Dental →',
  },
  ru: {
    introHeading: 'Керамические виниры Ivoclar E-Max в Стамбуле',
    introP1:
      'Керамические виниры — это золотой стандарт эстетической стоматологии для создания белоснежной голливудской улыбки за 4–6 дней.',
    partsTitle: '3 составляющие безупречного керамического винира:',
    part1Label: '1. Ультратонкая керамическая пластинка (0,3–0,5 мм)',
    part1Desc: 'Стеклокерамика Ivoclar E-Max с естественной прозрачностью.',
    part2Label: '2. Подготовка эмали и силанизация',
    part2Desc: 'Химическое и механическое микросоединение с зубом.',
    part3Label: '3. Адгезивный светоотверждаемый цемент',
    part3Desc: 'Высокопрочная фиксация с пожизненной герметичностью.',
    healingP: 'Минимальное препарирование 0,3 мм с сохранением 90% эмали.',
    solutionP: 'Швейцарское качество E-Max с экономией до 70% по сравнению с Европой.',
    whyChooseHeading: 'Почему виниры в Master Smile Studio Стамбул?',
    whyChooseIntroLead: 'Для тысяч пациентов со всего мира ',
    whyChooseIntroLink: 'Master Smile Studio Стамбул',
    whyChooseIntroTail: ' — клиника №1 для преображения улыбки:',
    reason1Title: 'Опытные врачи-ортопеды и мастера-керамисты',
    reason1P1: 'Цифровой дизайн улыбки DSD под пропорции лица.',
    reason1P2: 'Ручная послойная керамика Ivoclar E-Max.',
    reason1P3: 'Контроль основателей клиники на всех этапах.',
    reason2Title: 'Пакеты «Все включено» и экономия до 70%',
    reason2P: '5-звездочный отель и VIP-трансфер включены в стоимость.',
    viewAllPackagesBtn: 'Все пакеты виниров и цены →',
    reason3Title: '3D цифровой дизайн и примерка Mock-Up',
    reason3P: 'Оцените улыбку в зеркале до начала любых манипуляций.',
    reason4Title: 'Реальные результаты До и После',
    reason4P: 'Фотографии закрытия диастем и осветления зубов.',
    reason5Title: 'Отель 5★ и трансфер на Mercedes в Стамбуле',
    reason5PText: 'Личный водитель и русскоязычный координатор. ',
    reason5PLink: 'Получите бесплатный расчет стоимости.',
    typesHeading: 'Виды виниров в Master Smile Studio',
    typesIntro: 'Передовые варианты для вашей идеальной улыбки:',
    singleTitle: '1. Виниры Ivoclar E-Max (Золотой стандарт)',
    singleP: 'Идеальная естественность и светопроницаемость.',
    singleLinkLead: 'Подробнее: ',
    singleLinkText: 'Виниры Ivoclar E-Max →',
    multipleTitle: '2. Люминиры без обточки (No-Prep)',
    multipleP: 'Толщина 0,2 мм без спиливания эмали и без анестезии.',
    multipleLinkLead: 'Узнать больше: ',
    multipleLinkText: 'Люминиры без обточки →',
    allOn4Title: '3. Циркониевые виниры и коронки',
    allOn4P: 'Повышенная прочность при сильных нагрузках.',
    allOn4LinkLead: 'Ознакомьтесь: ',
    allOn4LinkText: 'Циркониевые коронки →',
    allOn6Title: '4. Композитный бондинг (1 визит)',
    allOn6P: 'Быстрая реставрация сколов за одно посещение.',
    allOn6LinkLead: 'Читать о: ',
    allOn6LinkText: 'Композитный бондинг →',
  },
};

export default function DentalVeneersDetailView() {
  const locale = useLocale();
  const d = VENEER_DATA[locale] || VENEER_DATA.en;

  return (
    <div className={styles.pageWrapper}>
      {/* 1. INTRO EDITORIAL CLINICAL SECTION */}
      <section aria-labelledby="veneer-intro-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h1 id="veneer-intro-heading" className={styles.mainHeading}>
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
              src="https://www.youtube.com/embed/1wWyW2V_sgk"
              title="Dental Veneers in Istanbul Procedure Video"
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

      {/* 2. FIND THE RIGHT VENEER TREATMENT ACCORDION */}
      <TreatmentVeneerRightTreatmentAccordion />

      {/* 3. WHY CHOOSE DENTAL VENEERS IN ISTANBUL */}
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
            <Link href="/treatments/dental-veneers" className={styles.linkGold}>
              {d.whyChooseIntroLink}
            </Link>
            {d.whyChooseIntroTail}
          </p>

          {/* 1. Expert Cosmetic Dentists & Master Ceramists */}
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

          {/* 2. Veneer Cost & Packages */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>2.</span> {d.reason2Title}
          </h3>
          <p className={styles.textP}>{d.reason2P}</p>

          {/* INSERT: VENEER PACKAGES SLIDER */}
          <div className="my-8">
            <TreatmentVeneerPackagesSlider />
          </div>

          <div className={styles.btnWrap}>
            <Link href="/treatments" className={styles.btnPrimary}>
              {d.viewAllPackagesBtn}
            </Link>
          </div>

          {/* 3. Advanced 3D DSD */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>3.</span> {d.reason3Title}
          </h3>
          <p className={styles.textP}>{d.reason3P}</p>

          {/* Full-width Video */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/K4Xpx7JMyr8"
              title="Advanced Veneer Technology Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 4. Before & After Real Transformations */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>4.</span> {d.reason4Title}
          </h3>
          <p className={styles.textP}>{d.reason4P}</p>

          {/* INSERT: VENEER BEFORE - AFTER SLIDER */}
          <div className="my-8">
            <TreatmentVeneerBeforeAfterSliderSection />
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

      {/* 3. YOUR DENTAL JOURNEY MADE SIMPLE (4-Step Timeline) */}
      <TreatmentJourneySimpleSection />

      {/* 4. TYPES OF VENEERS (E-Max, Lumineers, Zirconium, Composite) */}
      <section aria-labelledby="types-veneers-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h2 id="types-veneers-heading" className={styles.sectionTitle}>
            {d.typesHeading}
          </h2>
          <p className={styles.textP}>{d.typesIntro}</p>

          {/* 1. Ivoclar E-Max */}
          <h3 className={styles.sectionSubTitle}>{d.singleTitle}</h3>
          <p className={styles.textP}>{d.singleP}</p>
          <p className={styles.textItalic}>
            {d.singleLinkLead}
            <Link href="/treatments/dental-veneers" className={styles.linkGold}>
              {d.singleLinkText}
            </Link>
          </p>

          {/* 2. Lumineers No-Prep */}
          <h3 className={styles.sectionSubTitle}>{d.multipleTitle}</h3>
          <p className={styles.textP}>{d.multipleP}</p>
          <p className={styles.textItalic}>
            {d.multipleLinkLead}
            <Link href="/treatments/dental-veneers" className={styles.linkGold}>
              {d.multipleLinkText}
            </Link>
          </p>

          {/* Video */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/smhwCD78Vbo"
              title="Veneer Smile Makeover in Istanbul Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 3. Zirconium */}
          <h3 className={styles.sectionSubTitle}>{d.allOn4Title}</h3>
          <p className={styles.textP}>{d.allOn4P}</p>
          <p className={styles.textItalic}>
            {d.allOn4LinkLead}
            <Link href="/treatments/dental-veneers" className={styles.linkGold}>
              {d.allOn4LinkText}
            </Link>
          </p>

          {/* 4. Composite Bonding */}
          <h3 className={styles.sectionSubTitle}>{d.allOn6Title}</h3>
          <p className={styles.textP}>{d.allOn6P}</p>
          <p className={styles.textItalic}>
            {d.allOn6LinkLead}
            <Link href="/treatments/dental-veneers" className={styles.linkGold}>
              {d.allOn6LinkText}
            </Link>
          </p>
        </div>
      </section>

      {/* 5. OUR BEST SERVICES INCLUDED */}
      <TreatmentServicesIncludedSection />

      {/* 6. PATIENT VIDEO REELS CAROUSEL */}
      <TreatmentPatientReelsSection />

      {/* 7. BEFORE - AFTER SLIDER (Second Placement) */}
      <TreatmentVeneerBeforeAfterSliderSection />

      {/* 8. COST BREAKDOWN & PACKAGE PROMO BANNER */}
      <TreatmentCostBreakdownAndPackageBannerSection />

      {/* 9. VENEER PACKAGES SLIDER */}
      <TreatmentVeneerPackagesSlider />

      {/* 10. REVIEWS SECTION (Google & Trustpilot) */}
      <TreatmentReviewsSection />

      {/* 11. PARALLAX CTA BANNER */}
      <TreatmentParallaxBanner />

      {/* 12. FREQUENTLY ASKED QUESTIONS */}
      <TreatmentVeneerFAQSection />

      {/* 13. INTERACTIVE 4-STEP QUOTE FORM */}
      <TreatmentInteractiveQuoteForm defaultTreatment="Veneers" />
    </div>
  );
}
