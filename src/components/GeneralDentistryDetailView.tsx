'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import TreatmentDivider from '@/components/treatment-sections/TreatmentDivider';
import TreatmentTripleVideoSlider from '@/components/treatment-sections/TreatmentTripleVideoSlider';
import TreatmentGeneralRightTreatmentAccordion from '@/components/treatment-sections/TreatmentGeneralRightTreatmentAccordion';
import TreatmentDoctorsSection from '@/components/treatment-sections/TreatmentDoctorsSection';
import TreatmentGeneralBeforeAfterSliderSection from './treatment-sections/TreatmentGeneralBeforeAfterSliderSection';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentCostBreakdownAndPackageBannerSection from '@/components/treatment-sections/TreatmentCostBreakdownAndPackageBannerSection';
import TreatmentGeneralPackagesSlider from './treatment-sections/TreatmentGeneralPackagesSlider';
import TreatmentReviewsSection from './treatment-sections/TreatmentReviewsSection';
import TreatmentParallaxBanner from './treatment-sections/TreatmentParallaxBanner';
import TreatmentGeneralFAQSection from './treatment-sections/TreatmentGeneralFAQSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
import styles from './DentalImplantsDetailView.module.css';

interface GeneralI18n {
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

const GENERAL_DATA: Record<string, GeneralI18n> = {
  en: {
    introHeading: 'General Dentistry & Preventive Oral Health in Antalya, Turkey',
    introP1:
      'General and preventive dentistry forms the cornerstone of lasting oral health, comfortable chewing, and pain-free living. From microscopic root canal therapy and Swiss Air-Flow deep cleaning to tooth-colored nano-composite restorations and atraumatic wisdom tooth extractions, our specialists at Master Smile Studio Antalya protect, restore, and maintain your natural teeth with uncompromising precision.',
    partsTitle: 'The 3 Core Pillars of Advanced Conservative Dental Health:',
    part1Label: '1. Preventive & Diagnostic Precision (3D CBCT & Air-Flow)',
    part1Desc:
      'Ultra-low-radiation 3D CBCT scanning, digital cavity mapping, ultrasonic subgingival scaling, and Swiss Air-Flow polishing that halt gum disease before it begins.',
    part2Label: '2. Microscopic Restorative Endodontics & Tooth Preservation',
    part2Desc:
      'Operating under high-magnification dental microscopes with 3D thermoplastic obturation to save severely decayed or infected teeth from unnecessary extraction.',
    part3Label: '3. Periodontal Health & Minimally Invasive Oral Surgery',
    part3Desc:
      'Diode laser periodontal pocket decontamination, deep root planing, and atraumatic 3D-guided wisdom tooth extractions with accelerated healing protocols.',
    healingP:
      'Thanks to computer-guided local anesthesia and gentle microscopic techniques, every general dental treatment is 100% painless. Immediate digital X-rays confirm complete disinfection and structural integrity before you leave.',
    solutionP:
      'Whether resolving acute dental pain, curing bleeding gums, replacing dark amalgam fillings, or completing routine full-mouth hygiene, Master Smile Studio Antalya provides world-class care with up to 70% cost savings.',
    whyChooseHeading: 'Why Choose General Dentistry at Master Smile Studio in Antalya?',
    whyChooseIntroLead: 'For patients seeking compassionate, world-class dental care, ',
    whyChooseIntroLink: 'Master Smile Studio Antalya',
    whyChooseIntroTail:
      ' is the trusted international center for pain-free restorative and preventive dentistry. Here is why patients choose us:',
    reason1Title: 'Specialist Endodontists & Periodontists Under One Roof',
    reason1P1:
      'Our clinic features dedicated specialists in microscopic endodontics, periodontology, and oral surgery working collaboratively on your case.',
    reason1P2:
      'Every procedure uses genuine European medical materials, biocompatible Swiss nanohybrid composites, and German rotary endodontic instruments.',
    reason1P3:
      'Direct, continuous care by our senior restorative team from initial 3D digital diagnosis to final treatment verification and hygiene coaching.',
    reason2Title: 'Transparent All-Inclusive Packages & Up to 70% Savings',
    reason2P:
      'In the UK, US, and Europe, specialist root canal treatments and deep cleanings can cost thousands with long waiting lists. We offer immediate appointments and luxury packages with up to 70% savings.',
    viewAllPackagesBtn: 'View All General Dental Packages & Prices →',
    reason3Title: 'High-Definition 3D CBCT Tomography & Dental Microscopes',
    reason3P:
      'We utilize Carl Zeiss optical dental microscopes and low-dose 3D tomography to identify micro-canals, hidden root fractures, and subgingival calculus invisible to standard 2D X-rays.',
    reason4Title: 'Documented Before & After Patient Transformations',
    reason4P:
      'Browse our portfolio of documented clinical treatments showing deep infections resolved, gums revitalized from periodontitis, and broken teeth restored seamlessly.',
    reason5Title: 'Luxury 5-Star Hotel & VIP Mercedes Chauffeur in Antalya',
    reason5PText:
      'Enjoy a stress-free dental trip with central 5-star hotel accommodation, private VIP airport and clinic transfers, and dedicated multi-lingual translation coordinators. ',
    reason5PLink: 'Contact our clinical team for an instant dental consultation.',
    typesHeading: 'General Dentistry Treatments at Master Smile Studio',
    typesIntro:
      'We offer an extensive portfolio of advanced conservative and surgical treatments tailored to your oral health requirements:',
    singleTitle: '1. Microscopic Root Canal Treatment (Endodontics)',
    singleP:
      'Painless microscopic root canal disinfection and 3D thermoplastic filling to save natural teeth from extraction.',
    singleLinkLead: 'Learn more about ',
    singleLinkText: 'Root Canal Treatment →',
    multipleTitle: '2. Ultrasonic Teeth Cleaning & Air-Flow Polishing',
    multipleP:
      'Gentle removal of hard tartar and stubborn stains using acoustic sound waves and Swiss Air-Flow sodium bicarbonate polishing.',
    multipleLinkLead: 'Explore ',
    multipleLinkText: 'Teeth Cleaning & Scaling →',
    allOn4Title: '3. Aesthetic Nano-Hybrid Composite Fillings & Inlays',
    allOn4P:
      'Biocompatible tooth-colored composite restorations and CAD/CAM ceramic inlays to replace decay and old amalgam fillings.',
    allOn4LinkLead: 'Discover ',
    allOn4LinkText: 'Dental Fillings & Onlays →',
    allOn6Title: '4. Atraumatic Wisdom Tooth Extractions & Periodontology',
    allOn6P:
      '3D CBCT-guided surgical extractions and diode laser gum pocket decontamination for long-term periodontal stability.',
    allOn6LinkLead: 'Read about ',
    allOn6LinkText: 'Tooth Extractions & Periodontics →',
  },
  tr: {
    introHeading: 'Antalya Genel Diş Hekimliği & Koruyucu Ağız Sağlığı',
    introP1:
      'Genel ve koruyucu diş hekimliği; ağrısız bir yaşam, güçlü çiğneme fonksiyonu ve dişlerin ömür boyu ağızda tutulması için en kritik tıp dalıdır. Mikroskobik kanal tedavisinden İsviçre Air-Flow derin diş temizliğine, diş renginde nanokompozit dolgulardan atravmatik 20’lik diş cerrahisine kadar tüm işlemler Master Smile Studio Antalya’da en yüksek tıbbi hassasiyetle gerçekleştirilir.',
    partsTitle: 'İleri Koruyucu ve Tedavi Edici Diş Hekimliğinin 3 Ana Temeli:',
    part1Label: '1. Koruyucu Teşhis ve Dijital Tarama (3D Tomografi & Air-Flow)',
    part1Desc:
      'Düşük radyasyonlu 3D CBCT tomografi, dijital çürük haritalama, ultrasonik diş eti altı taş temizliği ve mineyi cilalayan İsviçre Air-Flow sistemi.',
    part2Label: '2. Mikroskobik Endodonti (Kanal Tedavisi) & Diş Kurtarma',
    part2Desc:
      'Yüksek büyütmeli dental ameliyat mikroskopları ve 3D termoplastik dolum teknolojisiyle ileri derece enfeksiyonlu dişlerin çekilmekten kurtarılması.',
    part3Label: '3. Periodontoloji (Diş Eti Tedavisi) & Atravmatik Cerrahi',
    part3Desc:
      'Diyot lazerle diş eti ceplerinin sterilizasyonu, derin kök yüzeyi düzleştirmesi ve çevre dokulara zarar vermeden 3D kılavuzlu 20’lik diş çekimleri.',
    healingP:
      'Bilgisayarlı anestezi sistemleri ve mikroskobik hassasiyet sayesinde tüm genel diş tedavileri %100 ağrısız olarak tamamlanır. Tedavi sonrasında çekilen dijital kontrol röntgenleri ile enfeksiyonun tamamen temizlendiği doğrulanır.',
    solutionP:
      'İster zonklayan şiddetli diş ağrısından kurtulmak, ister kanayan diş etlerinizi iyileştirmek, ister eski siyah amalgam dolgularınızı estetik porselenle değiştirmek isteyin; Master Smile Studio Antalya %70’e varan fiyat avantajıyla en kaliteli sağlık hizmetini sunar.',
    whyChooseHeading: 'Neden Master Smile Studio Antalya’da Genel Diş Tedavisi?',
    whyChooseIntroLead: 'Ağrısız, güvenli ve dünya standartlarında diş tedavisi arayan uluslararası hastalar için ',
    whyChooseIntroLink: 'Master Smile Studio Antalya',
    whyChooseIntroTail:
      ', koruyucu ve tedavi edici diş hekimliğinde öncü merkezdir. Bizi tercih etmeniz için başlıca nedenler:',
    reason1Title: 'Alanında Uzman Endodontistler & Periodontologlar',
    reason1P1:
      'Kliniğimizde mikroskobik kanal tedavisi, diş eti cerrahisi ve çene cerrahisi alanlarında uzmanlaşmış hekimler bir arada çalışır.',
    reason1P2:
      'Tüm tedavilerimizde orijinal Avrupa menşeli biyouyumlu nanokompozitler ve Alman döner kanal aletleri kullanılır.',
    reason1P3:
      'İlk 3D teşhisinizden kontrol randevunuza kadar doğrudan kurucu uzman hekimlerimiz tarafından tedavi edilirsiniz.',
    reason2Title: 'Şeffaf Her Şey Dahil Paketler & %70’e Varan Fiyat Tasarrufu',
    reason2P:
      'Avrupa ve İngiltere’de uzman kanal tedavileri ve cerrahi çekimler çok yüksek maliyetli ve aylar süren bekleme listelerine sahipken, kliniğimizde aynı gün VIP hizmetle %70 daha uygundur.',
    viewAllPackagesBtn: 'Tüm Genel Diş Paketleri ve Fiyatları İncele →',
    reason3Title: '3D CBCT Tomografi & Yüksek Çözünürlüklü Dental Mikroskoplar',
    reason3P:
      'Carl Zeiss optik dental mikroskoplarımız ve 3D tomografimiz sayesinde klasik röntgende görünmeyen mikro kanal anatomileri ve gizli kırıklar milimetrik olarak tespit edilir.',
    reason4Title: 'Kayıtlı Öncesi & Sonrası Gerçek Klinik Vakalar',
    reason4P:
      'Kliniğimizde başarıyla tamamlanan kök ucu apselerinin iyileşmesi, diş eti iltihabının durdurulması ve kırık dişlerin porselenle restorasyonu vakalarını inceleyin.',
    reason5Title: '5 Yıldızlı Otel Konaklaması & VIP Mercedes Transfer',
    reason5PText:
      'Antalya’nın kalbinde 5 yıldızlı otel konaklaması, havalimanı ve klinik arası özel VIP Mercedes şoförlü transferler ve kendi dilinizde hasta danışmanlığı. ',
    reason5PLink: 'Hemen klinik ekibimizle iletişime geçin ve randevunuzu planlayın.',
    typesHeading: 'Master Smile Studio’da Uygulanan Genel Diş Tedavileri',
    typesIntro:
      'Ağız ve diş sağlığınızı korumak ve restore etmek için uyguladığımız ileri klinik tedaviler:',
    singleTitle: '1. Mikroskobik Kök Kanal Tedavisi (Endodonti)',
    singleP:
      'Dental mikroskop altında milimetrik kök temizliği ve 3D biyouyumlu kanal dolumu ile dişi çekimden kurtaran tedavi.',
    singleLinkLead: 'Detaylı bilgi için: ',
    singleLinkText: 'Kanal Tedavisi →',
    multipleTitle: '2. Ultrasonik Diş Taşı Temizliği & Air-Flow Cila',
    multipleP:
      'Ses dalgalarıyla diş minesi çizilmeden yapılan derin tartar temizliği ve İsviçre Air-Flow ile lekesiz pürüzsüzlük.',
    multipleLinkLead: 'İnceleyin: ',
    multipleLinkText: 'Diş Temizliği & Bakım →',
    allOn4Title: '3. Estetik Nanokompozit Dolgular & Porselen Inlay',
    allOn4P:
      'Doğal diş renginde sağlam dolgular ve eski cıvalı siyah amalgam dolguların güvenli sökümü.',
    allOn4LinkLead: 'Keşfedin: ',
    allOn4LinkText: 'Diş Dolguları & Onlay →',
    allOn6Title: '4. Atravmatik 20’lik Diş Çekimi & Periodontoloji',
    allOn6P:
      '3D Tomografi kılavuzluğunda konforlu cerrahi diş çekimleri ve lazer destekli diş eti tedavisi.',
    allOn6LinkLead: 'Bilgi alın: ',
    allOn6LinkText: 'Diş Çekimi & Diş Eti Tedavisi →',
  },
  de: {
    introHeading: 'Allgemeine Zahnheilkunde & Prophylaxe in Antalya, Türkei',
    introP1:
      'Die allgemeine und präventive Zahnheilkunde ist das Fundament für lebenslange Zahngesundheit, schmerzfreies Kauen und gesunde Zahnwurzeln. Von mikroskopischer Wurzelbehandlung und Schweizer Air-Flow Zahnreinigung bis hin zu ästhetischen Nanokomposit-Füllungen und schonenden Weisheitszahn-OPs bietet Master Smile Studio Antalya höchste medizinische Präzision mit bis zu 70% Ersparnis.',
    partsTitle: 'Die 3 Säulen der modernen Zahnerhaltung:',
    part1Label: '1. Diagnostik & Prophylaxe (3D CBCT & Schweizer Air-Flow)',
    part1Desc:
      'Niedrig dosiertes 3D-Röntgen, digitale Karieserkennung, Ultraschall-Zahnsteinentfernung und Schweizer Air-Flow Politur.',
    part2Label: '2. Mikroskopische Endodontie & Zahnerhalt',
    part2Desc:
      'Präzise Wurzelkanalaufbereitung unter dem Dentalmikroskop mit 3D thermoplastischer Obturation zur Rettung gefährdeter Zähne.',
    part3Label: '3. Parodontologie & Schonende Oralchirurgie',
    part3Desc:
      'Diodenlaser-Dekontamination entzündeter Zahnfleischtaschen, Deep Scaling und 3D-geführte Weisheitszahnentfernung.',
    healingP:
      'Dank computergesteuerter Lokalanästhesie und modernster Technik verlaufen alle Behandlungen vollkommen schmerzfrei. Digitale Kontrollaufnahmen sichern das Ergebnis ab.',
    solutionP:
      'Ob akute Zahnschmerzen, blutendes Zahnfleisch oder Amalgamsanierung: Master Smile Studio Antalya bietet erstklassige Behandlungen mit bis zu 70% Kostenersparnis.',
    whyChooseHeading: 'Warum Allgemeine Zahnheilkunde bei Master Smile Studio?',
    whyChooseIntroLead: 'Für Patienten aus ganz Europa ist ',
    whyChooseIntroLink: 'Master Smile Studio Antalya',
    whyChooseIntroTail:
      ' die führende Adresse für schmerzfreie und präzise Zahnheilkunde. Unsere Vorteile:',
    reason1Title: 'Spezialisierte Endodontologen & Parodontologen',
    reason1P1:
      'Erfahrene Fachzahnärzte für Wurzelbehandlung, Parodontologie und Oralchirurgie arbeiten Hand in Hand.',
    reason1P2:
      'Wir verwenden ausschließlich zertifizierte europäische Materialien, Schweizer Nanokomposite und deutsche Instrumente.',
    reason1P3:
      'Direkte Betreuung durch unsere Chefärzte von der Erstdiagnostik bis zur Abschlusskontrolle.',
    reason2Title: 'Transparente Festpreise & Bis zu 70% Ersparnis',
    reason2P:
      'In Deutschland, Österreich und der Schweiz sind mikroskopische Wurzelbehandlungen oft sehr teuer. Bei uns erhalten Sie All-Inclusive-Pakete mit Hotel und Chauffeur.',
    viewAllPackagesBtn: 'Alle Behandlungs-Pakete & Preise ansehen →',
    reason3Title: '3D CBCT Tomographie & Carl Zeiss Dentalmikroskope',
    reason3P:
      'Modernste Mikroskope machen selbst feinste Wurzelkanäle und Mikrorisse sichtbar, die im normalen Röntgen verborgen bleiben.',
    reason4Title: 'Dokumentierte Vorher & Nachher Patientenfälle',
    reason4P:
      'Sehen Sie reale Patientenfälle mit geheilten Wurzelentzündungen, regeneriertem Zahnfleisch und perfekten Füllungen.',
    reason5Title: '5-Sterne-Hotel & VIP-Chauffeur in Antalya',
    reason5PText:
      'Entspannter Aufenthalt mit 5-Sterne-Hotel im Herzen Antalyas, VIP-Transfers und deutschsprachiger Betreuung. ',
    reason5PLink: 'Kontaktieren Sie unser Ärzteteam für eine Beratung.',
    typesHeading: 'Zahnärztliche Leistungen bei Master Smile Studio',
    typesIntro:
      'Unser umfassendes Spektrum moderner Zahnerhaltung und Prophylaxe:',
    singleTitle: '1. Mikroskopische Wurzelkanalbehandlung (Endodontie)',
    singleP:
      'Schmerzfreie Desinfektion und 3D-Füllung der Wurzelkanäle zum dauerhaften Erhalt Ihres natürlichen Zahns.',
    singleLinkLead: 'Mehr erfahren über ',
    singleLinkText: 'Wurzelbehandlung →',
    multipleTitle: '2. Ultraschall-Zahnreinigung & Air-Flow Politur',
    multipleP:
      'Schonende Entfernung von Zahnstein und Verfärbungen mit sanften Schallwellen und Schweizer Air-Flow Pulver.',
    multipleLinkLead: 'Entdecken Sie ',
    multipleLinkText: 'Professionelle Zahnreinigung →',
    allOn4Title: '3. Ästhetische Nanokomposit-Füllungen & Keramik-Inlays',
    allOn4P:
      'Zahnfarbene, langlebige Füllungen und CAD/CAM Keramik-Inlays als perfekter Ersatz für alte Amalgamfüllungen.',
    allOn4LinkLead: 'Details zu ',
    allOn4LinkText: 'Zahnfüllungen & Inlays →',
    allOn6Title: '4. Weisheitszahn-OP & Parodontitistherapie',
    allOn6P:
      '3D-geführte schonende operative Zahnentfernungen und Lasertherapie für gesundes, entzündungsfreies Zahnfleisch.',
    allOn6LinkLead: 'Informationen zu ',
    allOn6LinkText: 'Zahnentfernung & Parodontologie →',
  },
  pl: {
    introHeading: 'Stomatologia Ogólna i Profilaktyka w Antalyi, Turcja',
    introP1:
      'Stomatologia zachowawcza i profilaktyka to fundament zdrowego uśmiechu, bezbólowego gryzienia i zachowania własnych zębów na całe życie. Od mikroskopowego leczenia kanałowego i szwajcarskiego piaskowania Air-Flow po estetyczne wypełnienia nanokompozytowe i bezurazowe usuwanie ósemek — Master Smile Studio Antalya zapewnia najwyższy europejski standard opieki z oszczędnością do 70%.',
    partsTitle: '3 Filary Nowoczesnego Leczenia Zachowawczego:',
    part1Label: '1. Precyzyjna Diagnostyka i Profilaktyka (3D CBCT & Air-Flow)',
    part1Desc:
      'Niskodawkowa tomografia 3D CBCT, skaling ultradźwiękowy i szwajcarskie piaskowanie Air-Flow zatrzymujące stany zapalne dziąseł.',
    part2Label: '2. Endodoncja Mikroskopowa i Ratowanie Zębów',
    part2Desc:
      'Leczenie pod mikroskopem stomatologicznym z trójwymiarowym termoplastycznym wypełnieniem kanałów ratujące ząb przed usunięciem.',
    part3Label: '3. Periodontologia i Chirurgia Atraumatyczna',
    part3Desc:
      'Laserowa sterylizacja kieszonek dziąsłowych, głęboki kiretaż i ekstrakcje zatrzymanych ósemek pod kontrolą tomografii 3D.',
    healingP:
      'Dzięki komputerowemu znieczuleniu miejscowemu wszystkie zabiegi są w 100% bezbolesne. Kontrolne cyfrowe zdjęcia RTG natychmiast potwierdzają wyleczenie infekcji.',
    solutionP:
      'Od likwidacji ostrego bólu zęba i krwawienia dziąseł po wymianę ciemnych plomb amalgamatowych — Master Smile Studio Antalya oferuje opiekę VIP z oszczędnością do 70%.',
    whyChooseHeading: 'Dlaczego Stomatologia Ogólna w Master Smile Studio w Antalyi?',
    whyChooseIntroLead: 'Dla pacjentów poszukujących bezbolesnego i profesjonalnego leczenia zębów ',
    whyChooseIntroLink: 'Master Smile Studio Antalya',
    whyChooseIntroTail:
      ' to wiodąca klinika stomatologii zachowawczej. Nasze kluczowe atuty:',
    reason1Title: 'Doświadczeni Endodonci i Periodontolodzy w Jednym Miejscu',
    reason1P1:
      'Specjaliści mikroskopowego leczenia kanałowego, periodontologii i chirurgii stomatologicznej współpracujący przy każdym przypadku.',
    reason1P2:
      'Wyłącznie certyfikowane europejskie materiały biokompatybilne, szwajcarskie nanokompozyty i niemieckie narzędzia maszynowe.',
    reason1P3:
      'Opieka bezpośrednio prowadzona przez lekarzy założycieli kliniki od diagnostyki 3D po kontrolę pozabiegową.',
    reason2Title: 'Przejrzyste Pakiety All-Inclusive i Oszczędność do 70%',
    reason2P:
      'W Polsce i Europie Zachodniej specjalistyczne leczenie kanałowe pod mikroskopem bywa kosztowne. Oferujemy pakiety z hotelem 5★ i kierowcą VIP o 70% taniej.',
    viewAllPackagesBtn: 'Zobacz Wszystkie Pakiety i Ceny →',
    reason3Title: 'Tomografia 3D CBCT i Mikroskopy Stomatologiczne Carl Zeiss',
    reason3P:
      'Wysokiej klasy mikroskopy operacyjne pozwalają odnaleźć dodatkowe kanały i mikropęknięcia niewidoczne na tradycyjnym RTG.',
    reason4Title: 'Udokumentowane Przypadki Kliniczne Pacjentów',
    reason4P:
      'Zobacz zdjęcia wyleczonych zębów z rozległymi zmianami okołowierzchołkowymi i zregenerowanych dziąseł po kiretażu laserowym.',
    reason5Title: 'Hotel 5★ i Prywatny Transfer Mercedesem w Antalyi',
    reason5PText:
      'Komfortowy pobyt w 5-gwiazdkowym hotelu w centrum Antalyi, transfery VIP oraz pełna opieka polskojęzycznego koordynatora. ',
    reason5PLink: 'Skontaktuj się z naszym zespołem medycznym po bezpłatną konsultację.',
    typesHeading: 'Zabiegi Stomatologii Ogólnej w Master Smile Studio',
    typesIntro:
      'Kompleksowy zakres nowoczesnych procedur zachowawczych i chirurgicznych:',
    singleTitle: '1. Mikroskopowe Leczenie Kanałowe (Endodoncja)',
    singleP:
      'Bezbólowa dezynfekcja i termoplastyczne wypełnienie kanałów ratujące naturalny ząb.',
    singleLinkLead: 'Dowiedz się więcej o ',
    singleLinkText: 'Leczeniu Kanałowym →',
    multipleTitle: '2. Skaling Ultradźwiękowy i Piaskowanie Air-Flow',
    multipleP:
      'Usuwanie kamienia i osadów falami ultradźwiękowymi bez uszkadzania szkliwa.',
    multipleLinkLead: 'Poznaj szczegóły ',
    multipleLinkText: 'Higienizacji Zębów →',
    allOn4Title: '3. Estetyczne Wypełnienia Nanokompozytowe & Inlay',
    allOn4P:
      'Trwałe wypełnienia w kolorze zęba i bezpieczna wymiana starych plomb z amalgamatem.',
    allOn4LinkLead: 'Sprawdź ',
    allOn4LinkText: 'Wypełnienia i Nakłady →',
    allOn6Title: '4. Atraumatyczne Usuwanie Ósemek i Periodontologia',
    allOn6P:
      'Chirurgia pod kontrolą tomografii 3D oraz laserowe leczenie krwawiących dziąseł.',
    allOn6LinkLead: 'Czytaj o ',
    allOn6LinkText: 'Chirurgii i Dziąsłach →',
  },
  pt: {
    introHeading: 'Clínica Geral & Odontologia Preventiva em Antalya, Turquia',
    introP1:
      'A odontologia geral e preventiva é a base essencial para a saúde oral definitiva, mastigação sem dor e conservação dos dentes naturais por toda a vida. Do tratamento de canal microscópico e profilaxia suíça Air-Flow a restaurações em resina estética e extração atraumática de sisos, a Master Smile Studio Antalya oferece máxima excelência médica com até 70% de economia.',
    partsTitle: 'Os 3 Pilares da Odontologia Conservadora Avançada:',
    part1Label: '1. Diagnóstico e Prevenção Precisa (Tomografia 3D e Air-Flow)',
    part1Desc:
      'Tomografia 3D CBCT de baixa radiação, detecção digital de cáries, raspagem ultrassônica e polimento suíço Air-Flow para gengivas perfeitas.',
    part2Label: '2. Endodontia Microscópica e Preservação Dental',
    part2Desc:
      'Tratamento sob microscópio clínico de alta resolução com obturação termoplástica 3D para salvar dentes com infecção profunda.',
    part3Label: '3. Periodontia e Cirurgia Oral Atraumática',
    part3Desc:
      'Descontaminação com laser de diodo em bolsas periodontais, alisamento radicular e extração de dentes do siso guiada por 3D.',
    healingP:
      'Graças à anestesia local computadorizada e precisão microscópica, todos os tratamentos são 100% livres de dor com verificação radiográfica imediata.',
    solutionP:
      'Seja para eliminar dores agudas, tratar gengivites ou substituir amálgamas escuros por cerâmica, a Master Smile Studio oferece tratamento VIP em Antalya.',
    whyChooseHeading: 'Por Que Fazer Tratamentos Clínicos na Master Smile Studio?',
    whyChooseIntroLead: 'Para pacientes de todo o mundo que buscam atendimento seguro e sem dor, ',
    whyChooseIntroLink: 'Master Smile Studio Antalya',
    whyChooseIntroTail:
      ' é a clínica de referência em odontologia conservadora. Veja nossos diferenciais:',
    reason1Title: 'Especialistas em Endodontia e Periodontia Reunidos',
    reason1P1:
      'Corpo clínico com endodontistas microscópicos, periodontistas e cirurgiões bucomaxilofaciais integrados.',
    reason1P2:
      'Utilizamos exclusivamente resinas nanohíbridas suíças biocompatíveis e instrumentos rotatórios alemães de ponta.',
    reason1P3:
      'Atendimento direto pelos cirurgiões fundadores desde o diagnóstico digital até o acompanhamento pós-tratamento.',
    reason2Title: 'Pacotes Transparentes All-Inclusive com até 70% de Economia',
    reason2P:
      'Tratamentos especializados de canal e cirurgias na Europa e América do Norte têm custos elevados. Oferecemos pacotes com hotel 5★ e transfers VIP com alta economia.',
    viewAllPackagesBtn: 'Ver Todos os Pacotes e Preços →',
    reason3Title: 'Tomografia 3D CBCT e Microscópios Ópticos Carl Zeiss',
    reason3P:
      'Microscopia avançada que permite localizar canais extras e microfraturas invisíveis em radiografias comuns.',
    reason4Title: 'Casos Clínicos Reais Documentados',
    reason4P:
      'Veja imagens de infecções graves curadas, regeneração de tecidos periodontais e restaurações estéticas perfeitas.',
    reason5Title: 'Hotel 5★ e Transfers VIP Mercedes em Antalya',
    reason5PText:
      'Hospedagem de alto padrão no centro de Antalya, transporte privativo e assistência completa em português. ',
    reason5PLink: 'Entre em contato com nossa equipe médica para avaliação gratuita.',
    typesHeading: 'Tratamentos de Clínica Geral na Master Smile Studio',
    typesIntro:
      'Linha completa de procedimentos preventivos, restauradores e cirúrgicos:',
    singleTitle: '1. Tratamento de Canal Microscópico (Endodontia)',
    singleP:
      'Desinfecção microscópica e obturação 3D precisa para salvar seu dente natural.',
    singleLinkLead: 'Saiba mais sobre ',
    singleLinkText: 'Tratamento de Canal →',
    multipleTitle: '2. Limpeza Ultrassônica e Jato Air-Flow',
    multipleP:
      'Remoção delicada de tártaro e manchas sem agredir o esmalte dentário.',
    multipleLinkLead: 'Conheça ',
    multipleLinkText: 'Limpeza e Profilaxia →',
    allOn4Title: '3. Restaurações em Nanoresina Estética & Inlays',
    allOn4P:
      'Restaurações na cor natural do dente e substituição segura de amálgamas com mercúrio.',
    allOn4LinkLead: 'Descubra ',
    allOn4LinkText: 'Restaurações e Inlays →',
    allOn6Title: '4. Extração de Sisos e Tratamento Periodontal a Laser',
    allOn6P:
      'Cirurgia guiada por tomografia 3D e descontaminação a laser de gengivas inflamadas.',
    allOn6LinkLead: 'Leia sobre ',
    allOn6LinkText: 'Cirurgia e Periodontia →',
  },
  es: {
    introHeading: 'Odontología General & Prevención Bucal en Antalya, Turquía',
    introP1:
      'La odontología general y preventiva es el pilar fundamental para conservar los dientes naturales de por vida, masticar con total confort y vivir sin dolor dental. Desde endodoncias microscópicas y limpiezas suizas Air-Flow hasta empastes estéticos de nanocomposite y extracción atraumática de muelas del juicio, Master Smile Studio Antalya ofrece el más alto nivel clínico con hasta un 70% de ahorro.',
    partsTitle: 'Los 3 Pilares de la Odontología Conservadora Avanzada:',
    part1Label: '1. Diagnóstico y Prevención (TAC 3D CBCT y Air-Flow Suizo)',
    part1Desc:
      'Tomografía 3D de baja radiación, detección digital de caries, limpieza subgingival por ultrasonidos y pulido Air-Flow para encías sanas.',
    part2Label: '2. Endodoncia Microscópica y Salvamento Dental',
    part2Desc:
      'Tratamiento bajo microscopio dental con sellado 3D termoplástico para salvar piezas con caries profunda o infección.',
    part3Label: '3. Periodoncia y Cirugía Oral Atraumática',
    part3Desc:
      'Descontaminación de bolsas con láser de diodo, raspado radicular y extracción de muelas del juicio guiada por TAC 3D.',
    healingP:
      'Gracias a la anestesia local computarizada y la precisión microscópica, los procedimientos son 100% indoloros con verificación radiográfica inmediata.',
    solutionP:
      'Tanto para aliviar un dolor agudo como para tratar encías sangrantes o sustituir amalgamas oscuras por cerámica, ofrecemos atención VIP con 70% de ahorro.',
    whyChooseHeading: '¿Por Qué Elegir Odontología General en Master Smile Studio?',
    whyChooseIntroLead: 'Para pacientes de todo el mundo que buscan un tratamiento seguro y sin dolor, ',
    whyChooseIntroLink: 'Master Smile Studio Antalya',
    whyChooseIntroTail:
      ' es el centro de referencia en odontología conservadora. Nuestras ventajas:',
    reason1Title: 'Especialistas en Endodoncia y Periodoncia Integrados',
    reason1P1:
      'Endodoncistas microscópicos, periodoncistas y cirujanos maxilofaciales trabajando juntos en cada caso.',
    reason1P2:
      'Materiales europeos certificados, composites biocompatibles suizos e instrumental rotatorio alemán.',
    reason1P3:
      'Atención directa por los directores médicos de la clínica desde el diagnóstico hasta el alta.',
    reason2Title: 'Paquetes Todo Incluido y Ahorro de hasta el 70%',
    reason2P:
      'En España y resto de Europa los tratamientos de conductos especializados tienen precios elevados. Ofrecemos paquetes con hotel 5★ y chófer VIP.',
    viewAllPackagesBtn: 'Ver Todos los Paquetes y Precios →',
    reason3Title: 'TAC 3D CBCT y Microscopios Ópticos Carl Zeiss',
    reason3P:
      'Microscopía que permite localizar conductos accesorios y microfracturas imposibles de detectar en radiografías convencionales.',
    reason4Title: 'Casos Clínicos Reales Documentados',
    reason4P:
      'Compruebe casos reales de infecciones curadas, encías regeneradas con láser y empastes estéticos invisibles.',
    reason5Title: 'Hotel 5★ y Traslados VIP en Mercedes en Antalya',
    reason5PText:
      'Estancia confortable en hotel de 5 estrellas, traslados privados y asistencia en español durante todo el viaje. ',
    reason5PLink: 'Contacte con nuestro equipo para una valoración inmediata.',
    typesHeading: 'Tratamientos de Odontología General en Master Smile Studio',
    typesIntro:
      'Amplia gama de procedimientos conservadores, restauradores y quirúrgicos:',
    singleTitle: '1. Endodoncia Microscópica (Tratamiento de Conductos)',
    singleP:
      'Desinfección microscópica y obturación 3D para salvar su pieza dental original.',
    singleLinkLead: 'Más información sobre ',
    singleLinkText: 'Endodoncia →',
    multipleTitle: '2. Limpieza Dental por Ultrasonidos & Air-Flow',
    multipleP:
      'Eliminación suave de sarro y manchas sin dañar el esmalte dental.',
    multipleLinkLead: 'Ver detalles de ',
    multipleLinkText: 'Limpieza y Profilaxis →',
    allOn4Title: '3. Empastes de Nanocomposite Estético & Inlays',
    allOn4P:
      'Restauraciones del color del diente y retirada segura de empastes de amalgama con mercurio.',
    allOn4LinkLead: 'Descubra ',
    allOn4LinkText: 'Empastes e Incrustaciones →',
    allOn6Title: '4. Extracción de Muelas del Juicio y Periodoncia Láser',
    allOn6P:
      'Cirugía guiada por TAC 3D y descontaminación con láser para frenar el sangrado gingival.',
    allOn6LinkLead: 'Detalles sobre ',
    allOn6LinkText: 'Cirugía y Periodoncia →',
  },
  ru: {
    introHeading: 'Терапевтическая стоматология & Профилактика в Анталье',
    introP1:
      'Терапевтическая и профилактическая стоматология — основа здоровья зубов, комфортного жевания и сохранения собственных зубов на всю жизнь. От лечения каналов под микроскопом и швейцарской чистки Air-Flow до эстетических нанокомпозитных пломб и атравматичного удаления зубов мудрости — клиника Master Smile Studio Анталья обеспечивает высочайшую точность с экономией до 70%.',
    partsTitle: '3 основы современной консервативной стоматологии:',
    part1Label: '1. Диагностика и профилактика (3D CBCT и Air-Flow)',
    part1Desc:
      'Низкодозовая томография 3D CBCT, цифровая диагностика кариеса, ультразвуковое снятие камня и полировка Swiss Air-Flow.',
    part2Label: '2. Эндодонтия под микроскопом и сохранение зубов',
    part2Desc:
      'Высокоточная обработка каналов под дентальным микроскопом с трехмерной 3D обтурацией для спасения разрушенных зубов.',
    part3Label: '3. Пародонтология и атравматичная хирургия',
    part3Desc:
      'Лазерная стерилизация пародонтальных карманов диодным лазером, глубокий кюретаж и удаление восьмерок под контролем 3D.',
    healingP:
      'Благодаря компьютерной анестезии и микроскопической точности все процедуры проходят на 100% безболезненно с мгновенным рентген-контролем.',
    solutionP:
      'От устранения острой зубной боли до лечения кровоточивости десен и замены старых пломб — Master Smile Studio обеспечивает европейский уровень по доступной цене.',
    whyChooseHeading: 'Почему общая стоматология в Master Smile Studio Анталья?',
    whyChooseIntroLead: 'Для пациентов со всего мира, ценящих безболезненное и качественное лечение, ',
    whyChooseIntroLink: 'Master Smile Studio Анталья',
    whyChooseIntroTail:
      ' — ведущий центр терапии и сохранения зубов. Наши преимущества:',
    reason1Title: 'Опытные эндодонтисты и пародонтологи',
    reason1P1:
      'Специалисты по лечению каналов под микроскопом, пародонтологии и хирургии работают как единая команда.',
    reason1P2:
      'Используются только сертифицированные биосовместимые композиты из Швейцарии и немецкие машинные инструменты.',
    reason1P3:
      'Постоянный контроль ведущих врачей клиники от первой 3D томографии до финального осмотра.',
    reason2Title: 'Пакеты «Все включено» и экономия до 70%',
    reason2P:
      'В клиниках Европы и СНГ эндодонтия под микроскопом стоит дорого. Мы предлагаем пакеты с проживанием в отеле 5★ и VIP-трансфером со скидкой до 70%.',
    viewAllPackagesBtn: 'Все терапевтические пакеты и цены →',
    reason3Title: '3D CBCT томография и микроскопы Carl Zeiss',
    reason3P:
      'Операционные микроскопы позволяют выявить скрытые микроканалы и трещины корня, невидимые на обычном снимке.',
    reason4Title: 'Реальные результаты До и После',
    reason4P:
      'Фотографии успешно вылеченных кист, восстановления плотности десен и эстетических реставраций.',
    reason5Title: 'Отель 5★ и трансфер на Mercedes в Анталье',
    reason5PText:
      'Проживание в 5-звездочном отеле, трансфер на автомобилях Mercedes и русскоговорящий куратор. ',
    reason5PLink: 'Свяжитесь с нами для бесплатной медицинской консультации.',
    typesHeading: 'Терапевтические процедуры в Master Smile Studio',
    typesIntro:
      'Полный спектр консервативного лечения и профилактики:',
    singleTitle: '1. Лечение каналов под микроскопом (Эндодонтия)',
    singleP:
      'Безболезненная дезинфекция и 3D обтурация каналов для спасения натурального зуба.',
    singleLinkLead: 'Подробнее о ',
    singleLinkText: 'Лечении каналов →',
    multipleTitle: '2. Ультразвуковая чистка и полировка Air-Flow',
    multipleP:
      'Бережное удаление камня и налета звуковыми волнами без повреждения эмали.',
    multipleLinkLead: 'Ознакомьтесь с ',
    multipleLinkText: 'Профессиональной чисткой →',
    allOn4Title: '3. Эстетические нанокомпозитные пломбы и вкладки',
    allOn4P:
      'Долговечные реставрации в цвет зуба и безопасное снятие старых амальгамовых пломб.',
    allOn4LinkLead: 'Узнать больше о ',
    allOn4LinkText: 'Пломбах и вкладках →',
    allOn6Title: '4. Удаление зубов мудрости и лечение десен лазером',
    allOn6P:
      'Атравматичная хирургия под контролем 3D и лазерная стерилизация пародонтальных карманов.',
    allOn6LinkLead: 'Читать о ',
    allOn6LinkText: 'Хирургии и деснах →',
  },
};

export default function GeneralDentistryDetailView() {
  const locale = useLocale();
  const d = GENERAL_DATA[locale] || GENERAL_DATA.en;

  return (
    <div className={styles.pageWrapper}>
      {/* 1. INTRO EDITORIAL CLINICAL SECTION */}
      <section aria-labelledby="general-intro-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h1 id="general-intro-heading" className={styles.mainHeading}>
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
              title="General and Preventive Dentistry in Antalya Video"
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

      {/* 2. FIND THE RIGHT GENERAL TREATMENT ACCORDION */}
      <TreatmentGeneralRightTreatmentAccordion />

      {/* 3. WHY CHOOSE GENERAL DENTISTRY IN ANTALYA */}
      <section aria-labelledby="why-choose-heading" className={styles.whyChooseSection}>
        <div className={styles.container}>
          <TreatmentDivider />

          <h2 id="why-choose-heading" className={styles.sectionTitle}>
            {d.whyChooseHeading}
          </h2>

          <p className={styles.textP}>
            {d.whyChooseIntroLead}
            <Link href="/treatments/general-dentistry" className={styles.linkGold}>
              {d.whyChooseIntroLink}
            </Link>
            {d.whyChooseIntroTail}
          </p>

          {/* 1. Specialist Endodontists & Periodontists */}
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

          {/* INSERT: GENERAL PACKAGES SLIDER */}
          <div className="my-8">
            <TreatmentGeneralPackagesSlider />
          </div>

          <div className={styles.btnWrap}>
            <Link href="/treatments" className={styles.btnPrimary}>
              {d.viewAllPackagesBtn}
            </Link>
          </div>

          {/* 3. 3D CBCT Tomography & Dental Microscopes */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>3.</span> {d.reason3Title}
          </h3>
          <p className={styles.textP}>{d.reason3P}</p>

          {/* Full-width Video */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/haSWVr2smMM"
              title="Advanced Dental Technology and Microscopes Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 4. Before & After Real Cases */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>4.</span> {d.reason4Title}
          </h3>
          <p className={styles.textP}>{d.reason4P}</p>

          {/* INSERT: GENERAL BEFORE - AFTER SLIDER */}
          <div className="my-8">
            <TreatmentGeneralBeforeAfterSliderSection />
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

      {/* 5. TYPES OF GENERAL DENTISTRY TREATMENTS */}
      <section aria-labelledby="types-general-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h2 id="types-general-heading" className={styles.sectionTitle}>
            {d.typesHeading}
          </h2>
          <p className={styles.textP}>{d.typesIntro}</p>

          {/* 1. Microscopic Root Canal */}
          <h3 className={styles.sectionSubTitle}>{d.singleTitle}</h3>
          <p className={styles.textP}>{d.singleP}</p>
          <p className={styles.textItalic}>
            {d.singleLinkLead}
            <Link href="/treatments/general-dentistry" className={styles.linkGold}>
              {d.singleLinkText}
            </Link>
          </p>

          {/* 2. Ultrasonic Cleaning & Air-Flow */}
          <h3 className={styles.sectionSubTitle}>{d.multipleTitle}</h3>
          <p className={styles.textP}>{d.multipleP}</p>
          <p className={styles.textItalic}>
            {d.multipleLinkLead}
            <Link href="/treatments/general-dentistry" className={styles.linkGold}>
              {d.multipleLinkText}
            </Link>
          </p>

          {/* Video */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/eiTTit9PLrQ"
              title="General Dentistry in Antalya Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 3. Composite Fillings & Inlays */}
          <h3 className={styles.sectionSubTitle}>{d.allOn4Title}</h3>
          <p className={styles.textP}>{d.allOn4P}</p>
          <p className={styles.textItalic}>
            {d.allOn4LinkLead}
            <Link href="/treatments/general-dentistry" className={styles.linkGold}>
              {d.allOn4LinkText}
            </Link>
          </p>

          {/* 4. Wisdom Teeth Extractions & Periodontology */}
          <h3 className={styles.sectionSubTitle}>{d.allOn6Title}</h3>
          <p className={styles.textP}>{d.allOn6P}</p>
          <p className={styles.textItalic}>
            {d.allOn6LinkLead}
            <Link href="/treatments/general-dentistry" className={styles.linkGold}>
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
      <TreatmentGeneralBeforeAfterSliderSection />

      {/* 9. COST BREAKDOWN & PACKAGE PROMO BANNER */}
      <TreatmentCostBreakdownAndPackageBannerSection />

      {/* 10. GENERAL PACKAGES SLIDER */}
      <TreatmentGeneralPackagesSlider />

      {/* 11. REVIEWS SECTION (Google & Trustpilot) */}
      <TreatmentReviewsSection />

      {/* 12. PARALLAX CTA BANNER */}
      <TreatmentParallaxBanner />

      {/* 13. FREQUENTLY ASKED QUESTIONS */}
      <TreatmentGeneralFAQSection />

      {/* 14. INTERACTIVE 4-STEP QUOTE FORM */}
      <TreatmentInteractiveQuoteForm defaultTreatment="General Dentistry" />
    </div>
  );
}
