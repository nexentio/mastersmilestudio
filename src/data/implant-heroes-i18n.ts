export interface TreatmentHeroItem {
  badge: string;
  title: string;
  subtitle: string;
  features?: string[];
  primaryBtnText?: string;
  secondaryBtnText?: string;
}

export interface DentalImplantsHeroData {
  tag: string;
  title: string;
  subtitle: string;
  features: [string, string, string];
  primaryBtnText: string;
  primaryBtnAria: string;
  secondaryBtnText: string;
  secondaryBtnAria: string;
  imageAlt: string;
}

export const DENTAL_IMPLANTS_HERO_I18N: Record<string, DentalImplantsHeroData> = {
  en: {
    tag: 'JCI & ISO CERTIFIED ORAL SURGERY CLINIC',
    title: 'Dental Implants in Antalya, Turkey',
    subtitle: 'Restore your smile with lifelong guarantees on Swiss & German premium implants, 3D CBCT digital precision, and expert oral surgeons in Antalya.',
    features: [
      'Lifetime Guarantee on Premium Brands',
      '3D CBCT Digital Precision Planning',
      'VIP 5-Star Hotel & Chauffeur Transfers',
    ],
    primaryBtnText: 'Free Online Consultation',
    primaryBtnAria: 'Contact Master Smile Studio for a free dental implant consultation and treatment plan',
    secondaryBtnText: 'View Packages & Details',
    secondaryBtnAria: 'Scroll down to explore dental implant packages and clinical details',
    imageAlt: 'Dental Implants and Zirconia Restorations in Antalya Turkey - Master Smile Studio',
  },
  tr: {
    tag: 'JCI & ISO SERTİFİKALI ÇENE CERRAHİSİ KLİNİĞİ',
    title: 'Antalya Diş İmplantı Tedavisi & Fiyatları',
    subtitle: 'Antalya’daki kliniğimizde ömür boyu garantili İsviçre ve Alman premium implant markaları, 3D tomografi ve kurucu uzman cerrahlarımızla eksiksiz bir gülüşe kavuşun.',
    features: [
      'Premium Markalarda Ömür Boyu Garanti',
      '3D CBCT Dijital Hassas Planlama',
      'VIP 5 Yıldızlı Otel & Özel Transfer',
    ],
    primaryBtnText: 'Ücretsiz Online Konsültasyon',
    primaryBtnAria: 'Ücretsiz diş implantı konsültasyonu ve tedavi planı almak için iletişime geçin',
    secondaryBtnText: 'Paketleri ve Detayları Gör',
    secondaryBtnAria: 'Diş implantı paketlerini ve klinik ayrıntılarını incelemek için aşağı kaydırın',
    imageAlt: 'Antalya Diş İmplantı ve Zirkonyum Tedavisi - Master Smile Studio Türkiye',
  },
  de: {
    tag: 'JCI & ISO ZERTIFIZIERTE KLINIK FÜR ORALCHIRURGIE',
    title: 'Zahnimplantate in Antalya, Türkei',
    subtitle: 'Stellen Sie Ihr Lächeln wieder her – mit lebenslanger Garantie auf Schweizer & deutsche Premium-Implantate, 3D-DVT-Präzision und erfahrenen Fachärzten in Antalya.',
    features: [
      'Lebenslange Garantie auf Premium-Marken',
      '3D CBCT Digitale Präzisionsplanung',
      'VIP 5-Sterne-Hotel & Chauffeur-Transfer inklusive',
    ],
    primaryBtnText: 'Kostenlose Online-Beratung',
    primaryBtnAria: 'Kontaktieren Sie Master Smile Studio für eine kostenlose Implantat-Beratung',
    secondaryBtnText: 'Pakete & Details ansehen',
    secondaryBtnAria: 'Nach unten scrollen, um Implantat-Pakete und Details zu entdecken',
    imageAlt: 'Zahnimplantate und Zahnkronen in Antalya Türkei - Master Smile Studio',
  },
  pl: {
    tag: 'CERTYFIKOWANA KLINIKA CHIRURGII STOMATOLOGICZNEJ JCI & ISO',
    title: 'Implanty zębowe w Antalyi, Turcja',
    subtitle: 'Odzyskaj piękny uśmiech dzięki dożywotniej gwarancji na szwajcarskie i niemieckie implanty premium, cyfrowej tomografii 3D CBCT i doświadczonym chirurgom w Antalyi.',
    features: [
      'Dożywotnia gwarancja na marki premium',
      'Cyfrowe planowanie 3D CBCT',
      'W cenie transfery VIP i 5-gwiazdkowy hotel',
    ],
    primaryBtnText: 'Darmowa konsultacja online',
    primaryBtnAria: 'Skontaktuj się z Master Smile Studio w celu bezpłatnej konsultacji implantologicznej',
    secondaryBtnText: 'Zobacz pakiety i szczegóły',
    secondaryBtnAria: 'Przewiń w dół, aby sprawdzić pakiety implantów zębowych i szczegóły medyczne',
    imageAlt: 'Implanty zębowe i korony cyrkonowe w Antalyi Turcja - Master Smile Studio',
  },
  pt: {
    tag: 'CLÍNICA DE CIRURGIA BUCOMAXILOFACIAL CERTIFICADA JCI & ISO',
    title: 'Implantes Dentários em Antalya, Turquia',
    subtitle: 'Recupere o seu sorriso com garantia vitalícia em marcas premium suíças e alemãs, planejamento digital 3D CBCT e cirurgiões especialistas em Antalya.',
    features: [
      'Garantia vitalícia em marcas suíças e alemãs',
      'Planejamento digital de precisão com Tomografia 3D CBCT',
      'Hotel 5 estrelas e transfer VIP com motorista privativo',
    ],
    primaryBtnText: 'Consulta Online Gratuita',
    primaryBtnAria: 'Entre em contato com a Master Smile Studio para consulta gratuita de implantes',
    secondaryBtnText: 'Ver Pacotes e Detalhes',
    secondaryBtnAria: 'Role para baixo para explorar pacotes de implantes dentários e detalhes clínicos',
    imageAlt: 'Implantes Dentários e Reabilitação Oral em Antalya Turquia - Master Smile Studio',
  },
  es: {
    tag: 'CLÍNICA DE CIRUGÍA ORAL Y MAXILOFACIAL CERTIFICADA JCI E ISO',
    title: 'Implantes Dentales en Antalya, Turquía',
    subtitle: 'Recupere su sonrisa con garantía de por vida en implantes premium suizos y alemanes, planificación 3D CBCT de alta precisión y cirujanos expertos en Antalya.',
    features: [
      'Garantía de por vida en marcas premium',
      'Planificación digital 3D CBCT de alta precisión',
      'Hotel 5 estrellas y traslados VIP con chófer incluidos',
    ],
    primaryBtnText: 'Consulta Online Gratuita',
    primaryBtnAria: 'Póngase en contacto con Master Smile Studio para una valoración gratuita de implantes dentales',
    secondaryBtnText: 'Ver Paquetes y Detalles',
    secondaryBtnAria: 'Desplácese hacia abajo para ver los paquetes de implantes dentales y detalles clínicos',
    imageAlt: 'Implantes Dentales y Coronas de Zirconio en Antalya Turquía - Master Smile Studio',
  },
  ru: {
    tag: 'СЕРТИФИЦИРОВАННАЯ КЛИНИКА ЧЕЛЮСТНО-ЛИЦЕВОЙ ХИРУРГИИ JCI & ISO',
    title: 'Зубные импланты в Анталье, Турция',
    subtitle: 'Восстановите улыбку с пожизненной гарантией на швейцарские и немецкие импланты премиум-класса, цифровой 3D CBCT точностью и ведущими хирургами в Анталье.',
    features: [
      'Пожизненная гарантия на бренды премиум-класса',
      'Цифровое 3D CBCT планирование высокой точности',
      'Включены VIP-трансфер с личным водителем и 5-звездочный отель',
    ],
    primaryBtnText: 'Бесплатная онлайн-консультация',
    primaryBtnAria: 'Свяжитесь с Master Smile Studio для бесплатной онлайн-консультации по имплантации зубов',
    secondaryBtnText: 'Посмотреть пакеты и цены',
    secondaryBtnAria: 'Прокрутите вниз, чтобы изучить пакеты имплантации зубов и клинические детали',
    imageAlt: 'Имплантация зубов и циркониевые коронки в Анталье Турция - Master Smile Studio',
  },
};

