import { BlogDetailArticle } from '../blog-detail-data';

const AUTHOR_DATA = {
  name: 'Master Smile Studio Medical Board',
  title: {
    en: 'Aesthetic Dentistry & Oral Surgery Team, Antalya',
    tr: 'Estetik Diş Hekimliği & Cerrahi Kurulu, Antalya',
    de: 'Ästhetische Zahnmedizin & Chirurgie-Team, Antalya',
    pl: 'Zespół Stomatologii Estetycznej i Chirurgii, Antalya',
    pt: 'Equipa de Estética Dentária e Cirurgia, Antalya',
    es: 'Equipo de Odontología Estética y Cirugía, Antalya',
    ru: 'Команда эстетической стоматологии и хирургии, Анталья',
  },
  avatar: '/mastersmilestudio-logo.png',
};

export const CELEBRITY_ARTICLES_PART2: Record<string, BlogDetailArticle> = {
  // MATTHEW PERRY
  'matthew-perry-teeth-transformation': {
    slug: 'matthew-perry-teeth-transformation',
    category: 'celebrities-teeth',
    image: '/blog/matthew-perry-smile.webp',
    publishDate: '2026-07-28',
    readTime: '8 min read',
    author: AUTHOR_DATA,
    stats: [
      {
        value: 'Friends Era',
        label: {
          en: 'Chandler Bing signature natural smile during the 1990s and early 2000s',
          tr: '1990’lar ve 2000’lerin başında Friends dizisindeki doğal Chandler Bing gülüşü',
          de: 'Natürliches Chandler Bing Lächeln in den 90er und 2000er Jahren',
          pl: 'Naturalny uśmiech Chandlera Binga z lat 90. i początku 2000.',
          pt: 'Sorriso natural de Chandler Bing nos anos 90 e início dos anos 2000',
          es: 'Sonrisa natural de Chandler Bing en los 90 y principios de los 2000',
          ru: 'Естественная улыбка Чендлера Бинга в 90-х и начале 2000-х годов',
        },
      },
      {
        value: 'Full Rehab',
        label: {
          en: 'Comprehensive full-mouth reconstruction following severe dental erosion and tooth loss',
          tr: 'Şiddetli diş erozyonu ve diş kayıpları sonrası tam ağız cerrahi ve estetik rehabilitasyon',
          de: 'Vollständige Rekonstruktion nach Zahnerosion und Zahnverlust',
          pl: 'Kompleksowa rekonstrukcja po erozji szkliwa i utracie zębów',
          pt: 'Reabilitação total após erosão severa e perda dentária',
          es: 'Rehabilitación integral tras erosión severa y pérdida dental',
          ru: 'Полная реабилитация после генерализованной эрозии и потери зубов',
        },
      },
      {
        value: 'Zirconia + Implants',
        label: {
          en: 'Restoration using titanium implants and biocompatible monolithic zirconia bridges',
          tr: 'Titanyum implantlar ve biyouyumlu monolitik zirkonyum köprülerle kalıcı restorasyon',
          de: 'Festsitzende Versorgung mit Implantaten und Zirkonbrücken',
          pl: 'Odbudowa na implantach tytanowych i mostach cyrkonowych',
          pt: 'Restauração com implantes de titânio e pontes de zircónia',
          es: 'Restauración fija con implantes de titanio y puentes de circonio',
          ru: 'Восстановление на титановых имплантах и циркониевых мостовидных протезах',
        },
      },
    ],
    intro: {
      en: [
        "Matthew Perry touched millions of lives worldwide as the quick-witted, lovable Chandler Bing on the hit sitcom Friends. While his comedic timing brought joy to fans across generations, Perry candidly shared his private health battles, including severe dental health complications, in his memoir.",
        "Years of gastrointestinal reflux, prescription medications causing dry mouth (xerostomia), and bruxism led to extensive enamel erosion, tooth fractures, and eventually significant tooth loss before a high-profile television interview in 2020.",
        "In this clinical retrospective, the Master Smile Studio Medical Board examines the dental mechanics of full-mouth reconstruction, detailing how [dental implants](/treatments/dental-implants) and [Zirconium bridges](/treatments/zirconium-crowns) restore eating ability, speech, and facial dignity.",
      ],
      tr: [
        "Matthew Perry, efsanevi Friends dizisinde canlandırdığı esprili ve sevecen Chandler Bing karakteriyle tüm dünyada milyonların kalbini kazandı. Ancak Perry, otobiyografisinde özel hayatındaki sağlık mücadelelerini ve yaşadığı ciddi diş problemlerini tüm samimiyetiyle paylaştı.",
        "Yıllarca süren mide reflüsü, ağız kuruluğu (kserostomi) yaratan ilaçlar ve diş sıkma problemleri; diş minesinde ileri derece erozyona, kırılmalara ve nihayetinde 2020 Friends Reunion öncesinde ön dişlerinin aniden dökülmesine yol açmıştı.",
        "Bu klinik vaka analizinde Master Smile Studio Hekim Kurulu; tam ağız implant tedavilerinin, [titanyum implantların](/treatments/dental-implants) ve [zirkonyum köprülerin](/treatments/zirconium-crowns) çiğneme fonksiyonunu ve yüz estetiğini nasıl sıfırdan geri kazandırdığını anlatıyor.",
      ],
      de: [
        "Matthew Perrys Zahngeschichte verdeutlicht, wie gravierende Schmelzerosion und Zahnverlust durch moderne Vollmundrekonstruktion geheilt werden können.",
        "Erfahren Sie, wie [Zahnimplantate](/treatments/dental-implants) und Zirkonbrücken Kaufunktion und Lebensqualität wiederherstellen.",
      ],
      pl: [
        "Historia leczenia stomatologicznego Matthew Perry'ego to poruszający przykład walki z erozją szkliwa i utratą zębów.",
        "Poznaj procedury pełnej rekonstrukcji na [implantach zębowych](/treatments/dental-implants) i koronach cyrkonowych.",
      ],
      pt: [
        "A jornada dental de Matthew Perry é um testemunho da importância da reabilitação oral completa após desgastes severos.",
        "Descubra o papel dos [implantes dentários](/treatments/dental-implants) e coroas de zircónia na recuperação funcional.",
      ],
      es: [
        "La historia dental de Matthew Perry muestra el poder de la reconstrucción bucal completa tras años de erosión dental.",
        "Analizamos el uso de [implantes dentales](/treatments/dental-implants) y puentes de circonio de alta resistencia.",
      ],
      ru: [
        "История зубов Мэттью Перри — наглядный пример комплексного восстановления зубов после тяжелой эрозии эмали.",
        "Разбираем тотальное протезирование на [зубных имплантах](/treatments/dental-implants) и циркониевых коронках.",
      ],
    },
    keyTakeaway: {
      en: 'Severe enamel destruction and sudden tooth loss can be permanently resolved through full-arch titanium dental implants and high-strength German Zirconia prosthetics, restoring full mastication and confident smiling.',
      tr: 'İleri derece diş erozyonu ve diş kayıpları; tam çene titanyum implantlar ve yüksek dayanımlı Alman Zirkonyum protezler sayesinde kalıcı olarak tedavi edilir, çiğneme fonksiyonu ve estetik %100 geri kazandırılır.',
      de: 'Schwere Zahnschäden lassen sich durch feste Implantatbrücken aus Zirkon dauerhaft und ästhetisch beheben.',
      pl: 'Całkowita utrata zębów może być trwale odbudowana za pomocą mostów cyrkonowych na implantach tytanowych.',
      pt: 'A perda dental severa é solucionada de forma definitiva com implantes e pontes de zircónia de alta resistência.',
      es: 'La destrucción dental avanzada se resuelve con éxito mediante implantes de titanio y prótesis de circonio fijas.',
      ru: 'Тяжелое разрушение зубного ряда устраняется несъемным протезированием на имплантах из диоксида циркония.',
    },
    sections: [
      {
        id: 'full-mouth-reconstruction-process',
        heading: {
          en: 'Full-Mouth Dental Rehabilitation: Implants & Zirconia',
          tr: 'Tam Ağız Diş Rehabilitasyonu: İmplantlar ve Zirkonyum Köprüler',
          de: 'Vollständige Mundrehabilitation: Implantate und Zirkon',
          pl: 'Pełna rehabilitacja stomatologiczna: Implanty i cyrkon',
          pt: 'Reabilitação Oral Completa: Implantes e Zircónia',
          es: 'Rehabilitación Bucal Completa: Implantes y Circonio',
          ru: 'Тотальная реабилитация полости рта: импланты и цирконий',
        },
        paragraphs: {
          en: [
            "When multiple teeth are lost or structurally compromised, individual fillings or veneers are no longer feasible. Instead, oral surgeons employ full-arch implant protocols such as [All-on-4](/treatments/all-on-4-implants) or [All-on-6 dental implants](/treatments/all-on-6-implants).",
            "Strategic placement of 4 to 6 titanium fixtures into the dense basal bone allows for an immediate fixed provisional prosthesis, followed by a permanent, monolithic Zirconia bridge with porcelain layering. This biocompatible structure provides lifelong biting strength exceeding 1,200 MPa.",
          ],
          tr: [
            "Çok sayıda diş kaybedildiğinde veya diş kökleri kurtarılamayacak duruma geldiğinde dolgu veya lamine kaplama yetersiz kalır. Bu gibi durumlarda cerrahlarımız [All-on-4](/treatments/all-on-4-implants) veya [All-on-6 diş implantı](/treatments/all-on-6-implants) protokollerini uygular.",
            "Çene kemiğine yerleştirilen 4 ila 6 adet titanyum implant üzerine, aynı hafta içinde sabit geçici dişler takılır. İyileşme sonrası 1.200 MPa kırılma direncine sahip monolitik Zirkonyum porselen köprüler vidalanarak ömür boyu kalıcı çiğneme gücü sağlanır.",
          ],
          de: [
            'All-on-4 oder All-on-6 Implantate ermöglichen feste Zähne an nur einem Tag mit hoher Kauleistung.',
          ],
          pl: [
            'Protokoły All-on-4 i All-on-6 pozwalają na natychmiastowe osadzenie stałych zębów na implantach.',
          ],
          pt: [
            'Os protocolos All-on-4 e All-on-6 garantem dentes fixos imediatos com resistência máxima.',
          ],
          es: [
            'Los sistemas All-on-4 y All-on-6 permiten colocar dientes fijos en el mismo día con máxima solidez.',
          ],
          ru: [
            'Методики All-on-4 и All-on-6 позволяют зафиксировать несъемный мост с прочностью свыше 1200 МПа.',
          ],
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'What caused Matthew Perry’s front teeth to fall out?',
          tr: 'Matthew Perry’nin ön dişlerinin dökülmesine ne sebep oldu?',
          de: 'Was führte zum Verlust von Matthew Perrys Vorderzähnen?',
          pl: 'Co spowodowało utratę przednich zębów u Matthew Perry’ego?',
          pt: 'O que causou a queda dos dentes frontais de Matthew Perry?',
          es: '¿Qué provocó la pérdida de los dientes frontales de Matthew Perry?',
          ru: 'Что стало причиной выпадения передних зубов у Мэттью Перри?',
        },
        a: {
          en: 'Perry revealed in his memoir that severe dental decay, bruxism, and chewing on toast caused his fragile anterior teeth to break shortly before filming the Friends Reunion in 2020, requiring emergency dental surgery.',
          tr: 'Perry anı kitabında; ileri derece diş zayıflığı, diş sıkma ve bir tost ısırırken ön dişlerinin kırıldığını, Friends Reunion çekimleri öncesinde acil diş cerrahisi geçirmek zorunda kaldığını belirtmiştir.',
          de: 'Starke Schmelzschwächung und Knirschen führten zum Bruch beim Kauen vor der Friends-Reunion 2020.',
          pl: 'Ciężkie osłabienie zębów i bruksizm doprowadziły do złamania zębów tuż przed nagraniami Friends Reunion.',
          pt: 'O desgaste extremo e o bruxismo causaram a fratura dos dentes antes da reunião de Friends em 2020.',
          es: 'La debilidad dental severa y el bruxismo provocaron la rotura de sus dientes antes del reencuentro de Friends.',
          ru: 'Хрупкость эмали и бруксизм привели к перелому зубов прямо перед съемками спецвыпуска «Друзей» в 2020 году.',
        },
      },
    ],
  },
};
