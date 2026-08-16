'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import TreatmentDivider from '@/components/treatment-sections/TreatmentDivider';
import TreatmentTripleVideoSlider from '@/components/treatment-sections/TreatmentTripleVideoSlider';
import TreatmentCosmeticRightTreatmentAccordion from '@/components/treatment-sections/TreatmentCosmeticRightTreatmentAccordion';
import TreatmentDoctorsSection from '@/components/treatment-sections/TreatmentDoctorsSection';
import TreatmentCosmeticBeforeAfterSliderSection from './treatment-sections/TreatmentCosmeticBeforeAfterSliderSection';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentCostBreakdownAndPackageBannerSection from '@/components/treatment-sections/TreatmentCostBreakdownAndPackageBannerSection';
import TreatmentCosmeticPackagesSlider from './treatment-sections/TreatmentCosmeticPackagesSlider';
import TreatmentReviewsSection from './treatment-sections/TreatmentReviewsSection';
import TreatmentParallaxBanner from './treatment-sections/TreatmentParallaxBanner';
import TreatmentCosmeticFAQSection from './treatment-sections/TreatmentCosmeticFAQSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
import styles from './DentalImplantsDetailView.module.css';

interface CosmeticI18n {
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

const COSMETIC_DATA: Record<string, CosmeticI18n> = {
  en: {
    introHeading: 'Cosmetic Dentistry & Hollywood Smile Design in Istanbul, Turkey',
    introP1:
      'Cosmetic dentistry is the art and science of perfecting your smile through personalized facial aesthetics, digital Golden Ratio analysis, and state-of-the-art restorative ceramic materials. Whether designing a 20-tooth Hollywood Smile makeover with Swiss Ivoclar E-Max laminates, closing gaps with composite bonding, or performing painless diode laser gum contouring, Master Smile Studio Istanbul crafts radiant, life-changing smiles in just 5 to 6 days.',
    partsTitle: 'The 3 Pillars of an Award-Winning Cosmetic Smile Architecture:',
    part1Label: '1. 3D Digital Smile Design (DSD) & Facial Golden Ratio',
    part1Desc:
      'High-definition 3Shape optical facial mapping that plans tooth length, width, and curvature based on lip dynamics and facial symmetry before any treatment begins.',
    part2Label: '2. Pink Aesthetics (Laser Gum Contouring / Gingivoplasty)',
    part2Desc:
      'Painless soft-tissue diode laser sculpting that corrects "Gummy Smiles" and aligns uneven gingival margins for a harmonious frame around your teeth.',
    part3Label: '3. White Aesthetics (Swiss Ivoclar E-Max & Laser Whitening)',
    part3Desc:
      'Hand-crafted lithium disilicate glass-ceramic laminates offering natural enamel opalescence, or Philips Zoom laser whitening for instant brilliance.',
    healingP:
      'With our live in-mouth Mock-Up try-in, you see and approve your exact smile transformation before any tooth preparation begins. Same-day aesthetic temporary teeth ensure complete confidence and zero sensitivity throughout your stay.',
    solutionP:
      'From correcting dark discolored enamel and chipped edges to resolving crooked teeth and diastemas, Master Smile Studio Istanbul provides world-renowned VIP cosmetic dental transformations with up to 70% cost savings.',
    whyChooseHeading: 'Why Choose Cosmetic Dentistry at Master Smile Studio in Istanbul?',
    whyChooseIntroLead: 'For patients seeking world-class celebrity smile makeovers, ',
    whyChooseIntroLink: 'Master Smile Studio Istanbul',
    whyChooseIntroTail:
      ' is the trusted international center for digital aesthetic dentistry. Here is why discerning patients choose us:',
    reason1Title: 'Celebrity Aesthetic Dentists & Master Ceramist Artists',
    reason1P1:
      'Our cosmetic prosthodontists have designed thousands of bespoke Hollywood smiles for international actors, influencers, and discerning patients worldwide.',
    reason1P2:
      'Every porcelain laminate and crown is hand-sculpted and glazed in our in-house certified CAD/CAM laboratory using genuine Swiss Ivoclar E-Max blocks.',
    reason1P3:
      'You are cared for directly by our clinic founders and senior aesthetic dental specialists from initial 3D scan to final bonding.',
    reason2Title: 'All-Inclusive Smile Makeover Packages & Up to 70% Savings',
    reason2P:
      'While a 20-tooth smile makeover costs £14,000 to £25,000 in London or New York, our transparent packages include 5-star hotel accommodation and VIP chauffeur service at up to 70% lower cost.',
    viewAllPackagesBtn: 'View All Smile Makeover Packages & Prices →',
    reason3Title: '3D AI Digital Smile Design & Live In-Mouth Mock-Up',
    reason3P:
      'Never wonder how your smile will look. We produce a 3D physical mock-up placed over your natural teeth so you can see your new smile in the mirror before starting.',
    reason4Title: 'Documented Before & After Patient Transformations',
    reason4P:
      'Browse our extensive portfolio of documented clinical cases showing severe discoloration, crowded teeth, and gummy smiles transformed into dazzling works of art.',
    reason5Title: 'Luxury 5-Star Hotel & VIP Mercedes Chauffeur in Istanbul',
    reason5PText:
      'Experience a true luxury dental holiday with central 5-star hotel accommodation, private Mercedes airport and clinic transfers, and dedicated personal patient hosts. ',
    reason5PLink: 'Contact our team for a free personalized smile makeover consultation.',
    typesHeading: 'Types of Cosmetic Dentistry Treatments at Master Smile Studio',
    typesIntro:
      'We offer an extensive portfolio of advanced cosmetic procedures tailored to your smile aspirations and facial features:',
    singleTitle: '1. Hollywood Smile Makeover (16 to 20 E-Max Veneers)',
    singleP:
      'The ultimate full-mouth aesthetic transformation creating dazzling white symmetry, balanced incisal edges, and natural translucency.',
    singleLinkLead: 'Learn more about ',
    singleLinkText: 'Hollywood Smile Makeovers →',
    multipleTitle: '2. 3D Digital Smile Design & Mock-Up Try-In',
    multipleP:
      'Computerized smile planning and live in-mouth simulation allowing you to test-drive your dream smile before any dental treatment begins.',
    multipleLinkLead: 'Explore ',
    multipleLinkText: 'Digital Smile Design →',
    allOn4Title: '3. In-Clinic Philips Zoom Laser Teeth Whitening',
    allOn4P:
      'Light-activated professional laser whitening brightening your natural enamel by up to 6 to 8 shades in just 45 minutes.',
    allOn4LinkLead: 'Discover ',
    allOn4LinkText: 'Laser Teeth Whitening →',
    allOn6Title: '4. Diastema Closure & Laser Gum Contouring',
    allOn6P:
      'Closing gaps with ultra-thin porcelain or bonding, combined with diode laser gingivoplasty for balanced pink-white smile harmony.',
    allOn6LinkLead: 'Read about ',
    allOn6LinkText: 'Diastema & Gum Contouring →',
  },
  tr: {
    introHeading: 'İstanbul Estetik Diş Hekimliği & Hollywood Smile Gülüş Tasarımı',
    introP1:
      'Estetik diş hekimliği; yüzün altın oranına, dudak dinamiklerine ve ten rengine uygun olarak geliştirilen kişiye özel dijital gülüş mimarisidir. İsviçre menşeli Ivoclar E-Max porselen laminalarla uygulanan 16-20 dişlik Hollywood Smile dönüşümlerinden lazerle diş beyazlatmaya, diastema (aralık) kapatmadan lazerle pembe estetiğe (diş eti şekillendirme) kadar tüm işlemler sadece 5 ila 6 günde tamamlanır.',
    partsTitle: 'Kusursuz Bir Estetik Gülüş Mimarisinin 3 Temel Taşı:',
    part1Label: '1. 3D Dijital Gülüş Tasarımı (DSD) & Yüz Altın Oranı',
    part1Desc:
      '3Shape yüksek çözünürlüklü tarayıcılar ve yüz fotoğraflarıyla diş boyu, genişliği ve eğiminin dudak hattına göre milimetrik planlanması.',
    part2Label: '2. Pembe Estetik (Lazer Diş Eti Şekillendirme / Gingivoplasti)',
    part2Desc:
      'Gülerken diş etinin fazla görünmesini (Gummy Smile) 15 dakikada kanamasız ve dikişsiz olarak düzelten diyot lazer uygulaması.',
    part3Label: '3. Beyaz Estetik (İsviçre Ivoclar E-Max & Lazer Beyazlatma)',
    part3Desc:
      'Doğal diş minesinin ışık geçirgenliğini birebir yansıtan lityum disilikat cam seramik laminalar veya tek seansta 8 ton açan Philips Zoom beyazlatma.',
    healingP:
      'Canlı Mock-Up provamız sayesinde dişlerinize hiçbir müdahale yapılmadan önce yeni gülüşünüzü aynada canlı olarak görür ve onaylarsınız. Aynı gün takılan estetik geçici dişler sayesinde tedavi süresince hiçbir hassasiyet yaşamazsınız.',
    solutionP:
      'İster sararmış ve lekeli dişlerinizi beyazlatmak, ister ön bölgedeki kırık ve ayrıkları kapatmak, ister komple bir Hollywood Smile dönüşümü yaptırmak isteyin; Master Smile Studio İstanbul %70’e varan fiyat avantajıyla dünya standartlarında sonuçlar sunar.',
    whyChooseHeading: 'Neden Master Smile Studio İstanbul’da Estetik Diş Hekimliği?',
    whyChooseIntroLead: 'Kusursuz bir Hollywood Smile gülüşü arayan uluslararası hastalar için ',
    whyChooseIntroLink: 'Master Smile Studio İstanbul',
    whyChooseIntroTail:
      ', estetik diş hekimliği ve gülüş tasarımında öncü merkezdir. Bizi tercih etmeniz için başlıca nedenler:',
    reason1Title: 'Uzman Estetik Diş Hekimleri & Usta Seramistler',
    reason1P1:
      'Hekimlerimiz yüz altın oranı, mikroskobik renk geçişleri ve dijital gülüş tasarımında uzmanlaşmış deneyimli hekimlerdir.',
    reason1P2:
      'Tüm porselen laminalarımız kendi bünyemizdeki sertifikalı CAD/CAM laboratuvarımızda orijinal İsviçre Ivoclar E-Max bloklar kullanılarak üretilir.',
    reason1P3:
      'İlk 3D taramanızdan mock-up provasına ve kalıcı yapıştırma seansına kadar doğrudan kurucu uzman hekimlerimiz tarafından tedavi edilirsiniz.',
    reason2Title: 'Her Şey Dahil Paketler & %70’e Varan Fiyat Tasarrufu',
    reason2P:
      'Londra veya New York’ta 20 dişlik bir gülüş tasarımı £14,000 - £25,000 arasında iken, kliniğimizde 5 yıldızlı otel ve VIP transfer dahil paketlerle %70 daha uygundur.',
    viewAllPackagesBtn: 'Tüm Gülüş Paketleri ve Fiyatları İncele →',
    reason3Title: '3D Yapay Zeka Gülüş Tasarımı & Canlı Mock-Up Provası',
    reason3P:
      'Tedavi bittiğinde nasıl görüneceğinizi merak etmeyin! Diş kesimi yapılmadan önce ağzınıza yerleştirilen 3D mock-up ile yeni gülüşünüzü aynada test edin.',
    reason4Title: 'Kayıtlı Öncesi & Sonrası Gerçek Hasta Dönüşümleri',
    reason4P:
      'Kliniğimizde başarıyla tamamlanan ileri derece renk bozukluğu, çapraşıklık ve diş eti asimetrisi vakalarının büyüleyici dönüşümlerini inceleyin.',
    reason5Title: 'Lüks 5 Yıldızlı Konaklama ve VIP Seyahat Deneyimi',
    reason5PText:
      'İstanbul’un merkezinde 5 yıldızlı otel konaklaması, havalimanı ve klinik arası özel VIP Mercedes şoförlü transferler ve kendi dilinizde hasta danışmanlığı. ',
    reason5PLink: 'Kişiye özel gülüş tasarımı teklifiniz için hemen iletişime geçin.',
    typesHeading: 'Master Smile Studio’da Uygulanan Estetik Tedaviler',
    typesIntro:
      'Yüz yapınıza, gülüş hedeflerinize ve bütçenize uygun estetik diş hekimliği uygulamaları:',
    singleTitle: '1. Hollywood Smile Gülüş Tasarımı (16 - 20 E-Max Lamine)',
    singleP:
      'Kusursuz beyaz simetri, doğal ışık geçirgenliği ve dudak dolgunluğu sağlayan tam gülüş dönüşümü.',
    singleLinkLead: 'Detaylı bilgi için: ',
    singleLinkText: 'Hollywood Smile Tedavisi →',
    multipleTitle: '2. 3D Dijital Gülüş Tasarımı & Mock-Up Provası',
    multipleP:
      'Dişlere hiç dokunulmadan önce yeni gülüşün bilgisayarda tasarlanıp ağızda canlı olarak test edilmesi.',
    multipleLinkLead: 'İnceleyin: ',
    multipleLinkText: 'Dijital Gülüş Tasarımı →',
    allOn4Title: '3. Klinik Tipi Philips Zoom Lazer Diş Beyazlatma',
    allOn4P:
      '45 dakikada diş minesine zarar vermeden 6 ila 8 tona kadar güvenli beyazlık sağlayan profesyonel lazer sistemi.',
    allOn4LinkLead: 'Keşfedin: ',
    allOn4LinkText: 'Lazer Diş Beyazlatma →',
    allOn6Title: '4. Diastema (Ayrık Diş) Kapatma & Lazer Pembe Estetik',
    allOn6P:
      'Ön diş aralıklarının minimal invaziv kapatılması ve lazerle diş eti seviyeleme (Gummy Smile tedavisi).',
    allOn6LinkLead: 'Bilgi alın: ',
    allOn6LinkText: 'Diastema & Diş Eti Estetiği →',
  },
  de: {
    introHeading: 'Ästhetische Zahnheilkunde & Hollywood Smile in Istanbul',
    introP1:
      'Ästhetische Zahnheilkunde verbindet Kunst und moderne Keramiktechnologie zu einem harmonischen Lächeln nach dem Goldenen Schnitt in nur 5 bis 6 Tagen.',
    partsTitle: 'Die 3 Säulen der perfekten Smile-Design-Architektur:',
    part1Label: '1. 3D Digital Smile Design (DSD) & Goldener Schnitt',
    part1Desc: 'Digitale Gesichts- und Lippenanalyse vor Beginn der Behandlung.',
    part2Label: '2. Rote Ästhetik (Laser-Zahnfleischkorrektur)',
    part2Desc: 'Schmerzfreie Korrektur von Gummy Smile mit Diodenlaser in 15 Minuten.',
    part3Label: '3. Weiße Ästhetik (Ivoclar E-Max & Laser-Bleaching)',
    part3Desc: 'Natürliche Transluzenz durch Glaskeramik oder 8 Stufen weißere Zähne mit Philips Zoom.',
    healingP: 'Mit unserer Live-Mock-Up-Vorschau testen Sie Ihr Lächeln vor Behandlungsbeginn.',
    solutionP: 'Sparen Sie bis zu 70% bei Hollywood Smile und Smile Makeovers in Istanbul.',
    whyChooseHeading: 'Warum Smile Makeover bei Master Smile Studio in Istanbul?',
    whyChooseIntroLead: 'Für Patienten aus ganz Europa ist ',
    whyChooseIntroLink: 'Master Smile Studio Istanbul',
    whyChooseIntroTail: ' die erste Adresse für digitales Smile Design:',
    reason1Title: 'Spezialisierte Ästhetiker & Meisterlabor',
    reason1P1: 'Tausende erfolgreich durchgeführte Hollywood-Smile-Transformationen.',
    reason1P2: 'Original Schweizer Ivoclar E-Max Keramik.',
    reason1P3: 'Persönliche Betreuung durch unsere Chefärzte.',
    reason2Title: 'All-Inclusive-Pakete mit bis zu 70% Ersparnis',
    reason2P: 'Inklusive 5-Sterne-Hotel und VIP-Transfers zum Festpreis.',
    viewAllPackagesBtn: 'Alle Smile-Design-Pakete & Preise ansehen →',
    reason3Title: '3D DSD & Live-Mock-Up am eigenen Zahn',
    reason3P: 'Ergebnis im Spiegel ansehen und freigeben vor der Präparation.',
    reason4Title: 'Dokumentierte Vorher & Nachher Patientenfälle',
    reason4P: 'Echte Verwandlungen von verfärbten und unregelmäßigen Zähnen.',
    reason5Title: '5-Sterne-Hotel & VIP-Chauffeur in Istanbul',
    reason5PText: 'Rundum-sorglos-Reiseorganisation mit persönlicher Betreuung. ',
    reason5PLink: 'Kontaktieren Sie uns für Ihr persönliches Angebot.',
    typesHeading: 'Ästhetische Behandlungen bei Master Smile Studio',
    typesIntro: 'Modernste Verfahren für Ihr Traumlächeln:',
    singleTitle: '1. Hollywood Smile Makeover (16–20 E-Max Veneers)',
    singleP: 'Komplette ästhetische Verwandlung mit natürlicher Transluzenz.',
    singleLinkLead: 'Mehr über ',
    singleLinkText: 'Hollywood Smile →',
    multipleTitle: '2. 3D Digital Smile Design & Mock-Up',
    multipleP: 'Live-Anprobe und digitale Planung vor Behandlungsbeginn.',
    multipleLinkLead: 'Entdecken Sie ',
    multipleLinkText: 'Digital Smile Design →',
    allOn4Title: '3. Philips Zoom Laser-Zahnaufhellung',
    allOn4P: 'Bis zu 8 Stufen weißere Zähne in 45 Minuten.',
    allOn4LinkLead: 'Details zu ',
    allOn4LinkText: 'Laser-Bleaching →',
    allOn6Title: '4. Diastema-Schluss & Gummy Smile Korrektur',
    allOn6P: 'Zahnlücken schließen und harmonische Zahnfleischkonturen schaffen.',
    allOn6LinkLead: 'Informationen zu ',
    allOn6LinkText: 'Diastema & Zahnfleisch →',
  },
  pl: {
    introHeading: 'Stomatologia Estetyczna i Hollywood Smile w Stambule, Turcja',
    introP1:
      'Stomatologia estetyczna i Cyfrowe Projektowanie Uśmiechu (3D DSD) to harmonijne połączenie proporcji twarzy, bieli szkliwa i linii dziąseł w 5–6 dni.',
    partsTitle: '3 Filary Nowoczesnej Architektury Uśmiechu:',
    part1Label: '1. Cyfrowe Projektowanie Uśmiechu 3D DSD',
    part1Desc: 'Analiza złotej proporcji twarzy i symetrii warg przed rozpoczęciem leczenia.',
    part2Label: '2. Różowa Estetyka (Laserowa Korekta Dziąseł)',
    part2Desc: '15-minutowy bezbolesny zabieg laserowy eliminujący uśmiech dziąsłowy (Gummy Smile).',
    part3Label: '3. Biała Estetyka (Szwajcarski Ivoclar E-Max & Wybielanie)',
    part3Desc: 'Licówki z dwukrzemianu litu lub wybielanie Philips Zoom rozjaśniające zęby o 8 tonów.',
    healingP: 'Przymiarka Mock-Up pozwala ocenić i zatwierdzić uśmiech w lustrze przed rozpoczęciem prac.',
    solutionP: 'Oszczędność do 70% na zabiegach Hollywood Smile w Stambule.',
    whyChooseHeading: 'Dlaczego Hollywood Smile w Master Smile Studio w Stambule?',
    whyChooseIntroLead: 'Dla pacjentów z całej Europy ',
    whyChooseIntroLink: 'Master Smile Studio Stambuł',
    whyChooseIntroTail: ' to wiodąca klinika stomatologii estetycznej:',
    reason1Title: 'Doświadczeni Lekarze Estetyczni i Mistrzowie Ceramiki',
    reason1P1: 'Tysiące zrealizowanych metamorfoz uśmiechu dla pacjentów z całego świata.',
    reason1P2: 'Oryginalna szwajcarska ceramika Ivoclar E-Max.',
    reason1P3: 'Bezpośrednia opieka lekarzy prowadzących.',
    reason2Title: 'Pakiety All-Inclusive & Oszczędność do 70%',
    reason2P: '5-gwiazdkowy hotel i transfery VIP w cenie.',
    viewAllPackagesBtn: 'Zobacz Pakiety Hollywood Smile i Ceny →',
    reason3Title: 'Cyfrowe Projektowanie 3D & Mock-Up na Żywo',
    reason3P: 'Zobacz efekt końcowy przed oszlifowaniem zębów.',
    reason4Title: 'Metamorfozy Pacjentów Przed i Po',
    reason4P: 'Zobacz spektakularne efekty likwidacji przebarwień i krzywych zębów.',
    reason5Title: 'Hotel 5★ i Prywatny Kierowca w Stambule',
    reason5PText: 'Prywatny transfer Mercedesem i polskojęzyczny koordynator na miejscu. ',
    reason5PLink: 'Skontaktuj się po bezpłatną wycenę.',
    typesHeading: 'Zabiegi Estetyczne w Master Smile Studio',
    typesIntro: 'Kompleksowe procedury dla Twojego idealnego uśmiechu:',
    singleTitle: '1. Metamorfoza Hollywood Smile (16–20 Licówek E-Max)',
    singleP: 'Kompletna zmiana uśmiechu z naturalną przeziernością i idealną bielą.',
    singleLinkLead: 'Więcej o ',
    singleLinkText: 'Hollywood Smile →',
    multipleTitle: '2. Cyfrowe Projektowanie Uśmiechu DSD & Mock-Up',
    multipleP: 'Planowanie 3D i przymiarka w ustach przed rozpoczęciem zabiegu.',
    multipleLinkLead: 'Poznaj ',
    multipleLinkText: 'Cyfrowy Design Uśmiechu →',
    allOn4Title: '3. Wybielanie Laserowe Philips Zoom',
    allOn4P: 'Rozjaśnienie zębów do 8 tonów w 45 minut.',
    allOn4LinkLead: 'Sprawdź ',
    allOn4LinkText: 'Wybielanie Laserowe →',
    allOn6Title: '4. Zamknięcie Diastemy & Plastyka Dziąseł',
    allOn6P: 'Likwidacja przerw między zębami i wyrównanie linii dziąseł.',
    allOn6LinkLead: 'Czytaj o ',
    allOn6LinkText: 'Diastemie i Dziąsłach →',
  },
  pt: {
    introHeading: 'Odontologia Estética & Hollywood Smile em Istambul, Turquia',
    introP1:
      'A odontologia estética harmoniza proporção áurea facial, contorno labial e cerâmicas suíças Ivoclar E-Max em uma transformação completa em apenas 5 a 6 dias.',
    partsTitle: 'Os 3 Pilares de uma Arquitetura de Sorriso Premiada:',
    part1Label: '1. Design Digital 3D do Sorriso (DSD)',
    part1Desc: 'Mapeamento facial 3Shape da proporção áurea antes de iniciar o tratamento.',
    part2Label: '2. Estética Rosa (Plástica Gengival a Laser)',
    part2Desc: 'Correção indolor de Sorriso Gengival com laser de diodo em 15 minutos.',
    part3Label: '3. Estética Branca (Ivoclar E-Max & Clareamento)',
    part3Desc: 'Facetas em cerâmica pura ou clareamento Philips Zoom de até 8 tons.',
    healingP: 'Com o Mock-Up 3D em boca, você vê e aprova o resultado antes de qualquer preparo.',
    solutionP: 'Economize até 70% em transformações Hollywood Smile com atendimento VIP em Istambul.',
    whyChooseHeading: 'Por Que Fazer Smile Makeover na Master Smile Studio?',
    whyChooseIntroLead: 'Para pacientes de todo o mundo, ',
    whyChooseIntroLink: 'Master Smile Studio Istambul',
    whyChooseIntroTail: ' é a clínica de referência em odontologia estética:',
    reason1Title: 'Especialistas em Estética & Mestres Ceramistas',
    reason1P1: 'Milhares de transformações Hollywood Smile realizadas com sucesso.',
    reason1P2: 'Cerâmica pura suíça Ivoclar E-Max usinada em robótica CAD/CAM.',
    reason1P3: 'Atendimento direto pelos cirurgiões fundadores.',
    reason2Title: 'Pacotes All-Inclusive com 70% de Economia',
    reason2P: 'Hotel 5 estrelas e transfers VIP Mercedes inclusos.',
    viewAllPackagesBtn: 'Ver Pacotes de Smile Makeover e Preços →',
    reason3Title: 'Design Digital 3D & Simulação Mock-Up ao Vivo',
    reason3P: 'Aprovação direta no espelho antes de tocar nos dentes.',
    reason4Title: 'Casos Reais de Antes e Depois',
    reason4P: 'Veja transformações de dentes manchados e desalinhados.',
    reason5Title: 'Hotel 5★ e Transfers VIP Mercedes',
    reason5PText: 'Atendimento exclusivo em português durante toda a viagem. ',
    reason5PLink: 'Solicite seu orçamento gratuito.',
    typesHeading: 'Tratamentos Estéticos na Master Smile Studio',
    typesIntro: 'Soluções personalizadas para o sorriso dos seus sonhos:',
    singleTitle: '1. Hollywood Smile Makeover (16 a 20 Facetas E-Max)',
    singleP: 'Transformação estética total com translucidez e brancura natural.',
    singleLinkLead: 'Saiba mais: ',
    singleLinkText: 'Hollywood Smile →',
    multipleTitle: '2. Design Digital 3D do Sorriso & Mock-Up',
    multipleP: 'Planejamento digital e teste físico em boca.',
    multipleLinkLead: 'Conheça: ',
    multipleLinkText: 'Design Digital →',
    allOn4Title: '3. Clareamento Dental a Laser Philips Zoom',
    allOn4P: 'Até 8 tons mais claro em sessão clínica de 45 minutos.',
    allOn4LinkLead: 'Descubra: ',
    allOn4LinkText: 'Clareamento a Laser →',
    allOn6Title: '4. Fechamento de Diastemas e Plástica Gengival',
    allOn6P: 'Fechamento de espaços e harmonização gengival a laser.',
    allOn6LinkLead: 'Leia sobre: ',
    allOn6LinkText: 'Diastema e Gengivoplastia →',
  },
  es: {
    introHeading: 'Odontología Estética y Hollywood Smile en Estambul, Turquía',
    introP1:
      'La odontología estética combina el diseño digital de sonrisa, la proporción áurea facial y las carillas suizas Ivoclar E-Max para lograr un cambio de sonrisa deslumbrante en solo 5 a 6 días.',
    partsTitle: 'Los 3 Pilares del Diseño de Sonrisa Exclusivo:',
    part1Label: '1. Diseño Digital de Sonrisa 3D (DSD)',
    part1Desc: 'Estudio de proporción áurea facial y dinámica labial antes de iniciar.',
    part2Label: '2. Estética Rosa (Gingivoplastia Láser)',
    part2Desc: 'Corrección indolora de Sonrisa Gingival con láser de diodo en 15 minutos.',
    part3Label: '3. Estética Blanca (Ivoclar E-Max & Blanqueamiento)',
    part3Desc: 'Carillas cerámicas con opalescencia natural o blanqueamiento Philips Zoom.',
    healingP: 'Con nuestra prueba Mock-Up en vivo, verá y aprobará su nueva sonrisa en el espejo.',
    solutionP: 'Ahorro de hasta el 70% en diseños de sonrisa Hollywood Smile en Estambul.',
    whyChooseHeading: '¿Por Qué Elegir Hollywood Smile en Master Smile Studio Estambul?',
    whyChooseIntroLead: 'Para pacientes de todo el mundo, ',
    whyChooseIntroLink: 'Master Smile Studio Estambul',
    whyChooseIntroTail: ' es el centro de referencia en diseño de sonrisa y estética:',
    reason1Title: 'Especialistas en Estética y Maestros Ceramistas',
    reason1P1: 'Miles de transformaciones estéticas realizadas con los más altos estándares.',
    reason1P2: 'Porcelana suiza Ivoclar E-Max original.',
    reason1P3: 'Atención médica directa por los directores de la clínica.',
    reason2Title: 'Paquetes Todo Incluido con 70% de Ahorro',
    reason2P: 'Hotel 5 estrellas y chófer privado Mercedes incluidos.',
    viewAllPackagesBtn: 'Ver Paquetes de Diseño de Sonrisa y Precios →',
    reason3Title: 'Diseño Digital 3D & Prueba Mock-Up en Vivo',
    reason3P: 'Pruebe su nueva sonrisa antes de realizar cualquier tallado dental.',
    reason4Title: 'Casos Reales de Antes y Después',
    reason4P: 'Vea resultados de pacientes que consiguieron su sonrisa perfecta.',
    reason5Title: 'Hotel 5★ y Traslados VIP en Mercedes',
    reason5PText: 'Atención en español durante toda su estancia. ',
    reason5PLink: 'Pida su presupuesto personalizado.',
    typesHeading: 'Tratamientos de Estética Dental en Master Smile Studio',
    typesIntro: 'Procedimientos avanzados para conseguir la sonrisa ideal:',
    singleTitle: '1. Hollywood Smile Makeover (16 a 20 Carillas E-Max)',
    singleP: 'Transformación total con blancura estética y simetría facial perfecta.',
    singleLinkLead: 'Más información: ',
    singleLinkText: 'Hollywood Smile →',
    multipleTitle: '2. Diseño Digital de Sonrisa 3D & Mock-Up',
    multipleP: 'Planificación digital y simulación en vivo sobre sus dientes.',
    multipleLinkLead: 'Descubra: ',
    multipleLinkText: 'Diseño Digital 3D →',
    allOn4Title: '3. Blanqueamiento Dental Láser Philips Zoom',
    allOn4P: 'Hasta 8 tonos más blanco en una sola sesión de 45 minutos.',
    allOn4LinkLead: 'Ver detalles: ',
    allOn4LinkText: 'Blanqueamiento Láser →',
    allOn6Title: '4. Cierre de Diastemas y Gingivoplastia Láser',
    allOn6P: 'Cierre de espacios interdentales y armonización de la línea de encías.',
    allOn6LinkLead: 'Detalles sobre: ',
    allOn6LinkText: 'Diastemas y Encías →',
  },
  ru: {
    introHeading: 'Эстетическая стоматология & Hollywood Smile в Стамбуле',
    introP1:
      'Эстетическая стоматология — это искусство создания идеальной улыбки на основе золотого сечения лица, 3D DSD и швейцарской керамики Ivoclar E-Max за 5–6 дней.',
    partsTitle: '3 основы безупречной Голливудской улыбки:',
    part1Label: '1. Цифровой дизайн улыбки 3D (DSD) & Золотое сечение',
    part1Desc: 'Компьютерное моделирование формы зубов с учетом мимики и губ до начала работ.',
    part2Label: '2. Розовая эстетика (Лазерная пластика десен)',
    part2Desc: '15-минутное устранение десневой улыбки (Gummy Smile) диодным лазером без швов.',
    part3Label: '3. Белая эстетика (Ivoclar E-Max & Лазерное отбеливание)',
    part3Desc: 'Керамические виниры ручной работы или отбеливание Philips Zoom на 8 тонов.',
    healingP: 'Примерка Mock-Up позволяет оценить улыбку в зеркале еще до обточки зубов.',
    solutionP: 'Немецкое и швейцарское качество с экономией до 70% в Стамбуле.',
    whyChooseHeading: 'Почему Hollywood Smile в Master Smile Studio Стамбул?',
    whyChooseIntroLead: 'Для пациентов со всего мира ',
    whyChooseIntroLink: 'Master Smile Studio Стамбул',
    whyChooseIntroTail: ' — клиника №1 для эстетического преображения улыбки:',
    reason1Title: 'Опытные врачи-эстетисты и мастера-керамисты',
    reason1P1: 'Тысячи успешных преображений улыбок международного уровня.',
    reason1P2: 'Оригинальная швейцарская керамика Ivoclar E-Max.',
    reason1P3: 'Контроль ведущих специалистов на всех этапах.',
    reason2Title: 'Пакеты «Все включено» и экономия до 70%',
    reason2P: '5-звездочный отель и VIP-трансфер включены в стоимость.',
    viewAllPackagesBtn: 'Все пакеты Hollywood Smile и цены →',
    reason3Title: '3D DSD & Живая примерка Mock-Up во рту',
    reason3P: 'Оцените свою новую улыбку до начала обработки зубов.',
    reason4Title: 'Реальные результаты До и После',
    reason4P: 'Фотографии преображения потемневших и неровных зубов.',
    reason5Title: 'Отель 5★ и трансфер на Mercedes в Стамбуле',
    reason5PText: 'Личный водитель и русскоязычный координатор. ',
    reason5PLink: 'Получите бесплатный расчет стоимости.',
    typesHeading: 'Эстетические процедуры в Master Smile Studio',
    typesIntro: 'Передовые технологии для вашей идеальной улыбки:',
    singleTitle: '1. Преображение Hollywood Smile (16–20 виниров E-Max)',
    singleP: 'Полное преображение с естественной прозрачностью и ослепительной белизной.',
    singleLinkLead: 'Подробнее: ',
    singleLinkText: 'Hollywood Smile →',
    multipleTitle: '2. 3D Цифровой дизайн улыбки & Mock-Up',
    multipleP: 'Компьютерное моделирование и живая примерка формы зубов.',
    multipleLinkLead: 'Узнать больше: ',
    multipleLinkText: 'Дизайн улыбки →',
    allOn4Title: '3. Лазерное отбеливание Philips Zoom',
    allOn4P: 'Осветление эмали до 8 тонов за 45 минут.',
    allOn4LinkLead: 'Ознакомьтесь: ',
    allOn4LinkText: 'Лазерное отбеливание →',
    allOn6Title: '4. Закрытие диастем и лазерная пластика десен',
    allOn6P: 'Устранение щелей между зубами и выравнивание контура десен.',
    allOn6LinkLead: 'Читать о: ',
    allOn6LinkText: 'Диастемах и пластике десны →',
  },
};

export default function CosmeticDentistryDetailView() {
  const locale = useLocale();
  const d = COSMETIC_DATA[locale] || COSMETIC_DATA.en;

  return (
    <div className={styles.pageWrapper}>
      {/* 1. INTRO EDITORIAL CLINICAL SECTION */}
      <section aria-labelledby="cosmetic-intro-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h1 id="cosmetic-intro-heading" className={styles.mainHeading}>
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
              title="Hollywood Smile and Cosmetic Dentistry in Istanbul Video"
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

      {/* 2. FIND THE RIGHT COSMETIC TREATMENT ACCORDION */}
      <TreatmentCosmeticRightTreatmentAccordion />

      {/* 3. WHY CHOOSE COSMETIC DENTISTRY IN ISTANBUL */}
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
            <Link href="/treatments/cosmetic-dentistry" className={styles.linkGold}>
              {d.whyChooseIntroLink}
            </Link>
            {d.whyChooseIntroTail}
          </p>

          {/* 1. Celebrity Aesthetic Dentists & Master Ceramists */}
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

          {/* 2. Smile Makeover Cost & Packages */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>2.</span> {d.reason2Title}
          </h3>
          <p className={styles.textP}>{d.reason2P}</p>

          {/* INSERT: COSMETIC PACKAGES SLIDER */}
          <div className="my-8">
            <TreatmentCosmeticPackagesSlider />
          </div>

          <div className={styles.btnWrap}>
            <Link href="/treatments" className={styles.btnPrimary}>
              {d.viewAllPackagesBtn}
            </Link>
          </div>

          {/* 3. 3D AI Digital Smile Design & Mock-Up */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>3.</span> {d.reason3Title}
          </h3>
          <p className={styles.textP}>{d.reason3P}</p>

          {/* Full-width Video */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/K4Xpx7JMyr8"
              title="Advanced Smile Makeover CAD/CAM Technology Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 4. Before & After Real Transformations */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>4.</span> {d.reason4Title}
          </h3>
          <p className={styles.textP}>{d.reason4P}</p>

          {/* INSERT: COSMETIC BEFORE - AFTER SLIDER */}
          <div className="my-8">
            <TreatmentCosmeticBeforeAfterSliderSection />
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

      {/* 5. TYPES OF COSMETIC TREATMENTS (Hollywood Smile, 3D DSD, Laser Whitening, Diastema) */}
      <section aria-labelledby="types-cosmetic-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h2 id="types-cosmetic-heading" className={styles.sectionTitle}>
            {d.typesHeading}
          </h2>
          <p className={styles.textP}>{d.typesIntro}</p>

          {/* 1. Hollywood Smile Makeover */}
          <h3 className={styles.sectionSubTitle}>{d.singleTitle}</h3>
          <p className={styles.textP}>{d.singleP}</p>
          <p className={styles.textItalic}>
            {d.singleLinkLead}
            <Link href="/treatments/cosmetic-dentistry" className={styles.linkGold}>
              {d.singleLinkText}
            </Link>
          </p>

          {/* 2. 3D Digital Smile Design */}
          <h3 className={styles.sectionSubTitle}>{d.multipleTitle}</h3>
          <p className={styles.textP}>{d.multipleP}</p>
          <p className={styles.textItalic}>
            {d.multipleLinkLead}
            <Link href="/treatments/cosmetic-dentistry" className={styles.linkGold}>
              {d.multipleLinkText}
            </Link>
          </p>

          {/* Video */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/smhwCD78Vbo"
              title="Cosmetic Dentistry in Istanbul Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 3. Laser Teeth Whitening */}
          <h3 className={styles.sectionSubTitle}>{d.allOn4Title}</h3>
          <p className={styles.textP}>{d.allOn4P}</p>
          <p className={styles.textItalic}>
            {d.allOn4LinkLead}
            <Link href="/treatments/cosmetic-dentistry" className={styles.linkGold}>
              {d.allOn4LinkText}
            </Link>
          </p>

          {/* 4. Diastema & Gum Contouring */}
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
      <TreatmentCosmeticBeforeAfterSliderSection />

      {/* 9. COST BREAKDOWN & PACKAGE PROMO BANNER */}
      <TreatmentCostBreakdownAndPackageBannerSection />

      {/* 10. COSMETIC PACKAGES SLIDER */}
      <TreatmentCosmeticPackagesSlider />

      {/* 11. REVIEWS SECTION (Google & Trustpilot) */}
      <TreatmentReviewsSection />

      {/* 12. PARALLAX CTA BANNER */}
      <TreatmentParallaxBanner />

      {/* 13. FREQUENTLY ASKED QUESTIONS */}
      <TreatmentCosmeticFAQSection />

      {/* 14. INTERACTIVE 4-STEP QUOTE FORM */}
      <TreatmentInteractiveQuoteForm defaultTreatment="Cosmetic Dentistry" />
    </div>
  );
}