// 1. FULL MOUTH IMPLANTS (TÜM AĞIZ İMPLANT)
export const FULL_MOUTH_IMPLANTS_HERO_I18N: Record<string, TreatmentHeroItem> = {
  en: {
    badge: 'FULL MOUTH DENTAL IMPLANTS',
    title: 'Full Mouth Dental Implants in Antalya, Turkey',
    subtitle: 'Comprehensive full-arch rehabilitation restoring upper and lower jaws with monolithic German Zirconia bridges, 3D CBCT guided precision, and VIP hospitality in Antalya.',
    features: ['Lifetime Warranty on Titanium Fixtures', 'Same-Day Fixed Temporary Prosthesis', '5-Star Beachfront Hotel & Private Transfers'],
    primaryBtnText: 'Book Free Consultation',
    secondaryBtnText: 'Explore Treatment Details',
  },
  tr: {
    badge: 'TÜM AĞIZ DİŞ İMPLANTI',
    title: 'Antalya Tüm Ağız Diş İmplantı Tedavisi & Fiyatları',
    subtitle: 'Alt ve üst çenede tam dişsizlik vakalarında 3D tomografi kılavuzluğunda monolitik Alman Zirkonyum köprüler, ömür boyu garanti ve 5 yıldızlı VIP konforla kalıcı çiğneme konforu.',
    features: ['Titanyum İmplant Gövdelerinde Ömür Boyu Garanti', '24 Saatte Sabit Geçici Dişler', '5 Yıldızlı Otel Konaklaması & Özel VIP Transfer'],
    primaryBtnText: 'Ücretsiz Muayene Randevusu',
    secondaryBtnText: 'Tedavi Detaylarını İncele',
  },
  de: {
    badge: 'FESTE ZÄHNE GANZER KIEFER',
    title: 'Full-Mouth-Zahnimplantate in Antalya, Türkei',
    subtitle: 'Vollständige Wiederherstellung von Ober- und Unterkiefer mit hochfesten Zirkonbrücken, 3D-DVT-geführter Chirurgie und erstklassiger VIP-Betreuung in Antalya.',
    features: ['Lebenslange Garantie auf Premium-Titanimplantate', 'Festsitzende Zähne am selben Tag', '5-Sterne-Hotel & Chauffeur-Transfer inklusive'],
    primaryBtnText: 'Kostenlose Beratung Buchen',
    secondaryBtnText: 'Behandlungsdetails Ansehen',
  },
  pl: {
    badge: 'IMPLANTY CAŁEJ SZCZĘKI (FULL MOUTH)',
    title: 'Implanty Całej Szczęki w Antalyi w Turcji',
    subtitle: 'Kompleksowa odbudowa obu łuków zębowych na implantach z mostami z monolitycznego niemieckiego cyrkonu, cyfrową nawigacją 3D CBCT i luksusową obsługą VIP w Antalyi.',
    features: ['Dożywotnia gwarancja na śruby tytanowe', 'Stałe zęby tymczasowe w 24 godziny', 'Hotel 5★ i prywatne transfery VIP w pakiecie'],
    primaryBtnText: 'Zarezerwuj Bezpłatną Konsultację',
    secondaryBtnText: 'Zobacz Szczegóły Zabiegu',
  },
  pt: {
    badge: 'IMPLANTES DE BOCA TODA',
    title: 'Implantes de Boca Toda em Antália, Turquia',
    subtitle: 'Reabilitação oral completa dos maxilares com pontes monolíticas de zircónia alemã, planeamento cirúrgico digital 3D e acomodação VIP 5 estrelas em Antália.',
    features: ['Garantia Vitalícia nos Implantes de Titânio', 'Prótese Fixa Provisória em 24 Horas', 'Hotel 5 Estrelas & Transfers Privados VIP'],
    primaryBtnText: 'Agendar Consulta Gratuita',
    secondaryBtnText: 'Ver Detalhes do Tratamento',
  },
  es: {
    badge: 'IMPLANTES DE BOCA COMPLETA',
    title: 'Implantes de Boca Completa en Antalya, Turquía',
    subtitle: 'Rehabilitación integral de arcada superior e inferior con puentes de circonio monolítico alemán, cirugía guiada por tomografía 3D y atención VIP de 5 estrellas en Antalya.',
    features: ['Garantía de por Vida en Implantes de Titanio', 'Dientes Fijos Provisionales en 24 Horas', 'Hotel 5 Estrellas & Traslados VIP Privados'],
    primaryBtnText: 'Solicitar Consulta Gratuita',
    secondaryBtnText: 'Ver Detalles del Tratamiento',
  },
  ru: {
    badge: 'ПОЛНАЯ ИМПЛАНТАЦИЯ ВСЕЙ ЧЕЛЮСТИ',
    title: 'Полная имплантация зубов в Анталье, Турция',
    subtitle: 'Комплексное восстановление верхней и нижней челюстей монолитными немецкими циркониевыми мостами с 3D CBCT навигацией и VIP-сервисом 5 звезд в Анталье.',
    features: ['Пожизненная гарантия на титановые импланты', 'Несъемные временные зубы за 24 часа', 'Отель 5★ и индивидуальный VIP-трансфер'],
    primaryBtnText: 'Записаться на Бесплатную Консультацию',
    secondaryBtnText: 'Подробнее о Процедуре',
  },
};

