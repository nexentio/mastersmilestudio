'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import TreatmentDivider from '@/components/treatment-sections/TreatmentDivider';
import TreatmentTripleVideoSlider from '@/components/treatment-sections/TreatmentTripleVideoSlider';
import TreatmentsHubDisciplineShowcase from '@/components/treatment-sections/TreatmentsHubDisciplineShowcase';
import TreatmentComparisonMatrix from '@/components/treatment-sections/TreatmentComparisonMatrix';
import TreatmentDoctorsSection from '@/components/treatment-sections/TreatmentDoctorsSection';
import TreatmentBeforeAfterSliderSection from '@/components/treatment-sections/TreatmentBeforeAfterSliderSection';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentCostBreakdownAndPackageBannerSection from '@/components/treatment-sections/TreatmentCostBreakdownAndPackageBannerSection';
import TreatmentPackagesSlider from '@/components/treatment-sections/TreatmentPackagesSlider';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import TreatmentParallaxBanner from '@/components/treatment-sections/TreatmentParallaxBanner';
import TreatmentsHubFAQSection from '@/components/treatment-sections/TreatmentsHubFAQSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
import styles from './DentalImplantsDetailView.module.css';

interface HubI18n {
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

const HUB_DATA: Record<string, HubI18n> = {
  en: {
    introHeading: 'World-Class Dental Treatments & Smile Makeovers in Antalya, Turkey',
    introP1:
      'Master Smile Studio Antalya is an internationally acclaimed multidisciplinary center for aesthetic dentistry, oral implantology, and smile reconstructions. Whether you are seeking full-arch titanium dental implants, bespoke Swiss Ivoclar E-Max veneers, monolithic German zirconia crowns, or pain-free microscopic restorative care, our board-certified oral surgeons and master prosthodontists provide world-class clinical excellence with up to 70% savings compared to the UK, US, and Europe.',
    partsTitle: 'The 3 Core Pillars of Our Multidisciplinary Dental Excellence:',
    part1Label: '1. Advanced 3D Diagnostics & CAD/CAM In-House Laboratory',
    part1Desc:
      'Ultra-low-radiation 3D CBCT tomography, high-precision intraoral optical scanners, and automated German CAD/CAM 5-axis milling units ensuring micron-level accuracy.',
    part2Label: '2. Multidisciplinary Surgical, Aesthetic & Endodontic Team',
    part2Desc:
      'Dedicated oral surgeons, prosthodontists, cosmetic dentists, and endodontists working collaboratively on every complex case under one roof.',
    part3Label: '3. Certified European Materials & Lifetime Guarantees',
    part3Desc:
      'We use exclusively genuine Swiss Straumann implants, German Amann Girrbach monolithic zirconia, and Swiss Ivoclar Vivadent E-Max lithium disilicate ceramics.',
    healingP:
      'Every procedure is performed under gentle computer-guided local anesthesia or conscious IV sedation, ensuring a 100% painless and relaxing treatment journey. Immediate high-precision temporary restorations guarantee that you never spend a single hour without teeth.',
    solutionP:
      'With transparent all-inclusive VIP packages including 5-star hotel accommodation in central Antalya, private Mercedes airport and clinic transfers, and personal multilingual patient hosting, we make your dental journey smooth, luxurious, and stress-free.',
    whyChooseHeading: 'Why Choose Master Smile Studio for Your Dental Treatments in Antalya?',
    whyChooseIntroLead: 'For international patients seeking uncompromising quality and transparent care, ',
    whyChooseIntroLink: 'Master Smile Studio Antalya',
    whyChooseIntroTail:
      ' is the trusted European reference center for comprehensive smile transformations. Here is why patients worldwide choose our clinic:',
    reason1Title: 'Multidisciplinary Specialist Team Under One Roof',
    reason1P1:
      'Complex smile makeovers require multiple specialized disciplines: oral maxillofacial surgery, aesthetic prosthodontics, periodontology, and master ceramic artistry.',
    reason1P2:
      'Our clinic houses all dental specialties in-house, eliminating external referrals and ensuring seamless communication between doctors and ceramists.',
    reason1P3:
      'Direct, dedicated treatment by our senior founding surgeons from initial 3D digital diagnosis to final bite calibration and long-term follow-up.',
    reason2Title: 'Transparent All-Inclusive Packages & Up to 70% Cost Savings',
    reason2P:
      'High-quality dental care in the UK, Europe, and the US can cost tens of thousands of pounds. At Master Smile Studio, favorable operational costs allow us to provide genuine Swiss and German dental treatments at up to 70% lower prices with transparent fixed packages.',
    viewAllPackagesBtn: 'View All Dental Packages & Pricing →',
    reason3Title: 'High-Definition 3D CBCT Tomography & In-House Digital Lab',
    reason3P:
      'We utilize Carl Zeiss optical dental microscopes, 3D CBCT bone scanners, and automated milling machines to fabricate biocompatible crowns and veneers with microscopic precision in just 4 to 6 days.',
    reason4Title: 'Documented Before & After Patient Transformations',
    reason4P:
      'Browse hundreds of verified clinical cases showing full-mouth implant rehabilitations, dramatic Hollywood Smile makeovers, and natural tooth preservation.',
    reason5Title: 'Luxury 5-Star Hotel & VIP Mercedes Chauffeur in Antalya',
    reason5PText:
      'Enjoy a stress-free dental holiday with central 5-star hotel accommodation, private VIP airport and clinic transfers, and dedicated multi-lingual translation coordinators. ',
    reason5PLink: 'Contact our clinical team for a free instant consultation.',
    typesHeading: 'Overview of Core Dental Disciplines at Master Smile Studio',
    typesIntro:
      'Explore our comprehensive range of specialized dental treatments designed to restore your chewing power, dental health, and facial aesthetics:',
    singleTitle: '1. Dental Implants & Full-Arch Restorations (All-on-4 / All-on-6)',
    singleP:
      'Permanent titanium tooth replacement for missing teeth with Straumann implants, bone grafting, sinus lifting, and monolithic zirconia bridges.',
    singleLinkLead: 'Learn more about ',
    singleLinkText: 'Dental Implants & All-on-4/6 →',
    multipleTitle: '2. Dental Veneers & Porcelain Laminates (Ivoclar E-Max)',
    multipleP:
      'Custom-crafted ultra-thin Swiss E-Max porcelain laminates to correct discoloration, gaps, chips, and achieve a radiant Hollywood Smile in 5 days.',
    multipleLinkLead: 'Explore ',
    multipleLinkText: 'Dental Veneers & E-Max Laminates →',
    allOn4Title: '3. Dental Crowns & Fixed Bridges (German Zirconia)',
    allOn4P:
      'High-strength 1200+ MPa multi-layered German zirconia crowns and fixed bridges to restore broken, root-canal treated, or missing teeth permanently.',
    allOn4LinkLead: 'Discover ',
    allOn4LinkText: 'Dental Crowns & Fixed Bridges →',
    allOn6Title: '4. Cosmetic Dentistry, Dentures & General Oral Health',
    allOn6P:
      'Snap-On implant overdentures, 3D Digital Smile Design, Philips Zoom laser whitening, microscopic root canal therapy, and Air-Flow deep cleaning.',
    allOn6LinkLead: 'Read about ',
    allOn6LinkText: 'Dentures, Cosmetic & General Dentistry →',
  },
  tr: {
    introHeading: 'Antalya’da Dünya Standartlarında Diş Tedavileri & Gülüş Tasarımı',
    introP1:
      'Master Smile Studio Antalya; estetik diş hekimliği, cerrahi implantoloji ve ileri gülüş rekonstrüksiyonunda Avrupa standartlarında hizmet veren uluslararası referans merkezidir. İster tam çene titanyum implantlar, ister İsviçre Ivoclar E-Max laminalar, Alman Zirkonyum kronlar veya mikroskobik kanal tedavisi olsun; uzman çene cerrahlarımız ve protetik hekimlerimiz %70’e varan fiyat avantajıyla en üst düzey sağlık hizmetini sunar.',
    partsTitle: 'Multidisipliner Klinik Mükemmelliğimizin 3 Ana Temeli:',
    part1Label: '1. İleri 3D Teşhis & Klinik İçi CAD/CAM Laboratuvarı',
    part1Desc:
      'Düşük radyasyonlu 3D CBCT tomografi, yüksek hassasiyetli ağız içi 3D tarayıcılar ve mikron düzeyinde üretim yapan 5 eksenli Alman CAD/CAM freze üniteleri.',
    part2Label: '2. Cerrahi, Protetik & Endodontik Uzman Hekim Kadrosu',
    part2Desc:
      'Ağız, diş ve çene cerrahları, protetik diş tedavisi uzmanları ve endodontistlerin tek çatı altında vaka bazlı entegre çalışması.',
    part3Label: '3. Orijinal Avrupa Malzemeleri & Ömür Boyu Garanti',
    part3Desc:
      'Tüm tedavilerde yalnızca İsviçre Straumann ve Medentika implantlar, Alman Amann Girrbach zirkonyum ve İsviçre Ivoclar E-Max porselenler kullanılır.',
    healingP:
      'Gelişmiş bilgisayarlı lokal anestezi ve sedasyon seçenekleri sayesinde tüm cerrahi ve estetik işlemler %100 ağrısız olarak tamamlanır. İlk seansta takılan estetik geçici dişler ile tedavi boyunca asla dişsiz kalmazsınız.',
    solutionP:
      'Antalya’nın kalbinde 5 yıldızlı otel konaklaması, havalimanı ve klinik arası özel VIP Mercedes şoförlü transferler ve kendi dilinizde kişisel hasta danışmanlığı ile diş tedaviniz konforlu bir tatile dönüşür.',
    whyChooseHeading: 'Neden Antalya’da Diş Tedavisi İçin Master Smile Studio?',
    whyChooseIntroLead: 'Güvenilir, şeffaf ve dünya standartlarında diş tedavisi arayan uluslararası hastalar için ',
    whyChooseIntroLink: 'Master Smile Studio Antalya',
    whyChooseIntroTail:
      ', kapsamlı gülüş dönüşümlerinde öncü sağlık merkezidir. Bizi tercih etmeniz için başlıca nedenler:',
    reason1Title: 'Alanında Uzman Multidisipliner Hekim Kadrosu',
    reason1P1:
      'Kapsamlı bir gülüş tasarımı; çene cerrahisi, protetik diş hekimliği, diş eti uzmanlığı ve seramik sanatçılığının ortak çalışmasını gerektirir.',
    reason1P2:
      'Kliniğimizde tüm uzmanlıklar tek çatı altındadır; dışarıya sevk olmadan hekimler ve seramistler anlık koordinasyonla çalışır.',
    reason1P3:
      'İlk 3D dijital teşhisinizden kontrol randevunuza kadar doğrudan kurucu uzman hekimlerimiz tarafından tedavi edilirsiniz.',
    reason2Title: 'Şeffaf Her Şey Dahil Paketler & %70’e Varan Fiyat Tasarrufu',
    reason2P:
      'Avrupa ve İngiltere’de on binlerce Euro tutan uzman implant ve kaplama tedavileri, Türkiye’deki avantajlı operasyonel maliyetler sayesinde kliniğimizde %70 daha uygundur.',
    viewAllPackagesBtn: 'Tüm Tedavi Paketleri ve Fiyatları İncele →',
    reason3Title: '3D CBCT Tomografi & Yüksek Çözünürlüklü Dental Mikroskoplar',
    reason3P:
      'Carl Zeiss dental mikroskoplar, 3D tomografi ve CAD/CAM teknolojimiz ile tedavileriniz 4 ila 6 gün gibi rekor bir sürede sıfır hata ile tamamlanır.',
    reason4Title: 'Kayıtlı Öncesi & Sonrası Gerçek Hasta Vakaları',
    reason4P:
      'Kliniğimizde başarıyla tamamlanan tam çene implant rekonstrüksiyonları, Hollywood Smile gülüş dönüşümleri ve estetik vaka galerimizi inceleyin.',
    reason5Title: '5 Yıldızlı Otel Konaklaması & VIP Mercedes Transfer',
    reason5PText:
      'Antalya’nın merkezinde 5 yıldızlı otel konaklaması, özel VIP Mercedes transferleri ve kendi dilinizde hasta koordinatörlüğü. ',
    reason5PLink: 'Ücretsiz dijital konsültasyon için hemen klinik ekibimizle iletişime geçin.',
    typesHeading: 'Master Smile Studio’da Uygulanan Ana Diş Tedavisi Alanları',
    typesIntro:
      'Çiğneme fonksiyonunuzu ve estetiğinizi eksiksiz geri kazandırmak için sunduğumuz ileri klinik tedaviler:',
    singleTitle: '1. Diş İmplantı & Tam Çene Çözümleri (All-on-4 / All-on-6)',
    singleP:
      'Eksik dişler için ömür boyu garantili Straumann implantlar, kemik grefti, sinüs lifting ve monolitik zirkonyum köprüler.',
    singleLinkLead: 'Detaylı bilgi için: ',
    singleLinkText: 'Diş İmplantları & All-on-4/6 →',
    multipleTitle: '2. Lamine Veneer & Yaprak Porselen (Ivoclar E-Max)',
    multipleP:
      'Renk bozukluğu, kırık ve aralıklı dişlerde 3D Dijital Gülüş Tasarımı ile 5 günde kusursuz Hollywood gülüşü.',
    multipleLinkLead: 'İnceleyin: ',
    multipleLinkText: 'Lamine Veneer & E-Max →',
    allOn4Title: '3. Zirkonyum Kron & Sabit Diş Köprüleri',
    allOn4P:
      '1200+ MPa dayanıklılıkta Alman Zirkonyumu ile kırık veya kanal tedavili dişleri 360 derece sararak ömür boyu koruyan kaplamalar.',
    allOn4LinkLead: 'Keşfedin: ',
    allOn4LinkText: 'Zirkonyum Kron & Diş Köprüsü →',
    allOn6Title: '4. Estetik Diş Hekimliği, Protezler & Genel Diş Sağlığı',
    allOn6P:
      'Çıt çıtlı damaksız protezler, Philips Zoom lazer beyazlatma, mikroskobik kanal tedavisi ve Air-Flow derin diş temizliği.',
    allOn6LinkLead: 'Bilgi alın: ',
    allOn6LinkText: 'Protez, Estetik & Genel Diş Tedavileri →',
  },
  de: {
    introHeading: 'Erstklassige Zahnbehandlungen & Smile Makeover in Antalya, Türkei',
    introP1:
      'Master Smile Studio Antalya ist ein international anerkanntes Zentrum für ästhetische Zahnheilkunde, Implantologie und ganzheitliche Lächeln-Rekonstruktionen. Ob festsitzende Titan-Zahnimplantate, hauchdünne Schweizer E-Max Veneers, bruchfeste Zirkonkronen oder schmerzfreie mikroskopische Wurzelbehandlungen — unsere Fachzahnärzte bieten Spitzenmedizin mit bis zu 70% Ersparnis gegenüber Deutschland, Österreich und der Schweiz.',
    partsTitle: 'Die 3 Säulen unserer interdisziplinären Zahnmedizin:',
    part1Label: '1. 3D-Diagnostik & Eigenes CAD/CAM-Meisterlabor',
    part1Desc:
      'Niedrig dosierte 3D CBCT Tomographie, digitale Intraoralscanner und deutsche 5-Achs-Fräseinheiten für mikrometergenaue Passung.',
    part2Label: '2. Spezialisiertes Team aus Chirurgen & Prothetikern',
    part2Desc:
      'Erfahrene Oralchirurgen, Prothetiker, Endodontologen und Zahntechnikermeister arbeiten Hand in Hand.',
    part3Label: '3. Zertifizierte europäische Materialien & Lebenslange Garantie',
    part3Desc:
      'Ausschließliche Verwendung von Schweizer Straumann Implantaten, deutschem Amann Girrbach Zirkon und Ivoclar E-Max Glaskeramik.',
    healingP:
      'Alle Behandlungen erfolgen vollkommen schmerzfrei unter moderner Lokalanästhesie mit Sedierungsoption. Durch sofortige Provisorien sind Sie zu keinem Zeitpunkt zahnlos.',
    solutionP:
      'Mit transparenten All-Inclusive-Paketen inklusive 5-Sterne-Hotel, privatem Mercedes VIP-Chauffeur und deutschsprachiger Betreuung wird Ihre Zahnbehandlung zu einem entspannten Aufenthalt.',
    whyChooseHeading: 'Warum Master Smile Studio für Ihre Zahnbehandlung in Antalya?',
    whyChooseIntroLead: 'Für Patienten aus ganz Europa ist ',
    whyChooseIntroLink: 'Master Smile Studio Antalya',
    whyChooseIntroTail:
      ' die führende Adresse für schmerzfreie und hochpräzise Zahnmedizin. Unsere Vorteile:',
    reason1Title: 'Interdisziplinäres Fachärzteteam unter einem Dach',
    reason1P1:
      'Komplexe Smile Makeovers erfordern das Zusammenspiel von Chirurgie, Prothetik, Parodontologie und Meisterkeramik.',
    reason1P2:
      'In unserer Klinik arbeiten alle Fachbereiche zusammen, was perfekte Abstimmung ohne externe Wege garantiert.',
    reason1P3:
      'Direkte Betreuung durch unsere Chefärzte von der Erstdiagnostik bis zur Abschlusskontrolle.',
    reason2Title: 'Transparente Festpreise & Bis zu 70% Ersparnis',
    reason2P:
      'In Deutschland und der Schweiz kosten Gesamtsanierungen oft ein Vermögen. Bei uns erhalten Sie dieselbe Schweizer Spitzenqualität zu 70% günstigeren Preisen.',
    viewAllPackagesBtn: 'Alle Behandlungs-Pakete & Preise ansehen →',
    reason3Title: '3D CBCT Tomographie & Carl Zeiss Dentalmikroskope',
    reason3P:
      'Modernste Technik ermöglicht eine präzise Fertigung Ihrer Kronen und Veneers in nur 4 bis 6 Tagen.',
    reason4Title: 'Dokumentierte Vorher & Nachher Patientenfälle',
    reason4P:
      'Sehen Sie reale Patientenfälle mit festen Zähnen auf Implantaten und ästhetischen Hollywood Smile Transformationen.',
    reason5Title: '5-Sterne-Hotel & VIP-Chauffeur in Antalya',
    reason5PText:
      'Entspannter Aufenthalt mit 5-Sterne-Hotel im Herzen Antalyas, VIP-Transfers und deutschsprachiger Betreuung. ',
    reason5PLink: 'Kontaktieren Sie unser Ärzteteam für eine kostenlose Beratung.',
    typesHeading: 'Überblick über unsere zahnmedizinischen Kernbereiche',
    typesIntro:
      'Entdecken Sie unser breites Spektrum modernster Zahnheilkunde für perfekte Ästhetik und Funktion:',
    singleTitle: '1. Zahnimplantate & Feste Zähne (All-on-4 / All-on-6)',
    singleP:
      'Dauerhafter Zahnersatz mit lebenslanger Garantie auf Straumann Implantate und monolithische Zirkonbrücken.',
    singleLinkLead: 'Mehr erfahren über ',
    singleLinkText: 'Zahnimplantate & All-on-4/6 →',
    multipleTitle: '2. Veneers & Porzellan-Laminate (Ivoclar E-Max)',
    multipleP:
      'Hauchdünne Schweizer Glaskeramik für perfekt weiße Zähne und Smile Design in 5 Tagen.',
    multipleLinkLead: 'Entdecken Sie ',
    multipleLinkText: 'Veneers & E-Max Laminate →',
    allOn4Title: '3. Zahnkronen & Feste Zirkonbrücken',
    allOn4P:
      'Hochstabiles deutsches Zirkon (1200+ MPa) zum 360°-Schutz geschädigter Zähne.',
    allOn4LinkLead: 'Details zu ',
    allOn4LinkText: 'Zahnkronen & Brücken →',
    allOn6Title: '4. Ästhetik, Prothetik & Allgemeine Zahnheilkunde',
    allOn6P:
      'Snap-On Klick-Prothesen, Philips Zoom Laser-Bleaching, mikroskopische Endodontie und Air-Flow Reinigung.',
    allOn6LinkLead: 'Informationen zu ',
    allOn6LinkText: 'Prothesen, Ästhetik & Prophylaxe →',
  },
  pl: {
    introHeading: 'Światowej Klasy Zabiegi Stomatologiczne i Metamorfozy Uśmiechu w Antalyi',
    introP1:
      'Master Smile Studio Antalya to renomowane międzynarodowe centrum stomatologii estetycznej, implantologii i kompleksowych odbudów uśmiechu. Od tytanowych implantów całych łuków zębowych i szwajcarskich licówek Ivoclar E-Max po korony z niemieckiego tlenku cyrkonu i mikroskopowe leczenie zachowawcze — nasz zespół chirurgów i protetyków zapewnia najwyższy standard leczenia z oszczędnością do 70%.',
    partsTitle: '3 Filary Naszej Doskonałości Stomatologicznej:',
    part1Label: '1. Diagnostyka 3D i Własne Cyfrowe Laboratorium CAD/CAM',
    part1Desc:
      'Niskodawkowa tomografia 3D CBCT, skanery wewnątrzustne i 5-osiowe niemieckie frezarki CAD/CAM z mikronową precyzją.',
    part2Label: '2. Zespół Chirurgów, Protetyków i Mistrzów Ceramiki',
    part2Desc:
      'Chirurdzy szczękowi, protetycy, endodonci i ceramicy współpracujący przy każdym złożonym przypadku pod jednym dachem.',
    part3Label: '3. Certyfikowane Europejskie Materiały i Dożywotnia Gwarancja',
    part3Desc:
      'Stosujemy wyłącznie szwajcarskie implanty Straumann, niemiecki tlenek cyrkonu Amann Girrbach i ceramikę Ivoclar E-Max.',
    healingP:
      'Wszystkie zabiegi są w 100% bezbolesne w komputerowym znieczuleniu miejscowym z opcją sedacji. Zęby tymczasowe montowane są na pierwszej wizycie.',
    solutionP:
      'Pakiety VIP z 5-gwiazdkowym hotelem w centrum Antalyi, transferami Mercedesem i polskojęzyczną opieką gwarantują pełen komfort leczenia.',
    whyChooseHeading: 'Dlaczego Warto Wybrać Master Smile Studio w Antalyi?',
    whyChooseIntroLead: 'Dla pacjentów z Polski i całej Europy poszukujących bezkompromisowej jakości, ',
    whyChooseIntroLink: 'Master Smile Studio Antalya',
    whyChooseIntroTail:
      ' to wiodący ośrodek leczenia stomatologicznego. Nasze kluczowe atuty:',
    reason1Title: 'Interdyscyplinarny Zespół Specjalistów pod Jednym Dachem',
    reason1P1:
      'Kompleksowa metamorfoza wymaga ścisłej współpracy chirurgii, protetyki, periodontologii i mistrzowskiej ceramiki.',
    reason1P2:
      'Wszystkie specjalizacje posiadamy w klinice, co eliminuje konieczność odsyłania pacjentów do zewnętrznych placówek.',
    reason1P3:
      'Opieka bezpośrednio prowadzona przez lekarzy założycieli od diagnostyki 3D po finalną kontrolę zgryzu.',
    reason2Title: 'Przejrzyste Pakiety All-Inclusive i Oszczędność do 70%',
    reason2P:
      'Oferujemy oryginalne szwajcarskie i niemieckie materiały medyczne z oszczędnością do 70% w porównaniu z cenami w Europie.',
    viewAllPackagesBtn: 'Zobacz Wszystkie Pakiety i Ceny →',
    reason3Title: 'Tomografia 3D CBCT i Mikroskopy Carl Zeiss',
    reason3P:
      'Nowoczesny park technologiczny umożliwia wykonanie pełnej metamorfozy w zaledwie 4 do 6 dni.',
    reason4Title: 'Udokumentowane Przypadki Kliniczne Pacjentów',
    reason4P:
      'Zobacz setki udokumentowanych przypadków odbudowy bezzębia na implantach i metamorfoz Hollywood Smile.',
    reason5Title: 'Hotel 5★ i Prywatny Transfer Mercedesem w Antalyi',
    reason5PText:
      'Komfortowy pobyt w 5-gwiazdkowym hotelu, transfery VIP oraz pełna opieka polskojęzycznego koordynatora. ',
    reason5PLink: 'Skontaktuj się z naszym zespołem medycznym po bezpłatną konsultację.',
    typesHeading: 'Główne Dziedziny Stomatologii w Master Smile Studio',
    typesIntro:
      'Poznaj pełen zakres nowoczesnych procedur przywracających idealny uśmiech i funkcję żucia:',
    singleTitle: '1. Implanty Zębowe i Odbudowy Całych Łuków (All-on-4 / All-on-6)',
    singleP:
      'Trwałe uzupełnienie braków na implantach Straumann z mostami z tlenku cyrkonu i dożywotnią gwarancją.',
    singleLinkLead: 'Dowiedz się więcej o ',
    singleLinkText: 'Implantach Zębowych & All-on-4/6 →',
    multipleTitle: '2. Licówki Porcelanowe i E-Max (Hollywood Smile)',
    multipleP:
      'Szwajcarska ceramika Ivoclar E-Max korygująca kształt i kolor zębów w 5 dni z projektem 3D DSD.',
    multipleLinkLead: 'Poznaj szczegóły ',
    multipleLinkText: 'Licówek Porcelanowych →',
    allOn4Title: '3. Korony Zębowe i Mosty Cyrkonowe',
    allOn4P:
      'Wytrzymały niemiecki tlenek cyrkonu (1200+ MPa) chroniący zniszczone zęby 360 stopni.',
    allOn4LinkLead: 'Sprawdź ',
    allOn4LinkText: 'Korony i Mosty Cyrkonowe →',
    allOn6Title: '4. Stomatologia Estetyczna, Protezy i Profilaktyka',
    allOn6P:
      'Protezy na zatrzaskach bez podniebienia, wybielanie Philips Zoom, leczenie kanałowe i higienizacja Air-Flow.',
    allOn6LinkLead: 'Czytaj o ',
    allOn6LinkText: 'Protezach i Stomatologii Ogólnej →',
  },
  pt: {
    introHeading: 'Tratamentos Odontológicos de Excelência & Design do Sorriso em Antalya',
    introP1:
      'A Master Smile Studio Antalya é um centro internacional de referência em odontologia estética, implantodontia cirúrgica e reabilitações completas do sorriso. Sejam implantes em titânio para arcada total, facetas suíças Ivoclar E-Max, coroas em zircônia alemã ou endodontia microscópica — nossos cirurgiões oferecem máxima excelência com até 70% de economia.',
    partsTitle: 'Os 3 Pilares da Nossa Excelência Multidisciplinar:',
    part1Label: '1. Diagnóstico 3D Avançado & Laboratório Digital CAD/CAM Próprio',
    part1Desc:
      'Tomografia 3D CBCT de baixa radiação, scanners intraorais ópticos e fresadoras alemãs de 5 eixos com precisão micrométrica.',
    part2Label: '2. Equipe Integrada de Cirurgiões, Protesistas e Ceramistas',
    part2Desc:
      'Especialistas em cirurgia bucomaxilofacial, reabilitação oral, estética e endodontia trabalhando integrados.',
    part3Label: '3. Materiais Europeus Certificados & Garantia Vitalícia',
    part3Desc:
      'Utilizamos exclusivamente implantes suíços Straumann, zircônia alemã Amann Girrbach e cerâmica Ivoclar E-Max.',
    healingP:
      'Todos os tratamentos são 100% livres de dor com anestesia local computadorizada e opção de sedação consciente. Provisórios imediatos garantem que você nunca fique sem dentes.',
    solutionP:
      'Pacotes VIP All-Inclusive com hospedagem em hotel 5 estrelas no centro de Antalya, traslados privativos em Mercedes e atendimento em português.',
    whyChooseHeading: 'Por Que Escolher a Master Smile Studio em Antalya?',
    whyChooseIntroLead: 'Para pacientes de todo o mundo que buscam qualidade internacional e atendimento transparente, ',
    whyChooseIntroLink: 'Master Smile Studio Antalya',
    whyChooseIntroTail:
      ' é a clínica de referência em reabilitação oral. Nossos diferenciais:',
    reason1Title: 'Equipe Multidisciplinar Completa sob o Mesmo Teto',
    reason1P1:
      'Transformações complexas exigem a atuação conjunta de cirurgia, prótese, periodontia e mestres ceramistas.',
    reason1P2:
      'Nossa clínica integra todas as especialidades internamente, garantindo comunicação direta sem intermediários.',
    reason1P3:
      'Atendimento direto pelos cirurgiões fundadores desde o diagnóstico digital até o ajuste oclusal final.',
    reason2Title: 'Pacotes Transparentes All-Inclusive com até 70% de Economia',
    reason2P:
      'Oferecemos materiais suíços e alemães originais com até 70% de economia em relação aos custos praticados na Europa e América do Norte.',
    viewAllPackagesBtn: 'Ver Todos os Pacotes e Preços →',
    reason3Title: 'Tomografia 3D CBCT e Microscópios Ópticos Carl Zeiss',
    reason3P:
      'Nossa tecnologia avançada permite a confecção de próteses e facetas com precisão absoluta em apenas 4 a 6 dias.',
    reason4Title: 'Casos Clínicos Reais Documentados',
    reason4P:
      'Confira centenas de casos reais de reabilitação total sobre implantes e transformações Hollywood Smile.',
    reason5Title: 'Hotel 5★ e Transfers VIP Mercedes em Antalya',
    reason5PText:
      'Hospedagem de alto padrão, transporte privativo e assistência completa em português. ',
    reason5PLink: 'Entre em contato com nossa equipe médica para avaliação gratuita.',
    typesHeading: 'Principais Disciplinas Odontológicas na Master Smile Studio',
    typesIntro:
      'Conheça nossa linha completa de procedimentos para recuperar a estética e a mastigação:',
    singleTitle: '1. Implantes Dentários & Arcada Total (All-on-4 / All-on-6)',
    singleP:
      'Substituição definitiva de dentes com implantes Straumann, enxertos e pontes fixas em zircônia com garantia vitalícia.',
    singleLinkLead: 'Saiba mais sobre ',
    singleLinkText: 'Implantes Dentários & All-on-4/6 →',
    multipleTitle: '2. Facetas Dentárias & Lentes de Contato E-Max',
    multipleP:
      'Cerâmica vítrea suíça Ivoclar E-Max para corrigir cor, formato e diastemas em apenas 5 dias.',
    multipleLinkLead: 'Conheça ',
    multipleLinkText: 'Facetas Dentárias & E-Max →',
    allOn4Title: '3. Coroas Dentárias & Pontes Fixas em Zircônia',
    allOn4P:
      'Zircônia alemã pura (1200+ MPa) para proteger dentes fraturados ou desvitalizados em 360 graus.',
    allOn4LinkLead: 'Descubra ',
    allOn4LinkText: 'Coroas e Pontes em Zircônia →',
    allOn6Title: '4. Odontologia Estética, Próteses & Clínica Geral',
    allOn6P:
      'Overdentures de clique sem céu da boca, clareamento Philips Zoom, canal microscópico e profilaxia Air-Flow.',
    allOn6LinkLead: 'Leia sobre ',
    allOn6LinkText: 'Próteses, Estética & Clínica Geral →',
  },
  es: {
    introHeading: 'Tratamientos Dentales de Excelencia & Diseño de Sonrisa en Antalya, Turquía',
    introP1:
      'Master Smile Studio Antalya es un centro de referencia internacional en odontología estética, implantología oral avanzada y reconstrucciones completas de la sonrisa. Ya sean implantes de titanio para toda la arcada, carillas suizas Ivoclar E-Max, coronas de zirconio alemán o endodoncia microscópica — nuestros cirujanos ofrecen máxima precisión clínica con hasta un 70% de ahorro frente a España, Reino Unido y resto de Europa.',
    partsTitle: 'Los 3 Pilares de Nuestra Excelencia Multidisciplinar:',
    part1Label: '1. Diagnóstico 3D Avanzado & Laboratorio Digital CAD/CAM Propio',
    part1Desc:
      'Tomografía 3D CBCT de baja radiación, escáneres intraorales y fresadoras alemanas de 5 ejes con precisión micrométrica.',
    part2Label: '2. Equipo Integrado de Cirujanos, Prostodoncistas y Ceramistas',
    part2Desc:
      'Cirujanos maxilofaciales, rehabilitadores orales, endodoncistas y maestros ceramistas trabajando juntos bajo un mismo techo.',
    part3Label: '3. Materiales Europeos Certificados & Garantía de por Vida',
    part3Desc:
      'Empleamos exclusivamente implantes suizos Straumann, zirconio alemán Amann Girrbach y cerámica pura Ivoclar E-Max.',
    healingP:
      'Todos los procedimientos son 100% indoloros gracias a la anestesia local computarizada y opción de sedación consciente. Los dientes provisionales inmediatos aseguran que nunca esté sin dientes.',
    solutionP:
      'Con paquetes VIP Todo Incluido con hotel de 5 estrellas en el centro de Antalya, traslados privados en Mercedes y atención en español durante todo el viaje.',
    whyChooseHeading: '¿Por Qué Elegir Master Smile Studio para su Tratamiento en Antalya?',
    whyChooseIntroLead: 'Para pacientes de todo el mundo que buscan calidad hospitalaria y transparencia, ',
    whyChooseIntroLink: 'Master Smile Studio Antalya',
    whyChooseIntroTail:
      ' es el centro de referencia en odontología avanzada. Nuestras ventajas:',
    reason1Title: 'Equipo Multidisciplinar Integrado bajo un Mismo Techo',
    reason1P1:
      'Un diseño de sonrisa integral requiere la coordinación entre cirugía maxilofacial, prótesis, periodoncia y cerámica estética.',
    reason1P2:
      'Nuestra clínica reúne todas las especialidades internamente, garantizando máxima sincronización entre odontólogos y ceramistas.',
    reason1P3:
      'Atención directa por nuestros directores médicos desde el diagnóstico 3D hasta la calibración oclusal final.',
    reason2Title: 'Paquetes Todo Incluido y Ahorro de hasta el 70%',
    reason2P:
      'Ofrecemos materiales suizos y alemanes originales con un 70% de ahorro respecto a las tarifas de clínicas en Europa y EE.UU.',
    viewAllPackagesBtn: 'Ver Todos los Paquetes y Precios →',
    reason3Title: 'TAC 3D CBCT y Microscopios Ópticos Carl Zeiss',
    reason3P:
      'Nuestra tecnología permite confeccionar coronas y carillas con ajuste microscópico en tan solo 4 a 6 días.',
    reason4Title: 'Casos Clínicos Reales Documentados',
    reason4P:
      'Compruebe cientos de casos documentados de rehabilitaciones completas sobre implantes y transformaciones Hollywood Smile.',
    reason5Title: 'Hotel 5★ y Traslados VIP en Mercedes en Antalya',
    reason5PText:
      'Estancia de lujo en hotel de 5 estrellas, transporte privado y asistencia en español durante todo el viaje. ',
    reason5PLink: 'Contacte con nuestro equipo para una valoración inmediata.',
    typesHeading: 'Principales Especialidades Odontológicas en Master Smile Studio',
    typesIntro:
      'Explore nuestro catálogo completo de tratamientos avanzados para recuperar la función masticatoria y la sonrisa:',
    singleTitle: '1. Implantes Dentales & Arcada Completa (All-on-4 / All-on-6)',
    singleP:
      'Reposición fija con implantes Straumann, elevación de seno y puentes de zirconio con garantía de por vida.',
    singleLinkLead: 'Más información sobre ',
    singleLinkText: 'Implantes Dentales & All-on-4/6 →',
    multipleTitle: '2. Carillas Dentales & Porcelana E-Max (Hollywood Smile)',
    multipleP:
      'Cerámica vítrea suiza Ivoclar E-Max para corregir forma y color en solo 5 días con Diseño Digital 3D.',
    multipleLinkLead: 'Ver detalles de ',
    multipleLinkText: 'Carillas Dentales & E-Max →',
    allOn4Title: '3. Coronas Dentales & Puentes Fijos de Zirconio',
    allOn4P:
      'Zirconio alemán puro (1200+ MPa) para recubrir dientes destruidos o endodonciados en 360 grados.',
    allOn4LinkLead: 'Descubra ',
    allOn4LinkText: 'Coronas y Puentes de Zirconio →',
    allOn6Title: '4. Estética Dental, Sobredentaduras & Odontología General',
    allOn6P:
      'Sobredentaduras con anclaje sin paladar, blanqueamiento Philips Zoom, endodoncia microscópica y limpieza Air-Flow.',
    allOn6LinkLead: 'Detalles sobre ',
    allOn6LinkText: 'Prótesis, Estética & Odontología General →',
  },
  ru: {
    introHeading: 'Стоматологическое лечение европейского уровня & Дизайн улыбки в Анталье',
    introP1:
      'Master Smile Studio Анталья — международный экспертный центр эстетической стоматологии, хирургической имплантологии и полного восстановления зубов. Будь то титановые имплантаты All-on-4/6, швейцарские виниры Ivoclar E-Max, коронки из немецкого циркония или лечение каналов под микроскопом — наши ведущие хирурги и ортопеды обеспечивают высочайшее качество с экономией до 70%.',
    partsTitle: '3 основы нашего междисциплинарного клинического превосходства:',
    part1Label: '1. Цифровая 3D-диагностика & Собственная лаборатория CAD/CAM',
    part1Desc:
      'Низкодозовая томография 3D CBCT, оптические интраоральные сканеры и 5-осевые немецкие фрезерные станки с микронной точностью.',
    part2Label: '2. Команда хирургов, ортопедов и мастеров керамики',
    part2Desc:
      'Челюстно-лицевые хирурги, ортопеды, эндодонтисты и техники работают совместно над каждым клиническим случаем.',
    part3Label: '3. Сертифицированные европейские материалы и пожизненная гарантия',
    part3Desc:
      'Используются исключительно оригинальные швейцарские импланты Straumann, немецкий цирконий Amann Girrbach и керамика Ivoclar E-Max.',
    healingP:
      'Все процедуры проходят на 100% безболезненно благодаря компьютерной анестезии и возможности седации во сне. Временные зубы ставятся в первый день.',
    solutionP:
      'Пакеты «Все включено» с проживанием в 5-звездочном отеле в центре Антальи, VIP-трансфером на автомобилях Mercedes и русскоговорящим куратором.',
    whyChooseHeading: 'Почему выбирают Master Smile Studio в Анталье?',
    whyChooseIntroLead: 'Для пациентов со всего мира, ценящих бескомпромиссное качество, ',
    whyChooseIntroLink: 'Master Smile Studio Анталья',
    whyChooseIntroTail:
      ' — ведущий центр комплексного восстановления улыбки. Наши преимущества:',
    reason1Title: 'Команда специалистов всех направлений под одной крышей',
    reason1P1:
      'Комплексное преображение улыбки требует слаженной работы хирургии, ортопедии, пародонтологии и керамического искусства.',
    reason1P2:
      'Вся диагностика и производство находятся внутри клиники, что исключает обращение к сторонним подрядчикам.',
    reason1P3:
      'Постоянный контроль ведущих врачей клиники от первой 3D томографии до финальной проверки прикуса.',
    reason2Title: 'Пакеты «Все включено» и экономия до 70%',
    reason2P:
      'Мы предлагаем швейцарские и немецкие материалы со скидкой до 70% по сравнению с ценами в клиниках Европы и СНГ.',
    viewAllPackagesBtn: 'Все пакеты лечения и цены →',
    reason3Title: '3D CBCT томография и микроскопы Carl Zeiss',
    reason3P:
      'Высокоточные технологии позволяют изготовить ваши коронки и виниры за рекордные 4–6 дней.',
    reason4Title: 'Реальные результаты До и После',
    reason4P:
      'Ознакомьтесь с сотнями подтвержденных клинических случаев полного восстановления челюстей и Голливудской улыбки.',
    reason5Title: 'Отель 5★ и трансфер на Mercedes в Анталье',
    reason5PText:
      'Проживание в 5-звездочном отеле, трансфер на автомобилях Mercedes и русскоговорящий куратор. ',
    reason5PLink: 'Свяжитесь с нами для бесплатной медицинской консультации.',
    typesHeading: 'Основные направления стоматологии в Master Smile Studio',
    typesIntro:
      'Ознакомьтесь с полным спектром современных процедур для восстановления здоровья и красоты зубов:',
    singleTitle: '1. Имплантация зубов и восстановление челюсти (All-on-4 / All-on-6)',
    singleP:
      'Пожизненная гарантия на швейцарские импланты Straumann, синус-лифтинг и циркониевые мосты.',
    singleLinkLead: 'Подробнее об ',
    singleLinkText: 'Имплантации зубов & All-on-4/6 →',
    multipleTitle: '2. Керамические виниры Ivoclar E-Max (Hollywood Smile)',
    multipleP:
      'Швейцарская стеклокерамика Ivoclar E-Max для идеальной формы и белизны зубов за 5 дней с 3D дизайном DSD.',
    multipleLinkLead: 'Ознакомьтесь с ',
    multipleLinkText: 'Керамическими винирами E-Max →',
    allOn4Title: '3. Зубные коронки и мосты из немецкого циркония',
    allOn4P:
      'Сверхпрочный цирконий (1200+ МПа) для защиты разрушенных зубов на 360 градусов.',
    allOn4LinkLead: 'Узнать больше о ',
    allOn4LinkText: 'Циркониевых коронках и мостах →',
    allOn6Title: '4. Эстетическая стоматология, протезы и терапия',
    allOn6P:
      'Замковые протезы без неба, отбеливание Philips Zoom, лечение каналов под микроскопом и гигиена Air-Flow.',
    allOn6LinkLead: 'Читать о ',
    allOn6LinkText: 'Протезах, эстетике и терапии →',
  },
};

export default function TreatmentDetailView() {
  const locale = useLocale();
  const d = HUB_DATA[locale] || HUB_DATA.en;

  return (
    <div className={styles.pageWrapper}>
      {/* 1. INTRO EDITORIAL CLINICAL SECTION */}
      <section aria-labelledby="hub-intro-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h1 id="hub-intro-heading" className={styles.mainHeading}>
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
              src="https://www.youtube.com/embed/eiTTit9PLrQ?t=21"
              title="Dental Treatments and Smile Transformations at Master Smile Studio Antalya"
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

      {/* 2. MASTER 7-DISCIPLINE SHOWCASE WITH INTERNAL DEEP LINKS */}
      <TreatmentsHubDisciplineShowcase />

      {/* 2.5 CLINICAL DECISION & TREATMENT COMPARISON MATRIX */}
      <TreatmentComparisonMatrix />

      {/* 3. WHY CHOOSE MASTER SMILE STUDIO IN ANTALYA */}
      <section aria-labelledby="why-choose-hub-heading" className={styles.whyChooseSection}>
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

          <h2 id="why-choose-hub-heading" className={styles.sectionTitle}>
            {d.whyChooseHeading}
          </h2>

          <p className={styles.textP}>
            {d.whyChooseIntroLead}
            <Link href="/treatments" className={styles.linkGold}>
              {d.whyChooseIntroLink}
            </Link>
            {d.whyChooseIntroTail}
          </p>

          {/* 1. Multidisciplinary Specialist Team */}
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

          {/* 2. Cost & Packages */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>2.</span> {d.reason2Title}
          </h3>
          <p className={styles.textP}>{d.reason2P}</p>

          {/* INSERT: ALL PACKAGES SLIDER */}
          <div className="my-8">
            <TreatmentPackagesSlider />
          </div>

          <div className={styles.btnWrap}>
            <Link href="/treatments" className={styles.btnPrimary}>
              {d.viewAllPackagesBtn}
            </Link>
          </div>

          {/* 3. 3D CBCT Tomography & CAD/CAM Lab */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>3.</span> {d.reason3Title}
          </h3>
          <p className={styles.textP}>{d.reason3P}</p>

          {/* Full-width Video */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/haSWVr2smMM"
              title="Advanced Dental Lab Technology Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 4. Before & After Real Cases */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>4.</span> {d.reason4Title}
          </h3>
          <p className={styles.textP}>{d.reason4P}</p>

          {/* INSERT: BEFORE - AFTER SLIDER */}
          <div className="my-8">
            <TreatmentBeforeAfterSliderSection />
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

      {/* 5. CORE DENTAL DISCIPLINES & SOLUTIONS */}
      <section aria-labelledby="types-hub-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h2 id="types-hub-heading" className={styles.sectionTitle}>
            {d.typesHeading}
          </h2>
          <p className={styles.textP}>{d.typesIntro}</p>

          {/* 1. Dental Implants */}
          <h3 className={styles.sectionSubTitle}>{d.singleTitle}</h3>
          <p className={styles.textP}>{d.singleP}</p>
          <p className={styles.textItalic}>
            {d.singleLinkLead}
            <Link href="/treatments/dental-implants" className={styles.linkGold}>
              {d.singleLinkText}
            </Link>
          </p>

          {/* 2. Dental Veneers */}
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
              src="https://www.youtube.com/embed/eiTTit9PLrQ"
              title="Comprehensive Dental Treatments in Antalya Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 3. Dental Crowns & Bridges */}
          <h3 className={styles.sectionSubTitle}>{d.allOn4Title}</h3>
          <p className={styles.textP}>{d.allOn4P}</p>
          <p className={styles.textItalic}>
            {d.allOn4LinkLead}
            <Link href="/treatments/dental-crowns" className={styles.linkGold}>
              {d.allOn4LinkText}
            </Link>
          </p>

          {/* 4. Cosmetic & General */}
          <h3 className={styles.sectionSubTitle}>{d.allOn6Title}</h3>
          <p className={styles.textP}>{d.allOn6P}</p>
          <p className={styles.textItalic}>
            {d.allOn6LinkLead}
            <Link href="/treatments/cosmetic-dentistry" className={styles.linkGold}>
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
      <TreatmentBeforeAfterSliderSection />

      {/* 9. COST BREAKDOWN & PACKAGE PROMO BANNER */}
      <TreatmentCostBreakdownAndPackageBannerSection />

      {/* 10. PACKAGES SLIDER */}
      <TreatmentPackagesSlider />

      {/* 11. REVIEWS SECTION (Google & Trustpilot) */}
      <TreatmentReviewsSection />

      {/* 12. PARALLAX CTA BANNER */}
      <TreatmentParallaxBanner />

      {/* 13. MASTER 16-QUESTION FREQUENTLY ASKED QUESTIONS */}
      <TreatmentsHubFAQSection />

      {/* 14. INTERACTIVE 4-STEP QUOTE FORM */}
      <TreatmentInteractiveQuoteForm defaultTreatment="Dental Implants" />
    </div>
  );
}
