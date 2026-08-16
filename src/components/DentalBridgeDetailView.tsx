'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import TreatmentDivider from '@/components/treatment-sections/TreatmentDivider';
import TreatmentTripleVideoSlider from '@/components/treatment-sections/TreatmentTripleVideoSlider';
import TreatmentBridgeRightTreatmentAccordion from '@/components/treatment-sections/TreatmentBridgeRightTreatmentAccordion';
import TreatmentDoctorsSection from '@/components/treatment-sections/TreatmentDoctorsSection';
import TreatmentBridgeBeforeAfterSliderSection from './treatment-sections/TreatmentBridgeBeforeAfterSliderSection';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentCostBreakdownAndPackageBannerSection from '@/components/treatment-sections/TreatmentCostBreakdownAndPackageBannerSection';
import TreatmentBridgePackagesSlider from './treatment-sections/TreatmentBridgePackagesSlider';
import TreatmentReviewsSection from './treatment-sections/TreatmentReviewsSection';
import TreatmentParallaxBanner from './treatment-sections/TreatmentParallaxBanner';
import TreatmentBridgeFAQSection from './treatment-sections/TreatmentBridgeFAQSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
import styles from './DentalImplantsDetailView.module.css';

interface BridgeI18n {
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

const BRIDGE_DATA: Record<string, BridgeI18n> = {
  en: {
    introHeading: 'Dental Bridges & Zirconia Restorations in Istanbul, Turkey',
    introP1:
      'A dental bridge is a permanent fixed oral restoration engineered to replace one or more missing teeth, seamlessly restoring full chewing strength, clear speech articulation, and aesthetic harmony. Crafted from high-density German Zirconia (1200+ MPa) or Swiss Ivoclar E-Max ceramic, our dental bridges span tooth gaps with zero discomfort and sub-micron precision in just 4 to 6 days in Istanbul.',
    partsTitle: 'The 3-Part Structural Engineering of a Precision Dental Bridge:',
    part1Label: '1. Abutment Support Crowns (Anchor Pillars)',
    part1Desc:
      'Milled zirconia or ceramic crowns bonded permanently over natural anchor teeth or dental implants on either side of the tooth gap.',
    part2Label: '2. Suspended Pontic Artificial Tooth (Tooth Replacement)',
    part2Desc:
      'The custom-contoured prosthetic tooth that fills the gap, sculpted with an anatomical emergence profile against the gumline for optimal oral hygiene.',
    part3Label: '3. Micro-Engineered Connectors & Adhesive Luting Seal',
    part3Desc:
      'Stress-bearing monolithic connectors and biocompatible dual-cure resin cements that lock the bridge rigidly in place with zero micro-gaps.',
    healingP:
      'Dental bridges prevent adjacent natural teeth from drifting into empty spaces, stop opposing teeth from supra-erupting, and restore balanced occlusal force across your jaw. Same-day temporary bridges protect your prepared teeth from day one.',
    solutionP:
      'Whether replacing a single missing front tooth with a conservative Maryland bridge, restoring missing molars with high-strength zirconia, or rehabilitating multiple teeth on dental implants, Master Smile Studio Istanbul offers European-certified restorative excellence with up to 70% savings.',
    whyChooseHeading: 'Why Choose Dental Bridges at Master Smile Studio in Istanbul?',
    whyChooseIntroLead: 'For international patients seeking permanent tooth replacement, ',
    whyChooseIntroLink: 'Master Smile Studio Istanbul',
    whyChooseIntroTail:
      ' is the trusted center of excellence for precision fixed prosthodontics. Here is why patients choose us:',
    reason1Title: 'Expert Prosthodontists & Certified Master Ceramists',
    reason1P1:
      'Our prosthodontists have completed thousands of multi-unit bridge rehabilitations with computerized bite balance.',
    reason1P2:
      'We use genuine German Amann Girrbach Zirconia and Ivoclar E-Max blocks, precision-milled in our on-site laboratory.',
    reason1P3:
      'Direct, dedicated clinical care by our senior restorative team from initial 3D intraoral scan to final cementation.',
    reason2Title: 'All-Inclusive Bridge Packages & Up to 70% Cost Savings',
    reason2P:
      'While a 3-unit zirconia bridge costs £1,800 to £3,500 in the UK and Western Europe, our all-inclusive packages include 5-star hotel accommodation and VIP chauffeur transfers at up to 70% lower prices.',
    viewAllPackagesBtn: 'View All Bridge Packages & Prices →',
    reason3Title: '3Shape 3D Intraoral Scanning & 5-Axis Robotic CAD/CAM',
    reason3P:
      'No messy impression pastes. High-speed 3D optical scans capture your teeth in seconds, enabling robotic CAD/CAM milling with sub-micron marginal adaptation.',
    reason4Title: 'Documented Before & After Patient Case Portfolio',
    reason4P:
      'Browse real patient transformations showing missing teeth, collapsed bites, and broken dentitions restored to vibrant health and beauty.',
    reason5Title: 'Luxury 5-Star Hotel & VIP Mercedes Chauffeur in Istanbul',
    reason5PText:
      'Enjoy a stress-free dental holiday with 5-star hotel accommodation, private airport and clinic transfers, and full multi-lingual host support. ',
    reason5PLink: 'Contact our team for a free personalized dental bridge quote.',
    typesHeading: 'Types of Dental Bridges at Master Smile Studio Istanbul',
    typesIntro:
      'We provide tailored fixed bridge options designed for your unique clinical situation and bite demands:',
    singleTitle: '1. Traditional Fixed Zirconia Bridges (1200+ MPa)',
    singleP:
      'The most dependable solution for replacing 1 or 2 missing teeth using natural adjacent teeth as support anchors.',
    singleLinkLead: 'Learn more about ',
    singleLinkText: 'Traditional Fixed Bridges →',
    multipleTitle: '2. Implant-Supported Multi-Unit Dental Bridges',
    multipleP:
      'Restoring 3 to 4 consecutive missing teeth on just 2 dental implants without touching healthy natural teeth.',
    multipleLinkLead: 'Explore ',
    multipleLinkText: 'Implant-Supported Bridges →',
    allOn4Title: '3. Maryland Resin-Bonded Bridges (Minimal Prep)',
    allOn4P:
      'Ceramic wings bonded to the backside of adjacent teeth, ideal for front teeth with zero tooth shaving.',
    allOn4LinkLead: 'Discover ',
    allOn4LinkText: 'Maryland Bridges →',
    allOn6Title: '4. Cantilever Single-Sided Bridges & PMMA Temporaries',
    allOn6P:
      'Specialized solutions for single-ended anchor sites and same-day temporaries for complete comfort during treatment.',
    allOn6LinkLead: 'Read about ',
    allOn6LinkText: 'Cantilever & Restorative Solutions →',
  },
  tr: {
    introHeading: 'İstanbul Diş Köprüsü & Zirkonyum Restorasyon Tedavisi',
    introP1:
      'Diş köprüsü, bir veya birden fazla eksik dişin oluşturduğu boşluğu kalıcı olarak kapatan, çiğneme kuvvetini ve estetik gülüş bütünlüğünü yeniden kazandıran sabit bir protez tedavisidir. Orijinal 1200+ MPa Alman Zirkonyum ve İsviçre Ivoclar E-Max porselen bloklardan üretilen köprülerimiz, mikron hassasiyetinde sıfır hata payıyla sadece 4 ila 6 günde tamamlanır.',
    partsTitle: 'Hassas Bir Diş Köprüsü Restorasyonunun 3 Yapısal Anatomisi:',
    part1Label: '1. Destek Ayak Kaplamaları (Dayanak Kronlar)',
    part1Desc:
      'Boşluğun her iki tarafındaki doğal dişler veya implantlar üzerine kalıcı olarak yapıştırılan yüksek mukavemetli zirkonyum kaplamalar.',
    part2Label: '2. Askıdaki Yapay Gövde Diş (Pontik)',
    part2Desc:
      'Diş boşluğunu dolduran, diş etiyle doğal bir çıkış profili oluşturan ve yiyecek birikmesini önleyen özel form verilmiş yapay diş.',
    part3Label: '3. Yüksek Dayanımlı Bağlantı Noktaları & Adeziv Siman',
    part3Desc:
      'Çiğneme kuvvetini homojen dağıtan monolitik köprü bağlantıları ve köprüyü dişe mikron düzeyinde sabitleyen güçlü rezin yapıştırıcı.',
    healingP:
      'Diş köprüsü, komşu dişlerin boşluğa doğru eğilmesini ve karşı çenedeki dişlerin uzamasını önleyerek çene ekleminizi korur. İlk seansta takılan geçici köprü dişler sayesinde tedavi süresince dişsiz kalmaz ve hassasiyet yaşamazsınız.',
    solutionP:
      'İster tek bir ön diş boşluğu için diş kesimi gerektirmeyen Maryland kanatlı köprü, ister arka azı dişleri için kırılmaz zirkonyum köprü, ister implant destekli çözümler arayın; Master Smile Studio İstanbul %70’e varan fiyat avantajıyla en yüksek Avrupa standartlarını sunar.',
    whyChooseHeading: 'Neden Master Smile Studio İstanbul’da Diş Köprüsü Tedavisi?',
    whyChooseIntroLead: 'Eksik dişlerini kalıcı olarak tamamlamak isteyen uluslararası hastalar için ',
    whyChooseIntroLink: 'Master Smile Studio İstanbul',
    whyChooseIntroTail:
      ', protetik ve estetik diş hekimliğinde lider adrestir. Bizi tercih etmeniz için başlıca nedenler:',
    reason1Title: 'Uzman Protetik Hekimler & Sertifikalı Seramistler',
    reason1P1:
      'Hekimlerimiz bilgisayarlı kapanış ve oklüzyon analizlerinde uzmanlaşmış deneyimli protetik diş hekimleridir.',
    reason1P2:
      'Tüm köprülerimiz orijinal Alman Amann Girrbach Zirkonyum bloklar kullanılarak CAD/CAM robotik sistemlerle üretilir.',
    reason1P3:
      'İlk 3D ağız içi taramanızdan kalıcı simantasyon seansına kadar doğrudan kurucu uzman hekimlerimiz tarafından tedavi edilirsiniz.',
    reason2Title: 'Her Şey Dahil Paketler & %70’e Varan Fiyat Tasarrufu',
    reason2P:
      'Avrupa ve İngiltere’de 3 üyeli bir zirkonyum köprü £1,800 - £3,500 arasında iken, kliniğimizde 5 yıldızlı otel ve VIP transfer dahil paketlerle %70 daha uygundur.',
    viewAllPackagesBtn: 'Tüm Köprü Paketleri ve Fiyatları İncele →',
    reason3Title: '3Shape 3D Ağız İçi Tarama & 5 Eksenli Robotik CAD/CAM',
    reason3P:
      'Mide bulandıran geleneksel ölçü maddelerine son! Yüksek çözünürlüklü dijital optik tarayıcılar ve robotik frezlerle sıfır hata payıyla üretim yapıyoruz.',
    reason4Title: 'Kayıtlı Öncesi & Sonrası Gerçek Hasta Dönüşümleri',
    reason4P:
      'Eksik dişlerin tamamlandığı, çiğneme kuvvetinin geri kazanıldığı ve estetik gülüşün yeniden inşa edildiği klinik vakalarımızı inceleyin.',
    reason5Title: '5 Yıldızlı Otel Konaklaması & VIP Mercedes Transfer',
    reason5PText:
      'Havalimanı-otel-klinik arası özel şoförlü VIP Mercedes transferleri, merkezi 5 yıldızlı otel konaklaması ve ana dilinizde hasta danışmanlığı. ',
    reason5PLink: 'Ücretsiz köprü fiyat teklifiniz için hemen iletişime geçin.',
    typesHeading: 'Master Smile Studio’da Uygulanan Diş Köprüsü Türleri',
    typesIntro:
      'Ağız yapınıza, diş eksikliği sayınıza ve estetik beklentilerinize uygun köprü seçenekleri:',
    singleTitle: '1. Geleneksel Sabit Zirkonyum Köprü (1200+ MPa)',
    singleP:
      '1 veya 2 diş eksikliğinde komşu dişlerden destek alan, kırılmaya karşı ultra dayanıklı monolitik zirkonyum köprü.',
    singleLinkLead: 'Detaylı bilgi için: ',
    singleLinkText: 'Geleneksel Sabit Köprüler →',
    multipleTitle: '2. İmplant Destekli Sabit Diş Köprüleri',
    multipleP:
      'Yan yana 3-4 eksik dişi sadece 2 adet titanyum implant üzerine oturtarak komşu dişleri koruyan modern çözüm.',
    multipleLinkLead: 'İnceleyin: ',
    multipleLinkText: 'İmplant Destekli Köprüler →',
    allOn4Title: '3. Maryland Kanatlı Köprü (Diş Kesimsiz)',
    allOn4P:
      'Ön dişlerde komşu dişleri küçültmeden arka yüzeylerine yapıştırılan kanatçıklarla tutunan estetik köprü.',
    allOn4LinkLead: 'Keşfedin: ',
    allOn4LinkText: 'Maryland Köprüler →',
    allOn6Title: '4. Cantilever (Asma) Köprüler & Aynı Gün Geçiciler',
    allOn6P:
      'Tek taraflı dayanak dişli özel köprü tasarımları ve tedavi süresince konforunuzu sağlayan aynı gün geçici dişler.',
    allOn6LinkLead: 'Bilgi alın: ',
    allOn6LinkText: 'Cantilever & Restoratif Seçenekler →',
  },
  de: {
    introHeading: 'Zahnbrücken & Zirkon-Restaurationen in Istanbul',
    introP1:
      'Eine Zahnbrücke ist eine festsitzende Restauration zum Schließen von Zahnlücken, die volle Kaukraft und Ästhetik in 4 bis 6 Tagen wiederherstellt.',
    partsTitle: 'Die 3-Komponenten-Konstruktion einer Präzisions-Zahnbrücke:',
    part1Label: '1. Pfeilerkronen (Ankerkronen)',
    part1Desc: 'Festsitzende Zirkonkronen auf den Nachbarzähnen oder Implantaten.',
    part2Label: '2. Brückenglied (Künstlicher Ersatzzahn)',
    part2Desc: 'Anatomisch geformter Ersatzzahn, der die Lücke perfekt schließt.',
    part3Label: '3. Hochfeste Verbindungsstege & Adhäsivzement',
    part3Desc: 'Mikron-präzise Passung und spaltfreier Randschluss.',
    healingP: 'Zahnbrücken verhindern Zahnwanderungen und Fehlbelastungen des Kiefers.',
    solutionP: 'Sparen Sie bis zu 70% bei Zirkon- und Implantatbrücken in Istanbul.',
    whyChooseHeading: 'Warum Zahnbrücken bei Master Smile Studio in Istanbul?',
    whyChooseIntroLead: 'Für Patienten aus ganz Europa ist ',
    whyChooseIntroLink: 'Master Smile Studio Istanbul',
    whyChooseIntroTail: ' die erste Adresse für festsitzenden Zahnersatz:',
    reason1Title: 'Erfahrene Prothetiker & Meisterlabor',
    reason1P1: 'Perfekte Okklusion und individuelle Bissanpassung.',
    reason1P2: 'Original deutsches Zirkon von Amann Girrbach.',
    reason1P3: 'Direkte Betreuung durch unsere Fachärzte.',
    reason2Title: 'All-Inclusive-Pakete mit bis zu 70% Ersparnis',
    reason2P: 'Inklusive 5-Sterne-Hotel und VIP-Transfers zum Festpreis.',
    viewAllPackagesBtn: 'Alle Brücken-Pakete & Preise ansehen →',
    reason3Title: '3Shape 3D Intraoralscanner & CAD/CAM',
    reason3P: 'Höchste Präzision ohne Abdruckmasse.',
    reason4Title: 'Dokumentierte Vorher & Nachher Patientenfälle',
    reason4P: 'Echte Verwandlungen von Lücken zu voll funktionsfähigen Zähnen.',
    reason5Title: '5-Sterne-Hotel & VIP-Chauffeur in Istanbul',
    reason5PText: 'Rundum-sorglos-Reiseorganisation mit persönlicher Betreuung. ',
    reason5PLink: 'Kontaktieren Sie uns für Ihr persönliches Angebot.',
    typesHeading: 'Brücken-Arten bei Master Smile Studio',
    typesIntro: 'Moderne festsitzende Brückenlösungen:',
    singleTitle: '1. Traditionelle feste Zirkonbrücken (1200 MPa)',
    singleP: 'Hochstabile Brücken für 1 bis 2 fehlende Zähne.',
    singleLinkLead: 'Mehr über ',
    singleLinkText: 'Zirkonbrücken →',
    multipleTitle: '2. Implantatgetragene Zahnbrücken',
    multipleP: '3-4 Zähne auf nur 2 Implantaten ohne Nachbarzähne zu beschädigen.',
    multipleLinkLead: 'Entdecken Sie ',
    multipleLinkText: 'Implantatbrücken →',
    allOn4Title: '3. Maryland-Klebebrücken (Minimal-Prep)',
    allOn4P: 'Schonender Ersatz im Frontzahnbereich ohne Beschleifen.',
    allOn4LinkLead: 'Details zu ',
    allOn4LinkText: 'Maryland-Brücken →',
    allOn6Title: '4. Freiendbrücken & Sofortprovisorien',
    allOn6P: 'Einseitig verankerte Konstruktionen und temporärer Schutz.',
    allOn6LinkLead: 'Informationen zu ',
    allOn6LinkText: 'Freiendbrücken →',
  },
  pl: {
    introHeading: 'Mosty Zębowe i Odbudowy Cyrkonowe w Stambule, Turcja',
    introP1:
      'Most protetyczny to stałe uzupełnienie braków zębowych, które trwale przywraca pełną wydolność żucia, poprawną wymowę i naturalny uśmiech w 4–6 dni.',
    partsTitle: '3-Częściowa Konstrukcja Precyzyjnego Mostu Zębowego:',
    part1Label: '1. Korony Filarowe (Punkty Oparcia)',
    part1Desc: 'Cyrkonowe korony osadzane na naturalnych zębach filarowych lub implantach.',
    part2Label: '2. Przęsło Mostu (Sztuczny Ząb)',
    part2Desc: 'Idealnie wyprofilowany ząb uzupełniający lukę z profilem wyłaniania.',
    part3Label: '3. Wytrzymałe Łączniki i Cement Adhezyjny',
    part3Desc: 'Szczelne i trwałe połączenie znoszące duże siły żucia.',
    healingP: 'Most zapobiega przechylaniu się sąsiednich zębów i chroni staw skroniowo-żuchwowy.',
    solutionP: 'Oszczędność do 70% na mostach cyrkonowych i implantach w Stambule.',
    whyChooseHeading: 'Dlaczego Mosty Zębowe w Master Smile Studio w Stambule?',
    whyChooseIntroLead: 'Dla pacjentów z całej Europy ',
    whyChooseIntroLink: 'Master Smile Studio Stambuł',
    whyChooseIntroTail: ' to wiodący ośrodek precyzyjnej protetyki stomatologicznej:',
    reason1Title: 'Doświadczeni Protetycy i Mistrzowie Ceramiki',
    reason1P1: 'Cyfrowe projektowanie okluzji i rozkładu sił zgryzowych.',
    reason1P2: 'Niemiecki tlenek cyrkonu Amann Girrbach frezowany w CAD/CAM.',
    reason1P3: 'Bezpośrednia opieka lekarzy prowadzących.',
    reason2Title: 'Pakiety All-Inclusive & Oszczędność do 70%',
    reason2P: '5-gwiazdkowy hotel i transfery VIP w cenie.',
    viewAllPackagesBtn: 'Zobacz Pakiety Mostów i Ceny →',
    reason3Title: 'Cyfrowe Skanery 3Shape & Frezarki 5-Osiowe',
    reason3P: 'Precyzja bez tradycyjnych mas wyciskowych.',
    reason4Title: 'Metamorfozy Pacjentów Przed i Po',
    reason4P: 'Zobacz efekty odbudowy braków zębowych.',
    reason5Title: 'Hotel 5★ i Prywatny Kierowca w Stambule',
    reason5PText: 'Prywatny transfer i polskojęzyczny koordynator na miejscu. ',
    reason5PLink: 'Skontaktuj się po bezpłatną wycenę.',
    typesHeading: 'Rodzaje Mostów w Master Smile Studio',
    typesIntro: 'Nowoczesne rozwiązania protetyczne dla braków zębowych:',
    singleTitle: '1. Tradycyjne Fiksowane Mosty Cyrkonowe (1200 MPa)',
    singleP: 'Maksymalna wytrzymałość przy 1–2 brakujących zębach.',
    singleLinkLead: 'Więcej o ',
    singleLinkText: 'Mostach Cyrkonowych →',
    multipleTitle: '2. Mosty Protetyczne na Implantach',
    multipleP: 'Odbudowa 3–4 zębów na 2 implantach bez szlifowania zębów własnych.',
    multipleLinkLead: 'Poznaj ',
    multipleLinkText: 'Mosty na Implantach →',
    allOn4Title: '3. Mosty Adhezyjne Maryland (Bez Szlifowania)',
    allOn4P: 'Skrzydełka przyklejane do wewnętrznej strony zębów.',
    allOn4LinkLead: 'Sprawdź ',
    allOn4LinkText: 'Mosty Maryland →',
    allOn6Title: '4. Mosty Wspornikowe & Mosty Tymczasowe',
    allOn6P: 'Konstrukcje jednostronne i natychmiastowa ochrona zębów.',
    allOn6LinkLead: 'Czytaj o ',
    allOn6LinkText: 'Mostach Wspornikowych →',
  },
  pt: {
    introHeading: 'Pontes Dentárias e Zircônia em Istambul, Turquia',
    introP1:
      'A ponte dentária é uma prótese fixa desenvolvida para substituir dentes ausentes, restabelecendo a mastigação e o sorriso natural em 4 a 6 dias.',
    partsTitle: 'A Estrutura em 3 Partes de uma Ponte Dentária de Precisão:',
    part1Label: '1. Coroas Pilares (Retentores)',
    part1Desc: 'Coroas em zircônia cimentadas sobre os dentes de suporte ou implantes.',
    part2Label: '2. Pôntico (Dente Suspenso Substituto)',
    part2Desc: 'Dente protético anatômico que preenche o espaço com perfil gengival estético.',
    part3Label: '3. Conectores Rígidos e Cimento Resinoso',
    part3Desc: 'Vedamento biológico e união permanente sem folgas.',
    healingP: 'As pontes evitam a inclinação dos dentes vizinhos e protegem a mordida.',
    solutionP: 'Economize até 70% com qualidade alemã e suíça em Istambul.',
    whyChooseHeading: 'Por Que Fazer Pontes Dentárias na Master Smile Studio?',
    whyChooseIntroLead: 'Para pacientes de todo o mundo, ',
    whyChooseIntroLink: 'Master Smile Studio Istambul',
    whyChooseIntroTail: ' é a clínica referência em prótese fixa:',
    reason1Title: 'Especialistas em Prótese & Ceramistas',
    reason1P1: 'Ajuste de oclusão e equilíbrio funcional digital.',
    reason1P2: 'Zircônia alemã Amann Girrbach usinada em CAD/CAM.',
    reason1P3: 'Atendimento direto pelos cirurgiões fundadores.',
    reason2Title: 'Pacotes All-Inclusive com 70% de Economia',
    reason2P: 'Hotel 5 estrelas e transfers VIP Mercedes inclusos.',
    viewAllPackagesBtn: 'Ver Pacotes de Pontes e Preços →',
    reason3Title: 'Escaneamento 3D 3Shape sem Moldagens',
    reason3P: 'Conforto digital e precisão microscópica.',
    reason4Title: 'Casos Reais de Antes e Depois',
    reason4P: 'Veja transformações de pacientes com falhas dentárias.',
    reason5Title: 'Hotel 5★ e Transfers VIP Mercedes',
    reason5PText: 'Atendimento exclusivo em português durante toda a viagem. ',
    reason5PLink: 'Solicite seu orçamento gratuito.',
    typesHeading: 'Tipos de Pontes na Master Smile Studio',
    typesIntro: 'Opções personalizadas para reposição de dentes:',
    singleTitle: '1. Pontes Fixas Tradicionais em Zircônia (1200 MPa)',
    singleP: 'Alta resistência para substituição de 1 a 2 dentes.',
    singleLinkLead: 'Saiba mais: ',
    singleLinkText: 'Pontes em Zircônia →',
    multipleTitle: '2. Pontes Fixas Suportadas por Implantes',
    multipleP: '3 a 4 dentes sobre 2 implantes sem desgastar dentes vizinhos.',
    multipleLinkLead: 'Conheça: ',
    multipleLinkText: 'Pontes sobre Implantes →',
    allOn4Title: '3. Pontes Adesivas Maryland (Sem Desgaste)',
    allOn4P: 'Aletas cerâmicas coladas na face interna dos dentes.',
    allOn4LinkLead: 'Descubra: ',
    allOn4LinkText: 'Pontes Maryland →',
    allOn6Title: '4. Pontes em Extensão & Provisórios',
    allOn6P: 'Soluções em cantilever e conforto imediato no mesmo dia.',
    allOn6LinkLead: 'Leia sobre: ',
    allOn6LinkText: 'Pontes em Extensão →',
  },
  es: {
    introHeading: 'Puentes Dentales y Zirconio en Estambul, Turquía',
    introP1:
      'Un puente dental es una prótesis fija que sustituye piezas ausentes, recuperando la fuerza de masticación y la estética natural en tan solo 4 a 6 días.',
    partsTitle: 'La Estructura en 3 Partes de un Puente Dental de Precisión:',
    part1Label: '1. Coronas Pilares (Dientes de Apoyo)',
    part1Desc: 'Coronas de zirconio cementadas sobre dientes vecinos o implantes.',
    part2Label: '2. Póntico (Diente Artificial Suspendido)',
    part2Desc: 'Pieza anatómica que cubre el hueco con integración gingival óptima.',
    part3Label: '3. Conectores Rígidos y Cemento Adhesivo',
    part3Desc: 'Sellado biológico permanente resistente a las fuerzas de mordida.',
    healingP: 'Los puentes impiden que los dientes vecinos se desplacen hacia el espacio.',
    solutionP: 'Ahorro de hasta el 70% con tecnología alemana en Estambul.',
    whyChooseHeading: '¿Por Qué Elegir Puentes en Master Smile Studio Estambul?',
    whyChooseIntroLead: 'Para pacientes de todo el mundo, ',
    whyChooseIntroLink: 'Master Smile Studio Estambul',
    whyChooseIntroTail: ' es el centro de referencia en prótesis fija:',
    reason1Title: 'Especialistas en Prótesis y Maestros Ceramistas',
    reason1P1: 'Equilibrio oclusal y diseño digital de precisión.',
    reason1P2: 'Zirconio alemán original fresado por CAD/CAM.',
    reason1P3: 'Atención médica directa por los directores de la clínica.',
    reason2Title: 'Paquetes Todo Incluido con 70% de Ahorro',
    reason2P: 'Hotel 5 estrellas y chófer privado Mercedes incluidos.',
    viewAllPackagesBtn: 'Ver Paquetes de Puentes y Precios →',
    reason3Title: 'Escaneo 3D Digital Intraoral 3Shape',
    reason3P: 'Sin pastas molestas y con precisión submicrónica.',
    reason4Title: 'Casos Reales de Antes y Después',
    reason4P: 'Vea resultados de pacientes que recuperaron sus dientes.',
    reason5Title: 'Hotel 5★ y Traslados VIP en Mercedes',
    reason5PText: 'Atención en español durante toda su estancia. ',
    reason5PLink: 'Pida su presupuesto personalizado.',
    typesHeading: 'Tipos de Puentes en Master Smile Studio',
    typesIntro: 'Opciones de vanguardia en zirconio e implantes:',
    singleTitle: '1. Puentes Fijos Tradicionales de Zirconio (1200 MPa)',
    singleP: 'Máxima resistencia para ausencias de 1 o 2 dientes.',
    singleLinkLead: 'Más información: ',
    singleLinkText: 'Puentes de Zirconio →',
    multipleTitle: '2. Puentes Dentales sobre Implantes',
    multipleP: '3 o 4 piezas sobre 2 implantes sin tallar dientes sanos.',
    multipleLinkLead: 'Descubra: ',
    multipleLinkText: 'Puentes sobre Implantes →',
    allOn4Title: '3. Puentes Adhesivos Maryland (Mínimo Tallado)',
    allOn4P: 'Aletas estéticas unidas a la parte trasera de los dientes.',
    allOn4LinkLead: 'Ver detalles: ',
    allOn4LinkText: 'Puentes Maryland →',
    allOn6Title: '4. Puentes en Voladizo y Provisionales',
    allOn6P: 'Soluciones en cantiléver y comodidad desde el primer día.',
    allOn6LinkLead: 'Detalles sobre: ',
    allOn6LinkText: 'Puentes Cantilever →',
  },
  ru: {
    introHeading: 'Зубные мостовидные протезы в Стамбуле, Турция',
    introP1:
      'Зубной мост — это несъемная ортопедическая конструкция для восстановления отсутствующих зубов, возвращающая 100% жевательной функции и эстетику за 4–6 дней.',
    partsTitle: '3 составляющие точного зубного мостовидного протеза:',
    part1Label: '1. Опорные коронки (Пиллары)',
    part1Desc: 'Циркониевые коронки, фиксируемые на опорных зубах или имплантатах.',
    part2Label: '2. Промежуточная часть (Искусственный зуб / Понтик)',
    part2Desc: 'Анатомическая коронка, замещающая отсутствующий зуб.',
    part3Label: '3. Прочные коннекторы и адгезивный цемент',
    part3Desc: 'Герметичное соединение, выдерживающее любые жевательные нагрузки.',
    healingP: 'Мост предотвращает смещение соседних зубов и сохраняет прикус.',
    solutionP: 'Немецкое качество материалов с экономией до 70% в Стамбуле.',
    whyChooseHeading: 'Почему зубные мосты в Master Smile Studio Стамбул?',
    whyChooseIntroLead: 'Для пациентов со всего мира ',
    whyChooseIntroLink: 'Master Smile Studio Стамбул',
    whyChooseIntroTail: ' — клиника №1 для несъемного протезирования:',
    reason1Title: 'Опытные врачи-ортопеды и мастера-керамисты',
    reason1P1: 'Компьютерный анализ окклюзии и смыкания зубных рядов.',
    reason1P2: 'Немецкий цирконий Amann Girrbach на 5-осевых станках CAD/CAM.',
    reason1P3: 'Постоянный контроль ведущих специалистов клиники.',
    reason2Title: 'Пакеты «Все включено» и экономия до 70%',
    reason2P: '5-звездочный отель и VIP-трансфер включены в стоимость.',
    viewAllPackagesBtn: 'Все пакеты мостов и цены →',
    reason3Title: '3D-сканирование 3Shape без слепочной массы',
    reason3P: 'Идеальная точность прилегания без неприятных ощущений.',
    reason4Title: 'Реальные результаты До и После',
    reason4P: 'Фотографии восстановления отсутствующих зубов.',
    reason5Title: 'Отель 5★ и трансфер на Mercedes в Стамбуле',
    reason5PText: 'Личный водитель и русскоязычный координатор. ',
    reason5PLink: 'Получите бесплатный расчет стоимости.',
    typesHeading: 'Виды мостовидных протезов в Master Smile Studio',
    typesIntro: 'Передовые варианты восстановления зубного ряда:',
    singleTitle: '1. Традиционные циркониевые мосты (1200 МПа)',
    singleP: 'Высокая прочность для замещения 1–2 зубов.',
    singleLinkLead: 'Подробнее: ',
    singleLinkText: 'Циркониевые мосты →',
    multipleTitle: '2. Мостовидные протезы на имплантатах',
    multipleP: '3–4 зуба на 2 имплантах без обточки соседних здоровых зубов.',
    multipleLinkLead: 'Узнать больше: ',
    multipleLinkText: 'Мосты на имплантах →',
    allOn4Title: '3. Мэрилендские адгезивные мосты (Без обточки)',
    allOn4P: 'Крепление с помощью крыловидных элементов на задней стенке зуба.',
    allOn4LinkLead: 'Ознакомьтесь: ',
    allOn4LinkText: 'Мосты Maryland →',
    allOn6Title: '4. Консольные мосты и временные конструкции',
    allOn6P: 'Консольные решения и временный комфорт в день приема.',
    allOn6LinkLead: 'Читать о: ',
    allOn6LinkText: 'Консольных мостах →',
  },
};

export default function DentalBridgeDetailView() {
  const locale = useLocale();
  const d = BRIDGE_DATA[locale] || BRIDGE_DATA.en;

  return (
    <div className={styles.pageWrapper}>
      {/* 1. INTRO EDITORIAL CLINICAL SECTION */}
      <section aria-labelledby="bridge-intro-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h1 id="bridge-intro-heading" className={styles.mainHeading}>
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
              title="Dental Bridges in Istanbul Procedure Video"
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

      {/* 2. FIND THE RIGHT BRIDGE TREATMENT ACCORDION */}
      <TreatmentBridgeRightTreatmentAccordion />

      {/* 3. WHY CHOOSE DENTAL BRIDGES IN ISTANBUL */}
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
            <Link href="/treatments/dental-bridge" className={styles.linkGold}>
              {d.whyChooseIntroLink}
            </Link>
            {d.whyChooseIntroTail}
          </p>

          {/* 1. Expert Prosthodontists & Ceramists */}
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

          {/* 2. Bridge Cost & Packages */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>2.</span> {d.reason2Title}
          </h3>
          <p className={styles.textP}>{d.reason2P}</p>

          {/* INSERT: BRIDGE PACKAGES SLIDER */}
          <div className="my-8">
            <TreatmentBridgePackagesSlider />
          </div>

          <div className={styles.btnWrap}>
            <Link href="/treatments" className={styles.btnPrimary}>
              {d.viewAllPackagesBtn}
            </Link>
          </div>

          {/* 3. CAD/CAM Robotic Milling & 3D Scanning */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>3.</span> {d.reason3Title}
          </h3>
          <p className={styles.textP}>{d.reason3P}</p>

          {/* Full-width Video */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/K4Xpx7JMyr8"
              title="Advanced Dental Bridge CAD/CAM Technology Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 4. Before & After Real Transformations */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>4.</span> {d.reason4Title}
          </h3>
          <p className={styles.textP}>{d.reason4P}</p>

          {/* INSERT: BRIDGE BEFORE - AFTER SLIDER */}
          <div className="my-8">
            <TreatmentBridgeBeforeAfterSliderSection />
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

      {/* 5. TYPES OF BRIDGES (Zirconia, Implant-Supported, Maryland, Cantilever) */}
      <section aria-labelledby="types-bridges-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h2 id="types-bridges-heading" className={styles.sectionTitle}>
            {d.typesHeading}
          </h2>
          <p className={styles.textP}>{d.typesIntro}</p>

          {/* 1. Traditional Zirconia */}
          <h3 className={styles.sectionSubTitle}>{d.singleTitle}</h3>
          <p className={styles.textP}>{d.singleP}</p>
          <p className={styles.textItalic}>
            {d.singleLinkLead}
            <Link href="/treatments/dental-bridge" className={styles.linkGold}>
              {d.singleLinkText}
            </Link>
          </p>

          {/* 2. Implant-Supported */}
          <h3 className={styles.sectionSubTitle}>{d.multipleTitle}</h3>
          <p className={styles.textP}>{d.multipleP}</p>
          <p className={styles.textItalic}>
            {d.multipleLinkLead}
            <Link href="/treatments/dental-bridge" className={styles.linkGold}>
              {d.multipleLinkText}
            </Link>
          </p>

          {/* Video */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/smhwCD78Vbo"
              title="Dental Bridge Restoration in Istanbul Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 3. Maryland Bridge */}
          <h3 className={styles.sectionSubTitle}>{d.allOn4Title}</h3>
          <p className={styles.textP}>{d.allOn4P}</p>
          <p className={styles.textItalic}>
            {d.allOn4LinkLead}
            <Link href="/treatments/dental-bridge" className={styles.linkGold}>
              {d.allOn4LinkText}
            </Link>
          </p>

          {/* 4. Cantilever & Temporaries */}
          <h3 className={styles.sectionSubTitle}>{d.allOn6Title}</h3>
          <p className={styles.textP}>{d.allOn6P}</p>
          <p className={styles.textItalic}>
            {d.allOn6LinkLead}
            <Link href="/treatments/dental-bridge" className={styles.linkGold}>
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
      <TreatmentBridgeBeforeAfterSliderSection />

      {/* 9. COST BREAKDOWN & PACKAGE PROMO BANNER */}
      <TreatmentCostBreakdownAndPackageBannerSection />

      {/* 10. BRIDGE PACKAGES SLIDER */}
      <TreatmentBridgePackagesSlider />

      {/* 11. REVIEWS SECTION (Google & Trustpilot) */}
      <TreatmentReviewsSection />

      {/* 12. PARALLAX CTA BANNER */}
      <TreatmentParallaxBanner />

      {/* 13. FREQUENTLY ASKED QUESTIONS */}
      <TreatmentBridgeFAQSection />

      {/* 14. INTERACTIVE 4-STEP QUOTE FORM */}
      <TreatmentInteractiveQuoteForm defaultTreatment="Dental Bridge" />
    </div>
  );
}