// 2. ALL-ON-4 DENTAL IMPLANTS
export const ALL_ON_4_HERO_I18N: Record<string, TreatmentHeroItem> = {
  en: {
    badge: 'ALL-ON-4 DENTAL IMPLANTS',
    title: 'All-on-4 Dental Implants in Antalya, Turkey',
    subtitle: 'Same-day fixed full-arch teeth with 4 angled titanium implants without bone grafting, engineered for maximum chewing stability and radiant aesthetics in Antalya.',
    features: ['No Bone Grafting Needed in Most Cases', 'Fixed Teeth in 24 Hours', 'Lifetime Manufacturer Warranty'],
    primaryBtnText: 'Book Free Consultation',
    secondaryBtnText: 'Explore All-on-4 Packages',
  },
  tr: {
    badge: 'ALL-ON-4 DİŞ İMPLANTI',
    title: 'Antalya All-on-4 Diş İmplantı Tedavisi & Fiyatları',
    subtitle: 'Kemik erimesi olan vakalarda ileri kemik nakline gerek kalmadan, 4 açılı titanyum implant ile 24 saatte sabit diş konforu ve ömür boyu garanti.',
    features: ['Kemik Greftine İhtiyaç Duymadan Çözüm', '24 Saatte Sabit Geçici Dişler', 'Orijinal Marka Sertifikası & Ömür Boyu Garanti'],
    primaryBtnText: 'Ücretsiz Muayene Randevusu',
    secondaryBtnText: 'All-on-4 Paketlerini İncele',
  },
  de: {
    badge: 'ALL-ON-4 ZAHNIMPLANTATE',
    title: 'All-on-4 Zahnimplantate in Antalya, Türkei',
    subtitle: 'Festsitzende Zähne an einem Tag auf 4 speziell abgewinkelten Titanimplantaten ohne aufwendigen Knochenaufbau mit lebenslanger Garantie in Antalya.',
    features: ['Kein Knochenaufbau bei Knochenschwund nötig', 'Feste Zähne innerhalb von 24 Stunden', 'Lebenslange Herstellergarantie'],
    primaryBtnText: 'Kostenlose Beratung Buchen',
    secondaryBtnText: 'All-on-4 Pakete Ansehen',
  },
  pl: {
    badge: 'IMPLANTY ALL-ON-4',
    title: 'Implanty All-on-4 w Antalyi w Turcji',
    subtitle: 'Stałe zęby w 24 godziny na 4 precyzyjnie wprowadzonych implantach tytanowych bez konieczności przeszczepu kości i z dożywotnią gwarancją w Antalyi.',
    features: ['Brak konieczności odbudowy kości w większości przypadków', 'Stałe zęby w 24 godziny', 'Dożywotnia międzynarodowa gwarancja'],
    primaryBtnText: 'Zarezerwuj Bezpłatną Konsultację',
    secondaryBtnText: 'Zobacz Pakiety All-on-4',
  },
  pt: {
    badge: 'IMPLANTES ALL-ON-4',
    title: 'Implantes All-on-4 em Antália, Turquia',
    subtitle: 'Dentes fixos no mesmo dia com 4 implantes de titânio angulados sem necessidade de enxerto ósseo complexo e com garantia vitalícia em Antália.',
    features: ['Sem necessidade de enxerto ósseo na maioria dos casos', 'Dentes Fixos em 24 Horas', 'Garantia Vitalícia de Fabrico'],
    primaryBtnText: 'Agendar Consulta Gratuita',
    secondaryBtnText: 'Ver Pacotes All-on-4',
  },
  es: {
    badge: 'IMPLANTES ALL-ON-4',
    title: 'Implantes All-on-4 en Antalya, Turquía',
    subtitle: 'Dientes fijos en 24 horas sobre 4 implantes de titanio inclinados sin necesidad de injertos óseos complejos y con garantía de por vida en Antalya.',
    features: ['Sin injerto óseo en la mayoría de los casos', 'Dientes fijos en 24 horas', 'Garantía internacional de por vida'],
    primaryBtnText: 'Solicitar Consulta Gratuita',
    secondaryBtnText: 'Ver Paquetes All-on-4',
  },
  ru: {
    badge: 'ИМПЛАНТАЦИЯ ALL-ON-4',
    title: 'Имплантация All-on-4 в Анталье, Турция',
    subtitle: 'Несъемный мостовидный протез на 4 наклонных титановых имплантах за 24 часа без сложной костной пластики и с пожизненной гарантией в Анталье.',
    features: ['Без наращивания кости в большинстве случаев', 'Несъемные зубы за 24 часа', 'Пожизненная гарантия производителя'],
    primaryBtnText: 'Записаться на Бесплатную Консультацию',
    secondaryBtnText: 'Смотреть Пакеты All-on-4',
  },
};

