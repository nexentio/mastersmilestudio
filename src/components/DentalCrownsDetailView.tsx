'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import TreatmentDivider from '@/components/treatment-sections/TreatmentDivider';
import TreatmentTripleVideoSlider from '@/components/treatment-sections/TreatmentTripleVideoSlider';
import TreatmentCrownsRightTreatmentAccordion from '@/components/treatment-sections/TreatmentCrownsRightTreatmentAccordion';
import TreatmentDoctorsSection from '@/components/treatment-sections/TreatmentDoctorsSection';
import TreatmentCrownsBeforeAfterSliderSection from './treatment-sections/TreatmentCrownsBeforeAfterSliderSection';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentCostBreakdownAndPackageBannerSection from '@/components/treatment-sections/TreatmentCostBreakdownAndPackageBannerSection';
import TreatmentCrownsPackagesSlider from './treatment-sections/TreatmentCrownsPackagesSlider';
import TreatmentReviewsSection from './treatment-sections/TreatmentReviewsSection';
import TreatmentParallaxBanner from './treatment-sections/TreatmentParallaxBanner';
import TreatmentCrownsFAQSection from './treatment-sections/TreatmentCrownsFAQSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
import styles from './DentalImplantsDetailView.module.css';

interface CrownI18n {
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

const CROWN_DATA: Record<string, CrownI18n> = {
  en: {
    introHeading: 'Dental Crowns & Zirconia in Istanbul, Turkey',
    introP1:
      'Dental crowns (tooth caps) are custom-engineered aesthetic restorations designed to encase and protect heavily damaged, decayed, fractured, or root-canal treated teeth. Crafted from biocompatible monolithic German Zirconia or Swiss Ivoclar E-Max ceramic, our dental crowns restore 100% of your biting strength and smile symmetry in just 4 to 6 days in Istanbul.',
    partsTitle: 'The 3-Part Engineering of a Premium Dental Crown Restoration:',
    part1Label: '1. High-Density Biocompatible Core (1200+ MPa)',
    part1Desc:
      'Milled from monolithic German Zirconium dioxide or lithium disilicate, providing exceptional fracture resistance and masticatory durability.',
    part2Label: '2. Hand-Layered Natural Translucency & Glaze',
    part2Desc:
      'Master ceramist customized gradient tinting (BL1–BL4, A1, B1) replicating natural enamel opalescence and optical depth.',
    part3Label: '3. Dual-Cure Resin Luting Cement & Marginal Seal',
    part3Desc:
      'High-adhesion biocompatible luting cement that bonds the crown permanently to the prepared tooth with zero micro-leakage and total gingival health.',
    healingP:
      'Dental crowns provide complete 360-degree structural reinforcement, shielding weakened natural tooth structure from fracture while preserving normal chewing function. With same-day temporary crowns, you will experience zero sensitivity and zero downtime throughout your stay.',
    solutionP:
      'Whether replacing discolored old metal-fused crowns (PFM), restoring teeth after root canal therapy, or completing a full mouth 20-crown Hollywood smile makeover, Master Smile Studio Istanbul provides world-class German & Swiss restorative dentistry with up to 70% cost savings.',
    whyChooseHeading: 'Why Choose Dental Crowns at Master Smile Studio in Istanbul?',
    whyChooseIntroLead: 'For thousands of international patients each year, ',
    whyChooseIntroLink: 'Master Smile Studio Istanbul',
    whyChooseIntroTail:
      ' is the premier center for restorative and cosmetic crown transformations. Here is why discerning patients trust us:',
    reason1Title: 'Specialist Prosthodontists & Master Dental Technicians',
    reason1P1:
      'Our prosthodontists specialize in complex bite reconstruction, digital occlusion analysis, and aesthetic smile rehabilitation.',
    reason1P2:
      'Every crown is custom-milled in our certified dental laboratory using genuine German Amann Girrbach Zirconia and Swiss Ivoclar E-Max blocks.',
    reason1P3:
      'You are cared for directly by our clinic founders and senior aesthetic dentists from your initial 3Shape digital scan to final permanent cementation.',
    reason2Title: 'All-Inclusive Crown Packages & Up to 70% Savings',
    reason2P:
      'In the UK, Germany, and USA, a single zirconia crown ranges from £750 to £1,400. At Master Smile Studio, our transparent all-inclusive packages include 5-star hotel accommodation and VIP chauffeur transfers at up to 70% lower cost.',
    viewAllPackagesBtn: 'View All Crown Packages & Prices →',
    reason3Title: 'CAD/CAM Robotic Milling & 3D Intraoral Scanning',
    reason3P:
      'Say goodbye to uncomfortable putty impressions. We use 3Shape high-definition intraoral digital scanners and 5-axis robotic CAD/CAM milling machines for sub-micron marginal precision.',
    reason4Title: 'Documented Before & After Patient Transformations',
    reason4P:
      'Explore our portfolio of clinical transformations showing worn, discolored, and heavily decayed teeth restored to flawless symmetry and health.',
    reason5Title: 'Luxury 5-Star Hotel & VIP Chauffeur Service in Istanbul',
    reason5PText:
      'We organize your complete dental holiday: 5-star hotel accommodation in central Istanbul, private Mercedes airport and clinic transfers, and dedicated personal patient coordinators. ',
    reason5PLink: 'Contact our team for a free personalized crown consultation.',
    typesHeading: 'Types of Dental Crowns at Master Smile Studio Istanbul',
    typesIntro:
      'We offer an extensive range of advanced crown materials tailored to your clinical requirements, bite forces, and aesthetic vision:',
    singleTitle: '1. Monolithic Zirconia Crowns (Maximum Strength 1200 MPa)',
    singleP:
      'Ultra-durable, metal-free German zirconia ideal for molars, premolars, and patients with bruxism (teeth grinding).',
    singleLinkLead: 'Learn more about ',
    singleLinkText: 'Monolithic Zirconia Crowns →',
    multipleTitle: '2. Ivoclar E-Max Ceramic Crowns (Front Teeth Aesthetics)',
    multipleP:
      'Lithium disilicate glass-ceramic with lifelike light transmission and natural translucency for front smile zone restorations.',
    multipleLinkLead: 'Explore ',
    multipleLinkText: 'Ivoclar E-Max Crowns →',
    allOn4Title: '3. Layered Zirconia Crowns (Strength Meets Artistry)',
    allOn4P:
      'High-strength zirconia framework hand-layered with feldspathic porcelain for unmatched optical depth and aesthetic vitality.',
    allOn4LinkLead: 'Discover ',
    allOn4LinkText: 'Layered Zirconia Restorations →',
    allOn6Title: '4. Metal-Porcelain Crowns & Same-Day Temporaries',
    allOn6P:
      'Traditional economical PFM options alongside same-day custom-milled PMMA temporaries for total comfort throughout your treatment.',
    allOn6LinkLead: 'Read about ',
    allOn6LinkText: 'PFM & Restorative Options →',
  },
  tr: {
    introHeading: 'İstanbul Zirkonyum & Kron Diş Kaplama Tedavisi',
    introP1:
      'Kron diş kaplamaları (diş kaplaması), ileri derecede çürümüş, kırılmış, aşınmış veya kanal tedavisi görmüş dişleri 360 derece çevreleyerek koruyan ve estetik kazandıran modern restoratif diş hekimliği uygulamasıdır. Orijinal Alman Zirkonyum ve İsviçre Ivoclar E-Max porselen bloklardan üretilen kronlarımız, çiğneme kuvvetinizi ve kusursuz gülüşünüzü sadece 4 ila 6 gün içinde geri kazandırır.',
    partsTitle: 'Estetik Bir Kron Kaplama Restorasyonunun 3 Temel Anatomisi:',
    part1Label: '1. Yüksek Mukavemetli Biyouyumlu Altyapı (1200+ MPa)',
    part1Desc:
      'Alman Amann Girrbach monolitik zirkonyum dioksit veya lityum disilikat gövde, çiğneme baskısına karşı maksimum kırılma direnci sağlar.',
    part2Label: '2. El İşçiliği Doğal Saydamlık & Sır (Glaze) Katmanı',
    part2Desc:
      'Usta seramistler tarafından uygulanan kişiye özel renk geçişleri (BL1–BL4, A1 vb.) doğal diş minesinin ışık yansımasını birebir taklit eder.',
    part3Label: '3. Çift Kürlü Rezin Adeziv Yapıştırıcı Siman',
    part3Desc:
      'Kaplamayı dişe mikron hassasiyetle kilitleyen, sızdırmazlık sağlayan ve diş eti uyumunu koruyan yüksek tutuculuğa sahip yapıştırıcı.',
    healingP:
      'Kron kaplamalar, zayıflamış diş dokusunu çepeçevre sararak kırılmalara karşı tam koruma altına alır. İlk seansta dişleriniz hazırlandıktan hemen sonra aynı gün geçici dişler takıldığı için hiçbir hassasiyet yaşamaz ve günlük yaşamınıza ara vermeden devam edersiniz.',
    solutionP:
      'İster eski metal destekli porselenlerinizi (PFM) değiştirmek, ister kanal tedavili kırık dişlerinizi kurtarmak, ister 20 dişlik komple bir zirkonyum Hollywood Smile yaptırmak isteyin; Master Smile Studio İstanbul Avrupa standartlarında sonuçları %70’e varan fiyat tasarrufuyla sunar.',
    whyChooseHeading: 'Neden Master Smile Studio İstanbul’da Zirkonyum & Kron Tedavisi?',
    whyChooseIntroLead: 'Her yıl binlerce uluslararası hasta için ',
    whyChooseIntroLink: 'Master Smile Studio İstanbul',
    whyChooseIntroTail:
      ', estetik ve restoratif kron tedavilerinde ilk tercihtir. Kliniğimizi tercih etmeniz için başlıca nedenler:',
    reason1Title: 'Uzman Protetik Diş Hekimleri & Usta Seramistler',
    reason1P1:
      'Hekimlerimiz karmaşık kapanış (oklüzyon) analizleri, gülüş tasarımı ve dijital diş hekimliğinde uzmanlaşmıştır.',
    reason1P2:
      'Tüm kronlarımız kendi bünyemizdeki sertifikalı laboratuvarımızda orijinal Alman Zirkonyum ve Ivoclar E-Max bloklar kullanılarak CAD/CAM robotik sistemlerle üretilir.',
    reason1P3:
      'İlk 3D ağız içi taramanızdan kalıcı yapıştırma seansına kadar doğrudan klinik kurucularımız ve uzman hekimlerimiz tarafından tedavi edilirsiniz.',
    reason2Title: 'Her Şey Dahil Paketler & %70’e Varan Fiyat Tasarrufu',
    reason2P:
      'Avrupa ve İngiltere’de tek bir zirkonyum kron £750 - £1,400 arasında değişirken, kliniğimizde 5 yıldızlı otel ve VIP transfer dahil paketlerle %70 daha uygundur.',
    viewAllPackagesBtn: 'Tüm Kron Paketleri ve Fiyatları İncele →',
    reason3Title: 'CAD/CAM Robotik Kazıma & 3D Ağız İçi Tarama',
    reason3P:
      'Geleneksel ölçü kaşıklarına son! 3Shape yüksek çözünürlüklü dijital tarayıcılar ve 5 eksenli robotik frezlerle mikron hassasiyetinde sıfır hata payıyla üretim yapıyoruz.',
    reason4Title: 'Kayıtlı Gerçek Öncesi / Sonrası Vaka Dönüşümleri',
    reason4P:
      'Kliniğimizde başarıyla tamamlanan kırık diş onarımları, eski metal kaplama değişimleri ve tam ağız zirkonyum gülüş dönüşümlerini inceleyin.',
    reason5Title: 'Lüks 5 Yıldızlı Konaklama ve VIP Seyahat Deneyimi',
    reason5PText:
      'İstanbul’un merkezinde 5 yıldızlı otel konaklaması, havalimanı ve klinik arası özel VIP Mercedes transferleri ve kendi dilinizde danışmanlık hizmeti. ',
    reason5PLink: 'Kişiye özel kron teklifiniz için hemen iletişime geçin.',
    typesHeading: 'Master Smile Studio’da Uygulanan Kron Kaplama Türleri',
    typesIntro:
      'Diş yapınıza, çiğneme kuvvetinize ve estetik beklentilerinize uygun en gelişmiş kron seçenekleri:',
    singleTitle: '1. Monolitik Zirkonyum Kron (Maksimum Dayanıklılık 1200 MPa)',
    singleP:
      'Metalsiz, kırılmaya karşı ultra dayanıklı, arka azı dişlerinde ve köprülerde 1 numaralı tercih olan monolitik zirkonyum.',
    singleLinkLead: 'Detaylı bilgi için: ',
    singleLinkText: 'Monolitik Zirkonyum Kronlar →',
    multipleTitle: '2. Ivoclar E-Max Tam Seramik Kron (Ön Diş Estetiği)',
    multipleP:
      'Doğal diş minesinin ışık geçirgenliğini birebir taklit eden, ön bölge estetiğinde altın standart cam seramik.',
    multipleLinkLead: 'İnceleyin: ',
    multipleLinkText: 'Ivoclar E-Max Kronlar →',
    allOn4Title: '3. Zirkon Üstü Porselen Kronlar (Layered Zirconia)',
    allOn4P:
      'Zirkonyum altyapı üzerine usta seramistler tarafından elle işlenen çok katmanlı estetik porselen kaplama.',
    allOn4LinkLead: 'Keşfedin: ',
    allOn4LinkText: 'Zirkon Üstü Porselen Restorasyonlar →',
    allOn6Title: '4. Metal Destekli Porselen & Aynı Gün Geçici Kronlar',
    allOn6P:
      'Ekonomik geleneksel seçenekler ve tedavi süresince dişsiz kalmanızı önleyen aynı gün geçici dişler.',
    allOn6LinkLead: 'Bilgi alın: ',
    allOn6LinkText: 'Restoratif Kron Seçenekleri →',
  },
  de: {
    introHeading: 'Zahnkronen & Zirkon in Istanbul, Türkei',
    introP1:
      'Zahnkronen sind passgenaue Restaurationen, die stark geschädigte oder wurzelbehandelte Zähne vollständig umschließen und schützen.',
    partsTitle: 'Die 3-Komponenten-Anatomie einer Premium-Zahnkrone:',
    part1Label: '1. Hochfester Zirkonoxid-Kern (1200+ MPa)',
    part1Desc: 'Deutsches monolithisches Zirkon für maximale Stabilität und Bruchsicherheit.',
    part2Label: '2. Handgeschichtete Keramikglasur & Transluzenz',
    part2Desc: 'Individuelle Farbschichtung für natürliche Ästhetik und Tiefenwirkung.',
    part3Label: '3. Dualhärtender Adhäsivzement',
    part3Desc: 'Dauerhafter Randschluss ohne Mikrospalten.',
    healingP: 'Kronen schützen geschwächte Zahnsubstanz 360 Grad vor Frakturen.',
    solutionP: 'Sparen Sie bis zu 70% bei Zirkonkronen in Schweizer und deutscher Spitzenqualität.',
    whyChooseHeading: 'Warum Zahnkronen bei Master Smile Studio in Istanbul?',
    whyChooseIntroLead: 'Für tausende Patienten aus ganz Europa ist ',
    whyChooseIntroLink: 'Master Smile Studio Istanbul',
    whyChooseIntroTail: ' die erste Adresse für Zahnkronen:',
    reason1Title: 'Spezialisierte Prothetiker & Meisterlabor',
    reason1P1: 'Präzise Funktionsanalyse und digitale Okklusionsabstimmung.',
    reason1P2: 'Original deutsches Zirkon von Amann Girrbach und Ivoclar E-Max.',
    reason1P3: 'Persönliche Betreuung durch unsere Chefärzte.',
    reason2Title: 'All-Inclusive-Pakete mit bis zu 70% Ersparnis',
    reason2P: 'Inklusive 5-Sterne-Hotel und VIP-Transfers zum transparenten Festpreis.',
    viewAllPackagesBtn: 'Alle Kronen-Pakete & Preise ansehen →',
    reason3Title: 'CAD/CAM Robotik & 3D Intraoralscanner',
    reason3P: 'Höchste Passgenauigkeit ohne lästige Abdruckmasse.',
    reason4Title: 'Dokumentierte Vorher & Nachher Patientenfälle',
    reason4P: 'Echte Verwandlungen von abgebrochenen und verfärbten Zähnen.',
    reason5Title: '5-Sterne-Hotel & VIP-Chauffeur in Istanbul',
    reason5PText: 'Rundum-sorglos-Reiseorganisation mit persönlicher Betreuung. ',
    reason5PLink: 'Kontaktieren Sie uns für Ihr persönliches Angebot.',
    typesHeading: 'Kronen-Arten bei Master Smile Studio',
    typesIntro: 'Modernste Zirkon- und Keramikoptionen:',
    singleTitle: '1. Monolithische Zirkonkronen (1200 MPa)',
    singleP: 'Extrem stabile Restaurationen für Backenzähne.',
    singleLinkLead: 'Mehr über ',
    singleLinkText: 'Zirkonkronen →',
    multipleTitle: '2. Ivoclar E-Max Vollkeramikkronen',
    multipleP: 'Perfekte Ästhetik im Frontzahnbereich.',
    multipleLinkLead: 'Entdecken Sie ',
    multipleLinkText: 'E-Max Kronen →',
    allOn4Title: '3. Geschichtete Zirkonkronen',
    allOn4P: 'Zirkongerüst mit meisterhafter Handkeramik.',
    allOn4LinkLead: 'Details zu ',
    allOn4LinkText: 'Geschichtetem Zirkon →',
    allOn6Title: '4. Sofortprovisorien am selben Tag',
    allOn6P: 'Schutz und Ästhetik während der gesamten Behandlungsdauer.',
    allOn6LinkLead: 'Informationen zu ',
    allOn6LinkText: 'Provisorischen Kronen →',
  },
  pl: {
    introHeading: 'Korony Zębowe i Cyrkonowe w Stambule, Turcja',
    introP1:
      'Korony zębowe to zaawansowane odbudowy protetyczne otaczające ząb dookoła (360°), chroniące zniszczone, złamane lub leczone kanałowo zęby przed pęknięciem i przywracające pełną siłę żucia.',
    partsTitle: '3-Częściowa Budowa Korony Cyrkonowej:',
    part1Label: '1. Wytrzymały Rdzeń Cyrkonowy (1200+ MPa)',
    part1Desc: 'Niemiecki tlenek cyrkonu Amann Girrbach o najwyższej odporności na pękanie.',
    part2Label: '2. Ręcznie Nakładana Warstwa Ceramiki & Glazura',
    part2Desc: 'Indywidualny dobór przezierności i odcienia (BL1–BL4, A1).',
    part3Label: '3. Cement Żywiczny Dual-Cure',
    part3Desc: 'Szczelne i trwałe połączenie z naturalnym zębem.',
    healingP: 'Korona chroni osłabiony ząb, a korony tymczasowe zapewniają komfort od 1. dnia.',
    solutionP: 'Niemiecka i szwajcarska jakość materiałów z oszczędnością do 70% w Stambule.',
    whyChooseHeading: 'Dlaczego Korony w Master Smile Studio w Stambule?',
    whyChooseIntroLead: 'Dla tysięcy pacjentów ',
    whyChooseIntroLink: 'Master Smile Studio Stambuł',
    whyChooseIntroTail: ' to wiodąca klinika protetyki i stomatologii estetycznej:',
    reason1Title: 'Doświadczeni Protetycy i Mistrzowie Ceramiki',
    reason1P1: 'Cyfrowa analiza zwarcia i precyzyjne projektowanie uśmiechu.',
    reason1P2: 'Oryginalny niemiecki cyrkon obrabiany w technologii CAD/CAM.',
    reason1P3: 'Bezpośrednia opieka lekarzy prowadzących od skanowania po cementowanie.',
    reason2Title: 'Pakiety All-Inclusive & Oszczędność do 70%',
    reason2P: '5-gwiazdkowy hotel i transfery VIP w cenie pakietu.',
    viewAllPackagesBtn: 'Zobacz Pakiety Koron i Ceny →',
    reason3Title: 'Cyfrowe Skanery 3Shape & Frezarki CAD/CAM',
    reason3P: 'Precyzja co do mikrona bez tradycyjnych mas wyciskowych.',
    reason4Title: 'Metamorfozy Pacjentów Przed i Po',
    reason4P: 'Zobacz efekty odbudowy zniszczonych i przebarwionych zębów.',
    reason5Title: 'Hotel 5★ i Prywatny Kierowca w Stambule',
    reason5PText: 'Prywatny transfer Mercedesem i polskojęzyczny opiekun na miejscu. ',
    reason5PLink: 'Skontaktuj się po bezpłatną wycenę.',
    typesHeading: 'Rodzaje Koron w Master Smile Studio',
    typesIntro: 'Nowoczesne rozwiązania protetyczne dopasowane do Twoich potrzeb:',
    singleTitle: '1. Monolityczne Korony Cyrkonowe (1200 MPa)',
    singleP: 'Maksymalna trwałość i odporność na ścieranie w odcinku bocznym.',
    singleLinkLead: 'Więcej o ',
    singleLinkText: 'Koronach Cyrkonowych →',
    multipleTitle: '2. Korony Pełnoceramiczne Ivoclar E-Max',
    multipleP: 'Złoty standard estetyki zębów przednich z naturalną przeziernością.',
    multipleLinkLead: 'Poznaj ',
    multipleLinkText: 'Korony E-Max →',
    allOn4Title: '3. Cyrkon Warstwowany (Layered Zirconia)',
    allOn4P: 'Baza cyrkonowa licowana ręcznie porcelaną.',
    allOn4LinkLead: 'Sprawdź ',
    allOn4LinkText: 'Cyrkon Warstwowany →',
    allOn6Title: '4. Korony Tymczasowe Zakładane w Dniu Zabiegu',
    allOn6P: 'Pełen komfort i ochrona zębów na czas produkcji w laboratorium.',
    allOn6LinkLead: 'Czytaj o ',
    allOn6LinkText: 'Koronach Tymczasowych →',
  },
  pt: {
    introHeading: 'Coroas Dentárias e Zircônia em Istambul, Turquia',
    introP1:
      'As coroas dentárias são próteses fixas que recobrem totalmente o dente (360°), restaurando dentes fraturados ou tratados endodonticamente com máxima resistência e beleza.',
    partsTitle: 'A Estrutura em 3 Partes de uma Coroa em Zircônia:',
    part1Label: '1. Núcleo em Zircônia Monolítica (1200+ MPa)',
    part1Desc: 'Zircônia alemã Amann Girrbach com máxima resistência à mastigação.',
    part2Label: '2. Camada Cerâmica Artesanal & Glaze',
    part2Desc: 'Translucidez idêntica ao dente natural personalizada por ceramista.',
    part3Label: '3. Cimento Resinoso Dual-Cure',
    part3Desc: 'Vedamento marginal perfeito sem infiltrações.',
    healingP: 'Proteção total do dente com provisórios imediatos no mesmo dia.',
    solutionP: 'Qualidade alemã e economia de até 70% em relação aos custos europeus.',
    whyChooseHeading: 'Por Que Fazer Coroas na Master Smile Studio Istambul?',
    whyChooseIntroLead: 'Para milhares de pacientes de todo o mundo, ',
    whyChooseIntroLink: 'Master Smile Studio Istambul',
    whyChooseIntroTail: ' é a clínica de referência em reabilitação oral:',
    reason1Title: 'Especialistas em Prótese Dental & Ceramistas',
    reason1P1: 'Planejamento digital e ajuste oclusal milimétrico.',
    reason1P2: 'Zircônia alemã usinada em robótica CAD/CAM.',
    reason1P3: 'Atendimento direto pelos cirurgiões fundadores.',
    reason2Title: 'Pacotes All-Inclusive com 70% de Economia',
    reason2P: 'Hotel 5 estrelas e transfers VIP inclusos.',
    viewAllPackagesBtn: 'Ver Pacotes de Coroas e Preços →',
    reason3Title: 'Escaneamento 3D 3Shape sem Moldagens',
    reason3P: 'Conforto total e precisão digital microscópica.',
    reason4Title: 'Casos Reais de Antes e Depois',
    reason4P: 'Veja transformações de dentes destruídos e trocas de metal.',
    reason5Title: 'Hotel 5★ e Transfers VIP Mercedes',
    reason5PText: 'Atendimento exclusivo em português durante toda a viagem. ',
    reason5PLink: 'Solicite seu orçamento gratuito.',
    typesHeading: 'Tipos de Coroas na Master Smile Studio',
    typesIntro: 'Soluções avançadas em cerâmica e zircônia:',
    singleTitle: '1. Coroas de Zircônia Monolítica (1200 MPa)',
    singleP: 'Máxima resistência para dentes posteriores.',
    singleLinkLead: 'Saiba mais: ',
    singleLinkText: 'Zircônia Monolítica →',
    multipleTitle: '2. Coroas Ivoclar E-Max (Dentes Anteriores)',
    multipleP: 'Translucidez natural insuperável para a linha do sorriso.',
    multipleLinkLead: 'Conheça: ',
    multipleLinkText: 'Coroas E-Max →',
    allOn4Title: '3. Zircônia Estratificada',
    allOn4P: 'Resistência estrutural com acabamento artístico.',
    allOn4LinkLead: 'Descubra: ',
    allOn4LinkText: 'Zircônia Estratificada →',
    allOn6Title: '4. Provisórios no Mesmo Dia',
    allOn6P: 'Estética e função mantidas durante todo o tratamento.',
    allOn6LinkLead: 'Leia sobre: ',
    allOn6LinkText: 'Coroas Provisórias →',
  },
  es: {
    introHeading: 'Coronas Dentales y Zirconio en Estambul, Turquía',
    introP1:
      'Las coronas dentales son restauraciones que recubren el diente 360°, protegiendo dientes rotos, con caries extensas o endodoncias, devolviendo la fuerza masticatoria y una estética impecable en 4 a 6 días.',
    partsTitle: 'La Estructura en 3 Partes de una Corona de Zirconio:',
    part1Label: '1. Núcleo de Zirconio Monolítico (1200+ MPa)',
    part1Desc: 'Zirconio alemán Amann Girrbach de alta resistencia a la fractura.',
    part2Label: '2. Estratificación Artesanal y Glaseado',
    part2Desc: 'Reproducción exacta de la luz y el brillo del esmalte natural.',
    part3Label: '3. Cemento Resinoso de Fijación Dual',
    part3Desc: 'Sellado biológico permanente sin filtraciones.',
    healingP: 'Protección 360° con coronas provisionales colocadas el mismo día.',
    solutionP: 'Ahorro de hasta el 70% con tecnología alemana y suiza en Estambul.',
    whyChooseHeading: '¿Por Qué Elegir Coronas en Master Smile Studio Estambul?',
    whyChooseIntroLead: 'Para pacientes de toda Europa y América, ',
    whyChooseIntroLink: 'Master Smile Studio Estambul',
    whyChooseIntroTail: ' es la clínica de referencia en rehabilitación dental:',
    reason1Title: 'Especialistas en Prótesis y Maestros Ceramistas',
    reason1P1: 'Ajuste de oclusión y diseño digital de la sonrisa.',
    reason1P2: 'Zirconio alemán original fresado por CAD/CAM.',
    reason1P3: 'Atención directa por los directores médicos.',
    reason2Title: 'Paquetes Todo Incluido con 70% de Ahorro',
    reason2P: 'Hotel 5 estrellas y chófer privado Mercedes incluidos.',
    viewAllPackagesBtn: 'Ver Paquetes de Coronas y Precios →',
    reason3Title: 'Escaneo 3D Digital Intraoral 3Shape',
    reason3P: 'Máxima precisión sin pastas de impresión molestas.',
    reason4Title: 'Casos Reais de Antes y Después',
    reason4P: 'Vea resultados de reconstrucciones completas.',
    reason5Title: 'Hotel 5★ y Traslados VIP en Mercedes',
    reason5PText: 'Atención en español durante toda su estancia. ',
    reason5PLink: 'Pida su presupuesto personalizado.',
    typesHeading: 'Tipos de Coronas en Master Smile Studio',
    typesIntro: 'Las mejores opciones en zirconio y cerámica:',
    singleTitle: '1. Coronas de Zirconio Monolítico (1200 MPa)',
    singleP: 'Dureza insuperable para molares y puentes.',
    singleLinkLead: 'Más información: ',
    singleLinkText: 'Zirconio Monolítico →',
    multipleTitle: '2. Coronas Ivoclar E-Max (Estética Anterior)',
    multipleP: 'Máxima translucidez para la zona frontal de la sonrisa.',
    multipleLinkLead: 'Descubra: ',
    multipleLinkText: 'Coronas E-Max →',
    allOn4Title: '3. Zirconio Estratificado',
    allOn4P: 'Estructura de zirconio con porcelana aplicada a mano.',
    allOn4LinkLead: 'Ver detalles: ',
    allOn4LinkText: 'Zirconio Estratificado →',
    allOn6Title: '4. Coronas Provisionales Inmediatas',
    allOn6P: 'Comodidad y estética durante todo el proceso clínico.',
    allOn6LinkLead: 'Detalles sobre: ',
    allOn6LinkText: 'Coronas Provisionales →',
  },
  ru: {
    introHeading: 'Циркониевые коронки на зубы в Стамбуле, Турция',
    introP1:
      'Зубные коронки — это несъемные ортопедические конструкции, покрывающие зуб на 360°, защищающие разрушенные или депульпированные зубы и возвращающие 100% жевательной функции за 4–6 дней.',
    partsTitle: '3 составляющие премиальной циркониевой коронки:',
    part1Label: '1. Высокопрочный каркас из диоксида циркония (1200+ МПа)',
    part1Desc: 'Немецкий цирконий Amann Girrbach с непревзойденной надежностью.',
    part2Label: '2. Ручная послойная керамика и глазурь',
    part2Desc: 'Индивидуальный градиент оттенка с естественной светопроницаемостью.',
    part3Label: '3. Адгезивный цемент двойного отверждения',
    part3Desc: 'Абсолютная герметичность без микрощелей у края десны.',
    healingP: 'Коронки защищают зуб со всех сторон, а временные коронки ставятся в 1-й день.',
    solutionP: 'Немецкое качество с экономией до 70% по сравнению с клиниками Европы.',
    whyChooseHeading: 'Почему коронки в Master Smile Studio Стамбул?',
    whyChooseIntroLead: 'Для тысяч пациентов со всего мира ',
    whyChooseIntroLink: 'Master Smile Studio Стамбул',
    whyChooseIntroTail: ' — клиника №1 для восстановления зубов:',
    reason1Title: 'Опытные врачи-ортопеды и мастера-керамисты',
    reason1P1: 'Цифровой анализ окклюзии и гармонии улыбки.',
    reason1P2: 'Оригинальный немецкий цирконий на 5-осевых станках CAD/CAM.',
    reason1P3: 'Контроль ведущих специалистов на всех этапах.',
    reason2Title: 'Пакеты «Все включено» и экономия до 70%',
    reason2P: '5-звездочный отель и VIP-трансфер включены в стоимость.',
    viewAllPackagesBtn: 'Все пакеты коронок и цены →',
    reason3Title: '3D-сканирование 3Shape без слепочной массы',
    reason3P: 'Цифровой комфорт и микроскопическая точность прилегания.',
    reason4Title: 'Реальные результаты До и После',
    reason4P: 'Фотографии восстановления разрушенных зубов.',
    reason5Title: 'Отель 5★ и трансфер на Mercedes в Стамбуле',
    reason5PText: 'Личный водитель и русскоязычный координатор. ',
    reason5PLink: 'Получите бесплатный расчет стоимости.',
    typesHeading: 'Виды коронок в Master Smile Studio',
    typesIntro: 'Передовые варианты для здоровья и красоты ваших зубов:',
    singleTitle: '1. Монолитные циркониевые коронки (1200 МПа)',
    singleP: 'Максимальная прочность для жевательных зубов и мостов.',
    singleLinkLead: 'Подробнее: ',
    singleLinkText: 'Монолитный цирконий →',
    multipleTitle: '2. Керамические коронки Ivoclar E-Max',
    multipleP: 'Идеальная естественность для передних зубов.',
    multipleLinkLead: 'Узнать больше: ',
    multipleLinkText: 'Коронки E-Max →',
    allOn4Title: '3. Цирконий с нанесением керамики',
    allOn4P: 'Сочетание прочности каркаса и ручной росписи.',
    allOn4LinkLead: 'Ознакомьтесь: ',
    allOn4LinkText: 'Слоистый цирконий →',
    allOn6Title: '4. Временные коронки в день обточки',
    allOn6P: 'Комфорт и защита зубов на весь период изготовления.',
    allOn6LinkLead: 'Читать о: ',
    allOn6LinkText: 'Временных коронках →',
  },
};

export default function DentalCrownsDetailView() {
  const locale = useLocale();
  const d = CROWN_DATA[locale] || CROWN_DATA.en;

  return (
    <div className={styles.pageWrapper}>
      {/* 1. INTRO EDITORIAL CLINICAL SECTION */}
      <section aria-labelledby="crown-intro-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h1 id="crown-intro-heading" className={styles.mainHeading}>
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
              title="Dental Crowns in Istanbul Procedure Video"
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

      {/* 2. FIND THE RIGHT CROWN TREATMENT ACCORDION */}
      <TreatmentCrownsRightTreatmentAccordion />

      {/* 3. WHY CHOOSE DENTAL CROWNS IN ISTANBUL */}
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
            <Link href="/treatments/dental-crowns" className={styles.linkGold}>
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

          {/* 2. Crown Cost & Packages */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>2.</span> {d.reason2Title}
          </h3>
          <p className={styles.textP}>{d.reason2P}</p>

          {/* INSERT: CROWN PACKAGES SLIDER */}
          <div className="my-8">
            <TreatmentCrownsPackagesSlider />
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
              title="Advanced Crown CAD/CAM Technology Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 4. Before & After Real Transformations */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>4.</span> {d.reason4Title}
          </h3>
          <p className={styles.textP}>{d.reason4P}</p>

          {/* INSERT: CROWN BEFORE - AFTER SLIDER */}
          <div className="my-8">
            <TreatmentCrownsBeforeAfterSliderSection />
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

      {/* 5. TYPES OF CROWNS (Zirconia, E-Max, Layered, Temporaries) */}
      <section aria-labelledby="types-crowns-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h2 id="types-crowns-heading" className={styles.sectionTitle}>
            {d.typesHeading}
          </h2>
          <p className={styles.textP}>{d.typesIntro}</p>

          {/* 1. Monolithic Zirconia */}
          <h3 className={styles.sectionSubTitle}>{d.singleTitle}</h3>
          <p className={styles.textP}>{d.singleP}</p>
          <p className={styles.textItalic}>
            {d.singleLinkLead}
            <Link href="/treatments/dental-crowns" className={styles.linkGold}>
              {d.singleLinkText}
            </Link>
          </p>

          {/* 2. E-Max */}
          <h3 className={styles.sectionSubTitle}>{d.multipleTitle}</h3>
          <p className={styles.textP}>{d.multipleP}</p>
          <p className={styles.textItalic}>
            {d.multipleLinkLead}
            <Link href="/treatments/dental-crowns" className={styles.linkGold}>
              {d.multipleLinkText}
            </Link>
          </p>

          {/* Video */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/smhwCD78Vbo"
              title="Dental Crown Restoration in Istanbul Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 3. Layered Zirconia */}
          <h3 className={styles.sectionSubTitle}>{d.allOn4Title}</h3>
          <p className={styles.textP}>{d.allOn4P}</p>
          <p className={styles.textItalic}>
            {d.allOn4LinkLead}
            <Link href="/treatments/dental-crowns" className={styles.linkGold}>
              {d.allOn4LinkText}
            </Link>
          </p>

          {/* 4. Temporaries & PFM */}
          <h3 className={styles.sectionSubTitle}>{d.allOn6Title}</h3>
          <p className={styles.textP}>{d.allOn6P}</p>
          <p className={styles.textItalic}>
            {d.allOn6LinkLead}
            <Link href="/treatments/dental-crowns" className={styles.linkGold}>
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
      <TreatmentCrownsBeforeAfterSliderSection />

      {/* 9. COST BREAKDOWN & PACKAGE PROMO BANNER */}
      <TreatmentCostBreakdownAndPackageBannerSection />

      {/* 10. CROWN PACKAGES SLIDER */}
      <TreatmentCrownsPackagesSlider />

      {/* 11. REVIEWS SECTION (Google & Trustpilot) */}
      <TreatmentReviewsSection />

      {/* 12. PARALLAX CTA BANNER */}
      <TreatmentParallaxBanner />

      {/* 13. FREQUENTLY ASKED QUESTIONS */}
      <TreatmentCrownsFAQSection />

      {/* 14. INTERACTIVE 4-STEP QUOTE FORM */}
      <TreatmentInteractiveQuoteForm defaultTreatment="Crowns" />
    </div>
  );
}
