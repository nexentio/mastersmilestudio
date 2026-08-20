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

export const CLINICAL_GUIDES_ARTICLES: Record<string, BlogDetailArticle> = {
  // BOTCHED TURKEY TEETH
  'botched-turkey-teeth-warning-signs': {
    slug: 'botched-turkey-teeth-warning-signs',
    category: 'turkey-teeth',
    image: '/blog/botched-turkey-teeth.jpg',
    publishDate: '2026-07-15',
    readTime: '9 min read',
    author: AUTHOR_DATA,
    stats: [
      {
        value: '70%+',
        label: {
          en: 'Tooth structure shaved down in aggressive crown preparations vs only 5-10% in laminate veneers',
          tr: 'Agresif kron kesiminde kaybedilen diş dokusu oranı (%70+); lamine kaplamada ise yalnızca %5-10',
          de: 'Zahnsubstanzabtrag bei aggressiven Kronen vs. 5-10% bei echten Laminat-Veneers',
          pl: 'Utrata tkanek zęba przy agresywnym szlifowaniu pod korony vs 5-10% przy licówkach',
          pt: 'Desgaste da estrutura dental em coroas agressivas vs apenas 5-10% em facetas laminadas',
          es: 'Pérdida de tejido dental en coronas agresivas vs solo 5-10% en carillas laminadas',
          ru: 'Объем спиливания тканей зуба при агрессивных коронках против 5-10% при винирах',
        },
      },
      {
        value: 'Biological Width',
        label: {
          en: 'The 2mm critical gum seal violated by cheap clinics causing chronic bleeding and odor',
          tr: 'Ucuz kliniklerin ihlal ettiği ve kronik kanama ile kokuya yol açan 2 mm biyolojik genişlik kuralı',
          de: 'Biologische Breite (2mm) als entscheidender Schutz vor Entzündungen',
          pl: 'Szerokość biologiczna (2mm) naruszana przez tanie kliniki powodująca krwawienie',
          pt: 'Espaço biológico (2mm) violado por clínicas low-cost causando sangramento crónico',
          es: 'Anchura biológica (2mm) violada en clínicas low-cost causando inflamación y sangrado',
          ru: 'Биологическая ширина (2 мм), нарушение которой вызывает хроническое воспаление десны',
        },
      },
      {
        value: '100% E-Max',
        label: {
          en: 'Master Smile Studio standard: minimally invasive Swiss E-Max preserving natural tooth nerves',
          tr: 'Master Smile Studio standardı: Diş sinirlerini %100 koruyan minimal invaziv İsviçre E-Max',
          de: 'Master Smile Studio Standard: Minimalinvasives Schweizer E-Max mit Nervenerhalt',
          pl: 'Standard Master Smile Studio: Minimalnie inwazyjny szwajcarski E-Max z ochroną miazgi',
          pt: 'Padrão Master Smile Studio: E-Max suíço minimamente invasivo preservando a polpa',
          es: 'Estándar Master Smile Studio: E-Max suizo mínimamente invasivo que protege el nervio',
          ru: 'Стандарт Master Smile Studio: ультратонкий швейцарский E-Max с сохранением нервов',
        },
      },
    ],
    intro: {
      en: [
        "The term 'Turkey Teeth' has generated immense global attention across TikTok, news documentaries, and dental forums. While tens of thousands of international patients travel to Antalya each year and achieve world-class, life-changing dental transformations, aggressive cut-price clinics have also caused serious dental trauma by mislabeling invasive full-coverage crowns as 'veneers.'",
        "Understanding the clinical difference between true minimally invasive [porcelain laminate veneers](/treatments/porcelain-laminate-veneers) (which preserve 90% to 95% of natural tooth enamel) and aggressive crown preparations (which reduce natural teeth into tiny 'shark peg' pegs) is essential for any patient considering dental tourism.",
        "In this definitive clinical guide, the Master Smile Studio Medical Board outlines the critical warning signs of botched dental treatments, the biological importance of the gingival seal, and how our Antalya specialists perform corrective revision procedures to restore oral health.",
      ],
      tr: [
        "'Turkey Teeth' kavramı son yıllarda TikTok videolarından İngiliz televizyon belgesellerine kadar tüm dünyada en çok tartışılan sağlık turizmi konularından biri haline geldi. Her yıl yüz binlerce uluslararası hasta Antalya'ya gelerek dünya standartlarında ve hayallerindeki gülüşe kavuşurken; yetkisiz ve ucuz klinikler gerçekte tam kaplama (kron) olan agresif kesimleri 'lamine veneer' diye pazarlayarak hastalarda telafisi güç zararlara yol açabilmektedir.",
        "Gerçek doku koruyucu [porselen lamine kaplamalar](/treatments/porcelain-laminate-veneers) (diş minesinin %90-95'ini korur) ile dişleri kibrit çöpü gibi küçülten agresif kron kesimleri arasındaki farkı bilmek, yurt dışında diş tedavisi düşünen her hasta için hayati önem taşır.",
        "Bu kapsamlı klinik rehberde Master Smile Studio Hekim Kurulu; hatalı diş tedavilerinin en yaygın erken belirtilerini, diş eti biyolojik genişliğinin önemini ve kliniğimizde uyguladığımız revizyon tedavilerini detaylarıyla açıklıyor.",
      ],
      de: [
        "Der Begriff 'Turkey Teeth' sorgt weltweit für Schlagzeilen. Während seriöse Kliniken in Antalya Spitzenleistungen erbringen, warnen Experten vor aggressiven Billiganbietern.",
        "Erfahren Sie die Unterschiede zwischen echten [Porzellan-Veneers](/treatments/porcelain-laminate-veneers) und aggressiven Zahnüberkronungen.",
      ],
      pl: [
        "Zjawisko 'Turkey Teeth' budzi wiele emocji. Dowiedz się, jak odróżnić bezpieczne licówki porcelanowe od agresywnego szlifowania pod korony.",
        "Poznaj standardy Master Smile Studio w Antalyi chroniące naturalne zęby pacjentów.",
      ],
      pt: [
        "O fenómeno 'Turkey Teeth' divide opiniões. Conheça a diferença entre facetas laminadas conservadoras e coroas agressivas.",
        "A equipa médica da Master Smile Studio apresenta os sinais de alerta de tratamentos mal executados.",
      ],
      es: [
        "El fenómeno 'Turkey Teeth' requiere información clínica veraz. Descubra la diferencia entre carillas conservadoras y coronas agresivas.",
        "Conozca cómo identificar clínicas seguras y proteger su salud dental en Antalya.",
      ],
      ru: [
        "Термин 'Turkey Teeth' стал вирусным. Разбираем разницу между щадящими керамическими винирами и опасной обточкой под коронки.",
        "Врачи Master Smile Studio объясняют правила безопасного стоматологического туризма в Турции.",
      ],
    },
    keyTakeaway: {
      en: 'Real porcelain veneers only require 0.3mm to 0.5mm micro-preparation of the outer enamel, never shaving teeth into tiny pegs. If a clinic recommends shaving down 20 healthy teeth for crowns without medical justification, it is an immediate clinical red flag.',
      tr: 'Gerçek porselen lamine kaplamalar (veneers) diş minesinden yalnızca 0.3 - 0.5 mm mikro aşındırma gerektirir; dişler asla kibrit çöpü gibi küçültülmez. Sağlıklı dişlerinizi kron yapmak için kesmeyi teklif eden yerler ciddi bir tıbbi tehlikedir.',
      de: 'Echte Veneers erfordern nur 0,3-0,5 mm Schmelzabtrag. Ein massives Beschleifen gesunder Zähne zu Stümpfen ist ein klares Warnsignal.',
      pl: 'Prawdziwe licówki wymagają mikro-szlifowania 0,3-0,5 mm szkliwa. Agresywne piłowanie zdrowych zębów to błąd w sztuce.',
      pt: 'As verdadeiras facetas requerem apenas 0,3 a 0,5 mm de desgaste. O desgaste excessivo de dentes saudáveis é um sinal de perigo.',
      es: 'Las carillas auténticas solo precisan de 0,3 a 0,5 mm de tallado en esmalte. El tallado agresivo en muñones es una mala praxis.',
      ru: 'Настоящие виниры требуют снятия всего 0.3–0.5 мм эмали. Агрессивная обточка живых зубов под культи недопустима.',
    },
    sections: [
      {
        id: 'warning-signs-checklist',
        heading: {
          en: 'Top 5 Warning Signs of a Botched Dental Treatment',
          tr: 'Hatalı Diş Tedavisinin En Önemli 5 Belirtisi',
          de: 'Die 5 wichtigsten Warnzeichen einer Fehlbehandlung',
          pl: '5 głównych objawów nieudanego leczenia stomatologicznego',
          pt: 'Os 5 Principais Sinais de Alerta de Tratamentos Mal Feitos',
          es: 'Los 5 Principales Signos de Alerta de un Tratamiento Defectuoso',
          ru: '5 главных признаков некачественного стоматологического лечения',
        },
        paragraphs: {
          en: [
            "1) Chronic Bleeding and Purple Gums: If dental margins impinge on the 2mm biological width of the periodontal attachment, the gum tissue remains chronically inflamed, bleeding upon the slightest touch.",
            "2) Persistent Bad Breath (Halitosis): Overhanging ceramic margins create inaccessible plaque traps where anaerobic bacteria produce foul-smelling volatile sulfur compounds.",
            "3) Throbbing Nerve Pain: Excessive uncooled drilling overheats the dental pulp, causing irreversible pulpitis and nerve death requiring root canal therapy.",
            "4) Monolithic Chalky Appearance: Cheap opaque zirconia blocks with zero translucency produce the unnatural 'piano key' smile.",
            "5) Speech Impediments (Lisping): Poorly designed palatal contours disrupt airflow and tongue placement during 'S', 'T', and 'Th' sounds.",
          ],
          tr: [
            "1) Sürekli Kanayan ve Moraran Diş Etleri: Kaplama kenarları diş etinin 2 mm'lik biyolojik genişlik sınırını ihlal ettiğinde diş etleri kronik olarak iltihaplanır ve kanar.",
            "2) Geçmeyen Ağız Kokusu: Diş ile kaplama arasında kalan mikro basamaklar, yemek artıklarının ve anaerobik bakterilerin birikmesine neden olarak kötü koku üretir.",
            "3) Zonklayan Diş Ağrısı ve Aşırı Sıcak-Soğuk Hassasiyeti: Diş kesimi sırasında yetersiz soğutma nedeniyle diş sinirinin (pulpa) yanması ve enfekte olması.",
            "4) Tebeşir Beyazı ve Düz Görünüm: Işık geçirgenliği olmayan ucuz monolitik blokların piyano tuşu gibi tek parça görünmesi.",
            "5) Pelteklik ve Konuşma Bozukluğu: Kaplamaların arka yüzeylerinin anatomik kurallara aykırı kalın yapılması sonucu dilin 'S' ve 'T' harflerini çıkaramaması.",
          ],
          de: [
            'Dazu gehören: Zahnfleischbluten, Mundgeruch durch überstehende Ränder, pochende Nervenschmerzen, unnatürliches Kreideweiß und Sprachfehler.',
          ],
          pl: [
            'Główne objawy to: krwawiące dziąsła, nieprzyjemny zapach z ust, ból miazgi, kredowa biel oraz wady wymowy.',
          ],
          pt: [
            'Sinais clínicos: gengivas inflamadas, mau hálito crónico, dor pulpar, aspeto monocromático e alterações na fala.',
          ],
          es: [
            'Signos de alarma: encías sangrantes, halitosis persistente, dolor pulpar agudo, blancura opaca y ceceo al hablar.',
          ],
          ru: [
            'Основные симптомы: кровоточивость десен, неприятный запах, пульсирующая боль, неестественная матовость и дефекты речи.',
          ],
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'Can botched Turkey Teeth be fixed?',
          tr: 'Hatalı yapılan diş kaplamaları ve Turkey Teeth düzeltilebilir mi?',
          de: 'Können verpfuschte Zahnbehandlungen korrigiert werden?',
          pl: 'Czy nieudane leczenie zębów w Turcji można naprawić?',
          pt: 'É possível corrigir dentes mal feitos na Turquia?',
          es: '¿Se pueden corregir los tratamientos dentales defectuosos?',
          ru: 'Можно ли исправить ошибки некачественного лечения зубов в Турции?',
        },
        a: {
          en: 'Yes. Master Smile Studio specializes in complex smile revisions. Our team carefully removes ill-fitting crowns, treats underlying gum inflammation, performs root canal therapies where necessary, and fabricates biocompatible Swiss E-Max or German Zirconia restorations with microscopic precision.',
          tr: 'Evet. Master Smile Studio, karmaşık revizyon tedavilerinde uzmanlaşmıştır. Hatalı kaplamalar mikroskop altında çıkarılır, diş eti tedavisi ve gerekiyorsa kanal tedavileri yapılır; ardından biyolojik genişliğe tam uyumlu İsviçre E-Max veya Alman Zirkonyum porselenlerle sağlıklı ve doğal bir gülüş inşa edilir.',
          de: 'Ja, durch mikroskopische Entfernung fehlerhafter Kronen, Zahnfleischtherapie und Neuanfertigung mit Schweizer E-Max Keramik.',
          pl: 'Tak, Master Smile Studio specjalizuje się w trudnych rewizjach z użyciem mikroskopu i biokompatybilnych materiałów.',
          pt: 'Sim, a Master Smile Studio realiza revisões complexas com remoção segura e novas facetas E-Max de alta precisão.',
          es: 'Sí, en Master Smile Studio somos especialistas en revisiones complejas devolviendo la salud gingival y estética natural.',
          ru: 'Да, мы специализируемся на перелечивании: снимаем старые коронки, лечим десны и устанавливаем точную швейцарскую керамику.',
        },
      },
    ],
  },
};