// 3. ALL-ON-6 DENTAL IMPLANTS
export const ALL_ON_6_HERO_I18N: Record<string, TreatmentHeroItem> = {
  en: {
    badge: 'ALL-ON-6 DENTAL IMPLANTS',
    title: 'All-on-6 Dental Implants in Antalya, Turkey',
    subtitle: 'Full-arch 14-tooth permanent restoration with 6 titanium implants per jaw and 1200+ MPa Monolithic German Zirconia bridges for ultimate bite force and lifelike aesthetics.',
    features: ['Maximum Chewing Stability & 6 Anchor Points', '14-Tooth Monolithic German Zirconia Arch', 'Lifetime Implant Guarantee & VIP Concierge'],
    primaryBtnText: 'Book Free Consultation',
    secondaryBtnText: 'Explore All-on-6 Packages',
  },
  tr: {
    badge: 'ALL-ON-6 DİŞ İMPLANTI',
    title: 'Antalya All-on-6 Diş İmplantı Tedavisi & Fiyatları',
    subtitle: 'Tek çenede 6 titanyum implant desteği ile 14 dişlik eksiksiz çiğneme arkı ve 1200+ MPa monolitik Alman Zirkonyum köprülerle en yüksek çiğneme kuvveti ve ömür boyu dayanıklılık.',
    features: ['6 Dayanak Noktası ile Maksimum Isırma Kuvveti', '14 Dişli Monolitik Alman Zirkonyum Köprü', 'Ömür Boyu Garanti & VIP Sağlık Turizmi Hizmeti'],
    primaryBtnText: 'Ücretsiz Muayene Randevusu',
    secondaryBtnText: 'All-on-6 Paketlerini İncele',
  },
  de: {
    badge: 'ALL-ON-6 ZAHNIMPLANTATE',
    title: 'All-on-6 Zahnimplantate in Antalya, Türkei',
    subtitle: 'Ganzkiefer-Restauration mit 14 Zähnen auf 6 Titanimplantaten und 1200+ MPa deutscher Zirkonbrücke für maximale Kaukraft und makellose Ästhetik in Antalya.',
    features: ['Maximale Stabilität durch 6 Verankerungspunkte', '14-Zahn-Monolith-Zirkonbrücke', 'Lebenslange Garantie & VIP-Rundum-Service'],
    primaryBtnText: 'Kostenlose Beratung Buchen',
    secondaryBtnText: 'All-on-6 Pakete Ansehen',
  },
  pl: {
    badge: 'IMPLANTY ALL-ON-6',
    title: 'Implanty All-on-6 w Antalyi w Turcji',
    subtitle: 'Pełnołukowa odbudowa 14 zębów na 6 implantach tytanowych z mostem z monolitycznego niemieckiego cyrkonu 1200+ MPa dla najwyższej siły żucia i trwałości.',
    features: ['Maksymalna stabilność dzięki 6 punktom podparcia', 'Most z niemieckiego cyrkonu na 14 zębów', 'Dożywotnia gwarancja i obsługa VIP'],
    primaryBtnText: 'Zarezerwuj Bezpłatną Konsultację',
    secondaryBtnText: 'Zobacz Pakiety All-on-6',
  },
  pt: {
    badge: 'IMPLANTES ALL-ON-6',
    title: 'Implantes All-on-6 em Antália, Turquia',
    subtitle: 'Restauração de arco completo com 14 dentes sobre 6 implantes de titânio e pontes em zircónia monolítica alemã de 1200+ MPa para máxima força mastigatória.',
    features: ['Estabilidade Máxima com 6 Pontos de Apoio', 'Ponte Monolítica em Zircónia de 14 Dentes', 'Garantia Vitalícia & Atendimento VIP'],
    primaryBtnText: 'Agendar Consulta Gratuita',
    secondaryBtnText: 'Ver Pacotes All-on-6',
  },
  es: {
    badge: 'IMPLANTES ALL-ON-6',
    title: 'Implantes All-on-6 en Antalya, Turquía',
    subtitle: 'Restauración fija de arcada completa de 14 piezas sobre 6 implantes de titanio y puente de circonio monolítico alemán 1200+ MPa para máxima fuerza oclusal.',
    features: ['Máxima estabilidad con 6 pilares de soporte', 'Puente monolítico de circonio de 14 piezas', 'Garantía de por vida y servicio VIP'],
    primaryBtnText: 'Solicitar Consulta Gratuita',
    secondaryBtnText: 'Ver Paquetes All-on-6',
  },
  ru: {
    badge: 'ИМПЛАНТАЦИЯ ALL-ON-6',
    title: 'Имплантация All-on-6 в Анталье, Турция',
    subtitle: 'Восстановление 14 зубов на 6 титановых имплантатах с монолитным немецким циркониевым мостом 1200+ МПа для максимальной жевательной прочности.',
    features: ['Максимальная стабильность на 6 титановых опорах', 'Монолитный циркониевый мост на 14 зубов', 'Пожизненная гарантия и VIP-сопровождение'],
    primaryBtnText: 'Записаться на Бесплатную Консультацию',
    secondaryBtnText: 'Смотреть Пакеты All-on-6',
  },
};

