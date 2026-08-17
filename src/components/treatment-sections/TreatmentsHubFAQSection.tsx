'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import styles from './TreatmentVeneerFAQSection.module.css';

interface FAQItem {
  q: string;
  a: string | React.ReactNode;
}

interface FAQDictionary {
  title: string;
  subText: string;
  items: FAQItem[];
}

const HUB_FAQ_DATA: Record<string, FAQDictionary> = {
  en: {
    title: 'Frequently Asked Questions About Dental Treatments in Istanbul',
    subText:
      'Everything you need to know about planning your dental trip to Istanbul, treatment timelines, materials, guarantees, and VIP medical travel.',
    items: [
      {
        q: 'How do I know which dental treatment is right for me?',
        a: 'Before your journey to Istanbul, our senior clinical team conducts a comprehensive digital consultation. By reviewing your panoramic X-rays, 3D CBCT scans, or high-resolution facial photos, we create a bespoke treatment plan detailing whether you need dental implants, zirconia crowns, E-Max veneers, or general restorative care.',
      },
      {
        q: 'Why are dental treatments in Istanbul, Turkey up to 70% more affordable than the UK, US, or Europe?',
        a: 'The significant cost advantage is due to lower operational costs, competitive laboratory fees, and favorable currency exchange rates in Turkey — not a compromise in quality. At Master Smile Studio, we use genuine Swiss Straumann implants, German Zirconia, and Swiss Ivoclar E-Max ceramics.',
      },
      {
        q: 'How many days do I need to stay in Istanbul for my treatment?',
        a: 'Most cosmetic transformations (Veneers, Zirconia Crowns, Dental Bridges, Hollywood Smile) take only 4 to 6 days in a single visit. For full-arch dental implants (All-on-4 / All-on-6), treatment is typically completed in two short visits (Visit 1: 3 days for surgical implant placement; Visit 2: 4–5 days for permanent zirconia teeth).',
      },
      {
        q: 'Will my dental treatment at Master Smile Studio be painful?',
        a: 'No. All surgical and restorative procedures are performed under painless, computer-controlled local anesthesia. For patients who experience dental anxiety or phobia, conscious IV sedation is also available upon request.',
      },
      {
        q: 'What warranties and guarantees are provided on dental treatments?',
        a: 'All titanium dental implants come with an official Lifetime International Warranty Certificate. All custom-milled German Zirconia crowns, bridges, and Swiss Ivoclar E-Max veneers are backed by our 5-Year Studio Quality Certificate.',
      },
      {
        q: 'What is included in your VIP Dental Tourism packages?',
        a: 'Our all-inclusive packages include 5-star hotel accommodation in central Istanbul, private Mercedes VIP airport and clinic transfers, all 3D tomography scans and medications, personalized multilingual patient hosting, and complete laboratory work.',
      },
      {
        q: 'Can I see a 3D digital simulation of my new smile before treatment starts?',
        a: 'Yes, absolutely! With 3D Digital Smile Design (DSD), we analyze your facial aesthetics and place a physical 3D "Mock-Up" over your natural teeth so you can preview the shape, length, and shade in the mirror before any preparation.',
      },
      {
        q: 'What happens if I need multiple treatments combined (e.g. Implants + Veneers + Whitening)?',
        a: 'Our clinic operates with full multidisciplinary integration: oral surgeons, prosthodontists, endodontists, and master ceramists work together so you receive comprehensive full-mouth care during one single trip.',
      },
      {
        q: 'What materials and brands do you use for restorations?',
        a: 'We use exclusively certified European and Swiss medical materials: Straumann and Medentika implants, Amann Girrbach German multi-layered zirconia, and Ivoclar Vivadent E-Max lithium disilicate ceramics.',
      },
      {
        q: 'Do I get temporary teeth while waiting for my permanent crowns or veneers?',
        a: 'Yes! Immediate aesthetic temporary crowns or veneers are fabricated and placed during your very first visit so you never spend a single hour without teeth.',
      },
      {
        q: 'Can I choose super bright Hollywood white shades like BL1 or BL2?',
        a: 'Yes! We offer the complete Bleach shade spectrum (BL1, BL2, BL3, BL4) as well as natural Vita shades (A1, B1, etc.), customized to harmonize with your complexion.',
      },
      {
        q: 'What payment methods do you accept at Master Smile Studio?',
        a: 'We accept major credit/debit cards (Visa, MasterCard), secure online bank wire transfers, and cash in GBP (£), EUR (€), and USD ($).',
      },
      {
        q: 'Can I pay for my dental package in installments?',
        a: 'Yes. An initial deposit confirms your treatment and hotel booking, with the remaining balance payable across your clinic appointments in Istanbul.',
      },
      {
        q: 'What safety and sterilization standards are practiced in the clinic?',
        a: 'Our clinic operates under strict European hospital-grade sterilization protocols using Class-B autoclaves, ultrasonic instrument disinfection, and single-use surgical barrier packs.',
      },
      {
        q: 'Is it safe to travel to Istanbul, Turkey for medical and dental care?',
        a: 'Yes! Istanbul is one of the world’s top medical tourism capitals, welcoming millions of international patients annually. With our private VIP chauffeur and dedicated patient coordinators, your entire journey is comfortable and secure.',
      },
      {
        q: 'How do I start and get a free dental quote?',
        a: 'Simply click "Get Free Quote", message us on WhatsApp, or submit your dental photos/X-rays through our interactive consultation form to receive your detailed medical treatment plan within 24 hours.',
      },
    ],
  },
  tr: {
    title: 'İstanbul Diş Tedavileri Hakkında Sıkça Sorulan Sorular',
    subText:
      'İstanbul’daki diş tedavisi seyahatiniz, tedavi süreleri, malzemeler, uluslararası garantiler ve VIP sağlık turizmi hizmetlerimiz hakkında tüm klinik detaylar.',
    items: [
      {
        q: 'Benim için en doğru diş tedavisinin hangisi olduğunu nasıl öğrenebilirim?',
        a: 'İstanbul’a gelmeden önce uzman hekim kadromuz dijital ön konsültasyon gerçekleştirir. Bize ilettiğiniz panoramik röntgen, 3D tomografi veya net fotoğraflar incelenerek implant, zirkonyum, lamina veya genel diş tedavilerinden hangisinin size uygun olduğu belirlenir.',
      },
      {
        q: 'İstanbul’da diş tedavileri Avrupa ve İngiltere’ye göre neden %70 daha uygun?',
        a: 'Fiyat avantajı kaliteden ödün verildiği için değil; Türkiye’deki klinik işletme maliyetlerinin düşüklüğü, rekabetçi laboratuvar ücretleri ve kur farkından kaynaklanır. Kliniğimizde orijinal İsviçre Straumann ve Alman Zirkonyum kullanılmaktadır.',
      },
      {
        q: 'Diş tedavim için İstanbul’da kaç gün kalmam gerekir?',
        a: 'Estetik gülüş tasarımları (Lamine, Zirkonyum Kron, Diş Köprüsü) tek ziyarette 4 ila 6 günde tamamlanır. Tam çene implant tedavileri (All-on-4 / All-on-6) ise 2 ziyarette tamamlanır (1. Ziyaret: 3 gün implant cerrahisi; 2. Ziyaret: 4–5 gün kalıcı zirkonyum dişler).',
      },
      {
        q: 'Master Smile Studio’da diş tedavisi sırasında ağrı çeker miyim?',
        a: 'Hayır. Tüm cerrahi ve estetik işlemler gelişmiş bilgisayarlı lokal anestezi altında tamamen ağrısız gerçekleşir. Diş hekimi korkusu olan hastalarımıza sedasyon (hafif uyku) seçeneği sunulmaktadır.',
      },
      {
        q: 'Uygulanan diş tedavilerine resmi garanti veriyor musunuz?',
        a: 'Tüm titanyum diş implantlarımız Ömür Boyu Uluslararası Garanti Sertifikası ile teslim edilir. Alman Zirkonyum ve İsviçre E-Max kaplamalarımız ise 5 Yıl Resmi Klinik Kalite Garantisi altındadır.',
      },
      {
        q: 'VIP Sağlık Turizmi paketlerine neler dahildir?',
        a: 'Her şey dahil paketlerimize İstanbul’un merkezinde 5 yıldızlı otel konaklaması, havalimanı ve klinik arası VIP Mercedes transferler, tüm 3D tomografi ve ilaçlar ile kendi dilinizde hasta danışmanlığı dahildir.',
      },
      {
        q: 'Tedaviye başlamadan önce yeni gülüşümü 3D olarak görebilir miyim?',
        a: 'Evet! 3D Dijital Gülüş Tasarımı (DSD) ile dişlerinize hiçbir işlem yapılmadan önce "Mock-Up" adı verilen model ağzınıza takılarak yeni dişlerinizin formunu ve yüzünüzle uyumunu aynada bizzat deneyimleyebilirsiniz.',
      },
      {
        q: 'Birden fazla tedaviye ihtiyacım varsa (İmplant + Lamina + Beyazlatma) aynı anda yapılabilir mi?',
        a: 'Evet, kliniğimizde çene cerrahları, protez uzmanları ve endodontistler multidisipliner bir arada çalışarak tüm ağız tedavinizi tek bir seyahat planı içerisinde eksiksizce tamamlar.',
      },
      {
        q: 'Kliniğinizde hangi marka ve materyaller kullanılıyor?',
        a: 'Sadece orijinal Avrupa sertifikalı malzemeler kullanılır: İsviçre Straumann ve Medentika implantlar, Alman Amann Girrbach çok katmanlı zirkonyum ve İsviçre Ivoclar E-Max porselenler.',
      },
      {
        q: 'Kalıcı dişlerim üretilene kadar dişsiz mi kalacağım?',
        a: 'Kesinlikle hayır! İlk gün hazırlanan estetik geçici dişler hemen ağzınıza takılır ve tedavi boyunca asla dişsiz kalmazsınız.',
      },
      {
        q: 'Hollywood beyazı (BL1, BL2 gibi ekstra beyaz) tonları seçebilir miyim?',
        a: 'Evet! Ivoclar Bleach serisi (en beyaz ton olan BL1’den BL4’e kadar) ve doğal Vita skalasındaki tüm tonlar mevcuttur.',
      },
      {
        q: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
        a: 'Visa, MasterCard kredi kartları, banka havalesi ve GBP (£), EUR (€), USD ($) nakit ödemeler kabul edilmektedir.',
      },
      {
        q: 'Tedavi ücretini taksitle ödeyebilir miyim?',
        a: 'Evet, tedavi onayında cüzi bir ön depozito alınır, kalan tutar ise İstanbul’daki seanslarınıza bölünerek ödenebilir.',
      },
      {
        q: 'Kliniğinizde hijyen ve sterilizasyon standartları nasıl sağlanıyor?',
        a: 'Kliniğimizde B-sınıfı hastane tipi otoklavlar, ultrasonik alet dezenfeksiyonu ve tek kullanımlık steril cerrahi setler ile Avrupa standartlarında hijyen uygulanır.',
      },
      {
        q: 'Diş tedavisi için İstanbul’a seyahat etmek güvenli midir?',
        a: 'Evet! İstanbul dünyanın en popüler sağlık turizmi merkezidir. Özel VIP transfer şoförünüz ve kişisel hasta koordinatörünüz sayesinde tüm seyahatiniz güvenli ve konforlu geçer.',
      },
      {
        q: 'Ücretsiz fiyat teklifi ve tedavi planı nasıl alabilirim?',
        a: 'İnteraktif formumuzu doldurarak veya WhatsApp üzerinden fotoğraflarınızı ve röntgeninizi ileterek 24 saat içinde kişiye özel tedavi planınızı ve fiyat teklifinizi alabilirsiniz.',
      },
    ],
  },
  de: {
    title: 'Häufig gestellte Fragen zu Zahnbehandlungen in Istanbul',
    subText:
      'Alles über Ihre Zahnreise nach Istanbul, Behandlungszeiten, Materialien, Garantien und VIP-Gesundheitstourismus.',
    items: [
      {
        q: 'Woher weiß ich, welche Zahnbehandlung für mich die richtige ist?',
        a: 'Vor Ihrer Reise führt unser Ärzteteam eine digitale Beratung anhand Ihrer Röntgenbilder und Fotos durch und erstellt einen maßgeschneiderten Behandlungsplan.',
      },
      {
        q: 'Warum sind Behandlungen in Istanbul bis zu 70% günstiger als in Europa?',
        a: 'Die Ersparnis basiert auf niedrigeren Betriebskosten und Wechselkursen in der Türkei — bei absolut kompromissloser Qualität mit Schweizer Straumann und deutschem Zirkon.',
      },
      {
        q: 'Wie viele Tage Aufenthalt in Istanbul sind erforderlich?',
        a: 'Ästhetische Behandlungen (Veneers, Kronen, Brücken) dauern 4–6 Tage. Implantatbehandlungen erfolgen in 2 kurzen Reisen (1. Reise: 3 Tage; 2. Reise: 4–5 Tage).',
      },
      {
        q: 'Ist die Zahnbehandlung bei Master Smile Studio schmerzhaft?',
        a: 'Nein. Alle Behandlungen erfolgen vollkommen schmerzfrei unter moderner Lokalanästhesie mit Sedierungsoption.',
      },
      {
        q: 'Welche Garantien werden auf Behandlungen gewährt?',
        a: 'Lebenslange internationale Garantie auf Zahnimplantate und 5 Jahre Qualitätsgarantie auf Zirkon- und E-Max Kronen.',
      },
      {
        q: 'Was ist in den VIP-Behandlungspaketen enthalten?',
        a: '5-Sterne-Hotel im Herzen Istanbuls, VIP-Transfers mit Mercedes, 3D-Diagnostik, Medikamente und deutschsprachige Betreuung.',
      },
      {
        q: 'Kann ich mein neues Lächeln vor der Behandlung in 3D sehen?',
        a: 'Ja! Mit 3D Digital Smile Design und einem Mock-Up im Mund sehen und testen Sie Ihr Lächeln vor Behandlungsbeginn im Spiegel.',
      },
      {
        q: 'Können mehrere Behandlungen kombiniert werden?',
        a: 'Ja, unser interdisziplinäres Fachärzteteam führt Implantate, Veneers und Kronen perfekt aufeinander abgestimmt in einer Reise durch.',
      },
      {
        q: 'Welche Materialien und Marken werden verwendet?',
        a: 'Ausschließlich Schweizer Straumann/Medentika Implantate, deutsches Amann Girrbach Zirkon und Schweizer Ivoclar E-Max Keramik.',
      },
      {
        q: 'Erhalte ich während der Wartezeit provisorische Zähne?',
        a: 'Ja, Sie verlassen die Klinik am ersten Tag mit ästhetischen Provisorien und sind zu keinem Zeitpunkt zahnlos.',
      },
      {
        q: 'Kann ich extra weiße Hollywood-Bleach-Töne (BL1–BL4) wählen?',
        a: 'Ja! Wir bieten die gesamte Bleach-Palette sowie alle natürlichen Vita-Farbtöne an.',
      },
      {
        q: 'Welche Zahlungsmethoden werden akzeptiert?',
        a: 'Kreditkarten (Visa, MasterCard), Banküberweisungen sowie Bargeld in EUR, USD und GBP.',
      },
      {
        q: 'Kann ich die Behandlung in Raten zahlen?',
        a: 'Ja, nach einer Anzahlung kann der Restbetrag auf die Behandlungstage in Istanbul aufgeteilt werden.',
      },
      {
        q: 'Welche Sterilisationsstandards gelten in der Klinik?',
        a: 'Europäische Krankenhaus-Hygienestandards mit B-Klasse Autoklaven und sterilen Einweg-Sets.',
      },
      {
        q: 'Ist eine Reise zur Zahnbehandlung nach Istanbul sicher?',
        a: 'Ja, Istanbul ist eine weltweite Metropole für Gesundheitstourismus. Mit eigenem Chauffeur und Koordinator verläuft Ihre Reise absolut sicher.',
      },
      {
        q: 'Wie erhalte ich ein kostenloses Angebot?',
        a: 'Senden Sie uns einfach Ihre Röntgenbilder per Formular oder WhatsApp für einen detaillierten Behandlungsplan innerhalb von 24 Stunden.',
      },
    ],
  },
  pl: {
    title: 'Często Zadawane Pytania o Leczenie Stomatologiczne w Stambule',
    subText:
      'Wszystko o planowaniu podróży do Stambułu, czasie trwania leczenia, materiałach, gwarancjach i pakietach VIP.',
    items: [
      {
        q: 'Skąd mam wiedzieć, jaki zabieg jest dla mnie odpowiedni?',
        a: 'Nasz zespół medyczny przeprowadza bezpłatną konsultację cyfrową na podstawie zdjęć RTG lub tomografii 3D przed Twoim przylotem do Stambułu.',
      },
      {
        q: 'Dlaczego leczenie w Stambule jest o 70% tańsze niż w Polsce i Europie Zachodniej?',
        a: 'Różnica wynika z niższych kosztów operacyjnych w Turcji przy zachowaniu najwyższej jakości materiałów Straumann i Ivoclar E-Max.',
      },
      {
        q: 'Ile dni trwa pobyt w Stambule?',
        a: 'Licówki i korony cyrkonowe: 4–6 dni. Implanty zębowe: 2 krótkie wizyty (1. wizyta: 3 dni na implantację; 2. wizyta: 4–5 dni na zęby stałe).',
      },
      {
        q: 'Czy zabiegi w Master Smile Studio są bolesne?',
        a: 'Nie, wszystkie zabiegi są w 100% bezbolesne w znieczuleniu miejscowym z opcją sedacji.',
      },
      {
        q: 'Jakie gwarancje otrzymuję na leczenie?',
        a: 'Dożywotnią międzynarodową gwarancję na implanty tytanowe oraz 5 lat oficjalnej gwarancji na korony i licówki.',
      },
      {
        q: 'Co zawierają pakiety VIP All-Inclusive?',
        a: 'Hotel 5★ w centrum Stambułu, prywatne transfery Mercedesem VIP, tomografię 3D, leki i polskojęzyczną opiekę.',
      },
      {
        q: 'Czy mogę zobaczyć nowy uśmiech w 3D przed rozpoczęciem prac?',
        a: 'Tak! Dzięki Cyfrowemu Projektowaniu Uśmiechu (DSD) i przymiarce Mock-Up oceniasz zęby w lustrze przed szlifowaniem.',
      },
      {
        q: 'Czy można łączyć różne zabiegi podczas jednego wyjazdu?',
        a: 'Tak, wykonujemy kompleksowe metamorfozy łączące implanty, licówki i wybielanie.',
      },
      {
        q: 'Jakich marek i materiałów używacie?',
        a: 'Szwajcarskie implanty Straumann, niemiecki tlenek cyrkonu Amann Girrbach i ceramika Ivoclar E-Max.',
      },
      {
        q: 'Czy dostanę zęby tymczasowe?',
        a: 'Tak, zęby tymczasowe montowane są na pierwszej wizycie, więc ani przez chwilę nie pozostajesz bez zębów.',
      },
      {
        q: 'Czy mogę wybrać śnieżnobiały odcień Hollywood Bleach (BL1–BL4)?',
        a: 'Tak! Posiadamy pełną paletę odcieni Bleach oraz klasyczne odcienie naturalne Vita.',
      },
      {
        q: 'Jakie metody płatności są akceptowane?',
        a: 'Karty kredytowe (Visa, MasterCard), przelewy oraz gotówka w EUR, USD, GBP i PLN.',
      },
      {
        q: 'Czy mogę płacić w ratach?',
        a: 'Tak, po wpłacie zaliczki reszta kwoty jest dzielona na kolejne wizyty w klinice.',
      },
      {
        q: 'Jakie standardy higieny obowiązują w klinice?',
        a: 'Szpitalne standardy sterylizacji w autoklawach klasy B i jednorazowe pakiety chirurgiczne.',
      },
      {
        q: 'Czy podróż do Stambułu na leczenie zębów jest bezpieczna?',
        a: 'Tak, Stambuł to światowa stolica turystyki medycznej. Z prywatnym kierowcą i koordynatorem podróż jest w pełni komfortowa.',
      },
      {
        q: 'Jak uzyskać darmową wycenę i plan leczenia?',
        a: 'Prześlij nam zdjęcie RTG przez formularz lub WhatsApp, a przygotujemy plan leczenia w 24 godziny.',
      },
    ],
  },
  pt: {
    title: 'Perguntas Frequentes Sobre Tratamentos Dentários em Istambul',
    subText:
      'Tudo sobre sua viagem odontológica a Istambul, prazos de tratamento, materiais, garantias e turismo médico VIP.',
    items: [
      {
        q: 'Como saber qual tratamento é o mais indicado para mim?',
        a: 'Nossa equipe realiza uma pré-avaliação digital completa através de suas radiografias ou fotos antes de sua viagem a Istambul.',
      },
      {
        q: 'Por que os tratamentos em Istambul são até 70% mais econômicos?',
        a: 'Devido aos custos operacionais menores na Turquia, mantendo 100% da qualidade com materiais suíços Straumann e zircônia alemã.',
      },
      {
        q: 'Quantos dias preciso ficar em Istambul?',
        a: 'Facetas e coroas: 4–6 dias em viagem única. Implante de arcada total: 2 viagens curtas (1ª viagem: 3 dias; 2ª viagem: 4–5 dias).',
      },
      {
        q: 'O tratamento na Master Smile Studio dói?',
        a: 'Não, todos os procedimentos são 100% indolores com anestesia local de ponta e opção de sedação consciente.',
      },
      {
        q: 'Quais garantias são oferecidas nos tratamentos?',
        a: 'Garantia Vitalícia nos implantes de titânio e 5 anos de garantia clínica nas coroas de zircônia e facetas E-Max.',
      },
      {
        q: 'O que está incluído nos pacotes VIP All-Inclusive?',
        a: 'Hotel 5★ no centro de Istambul, traslados privativos em Mercedes VIP, tomografia 3D, medicamentos e suporte em português.',
      },
      {
        q: 'Posso ver meu novo sorriso em 3D antes de começar?',
        a: 'Sim! Com o Design Digital 3D (DSD) e o teste Mock-Up em boca, você aprova forma e cor no espelho antes do procedimento.',
      },
      {
        q: 'É possível combinar diferentes procedimentos na mesma viagem?',
        a: 'Sim, nossa equipe multidisciplinar integra implantes, facetas e clareamento em um único plano coordenado.',
      },
      {
        q: 'Quais marcas e materiais são utilizados?',
        a: 'Implantes suíços Straumann/Medentika, zircônia alemã Amann Girrbach e cerâmica pura Ivoclar E-Max.',
      },
      {
        q: 'Ficarei sem dentes durante o tratamento?',
        a: 'Não, instalamos dentes provisórios imediatos no primeiro dia de atendimento.',
      },
      {
        q: 'Posso escolher tons super brancos Hollywood (BL1 a BL4)?',
        a: 'Sim! Oferecemos toda a escala Bleach e tons naturais Vita com suporte de especialistas.',
      },
      {
        q: 'Quais métodos de pagamento são aceitos?',
        a: 'Cartões de crédito (Visa, MasterCard), transferências bancárias e dinheiro em EUR, USD e GBP.',
      },
      {
        q: 'Posso parcelar meu tratamento?',
        a: 'Sim, o pagamento é dividido de forma escalonada entre suas consultas em Istambul.',
      },
      {
        q: 'Quais os padrões de esterilização da clínica?',
        a: 'Protocolos hospitalares europeus com autoclaves de Classe B e kits cirúrgicos descartáveis.',
      },
      {
        q: 'É seguro viajar para Istambul para tratamento dentário?',
        a: 'Sim, Istambul é o maior polo de turismo de saúde da Europa com estrutura moderna e total segurança.',
      },
      {
        q: 'Como solicitar um orçamento gratuito?',
        a: 'Envie suas fotos ou raio-X pelo formulário ou WhatsApp e receba seu plano detalhado em até 24 horas.',
      },
    ],
  },
  es: {
    title: 'Preguntas Frecuentes Sobre Tratamientos Dentales en Estambul',
    subText:
      'Todo lo que necesita saber sobre su viaje dental a Estambul, duración de tratamientos, materiales, garantías y turismo médico VIP.',
    items: [
      {
        q: '¿Cómo sé cuál es el tratamiento dental adecuado para mí?',
        a: 'Nuestro equipo médico realiza una valoración digital previa mediante sus radiografías o fotografías antes de su llegada a Estambul.',
      },
      {
        q: '¿Por qué los tratamientos en Estambul son hasta un 70% más asequibles?',
        a: 'Por los menores costes operativos en Turquía, utilizando siempre las mejores marcas europeas como Straumann e Ivoclar E-Max.',
      },
      {
        q: '¿Cuántos días de estancia en Estambul se necesitan?',
        a: 'Carillas y coronas: 4–6 días en un solo viaje. Implantes de arcada completa: 2 viajes cortos (1º viaje: 3 días; 2º viaje: 4–5 días).',
      },
      {
        q: '¿Es doloroso el tratamiento en Master Smile Studio?',
        a: 'No, todos los procedimientos son 100% indoloros con anestesia local suave y opción de sedación.',
      },
      {
        q: '¿Qué garantías tienen los tratamientos dentales?',
        a: 'Garantía de por Vida en implantes de titanio y 5 Años de Garantía Oficial en coronas de zirconio y carillas E-Max.',
      },
      {
        q: '¿Qué incluyen los paquetes VIP Todo Incluido?',
        a: 'Hotel de 5 estrellas en el centro de Estambul, traslados privados en Mercedes VIP, TAC 3D, medicamentos y atención en español.',
      },
      {
        q: '¿Puedo ver mi nueva sonrisa en 3D antes de comenzar?',
        a: '¡Sí! Con el Diseño Digital 3D (DSD) y la prueba Mock-Up, evaluará el resultado en el espejo antes de iniciar cualquier tallado.',
      },
      {
        q: '¿Se pueden combinar diferentes tratamientos en el mismo viaje?',
        a: 'Sí, nuestros cirujanos y protesistas coordinan implantes, carillas y blanqueamiento en un único plan de viaje.',
      },
      {
        q: '¿Qué marcas y materiales emplean en la clínica?',
        a: 'Implantes suizos Straumann/Medentika, zirconio alemán Amann Girrbach y cerámica Ivoclar E-Max pura.',
      },
      {
        q: '¿Me quedaré sin dientes durante el proceso?',
        a: 'No, colocamos dientes provisionales estéticos desde la primera cita.',
      },
      {
        q: '¿Puedo elegir tonos blancos Hollywood como BL1 o BL2?',
        a: '¡Sí! Disponemos de la gama completa Bleach (BL1 a BL4) y todos los tonos naturales de la guía Vita.',
      },
      {
        q: '¿Qué formas de pago aceptan?',
        a: 'Tarjetas de crédito (Visa, MasterCard), transferencias bancarias y efectivo en EUR, USD y GBP.',
      },
      {
        q: '¿Se puede pagar a plazos el tratamiento?',
        a: 'Sí, el importe se abona de manera escalonada en cada fase del tratamiento en Estambul.',
      },
      {
        q: '¿Qué normas de esterilización se siguen en la clínica?',
        a: 'Protocolos hospitalarios europeos con autoclaves de Clase B y material quirúrgico estéril desechable.',
      },
      {
        q: '¿Es seguro viajar a Estambul para recibir atención dental?',
        a: 'Sí, Estambul es un destino líder mundial en turismo de salud con atención privada VIP y total seguridad.',
      },
      {
        q: '¿Cómo puedo solicitar un presupuesto gratuito?',
        a: 'Envíe sus radiografías por formulario o WhatsApp para recibir un plan de tratamiento en 24 horas.',
      },
    ],
  },
  ru: {
    title: 'Часто задаваемые вопросы о стоматологическом лечении в Стамбуле',
    subText:
      'Все о планировании вашей поездки в Стамбул, сроках лечения, материалах, международных гарантиях и VIP-сервисе.',
    items: [
      {
        q: 'Как узнать, какое стоматологическое лечение мне подходит?',
        a: 'Перед поездкой наша команда врачей проводит цифровую консультацию на основе ваших снимков КТ или панорамного рентгена.',
      },
      {
        q: 'Почему лечение в Стамбуле выгоднее до 70% по сравнению с Европой?',
        a: 'Благодаря оптимизации операционных расходов в Турции при сохранении эталонного качества швейцарских имплантов Straumann и немецкого циркония.',
      },
      {
        q: 'Сколько дней необходимо провести в Стамбуле?',
        a: 'Виниры и коронки: 4–6 дней за 1 визит. Полная имплантация челюсти: 2 коротких визита (1-й визит: 3 дня; 2-й визит: 4–5 дней).',
      },
      {
        q: 'Болезненно ли лечение в клинике Master Smile Studio?',
        a: 'Нет, все процедуры на 100% безболезненны благодаря современной анестезии и возможности седации во сне.',
      },
      {
        q: 'Какая гарантия предоставляется на выполненные работы?',
        a: 'Пожизненная международная гарантия на имплантаты и 5 лет официальной гарантии на циркониевые коронки и виниры E-Max.',
      },
      {
        q: 'Что входит в пакеты медицинского туризма «Все включено»?',
        a: 'Отель 5★ в центре Стамбула, VIP-трансфер на автомобилях Mercedes, томография 3D, медикаменты и русскоговорящий куратор.',
      },
      {
        q: 'Могу ли я увидеть будущую улыбку в 3D до начала процедур?',
        a: 'Да! Цифровой дизайн 3D DSD и макет Mock-Up позволяют примерить зубы и утвердить форму до начала работы.',
      },
      {
        q: 'Можно ли совместить несколько процедур в одну поездку?',
        a: 'Да, наши хирурги и ортопеды проводят комплексное лечение (имплантация, виниры, коронки) по единому плану.',
      },
      {
        q: 'Какие бренды и материалы используются?',
        a: 'Швейцарские импланты Straumann, немецкий цирконий Amann Girrbach и стеклокерамика Ivoclar E-Max.',
      },
      {
        q: 'Будут ли установлены временные зубы?',
        a: 'Да, временные эстетические реставрации ставятся в первый день, и вы ни дня не остаетесь без зубов.',
      },
      {
        q: 'Можно ли выбрать белоснежные оттенки Bleach (BL1–BL4)?',
        a: 'Да! Доступна вся шкала ультрабелых оттенков Bleach и естественные тона Vita.',
      },
      {
        q: 'Какие способы оплаты принимаются?',
        a: 'Банковские карты (Visa, MasterCard), переводы и наличные в EUR, USD, GBP и RUB.',
      },
      {
        q: 'Возможна ли поэтапная оплата?',
        a: 'Да, оплата делится на части и вносится по дням приемов в клинике.',
      },
      {
        q: 'Какие стандарты стерилизации соблюдаются?',
        a: 'Европейские госпитальные стандарты с автоклавами класса B и одноразовыми хирургическими наборами.',
      },
      {
        q: 'Безопасно ли приезжать в Стамбул на лечение зубов?',
        a: 'Да, Стамбул — мировой лидер медицинского туризма с высочайшим уровнем сервиса и безопасности.',
      },
      {
        q: 'Как получить бесплатный расчет стоимости лечения?',
        a: 'Отправьте снимок зубов через интерактивную форму или WhatsApp для получения плана лечения за 24 часа.',
      },
    ],
  },
};

export default function TreatmentsHubFAQSection() {
  const locale = useLocale();
  const dict = HUB_FAQ_DATA[locale] || HUB_FAQ_DATA.en;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section aria-labelledby="hub-faq-heading" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div>
            <h2 id="hub-faq-heading" className={styles.title}>
              {dict.title}
            </h2>
          </div>
          <div>
            <p className={styles.subText}>{dict.subText}</p>
          </div>
        </div>

        <div className={styles.accordion}>
          {dict.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`${styles.item} ${isOpen ? styles.itemActive : ''}`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className={styles.itemHeader}
                  aria-expanded={isOpen}
                  aria-controls={`hub-faq-answer-${idx}`}
                >
                  <span className={styles.questionText}>{item.q}</span>
                  <span
                    className={`${styles.iconBadge} ${
                      isOpen ? styles.iconBadgeActive : ''
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="14"
                      height="14"
                      fill="currentColor"
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`hub-faq-answer-${idx}`}
                    className={styles.contentBox}
                  >
                    {typeof item.a === 'string' ? <p>{item.a}</p> : item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
