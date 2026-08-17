'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import TreatmentDivider from '@/components/treatment-sections/TreatmentDivider';
import TreatmentTripleVideoSlider from '@/components/treatment-sections/TreatmentTripleVideoSlider';
import TreatmentRightTreatmentAccordion from '@/components/treatment-sections/TreatmentRightTreatmentAccordion';
import TreatmentDoctorsSection from '@/components/treatment-sections/TreatmentDoctorsSection';
import TreatmentBeforeAfterSliderSection from '@/components/treatment-sections/TreatmentBeforeAfterSliderSection';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentClinicTourSection from '@/components/treatment-sections/TreatmentClinicTourSection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentCostBreakdownAndPackageBannerSection from '@/components/treatment-sections/TreatmentCostBreakdownAndPackageBannerSection';
import TreatmentPackagesSlider from '@/components/treatment-sections/TreatmentPackagesSlider';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import TreatmentParallaxBanner from '@/components/treatment-sections/TreatmentParallaxBanner';
import TreatmentFAQSection from '@/components/treatment-sections/TreatmentFAQSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
import styles from './DentalImplantsDetailView.module.css';

interface DetailI18n {
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

const DETAIL_I18N: Record<string, DetailI18n> = {
  en: {
    whyChooseHeading: 'Why Choose Dental Implants in Istanbul?',
    whyChooseIntroLead:
      'Istanbul has become a top destination for dental implants due to its world-class healthcare system, highly skilled dental professionals, and ',
    whyChooseIntroLink: 'affordable prices.',
    whyChooseIntroTail: ' Here’s why choosing dental implants in Istanbul is a great option:',
    reason1Title: 'Expert Dental Implant Surgeons',
    reason1P1:
      'At Master Smile Studio, all of our dentists are not only highly trained professionals but also the founders of the clinic. Each doctor has received advanced education from some of the most prestigious universities in Turkey, ensuring a strong academic background and deep clinical expertise.',
    reason1P2:
      'All surgical procedures — including dental implants, full-arch restorations, bone grafting, and complex oral surgeries — are performed directly by our experienced oral surgery team, not by assistants or visiting dentists. This means every patient receives consistent, high-quality treatment from trusted specialists.',
    reason1P3:
      'With a strong focus on brand quality and patient safety, Master Smile Studio is recognized for its experience in advanced and challenging dental cases. Our expert surgeons use modern techniques and precise planning to provide long-lasting, natural-looking implant results tailored to your needs.',
    reason2Title: 'Dental Implant Cost in Istanbul - Master Smile Studio',
    reason2P:
      'Compared to many other countries, dental implant costs in Istanbul are significantly lower, allowing you to receive high-end luxury care without breaking the bank.',
    viewAllPackagesBtn: 'View All Packages →',
    reason3Title: 'Advanced Technology & 3D Digital Precision',
    reason3P:
      'We use the latest technology in implantology, ensuring faster healing times and more accurate results. Master Smile Studio in Istanbul is equipped with state-of-the-art 3D CBCT imaging and intraoral scanners to make your treatment as comfortable and effective as possible.',
    reason4Title: 'Before - After Dental Implant at Master Smile Studio in Istanbul',
    reason4P:
      'Dental implants in Istanbul are not just about function; they are designed to blend seamlessly with your natural teeth. Our expert team works to ensure your new smile looks natural, radiant, and beautiful.',
    reason5Title: 'Travel and Treatment in One',
    reason5PText:
      'Istanbul is a vibrant world metropolis, offering the perfect mix of culture, history, and modern luxury. You can enjoy a relaxing holiday while receiving top-tier dental treatment. Master Smile Studio offers expert care at a fraction of Western costs. ',
    reason5PLink: 'Contact us today to learn more!',
    typesHeading: 'Types of Dental Implants (Single, Multiple, All-on-4, All-on-6) in Istanbul',
    typesIntro:
      'Dental implants come in different types depending on how many teeth are missing and the condition of your jawbone. At Master Smile Studio in Istanbul, our oral surgery specialists help you choose the best option for your needs. Here are the most common types:',
    singleTitle: 'Single Dental Implant in Istanbul',
    singleP:
      'A single implant replaces one missing tooth. It includes one titanium screw, one abutment, and one crown. This option is ideal if you have a healthy jawbone and only one tooth gap.',
    singleLinkLead: 'If you want to learn more about replacing a single missing tooth, you can read our ',
    singleLinkText: 'full Single Dental Implant guide.',
    multipleTitle: 'Multiple Dental Implants in Istanbul',
    multipleP:
      'If you are missing several teeth in different areas, multiple implants can be placed. Each missing tooth can be replaced with an individual implant, or a bridge can be supported by two or more implants. This option provides strong chewing ability and a natural look.',
    multipleLinkLead: 'If you are interested in restoring several missing teeth, you can explore our detailed ',
    multipleLinkText: 'Multiple Dental Implants page.',
    allOn4Title: 'All-on-4 Dental Implants in Istanbul',
    allOn4P:
      'For patients who have lost most or all of their teeth, All-on-4 is an excellent solution. Four implants are placed in the jaw to support a full arch of fixed teeth. It reduces the need for bone grafting and allows for faster recovery.',
    allOn4LinkLead: 'If you want to learn more about full arch restoration with 4 implants, visit our ',
    allOn4LinkText: 'All-on-4 Dental Implants page.',
    allOn6Title: 'All-on-6 Dental Implants in Istanbul',
    allOn6P:
      'All-on-6 is similar to All-on-4 but uses six implants for extra support. It provides more strength and durability, especially for patients who want the closest experience to natural teeth. This option is ideal for long-term stability and higher chewing comfort.',
    allOn6LinkLead: 'If you prefer maximum stability for full-arch restoration, you can visit our ',
    allOn6LinkText: 'All-on-6 Dental Implants page for more information.',
  },
  tr: {
    whyChooseHeading: 'Neden İstanbul’da Diş İmplantı Yaptırmalısınız?',
    whyChooseIntroLead:
      'İstanbul, dünya standartlarında sağlık altyapısı, yüksek nitelikli cerrahları ve ',
    whyChooseIntroLink: 'uygun fiyatları',
    whyChooseIntroTail:
      ' sayesinde diş implantı tedavisinde küresel bir lider haline gelmiştir. Hastaların Master Smile Studio Türkiye’yi tercih etmelerinin başlıca nedenleri:',
    reason1Title: 'Uzman Diş İmplantı Cerrahları',
    reason1P1:
      'Master Smile Studio’da tüm hekimlerimiz alanında üst düzey eğitim almış uzmanlar olup kliniğimizin kurucu ortaklarıdır. Hekimlerimizin her biri Türkiye’nin en prestijli üniversitelerinden mezun olmuş, güçlü bir akademik altyapı ve derin klinik uzmanlık kazanmıştır.',
    reason1P2:
      'Diş implantları, tam çene restorasyonları, kemik greftleme ve karmaşık cerrahiler dahil tüm operasyonlar asistanlar veya stajyerler tarafından değil, doğrudan deneyimli cerrahi ekibimiz tarafından bizzat gerçekleştirilir. Bu sayede her hastamız güvenilir uzmanlarımızdan en yüksek kalitede tedavi alır.',
    reason1P3:
      'Marka kalitesi ve hasta güvenliğine odaklanan Master Smile Studio, ileri ve zorlu dental vakalardaki tecrübesiyle tanınmaktadır. Uzman cerrahlarımız, ihtiyaçlarınıza özel uzun ömürlü ve doğal görünümlü implant sonuçları sunmak için modern teknikler ve hassas dijital planlama kullanır.',
    reason2Title: 'İstanbul’da Diş İmplantı Maliyeti – Master Smile Studio',
    reason2P:
      'Birçok ülkeyle karşılaştırıldığında, İstanbul’da diş implantı maliyetleri önemli ölçüde daha düşüktür; bu da bütçenizi sarsmadan birinci sınıf lüks tedavi almanızı sağlar.',
    viewAllPackagesBtn: 'Tüm Paketleri İncele →',
    reason3Title: 'İleri Teknoloji ve Dijital Planlama',
    reason3P:
      'İmplantolojide en son dijital teknolojileri kullanarak daha hızlı iyileşme süreleri ve milimetrik hassasiyette sonuçlar elde ediyoruz. Master Smile Studio kliniğimiz, tedavinizi mümkün olduğunca konforlu ve etkili kılmak için son teknoloji 3D tomografi ve dijital tarayıcılarla donatılmıştır.',
    reason4Title: 'Master Smile Studio İstanbul’da Öncesi & Sonrası Sonuçlar',
    reason4P:
      'İstanbul’da diş implantları sadece işlevsel değil; aynı zamanda doğal dişlerinizle kusursuz bir uyum yakalayacak şekilde estetik olarak tasarlanır. Uzman ekibimiz yeni gülüşünüzün hem son derece doğal hem de büyüleyici görünmesini sağlar.',
    reason5Title: 'Seyahat ve Tedavi Bir Arada',
    reason5PText:
      'İstanbul kültür, tarih ve modern konforun kusursuz bir karışımını sunan büyüleyici bir şehirdir. En üst düzey dental tedaviyi alırken aynı zamanda unutulmaz bir tatil deneyimi yaşayabilirsiniz. ',
    reason5PLink: 'Detaylı bilgi için bugün bizimle iletişime geçin!',
    typesHeading: 'İstanbul’da Uygulanan Diş İmplantı Türleri (Tek, Çoklu, All-on-4, All-on-6)',
    typesIntro:
      'Diş implantları kaç dişinizin eksik olduğuna ve çene kemiğinizin durumuna göre farklı türlerde uygulanır. Master Smile Studio’da ağız cerrahisi uzmanlarımız ihtiyaçlarınıza en uygun seçeneği belirlemenize yardımcı olur:',
    singleTitle: 'İstanbul’da Tek Diş İmplantı',
    singleP:
      'Tek bir eksik dişin yerine uygulanır. Bir titanyum vida, bir abutment ve bir kron içerir. Sağlıklı bir çene kemiğine ve yalnızca bir diş boşluğuna sahipseniz bu seçenek idealdir.',
    singleLinkLead: 'Tek bir eksik dişi yenilemek hakkında daha fazla bilgi edinmek için ',
    singleLinkText: 'Tek Diş İmplant rehberimizi inceleyebilirsiniz.',
    multipleTitle: 'İstanbul’da Çoklu Diş İmplantı',
    multipleP:
      'Farklı bölgelerde birden fazla dişiniz eksikse, çoklu implant uygulanabilir. Her eksik diş tek tek bir implantla değiştirilebilir veya iki ya da daha fazla implant tarafından desteklenen bir köprü yerleştirilebilir.',
    multipleLinkLead: 'Birden fazla eksik dişi tamamlamakla ilgileniyorsanız, detaylı ',
    multipleLinkText: 'Çoklu Diş İmplantı sayfamızı keşfedebilirsiniz.',
    allOn4Title: 'İstanbul’da All-on-4 Diş İmplantı',
    allOn4P:
      'Dişlerinin çoğunu veya tamamını kaybetmiş hastalar için All-on-4 mükemmel bir çözümdür. Dört implant yerleştirilerek tam bir sabit diş arkı desteklenir; kemik grefti ihtiyacını azaltır.',
    allOn4LinkLead: '4 implantla tam çene restorasyonu hakkında daha fazla bilgi için ',
    allOn4LinkText: 'All-on-4 Diş İmplantı sayfamızı ziyaret edin.',
    allOn6Title: 'İstanbul’da All-on-6 Diş İmplantı',
    allOn6P:
      'All-on-6, All-on-4’e benzer ancak ekstra destek için altı implant kullanır. Doğal diş deneyimine en yakın dayanıklılığı ve en yüksek çiğneme konforunu sunar.',
    allOn6LinkLead: 'Maksimum stabiliteyi tercih ediyorsanız, daha fazla bilgi için ',
    allOn6LinkText: 'All-on-6 Diş İmplantı sayfamızı ziyaret edebilirsiniz.',
  },
  pl: {
    whyChooseHeading: 'Dlaczego warto wybrać implanty zębowe w Stambule?',
    whyChooseIntroLead:
      'Stambuł stał się wiodącym kierunkiem turystyki stomatologicznej na świecie dzięki doskonałemu systemowi opieki medycznej, wybitnym chirurgom oraz ',
    whyChooseIntroLink: 'przystępnym cenom.',
    whyChooseIntroTail: ' Oto dlaczego warto wybrać implanty zębowe w Stambule:',
    reason1Title: 'Doświadczeni chirurdzy implantolodzy',
    reason1P1:
      'W Master Smile Studio wszyscy nasi stomatolodzy to nie tylko wysoce wykwalifikowani specjaliści, ale także współzałożyciele kliniki. Każdy lekarz ukończył najbardziej prestiżowe uniwersytety w Turcji, co zapewnia solidne zaplecze akademickie i głębokie doświadczenie kliniczne.',
    reason1P2:
      'Wszystkie zabiegi chirurgiczne — w tym implanty zębowe, rekonstrukcje pełnołukowe, przeszczepy kości i skomplikowane operacje stomatologiczne — są wykonywane bezpośrednio przez nasz doświadczony zespół chirurgów, a nie przez asystentów czy lekarzy rezydentów. Gwarantuje to najwyższą jakość leczenia.',
    reason1P3:
      'Kładąc nacisk na jakość marek i bezpieczeństwo pacjentów, Master Smile Studio słynie z doświadczenia w leczeniu zaawansowanych i wymagających przypadków. Nasi chirurdzy stosują nowoczesne techniki i precyzyjne planowanie cyfrowe, aby zapewnić trwałe rezultaty.',
    reason2Title: 'Koszt implantów zębowych w Stambule – Master Smile Studio',
    reason2P:
      'W porównaniu z wieloma innymi krajami, koszty implantów zębowych w Stambule są znacznie niższe, co pozwala na otrzymanie opieki medycznej klasy premium bez nadwyrężania budżetu.',
    viewAllPackagesBtn: 'Zobacz wszystkie pakiety →',
    reason3Title: 'Zaawansowana technologia i planowanie 3D',
    reason3P:
      'Stosujemy najnowocześniejszą technologię w implantologii, zapewniając szybszy czas gojenia i milimetrową precyzję. Klinika Master Smile Studio w Stambule jest wyposażona w tomografię 3D CBCT i skanery cyfrowe.',
    reason4Title: 'Wyniki przed i po w Master Smile Studio w Stambule',
    reason4P:
      'Implanty zębowe w Stambule to nie tylko funkcjonalność żucia; są one projektowane tak, aby idealnie współgrały z Twoimi naturalnymi zębami i rysami twarzy.',
    reason5Title: 'Podróż i leczenie w jednym',
    reason5PText:
      'Stambuł to tętniąca życiem metropolia oferująca idealne połączenie kultury, historii i nowoczesnego komfortu. Możesz cieszyć się niezapomnianymi wakacjami podczas leczenia stomatologicznego na najwyższym poziomie. ',
    reason5PLink: 'Skontaktuj się z nami już dziś!',
    typesHeading: 'Rodzaje implantów zębowych w Stambule (pojedyncze, wielokrotne, All-on-4, All-on-6)',
    typesIntro:
      'Implanty zębowe występują w różnych wariantach w zależności od liczby brakujących zębów i stanu kości szczęki. W Master Smile Studio nasi chirurdzy pomagają wybrać optymalne rozwiązanie:',
    singleTitle: 'Pojedynczy implant zębowy w Stambule',
    singleP:
      'Zastępuje jeden brakujący ząb. Składa się ze śruby tytanowej, łącznika i korony. Idealny przy pojedynczej luce i zdrowej kości.',
    singleLinkLead: 'Aby dowiedzieć się więcej o odbudowie pojedynczego zęba, przeczytaj ',
    singleLinkText: 'nasz przewodnik po pojedynczych implantach.',
    multipleTitle: 'Wielokrotne implanty zębowe w Stambule',
    multipleP:
      'Przy brakach kilku zębów można wprowadzić pojedyncze implanty lub osadzić most na 2 lub więcej implantach, zapewniając pełną siłę żucia.',
    multipleLinkLead: 'Jeśli interesuje Cię uzupełnienie kilku zębów, odwiedź naszą ',
    multipleLinkText: 'stronę o implantach wielokrotnych.',
    allOn4Title: 'Implanty All-on-4 w Stambule',
    allOn4P:
      'Odbudowa całego łuku zębowego na 4 implantach. Cztery implanty utrzymują pełny łuk stałych zębów, redukując potrzebę przeszczepu kości.',
    allOn4LinkLead: 'Więcej informacji o odbudowie pełnego łuku na 4 implantach znajdziesz na ',
    allOn4LinkText: 'stronie implantów All-on-4.',
    allOn6Title: 'Implanty All-on-6 w Stambule',
    allOn6P:
      'All-on-6 wykorzystuje 6 implantów dla dodatkowego podparcia, maksymalnej stabilności i najwyższego komfortu żucia.',
    allOn6LinkLead: 'Aby uzyskać maksymalną stabilność i komfort, odwiedź naszą ',
    allOn6LinkText: 'stronę implantów All-on-6.',
  },
  de: {
    whyChooseHeading: 'Warum Zahnimplantate in Istanbul wählen?',
    whyChooseIntroLead:
      'Istanbul ist dank seines erstklassigen Gesundheitssystems, erfahrener Chirurgen und ',
    whyChooseIntroLink: 'attraktiver Preise',
    whyChooseIntroTail: ' ein weltweites Spitzenziel für Zahnimplantate:',
    reason1Title: 'Erfahrene Mund-Kiefer-Gesichtschirurgen',
    reason1P1:
      'Bei Master Smile Studio sind alle unsere Zahnärzte nicht nur hochqualifizierte Spezialisten, sondern auch die Gründer der Klinik. Jeder Arzt verfügt über eine renommierte universitäre Ausbildung und tiefgreifende chirurgische Erfahrung.',
    reason1P2:
      'Alle Eingriffe — einschließlich Zahnimplantate, Ganzkieferrestaurationen und Knochenaufbau — werden direkt von unserem erfahrenen Chirurgenteam durchgeführt, niemals von Assistenten.',
    reason1P3:
      'Mit höchstem Fokus auf Markenqualität und Patientensicherheit setzt Master Smile Studio moderne 3D-Planung für langlebige und natürliche Ergebnisse ein.',
    reason2Title: 'Kosten für Zahnimplantate in Istanbul – Master Smile Studio',
    reason2P:
      'Im Vergleich zu Deutschland, Österreich und der Schweiz sind die Kosten für Zahnimplantate in Istanbul deutlich günstiger bei identischer Premium-Qualität.',
    viewAllPackagesBtn: 'Alle Pakete ansehen →',
    reason3Title: 'Modernste Technologie & 3D-Präzision',
    reason3P:
      'Wir setzen modernste DVT-3D-Diagnostik und digitale Scanner ein, um Behandlungszeiten zu verkürzen und maximale Behandlungspräzision zu gewährleisten.',
    reason4Title: 'Vorher-Nachher-Ergebnisse bei Master Smile Studio',
    reason4P:
      'Zahnimplantate in Istanbul verbinden perfekte Kaufunktion mit höchster Ästhetik für ein strahlendes, natürliches Lächeln.',
    reason5Title: 'Reise und Behandlung kombiniert',
    reason5PText:
      'Genießen Sie einen erholsamen Aufenthalt in der Weltmetropole Istanbul, während Sie Ihre Zähne behandeln lassen. ',
    reason5PLink: 'Kontaktieren Sie uns noch heute!',
    typesHeading: 'Arten von Zahnimplantaten (Einzelzahn, Mehrere, All-on-4, All-on-6) in Istanbul',
    typesIntro:
      'Zahnimplantate werden individuell nach Anzahl der fehlenden Zähne und Knochenbeschaffenheit ausgewählt:',
    singleTitle: 'Einzelzahnimplantat in Istanbul',
    singleP:
      'Ersetzt einen einzelnen fehlenden Zahn durch Titanschraube, Abutment und Zirkonkrone, ohne Nachbarzähne zu beschädigen.',
    singleLinkLead: 'Weitere Details finden Sie in unserem ',
    singleLinkText: 'Ratgeber für Einzelzahnimplantate.',
    multipleTitle: 'Mehrere Zahnimplantate in Istanbul',
    multipleP:
      'Bei mehreren Zahnlücken können einzelne Implantate oder implantatgetragene Brücken eingesetzt werden.',
    multipleLinkLead: 'Erfahren Sie mehr auf unserer Seite für ',
    multipleLinkText: 'Mehrfachimplantate.',
    allOn4Title: 'All-on-4 Zahnimplantate in Istanbul',
    allOn4P:
      'Feste Zähne an einem Tag auf 4 Implantaten für den gesamten Kiefer bei minimalem Knochenangebot.',
    allOn4LinkLead: 'Besuchen Sie unsere Spezialseite für ',
    allOn4LinkText: 'All-on-4 Zahnimplantate.',
    allOn6Title: 'All-on-6 Zahnimplantate in Istanbul',
    allOn6P:
      'Maximale Stabilität und natürliche Kaukraft auf 6 Implantaten für den zahnlosen Kiefer.',
    allOn6LinkLead: 'Weitere Informationen finden Sie auf unserer ',
    allOn6LinkText: 'All-on-6 Zahnimplantate Seite.',
  },
  pt: {
    whyChooseHeading: 'Por Que Escolher Implantes Dentários em Istambul?',
    whyChooseIntroLead:
      'Istambul tornou-se um dos principais destinos para implantes dentários devido ao seu sistema de saúde de excelência e ',
    whyChooseIntroLink: 'preços acessíveis.',
    whyChooseIntroTail: ' Veja por que escolher implantes em Istambul é a melhor opção:',
    reason1Title: 'Cirurgiões Especialistas em Implantes Dentários',
    reason1P1:
      'Na Master Smile Studio, todos os nossos cirurgiões são sócios-fundadores da clínica com formação nas universidades mais renomadas da Turquia.',
    reason1P2:
      'Todos os procedimentos cirúrgicos são realizados diretamente pela nossa equipe de especialistas seniores, sem assistentes ou estagiários.',
    reason1P3:
      'Com foco rigoroso em marcas premium e segurança, proporcionamos resultados estéticos duradouros e altamente naturais.',
    reason2Title: 'Custos de Implantes Dentários em Istambul – Master Smile Studio',
    reason2P:
      'Os custos em Istambul são consideravelmente mais acessíveis, permitindo que você receba um tratamento de alto padrão com grande economia.',
    viewAllPackagesBtn: 'Ver Todos os Pacotes →',
    reason3Title: 'Tecnologia Avançada e Precisão Digital 3D',
    reason3P:
      'Utilizamos tomografia 3D e scanners intraorais para planejamentos precisos e recuperações rápidas.',
    reason4Title: 'Resultados Antes e Depois na Master Smile Studio',
    reason4P:
      'Nossos implantes são projetados para harmonizar perfeitamente com os seus dentes naturais e contornos faciais.',
    reason5Title: 'Viagem e Tratamento em uma Só Experiência',
    reason5PText:
      'Desfrute de uma estadia inesquecível em Istambul enquanto renova completamente o seu sorriso. ',
    reason5PLink: 'Fale conosco hoje mesmo!',
    typesHeading: 'Tipos de Implantes Dentários em Istambul (Unitário, Múltiplos, All-on-4, All-on-6)',
    typesIntro:
      'Oferecemos diversas modalidades de implantes conforme as necessidades da sua arcada dentária:',
    singleTitle: 'Implante Dentário Unitário em Istambul',
    singleP:
      'Substitui um único dente ausente com parafuso de titânio, pilar e coroa estética.',
    singleLinkLead: 'Saiba mais no nosso ',
    singleLinkText: 'guia de implante unitário.',
    multipleTitle: 'Implantes Dentários Múltiplos em Istambul',
    multipleP:
      'Substituição de vários dentes por implantes individuais ou pontes fixas sobre implantes.',
    multipleLinkLead: 'Confira detalhes na nossa página de ',
    multipleLinkText: 'implantes múltiplos.',
    allOn4Title: 'Implantes All-on-4 em Istambul',
    allOn4P:
      'Reabilitação de arco total com 4 implantes estrategicamente posicionados.',
    allOn4LinkLead: 'Visite nossa página de ',
    allOn4LinkText: 'implantes All-on-4.',
    allOn6Title: 'Implantes All-on-6 em Istambul',
    allOn6P:
      'Excelente distribuição de carga mastigatória e estabilidade reforçada com 6 implantes.',
    allOn6LinkLead: 'Mais informações na nossa página de ',
    allOn6LinkText: 'implantes All-on-6.',
  },
  es: {
    whyChooseHeading: '¿Por Qué Elegir Implantes Dentales en Estambul?',
    whyChooseIntroLead:
      'Estambul es un destino líder mundial en implantes dentales gracias a su avanzada tecnología médica y ',
    whyChooseIntroLink: 'precios accesibles.',
    whyChooseIntroTail: ' Razones principales para elegir Master Smile Studio en Estambul:',
    reason1Title: 'Cirujanos Expertos en Implantes Dentales',
    reason1P1:
      'En Master Smile Studio, todos nuestros doctores son cirujanos experimentados y socios fundadores de la clínica con formación académica de élite.',
    reason1P2:
      'Todas las cirugías son realizadas directamente por nuestro equipo de especialistas sénior, garantizando la máxima seguridad y precisión.',
    reason1P3:
      'Combinamos marcas de implantes de estándar suizo y alemán con tecnología digital 3D para resultados estéticos de por vida.',
    reason2Title: 'Costo de Implantes Dentales en Estambul – Master Smile Studio',
    reason2P:
      'Los precios en Estambul son notablemente más económicos, ofreciéndole atención médica prémium a una fracción del costo internacional.',
    viewAllPackagesBtn: 'Ver Todos los Paquetes →',
    reason3Title: 'Tecnología Avanzada y Planificación Digital 3D',
    reason3P:
      'Contamos con tomografía 3D CBCT y escáneres digitales para una colocación guiada y una rápida recuperación.',
    reason4Title: 'Resultados Antes y Después en Master Smile Studio',
    reason4P:
      'Nuestros implantes están diseñados para brindar una masticación potente y una estética totalmente natural.',
    reason5Title: 'Turismo y Tratamiento Dental en un Mismo Viaje',
    reason5PText:
      'Disfrute de los atractivos históricos de Estambul mientras transforma su sonrisa con total comodidad. ',
    reason5PLink: '¡Contáctenos hoy mismo!',
    typesHeading: 'Tipos de Implantes Dentales en Estambul (Unitario, Múltiples, All-on-4, All-on-6)',
    typesIntro:
      'Disponemos de diversas opciones según el número de piezas a reponer y la calidad ósea:',
    singleTitle: 'Implante Dental Unitario en Estambul',
    singleP:
      'Sustituye un solo diente mediante un tornillo de titanio, pilar y corona estética sin tallar piezas sanas.',
    singleLinkLead: 'Consulte nuestra ',
    singleLinkText: 'guía de implante dental unitario.',
    multipleTitle: 'Implantes Dentales Múltiples en Estambul',
    multipleP:
      'Rehabilitación de varios dientes contiguos o separados mediante implantes independientes o puentes fijos.',
    multipleLinkLead: 'Explore nuestra sección de ',
    multipleLinkText: 'implantes múltiples.',
    allOn4Title: 'Implantes All-on-4 en Estambul',
    allOn4P:
      'Arcada fija completa sostenida por 4 implantes, ideal para pacientes con pérdida ósea.',
    allOn4LinkLead: 'Más información en nuestra página de ',
    allOn4LinkText: 'implantes All-on-4.',
    allOn6Title: 'Implantes All-on-6 en Estambul',
    allOn6P:
      'Máxima firmeza y confort de masticación apoyado sobre 6 implantes de titanio.',
    allOn6LinkLead: 'Descubra todos los detalles en nuestra página de ',
    allOn6LinkText: 'implantes All-on-6.',
  },
  ru: {
    whyChooseHeading: 'Почему стоит выбрать имплантацию зубов в Стамбуле?',
    whyChooseIntroLead:
      'Стамбул стал мировым центром стоматологического туризма благодаря передовой медицине и ',
    whyChooseIntroLink: 'доступным ценам.',
    whyChooseIntroTail: ' Главные преимущества выбора Master Smile Studio в Стамбуле:',
    reason1Title: 'Опытные хирурги-имплантологи',
    reason1P1:
      'В Master Smile Studio все врачи являются не только признанными специалистами, но и основателями клиники с академическим образованием в ведущих университетах Турции.',
    reason1P2:
      'Все операции проводятся лично нашими ведущими челюстно-лицевыми хирургами, без участия ассистентов или стажеров.',
    reason1P3:
      'Мы используем цифровое 3D-планирование и проверенные мировые бренды имплантатов для достижения идеального и долговечного результата.',
    reason2Title: 'Стоимость имплантации зубов в Стамбуле – Master Smile Studio',
    reason2P:
      'Цены на имплантацию в Стамбуле значительно выгоднее, что позволяет получить премиальное лечение с существенной экономией.',
    viewAllPackagesBtn: 'Посмотреть все пакеты →',
    reason3Title: 'Передовые технологии и 3D-точность',
    reason3P:
      'Мы используем 3D-томографию CBCT и цифровые интраоральные сканеры для быстрого заживления и идеальной точности.',
    reason4Title: 'Результаты До и После в Master Smile Studio',
    reason4P:
      'Имплантаты в Стамбуле дарят не только уверенное жевание, но и великолепную естественную улыбку.',
    reason5Title: 'Путешествие и лечение в одной поездке',
    reason5PText:
      'Совместите первоклассное лечение с незабываемым отдыхом в великолепном Стамбуле. ',
    reason5PLink: 'Свяжитесь с нами сегодня!',
    typesHeading: 'Виды зубных имплантатов в Стамбуле (Одиночные, Множественные, All-on-4, All-on-6)',
    typesIntro:
      'Мы подбираем оптимальную методику имплантации в зависимости от клинической картины и объема костной ткани:',
    singleTitle: 'Одиночный зубной имплантат в Стамбуле',
    singleP:
      'Заменяет один отсутствующий зуб титановым винтом, абатментом и коронкой без обтачивания соседних зубов.',
    singleLinkLead: 'Узнайте больше в нашем ',
    singleLinkText: 'руководстве по одиночным имплантатам.',
    multipleTitle: 'Множественные имплантаты в Стамбуле',
    multipleP:
      'Восстановление нескольких зубов отдельными имплантатами или мостовидным протезом на имплантатах.',
    multipleLinkLead: 'Подробнее на нашей странице ',
    multipleLinkText: 'множественной имплантации.',
    allOn4Title: 'Имплантация All-on-4 в Стамбуле',
    allOn4P:
      'Несъемный протез всей челюсти на 4 имплантатах при минимальном объеме костной ткани.',
    allOn4LinkLead: 'Узнайте больше на странице ',
    allOn4LinkText: 'имплантации All-on-4.',
    allOn6Title: 'Имплантация All-on-6 в Стамбуле',
    allOn6P:
      'Максимальная прочность и естественное распределение нагрузки на 6 титановых имплантатах.',
    allOn6LinkLead: 'Подробности на странице ',
    allOn6LinkText: 'имплантации All-on-6.',
  },
};

export default function DentalImplantsDetailView() {
  const locale = useLocale();
  const t = useTranslations('services');
  const d = DETAIL_I18N[locale] || DETAIL_I18N.en;

  return (
    <div className={styles.pageWrapper}>
      {/* 1. FIND THE RIGHT TREATMENT FOR YOU ACCORDION (DIRECTLY UNDER HERO) */}
      <TreatmentRightTreatmentAccordion />

      {/* 2. INTRO & WHAT ARE DENTAL IMPLANTS */}
      <section aria-labelledby="intro-implants-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h2 id="intro-implants-heading" className={styles.mainHeading}>
            {t('dentalImplantsIntro.title')}
          </h2>

          <h3 className={styles.subHeading}>
            {t('dentalImplantsIntro.whatIsTitle')}
          </h3>

          <p className={styles.textP}>
            {t('dentalImplantsIntro.whatIsP1')}
          </p>

          <ul className={styles.bulletList}>
            <li>
              <strong>{t('dentalImplantsIntro.part1Label')}</strong> – {t('dentalImplantsIntro.part1Desc')}
            </li>
            <li>
              <strong>{t('dentalImplantsIntro.part2Label')}</strong> – {t('dentalImplantsIntro.part2Desc')}
            </li>
            <li>
              <strong>{t('dentalImplantsIntro.part3Label')}</strong> – {t('dentalImplantsIntro.part3Desc')}
            </li>
          </ul>

          <p className={styles.textP}>
            {t('dentalImplantsIntro.healingP')}
          </p>

          <p className={styles.textP}>
            {t('dentalImplantsIntro.solutionP')}
          </p>

          {/* Fullwidth Horizontal Video Embed (YouTube R081L98DAls) */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/R081L98DAls?t=21"
              title="Dental Implants in Istanbul Procedure Video"
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

      {/* 3. WHY CHOOSE DENTAL IMPLANTS IN ISTANBUL */}
      <section aria-labelledby="why-choose-heading" className={styles.whyChooseSection}>
        <div className={styles.container}>
          {/* Decorative Divider Wave */}
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
            <Link href="/treatments/dental-implants" className={styles.linkGold}>
              {d.whyChooseIntroLink}
            </Link>
            {d.whyChooseIntroTail}
          </p>

          {/* Full-width Video (YouTube 1wWyW2V_sgk) */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/1wWyW2V_sgk"
              title="Why Choose Dental Implants in Istanbul Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 1. Expert Dental Implant Surgeons */}
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

          {/* 2. Dental Implant Cost in Istanbul */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>2.</span> {d.reason2Title}
          </h3>
          <p className={styles.textP}>{d.reason2P}</p>

          {/* INSERT: PACKAGES SLIDER */}
          <div className="my-8">
            <TreatmentPackagesSlider />
          </div>

          <div className={styles.btnWrap}>
            <Link href="/treatments" className={styles.btnPrimary}>
              {d.viewAllPackagesBtn}
            </Link>
          </div>

          {/* 3. Advanced Technology */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>3.</span> {d.reason3Title}
          </h3>
          <p className={styles.textP}>{d.reason3P}</p>

          {/* Full-width Video (YouTube K4Xpx7JMyr8) */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/K4Xpx7JMyr8"
              title="Advanced Dental Implant Technology Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 4. Before - After Dental Implant at Master Smile Studio */}
          <h3 className={styles.sectionSubTitle}>
            <span className={styles.reasonNumber}>4.</span> {d.reason4Title}
          </h3>
          <p className={styles.textP}>{d.reason4P}</p>

          {/* INSERT: BEFORE - AFTER SLIDER */}
          <div className="my-8">
            <TreatmentBeforeAfterSliderSection />
          </div>

          {/* 5. Travel and Treatment in One */}
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

      {/* 4. YOUR DENTAL JOURNEY MADE SIMPLE (4-Step Timeline / Accordion) */}
      <TreatmentJourneySimpleSection />

      {/* 5. TYPES OF DENTAL IMPLANTS (Single, Multiple, All-on-4, All-on-6) */}
      <section aria-labelledby="types-implants-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h2 id="types-implants-heading" className={styles.sectionTitle}>
            {d.typesHeading}
          </h2>

          <p className={styles.textP}>
            {d.typesIntro}
          </p>

          {/* Single Dental Implant */}
          <h3 className={styles.sectionSubTitle}>
            {d.singleTitle}
          </h3>
          <p className={styles.textP}>
            {d.singleP}
          </p>
          <p className={styles.textItalic}>
            {d.singleLinkLead}
            <Link href="/treatments/dental-implants" className={styles.linkGold}>
              {d.singleLinkText}
            </Link>
          </p>

          {/* Multiple Dental Implants */}
          <h3 className={styles.sectionSubTitle}>
            {d.multipleTitle}
          </h3>
          <p className={styles.textP}>
            {d.multipleP}
          </p>
          <p className={styles.textItalic}>
            {d.multipleLinkLead}
            <Link href="/treatments/dental-implants/full-mouth-implants" className={styles.linkGold}>
              {d.multipleLinkText}
            </Link>
          </p>

          {/* Full-width Video (YouTube smhwCD78Vbo) */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/smhwCD78Vbo"
              title="Types of Dental Implants in Istanbul Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* All-on-4 Dental Implant */}
          <h3 className={styles.sectionSubTitle}>
            {d.allOn4Title}
          </h3>
          <p className={styles.textP}>
            {d.allOn4P}
          </p>
          <p className={styles.textItalic}>
            {d.allOn4LinkLead}
            <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.linkGold}>
              {d.allOn4LinkText}
            </Link>
          </p>

          {/* All-on-6 Dental Implant */}
          <h3 className={styles.sectionSubTitle}>
            {d.allOn6Title}
          </h3>
          <p className={styles.textP}>
            {d.allOn6P}
          </p>
          <p className={styles.textItalic}>
            {d.allOn6LinkLead}
            <Link href="/treatments/dental-implants/all-on-6-implants" className={styles.linkGold}>
              {d.allOn6LinkText}
            </Link>
          </p>

          {/* Full-width Video (YouTube fJAx9CUxhk4) */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/fJAx9CUxhk4"
              title="All-on-6 Dental Implants in Istanbul Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* 6. OUR BEST SERVICES INCLUDED (White card on taupe background) */}
      <TreatmentServicesIncludedSection />

      {/* 7. REAL PATIENTS. REAL SMILES. (Patient Video Reels Carousel) */}
      <TreatmentPatientReelsSection />

      {/* 8. FROM FIRST VISIT TO FINAL SMILE (Before - After Slider) */}
      <TreatmentBeforeAfterSliderSection />

      {/* 9. DENTAL IMPLANT COSTS IN ISTANBUL & PACKAGE PROMO BANNER */}
      <TreatmentCostBreakdownAndPackageBannerSection />

      {/* 10. TREATMENT PACKAGES SLIDER */}
      <TreatmentPackagesSlider />

      {/* 11. REVIEWS SECTION (Google & Trustpilot Reviews) */}
      <TreatmentReviewsSection />

      {/* 12. PARALLAX CTA BANNER */}
      <TreatmentParallaxBanner />

      {/* 13. FREQUENTLY ASKED QUESTIONS (26 FAQs) */}
      <TreatmentFAQSection />

      {/* 14. INTERACTIVE 4-STEP QUOTE FORM */}
      <TreatmentInteractiveQuoteForm defaultTreatment="Implants" />
    </div>
  );
}