// 4. IMMEDIATE IMPLANT TREATMENT (AYNI GÜN İMPLANT)
export const IMMEDIATE_IMPLANT_HERO_I18N: Record<string, TreatmentHeroItem> = {
  en: {
    badge: 'IMMEDIATE DENTAL IMPLANTS',
    title: 'Immediate Dental Implants in Antalya (Same-Day Teeth)',
    subtitle: 'Same-day tooth extraction, high-torque titanium implant placement, and fixed aesthetic crown in a single visit without waiting months for osseointegration in Antalya.',
    features: ['Extraction & Implant in One Single Appointment', 'Immediate Temporary Aesthetic Crown', 'Zero Loss of Soft Tissue Architecture'],
    primaryBtnText: 'Book Free Consultation',
    secondaryBtnText: 'Explore Immediate Implants',
  },
  tr: {
    badge: 'AYNI GÜN İMPLANT TEDAVİSİ',
    title: 'Antalya Aynı Gün İmplant Tedavisi (Same-Day Teeth)',
    subtitle: 'Diş çekimi ile aynı seansta yüksek primer stabiliteye sahip titanyum implant yerleşimi ve 24 saat içinde sabit estetik kuron ile dişsiz kalmadan hızlı tedavi.',
    features: ['Tek Seansta Çekim ve İmplant Yerleşimi', '24 Saatte Sabit Geçici Kuron', 'Diş Eti Estetiğini ve Kemik Hacmini Koruyan Yaklaşım'],
    primaryBtnText: 'Ücretsiz Muayene Randevusu',
    secondaryBtnText: 'Aynı Gün İmplant Detayları',
  },
  de: {
    badge: 'SOFORTIMPLANTATE & SOFORTVERSORGUNG',
    title: 'Sofortimplantate in Antalya, Türkei (Feste Zähne am selben Tag)',
    subtitle: 'Zahnextraktion, Implantation und festsitzende provisorische Zahnkrone in einer einzigen Sitzung ohne monatelange Zahnlücken in Antalya.',
    features: ['Extraktion und Implantation in einem Eingriff', 'Sofortige festsitzende provisorische Krone', 'Optimaler Erhalt von Zahnfleisch und Knochen'],
    primaryBtnText: 'Kostenlose Beratung Buchen',
    secondaryBtnText: 'Sofortimplantat Details Ansehen',
  },
  pl: {
    badge: 'IMPLANTY NATYCHMIASTOWE',
    title: 'Implanty Natychmiastowe w Antalyi (Zęby w 1 Dzień)',
    subtitle: 'Ekstrakcja zęba, wprowadzenie implantu tytanowego i osadzenie stałej korony estetycznej podczas jednej wizyty bez miesięcy oczekiwania w Antalyi.',
    features: ['Ekstrakcja i wszczepienie implantu podczas jednej wizyty', 'Natychmiastowa stała korona tymczasowa', 'Ochrona architektury dziąsła i kości'],
    primaryBtnText: 'Zarezerwuj Bezpłatną Konsultację',
    secondaryBtnText: 'Zobacz Szczegóły Implantów Natychmiastowych',
  },
  pt: {
    badge: 'IMPLANTES DE CARGA IMEDIATA',
    title: 'Implantes Imediatos em Antália, Turquia (Dentes no Mesmo Dia)',
    subtitle: 'Extração dentária, fixação do implante com alto torque e colocação de coroa estética fixa na mesma consulta sem período de desdentação.',
    features: ['Extração e implante na mesma sessão cirúrgica', 'Coroa estética fixa imediata', 'Preservação da estética gengival e óssea'],
    primaryBtnText: 'Agendar Consulta Gratuita',
    secondaryBtnText: 'Ver Detalhes de Implantes Imediatos',
  },
  es: {
    badge: 'IMPLANTES DE CARGA INMEDIATA',
    title: 'Implantes Inmediatos en Antalya (Dientes en el Mismo Día)',
    subtitle: 'Extracción dental, colocación de implante de alta estabilidad y corona estética fija en una sola sesión sin pasar meses sin dientes en Antalya.',
    features: ['Extracción e implante en la misma cita', 'Corona fija provisional inmediata', 'Conservación de la encía y el volumen óseo'],
    primaryBtnText: 'Solicitar Consulta Gratuita',
    secondaryBtnText: 'Ver Detalles de Implantes Inmediatos',
  },
  ru: {
    badge: 'ОДНОМОМЕНТНАЯ ИМПЛАНТАЦИЯ',
    title: 'Одномоментная имплантация в Анталье (Зубы за 1 день)',
    subtitle: 'Удаление зуба, установка титанового импланта и фиксация временной эстетической коронки за один визит без долгого ожидания в Анталье.',
    features: ['Удаление и установка импланта за один прием', 'Немедленная фиксация эстетической коронки', 'Сохранение контура десны и костного объема'],
    primaryBtnText: 'Записаться на Бесплатную Консультацию',
    secondaryBtnText: 'Подробнее об Одномоментной Имплантации',
  },
};

// 5. SINUS LIFTING & BONE AUGMENTATION
export const SINUS_LIFTING_HERO_I18N: Record<string, TreatmentHeroItem> = {
  en: {
    badge: 'SINUS LIFTING & BONE GRAFTING',
    title: 'Sinus Lifting & Bone Augmentation in Antalya, Turkey',
    subtitle: 'Gentle sinus membrane elevation and precision bone grafting to build a robust, lifetime-stable bone foundation for permanent dental implants in Antalya.',
    features: ['Piezosurgery Ultrasonic Sinus Elevation', 'Premium Swiss Bio-Oss Bone Mineral Matrix', 'Simultaneous or Staged Implant Placement'],
    primaryBtnText: 'Book Free Consultation',
    secondaryBtnText: 'Explore Sinus Lift Details',
  },
  tr: {
    badge: 'SİNÜS LİFTİNG & KEMİK GREFTİ',
    title: 'Antalya Sinüs Lifting (Sinüs Yükseltme) Tedavisi',
    subtitle: 'Üst çenede kemik erimesi ve sarkan sinüs tabanı durumunda ultrasonik piezo cerrahisi ve İsviçre menşeli kemik greftleriyle ömür boyu sağlam implant temeli oluşturma.',
    features: ['Ultrasonik Piezocerrahi ile Ağrısız Sinüs Yükseltme', 'İsviçre Bio-Oss Biyouyumlu Kemik Grefti', 'Aynı Seansta İmplant Uygulama İmkânı'],
    primaryBtnText: 'Ücretsiz Muayene Randevusu',
    secondaryBtnText: 'Sinüs Lifting Detaylarını İncele',
  },
  de: {
    badge: 'SINUSLIFT & KNOCHENAUFBAU',
    title: 'Sinuslift (Sinusbodenelevation) in Antalya, Türkei',
    subtitle: 'Schonende Anhebung des Kieferhöhlenbodens und präziser Knochenaufbau mit Schweizer Biomaterialien für sicheren Halt Ihrer Zahnimplantate in Antalya.',
    features: ['Schonende Ultraschall-Piezochirurgie', 'Schweizer Bio-Oss Knochenaufbaumaterial', 'Möglichkeit zur simultanen Implantation'],
    primaryBtnText: 'Kostenlose Beratung Buchen',
    secondaryBtnText: 'Sinuslift Details Ansehen',
  },
  pl: {
    badge: 'PODNIESIENIE DNA ZATOKI (SINUS LIFT)',
    title: 'Podniesienie Dna Zatoki Szczękowej (Sinus Lift) w Antalyi',
    subtitle: 'Bezpieczne podniesienie błony śluzowej zatoki i odbudowa kości szwajcarskim biomateriałem Bio-Oss tworzące stabilną podstawę pod implanty w Antalyi.',
    features: ['Ultradźwiękowa piezochirurgia chroniąca tkanki', 'Szwajcarski biomateriał kościozastępczy Bio-Oss', 'Możliwość jednoczasowego wszczepienia implantu'],
    primaryBtnText: 'Zarezerwuj Bezpłatną Konsultację',
    secondaryBtnText: 'Zobacz Szczegóły Sinus Lift',
  },
  pt: {
    badge: 'SINUS LIFT & ENXERTO ÓSSEO',
    title: 'Sinus Lift (Elevação do Seio Maxilar) em Antália, Turquia',
    subtitle: 'Elevação minimamente invasiva da membrana sinusal e enxerto ósseo suíço de alta qualidade para viabilizar implantes duradouros na maxila em Antália.',
    features: ['Piezo-cirurgia ultrassónica minimamente invasiva', 'Biomaterial ósseo suíço Bio-Oss', 'Possibilidade de colocação de implante simultâneo'],
    primaryBtnText: 'Agendar Consulta Gratuita',
    secondaryBtnText: 'Ver Detalhes do Sinus Lift',
  },
  es: {
    badge: 'ELEVACIÓN DE SENO MAXILAR (SINUS LIFT)',
    title: 'Elevación de Seno Maxilar e Injerto Óseo en Antalya',
    subtitle: 'Elevación atraumática de la membrana sinusal y regeneración ósea con biomateriales suizos para garantizar una base firme a sus implantes dentales en Antalya.',
    features: ['Piezo-cirugía ultrasónica de alta precisión', 'Matriz de injerto óseo suizo Bio-Oss', 'Colocación de implantes simultánea o diferida'],
    primaryBtnText: 'Solicitar Consulta Gratuita',
    secondaryBtnText: 'Ver Detalles de Sinus Lift',
  },
  ru: {
    badge: 'СИНУС-ЛИФТИНГ И КОСТНАЯ ПЛАСТИКА',
    title: 'Синус-лифтинг и наращивание кости в Анталье, Турция',
    subtitle: 'Деликатное поднятие дна гайморовой пазухи ультразвуковым пьезотомом и костная пластика швейцарским биоматериалом для надежной фиксации имплантов.',
    features: ['Ультразвуковая пьезохирургия без риска перфорации', 'Швейцарский костный биоматериал Bio-Oss', 'Возможность одномоментной установки импланта'],
    primaryBtnText: 'Записаться на Бесплатную Консультацию',
    secondaryBtnText: 'Подробнее о Синус-лифтинге',
  },
};

// 6. ZYGOMATIC IMPLANTS (ZİGOMA İMPLANT)
export const ZYGOMATIC_IMPLANTS_HERO_I18N: Record<string, TreatmentHeroItem> = {
  en: {
    badge: 'ZYGOMATIC DENTAL IMPLANTS',
    title: 'Zygomatic Dental Implants in Antalya Turkey',
    subtitle: 'Immediate fixed full-arch teeth anchored directly into the dense zygomatic (cheekbone) arch, providing a definitive 24-hour solution for severe maxillary bone loss without bone grafting.',
    features: ['Solution for Severe Maxillary Bone Atrophy', 'Zero Bone Grafting or Waiting Months', 'Immediate Full-Arch Fixed Teeth in 24 Hours'],
    primaryBtnText: 'Book Free Consultation',
    secondaryBtnText: 'Explore Zygomatic Solutions',
  },
  tr: {
    badge: 'ZİGOMATİK (ELMACIK KEMİĞİ) İMPLANT',
    title: 'Antalya Zigoma (Elmacık Kemiği) Diş İmplantı Tedavisi',
    subtitle: 'Üst çenede aşırı kemik erimesi olan ve geleneksel implant yapılamayan vakalarda, kemik nakli beklemeden elmacık kemiğine sabitlenen 24 saatte kalıcı diş çözümü.',
    features: ['İleri Derece Kemik Erimesinde Kesin Çözüm', 'Kemik Nakli ve Bekleme Süresi Olmadan Tedavi', '24 Saatte Sabit Tam Çene Dişler'],
    primaryBtnText: 'Ücretsiz Muayene Randevusu',
    secondaryBtnText: 'Zigoma Tedavi Detaylarını İncele',
  },
  de: {
    badge: 'ZYGOMA-ZAHNIMPLANTATE',
    title: 'Zygoma-Implantate (Jochbeinimplantate) in Antalya, Türkei',
    subtitle: 'Festsitzende Zähne innerhalb von 24 Stunden bei extremem Knochenschwund durch direkte Verankerung im stabilen Jochbein ganz ohne Knochentransplantation.',
    features: ['Lösung bei hochgradigem Oberkiefer-Knochenschwund', 'Keine monatelangen Knochenaufbau-Wartezeiten', 'Feste Zähne innerhalb von 24 Stunden'],
    primaryBtnText: 'Kostenlose Beratung Buchen',
    secondaryBtnText: 'Zygoma Details Ansehen',
  },
  pl: {
    badge: 'IMPLANTY JARZMOWE (ZYGOMA)',
    title: 'Implanty Jarzmowe (Zygoma) w Antalyi w Turcji',
    subtitle: 'Stałe zęby w 24 godziny kotwiczone bezpośrednio w kości jarzmowej jako ostateczne rozwiązanie przy skrajnym zaniku kości szczęki bez przeszczepów w Antalyi.',
    features: ['Ratunek przy zaawansowanej atrofii kości szczęki', 'Bez konieczności przeszczepu kości', 'Stałe zęby pełnołukowe w 24 godziny'],
    primaryBtnText: 'Zarezerwuj Bezpłatną Konsultację',
    secondaryBtnText: 'Zobacz Szczegóły Implantów Zygoma',
  },
  pt: {
    badge: 'IMPLANTES ZIGOMÁTICOS',
    title: 'Implantes Zigomáticos em Antália, Turquia',
    subtitle: 'Dentes fixos em 24 horas ancorados diretamente no osso zigomático (maçã do rosto) para casos de reabsorção óssea maxilar extrema sem enxerto ósseo.',
    features: ['Solução definitiva para atrofia óssea severa', 'Sem necessidade de enxerto ósseo prolongado', 'Dentes fixos de arcada total em 24 horas'],
    primaryBtnText: 'Agendar Consulta Gratuita',
    secondaryBtnText: 'Ver Detalhes de Implantes Zigomáticos',
  },
  es: {
    badge: 'IMPLANTES CIGOMÁTICOS (ZYGOMA)',
    title: 'Implantes Cigomáticos en Antalya, Turquía',
    subtitle: 'Dientes fijos en 24 horas anclados en el hueso cigomático (pómulo) para pacientes con pérdida ósea maxilar severa sin necesidad de injertos óseos en Antalya.',
    features: ['Solución para pérdida ósea maxilar extrema', 'Sin injertos óseos ni largas esperas', 'Dientes fijos completos en 24 horas'],
    primaryBtnText: 'Solicitar Consulta Gratuita',
    secondaryBtnText: 'Ver Detalles de Implantes Cigomáticos',
  },
  ru: {
    badge: 'СКУЛОВЫЕ ИМПЛАНТЫ ЗИГОМА (ZYGOMA)',
    title: 'Скуловые импланты Zygoma в Анталье, Турция',
    subtitle: 'Несъемные зубы за 24 часа с фиксацией в плотной скуловой кости при критической атрофии верхней челюсти без костной пластики в Анталье.',
    features: ['Решение при экстремальной атрофии кости челюсти', 'Без костной пластики и месяцев ожидания', 'Несъемные зубы на всю челюсть за 24 часа'],
    primaryBtnText: 'Записаться на Бесплатную Консультацию',
    secondaryBtnText: 'Подробнее о Скуловой Имплантации',
  },
};

// 7. ZIRCONIUM CERAMIC IMPLANTS
export const ZIRCONIUM_IMPLANTS_HERO_I18N: Record<string, TreatmentHeroItem> = {
  en: {
    badge: 'ZIRCONIUM CERAMIC IMPLANTS',
    title: 'Zirconium Ceramic Dental Implants in Antalya',
    subtitle: '100% metal-free, holistic ceramic implants engineered from high-purity zirconia for immaculate gum tissue aesthetics without gray margins or metal sensitivities in Antalya.',
    features: ['100% Metal-Free Holistic Ceramic Material', 'Superior Gum Tissue Adhesion & Zero Gray Shadowing', 'Hypoallergenic & High Biocompatibility'],
    primaryBtnText: 'Book Free Consultation',
    secondaryBtnText: 'Explore Ceramic Implants',
  },
  tr: {
    badge: 'ZİRKONYUM SERAMİK İMPLANT',
    title: 'Antalya Zirkonyum (Seramik) Diş İmplantı Tedavisi',
    subtitle: '%100 metalsiz, biyouyumlu beyaz seramik yapısıyla diş etinde gri yansıma yapmayan, metal alerjisi olan veya holistik yaklaşımı seçen hastalar için en estetik implant çözümü.',
    features: ['%100 Metalsiz Biyouyumlu Seramik Gövde', 'Diş Eti ile Kusursuz Bütünleşme & Sıfır Gri Gölge', 'Alerjisiz ve Holistik Diş Hekimliği Standardı'],
    primaryBtnText: 'Ücretsiz Muayene Randevusu',
    secondaryBtnText: 'Zirkonyum İmplant Detaylarını İncele',
  },
  de: {
    badge: 'ZIRKON-KERAMIKIMPLANTATE',
    title: 'Zirkon-Keramikimplantate in Antalya, Türkei',
    subtitle: '100% metallfreie, biokompatible weiße Keramikimplantate für höchste biologische Ästhetik ohne dunkle Zahnfleischränder und ohne Metallallergien in Antalya.',
    features: ['100% metallfreie holistische Keramik', 'Perfekte Gewebeverträglichkeit ohne graue Ränder', 'Hypoallergen und biokompatibel'],
    primaryBtnText: 'Kostenlose Beratung Buchen',
    secondaryBtnText: 'Keramikimplantat Details Ansehen',
  },
  pl: {
    badge: 'CERAMICZNE IMPLANTY CYRKONOWE',
    title: 'Implanty Cyrkonowe (Ceramiczne) w Antalyi w Turcji',
    subtitle: 'W 100% bezmetalowe, biokompatybilne białe implanty ceramiczne gwarantujące idealną estetykę dziąseł bez sinych prześwitów i ryzyka alergii w Antalyi.',
    features: ['W 100% bezmetalowa ceramika cyrkonowa', 'Brak ciemnych obwódek przy linii dziąsła', 'Hipoalergiczne i w pełni biokompatybilne'],
    primaryBtnText: 'Zarezerwuj Bezpłatną Konsultację',
    secondaryBtnText: 'Zobacz Szczegóły Implantów Cyrkonowych',
  },
  pt: {
    badge: 'IMPLANTES CERÂMICOS DE ZIRCÓNIA',
    title: 'Implantes Cerâmicos de Zircónia em Antália, Turquia',
    subtitle: 'Implantes brancos 100% livres de metal e altamente biocompatíveis para uma estética gengival natural sem linhas cinzentas e sem alergias metálicas em Antália.',
    features: ['100% Livres de Metal e Holísticos', 'Integração gengival perfeita sem sombras escuras', 'Hipoalergénicos e de alta biocompatibilidade'],
    primaryBtnText: 'Agendar Consulta Gratuita',
    secondaryBtnText: 'Ver Detalhes de Implantes de Zircónia',
  },
  es: {
    badge: 'IMPLANTES CERÁMICOS DE CIRCONIO',
    title: 'Implantes Cerámicos de Circonio en Antalya, Turquía',
    subtitle: 'Implantes blancos 100% libres de metal y biocompatibles diseñados para una estética gingival perfecta sin sombras oscuras ni alergias a metales en Antalya.',
    features: ['100% libres de metal y cerámicos', 'Excelente adhesión gingival sin márgenes grises', 'Hipoalergénicos y bioinertes'],
    primaryBtnText: 'Solicitar Consulta Gratuita',
    secondaryBtnText: 'Ver Detalles de Implantes Cerámicos',
  },
  ru: {
    badge: 'ЦИРКОНИЕВЫЕ КЕРАМИЧЕСКИЕ ИМПЛАНТЫ',
    title: 'Керамические циркониевые импланты в Анталье, Турция',
    subtitle: '100% безметалловые биосовместимые белые керамические имплантаты для идеальной эстетики десны без серых теней и аллергических реакций в Анталье.',
    features: ['100% безметалловая керамическая структура', 'Идеальная интеграция с десной без темных ободков', 'Гипоаллергенный и биосовместимый материал'],
    primaryBtnText: 'Записаться на Бесплатную Консультацию',
    secondaryBtnText: 'Подробнее о Керамических Имплантах',
  },
};

// 8. IMPLANT-SUPPORTED DENTURES (SNAP-ON OVERDENTURES)
export const IMPLANT_SUPPORTED_DENTURES_HERO_I18N: Record<string, TreatmentHeroItem> = {
  en: {
    badge: 'IMPLANT SUPPORTED OVERDENTURES',
    title: 'Implant-Supported Dentures (Snap-On) in Antalya',
    subtitle: 'Eliminate loose, slipping dentures with 2–4 titanium implant locators. Enjoy rock-solid chewing retention, palateless comfort, and renewed smile confidence in Antalya.',
    features: ['Rock-Solid Snap-On Retention without Adhesives', 'Open-Palate Horseshoe Design for Natural Taste', 'Affordable Full-Arch Stability'],
    primaryBtnText: 'Book Free Consultation',
    secondaryBtnText: 'Explore Overdenture Packages',
  },
  tr: {
    badge: 'İMPLANT DESTEKLİ ÇIT ÇITLI DAMAK',
    title: 'Antalya İmplant Destekli Protez & Çıt Çıtlı Damak Tedavisi',
    subtitle: 'Oynayan damak ve yapıştırıcı derdine son: 2 ila 4 implant lokatör desteğiyle kilitlenen, damağı kapatmayan açık tasarımıyla %100 sabit çiğneme konforu ve tat alma özgürlüğü.',
    features: ['Yapıştırıcı Gerektirmeyen Çıt Çıtlı Kilitlenme', 'Damağı Kapatmayan Açık Tasarım & Doğal Tat Alma', 'Ekonomik Tam Çene Sabit Tutuculuk'],
    primaryBtnText: 'Ücretsiz Muayene Randevusu',
    secondaryBtnText: 'Çıt Çıtlı Damak Paketlerini İncele',
  },
  de: {
    badge: 'IMPLANTATGETRAGENE DRUCKKNOPFPROTHESEN',
    title: 'Implantatgetragene Prothesen (Snap-On) in Antalya, Türkei',
    subtitle: 'Schluss mit lockeren Zahnprothesen: Fester Halt durch 2 bis 4 Klick-Implantate ohne Klebecreme und mit gaumenfreiem Design für natürlichen Geschmack in Antalya.',
    features: ['Sicherer Druckknopf-Halt ohne Haftcreme', 'Gaumenfreies Hufeisen-Design für vollen Geschmack', 'Wirtschaftliche Ganzkiefer-Stabilität'],
    primaryBtnText: 'Kostenlose Beratung Buchen',
    secondaryBtnText: 'Druckknopfprothesen Details Ansehen',
  },
  pl: {
    badge: 'PROTEZY NA IMPLANTACH (ZATRZAŚNIĘTE)',
    title: 'Protezy na Implantach (Zatrzaskowe Snap-On) w Antalyi',
    subtitle: 'Koniec z wypadającą protezą i klejami: stabilne mocowanie na 2–4 implantach na zatrzaskach Locator z otwartym podniebieniem dla pełnego smaku w Antalyi.',
    features: ['Stabilne mocowanie zatrzaskowe bez kleju do protez', 'Brak płyty na podniebieniu – pełne odczuwanie smaku', 'Ekonomiczna stabilizacja całego łuku'],
    primaryBtnText: 'Zarezerwuj Bezpłatną Konsultację',
    secondaryBtnText: 'Zobacz Pakiety Protez na Implantach',
  },
  pt: {
    badge: 'SOBREDENTADURAS SOBRE IMPLANTES',
    title: 'Próteses Sobre Implantes (Snap-On) em Antália, Turquia',
    subtitle: 'Elimine as próteses soltas e colas adesivas com fixação por encaixe em 2 a 4 implantes, desfrutando de conforto sem cobertura palatina em Antália.',
    features: ['Fixação firme tipo Snap-On sem necessidade de cola', 'Desenho sem palato para saborear os alimentos', 'Estabilidade económica de arcada total'],
    primaryBtnText: 'Agendar Consulta Gratuita',
    secondaryBtnText: 'Ver Pacotes de Sobredentaduras',
  },
  es: {
    badge: 'SOBREDENTADURAS SOBRE IMPLANTES',
    title: 'Sobredentaduras sobre Implantes (Snap-On) en Antalya',
    subtitle: 'Diga adiós a las dentaduras flojas y adhesivos: retención firme mediante broches sobre 2 a 4 implantes con paladar abierto para disfrutar del sabor en Antalya.',
    features: ['Retención firme tipo broche sin adhesivos', 'Diseño sin paladar que permite saborear la comida', 'Solución económica para arcada completa'],
    primaryBtnText: 'Solicitar Consulta Gratuita',
    secondaryBtnText: 'Ver Paquetes de Sobredentaduras',
  },
  ru: {
    badge: 'ПОКРЫВНЫЕ ПРОТЕЗЫ НА ИМПЛАНТАХ (SNAP-ON)',
    title: 'Протезы на имплантах на кнопочной фиксации в Анталье',
    subtitle: 'Забудьте о съемных протезах и клеях: надежная фиксация на 2–4 имплантатах Locator с открытым небом для естественного вкуса и комфорта в Анталье.',
    features: ['Надежная кнопочная фиксация без клея', 'Открытое небо без рвотного рефлекса', 'Экономичная стабильность всей челюсти'],
    primaryBtnText: 'Записаться на Бесплатную Консультацию',
    secondaryBtnText: 'Смотреть Пакеты Протезов на Имплантах',
  },
};
