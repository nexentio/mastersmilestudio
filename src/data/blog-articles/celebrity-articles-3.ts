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

export const CELEBRITY_ARTICLES_3: Record<string, BlogDetailArticle> = {
  // 5. TOM CRUISE
  'tom-cruise-teeth-story': {
    slug: 'tom-cruise-teeth-story',
    category: 'celebrities-teeth',
    image: '/blog/tom-cruise-teeth.webp',
    publishDate: '2026-07-27',
    readTime: '8 min read',
    author: AUTHOR_DATA,
    stats: [
      {
        value: '1983',
        label: {
          en: 'The Outsiders movie debut: severely chipped, discolored, and misaligned natural teeth',
          tr: 'The Outsiders filmi: kırık, renklenmiş ve çapraşık doğal dişlerle ilk çıkışı',
          de: 'The Outsiders Filmdebüt: Abgeplatzte und schiefe natürliche Zähne',
          pl: 'Debiut w The Outsiders: wyszczerbione i stłoczone zęby naturalne',
          pt: 'Estreia em The Outsiders: dentes lascados e desalinhados',
          es: 'Debut en The Outsiders: dientes astillados y desalineados',
          ru: 'Дебют в фильме «Изгои»: сколотые и неровные натуральные зубы',
        },
      },
      {
        value: 'Midline',
        label: {
          en: 'Famous dental facial asymmetry: maxillary central incisor aligned directly with nose bridge',
          tr: 'Ünlü orta hat kayması: üst orta kesici dişin doğrudan burun ucuyla hizalanması',
          de: 'Berühmte Mittellinienverschiebung: Zentraler Schneidezahn auf Nasenhöhe',
          pl: 'Słynne przesunięcie linii pośrodkowej: jedynka w osi nosa',
          pt: 'Famoso desvio da linha média: dente central alinhado com o nariz',
          es: 'Famosa desviación de línea media: paleta centrada con la nariz',
          ru: 'Знаменитое смещение центральной линии: резец прямо по центру носа',
        },
      },
      {
        value: '2002',
        label: {
          en: 'Space Age ceramic braces at age 40 during Minority Report premiere',
          tr: 'Minority Report galasında 40 yaşında taktığı şeffaf seramik ortodontik teller',
          de: 'Keramik-Zahnspange im Alter von 40 Jahren bei Minority Report',
          pl: 'Ceramiczny aparat ortodontyczny w wieku 40 lat na premierze Minority Report',
          pt: 'Aparelho cerâmico aos 40 anos na antestreia de Minority Report',
          es: 'Ortodoncia cerámica a los 40 años en el estreno de Minority Report',
          ru: 'Керамические брекеты в возрасте 40 лет на премьере «Особого мнения»',
        },
      },
    ],
    intro: {
      en: [
        "Tom Cruise is undoubtedly one of Hollywood’s most iconic leading men, celebrated for his death-defying Mission: Impossible stunts and unmistakable mega-watt grin. Yet, his dental journey is one of the most remarkable transformations in cosmetic dentistry history.",
        "When Tom Cruise began his acting career in 1983 with The Outsiders, he deliberately removed a temporary cap on his front tooth to showcase his natural, severely fractured, crowded, and discolored dental arch.",
        "In this clinical report, the Master Smile Studio Medical Board analyzes the orthodontic mechanics, midline deviation, and custom [porcelain laminate veneers](/treatments/porcelain-laminate-veneers) that crafted his legendary Hollywood smile.",
      ],
      tr: [
        "Tom Cruise, Mission: Impossible serisindeki tehlikeli dublörsüz sahneleri ve ikonik gülüşüyle sinema tarihinin en büyük yıldızlarından biridir. Ancak gülüşünün geçmişi, estetik diş hekimliğinin en ilginç ve öğretici vakalarından birini oluşturur.",
        "1983 yılında The Outsiders filminde oynarken kırık, sararmış ve çapraşık dişlerini çekinmeden sergileyen Cruise, yıllar içinde Hollywood'un en tanınan gülüşüne kavuşmuştur.",
        "Bu klinik incelemede Master Smile Studio Hekim Kurulu; orta hat kayması mekaniğini, 40 yaşında taktığı seramik telleri ve [porselen lamine kaplamalar](/treatments/porcelain-laminate-veneers) ile elde edilen estetik dengeyi inceliyor.",
      ],
      de: [
        "Tom Cruises Zähne gehören zu den meistdiskutierten Lächeln Hollywoods. Von abgebrochenen Zähnen in den 80ern bis zur Mittellinienverschiebung.",
        "Erfahren Sie, wie moderne [Porzellan-Veneers](/treatments/porcelain-laminate-veneers) und Kieferorthopädie sein weltberühmtes Lächeln formten.",
      ],
      pl: [
        "Historia uśmiechu Toma Cruise'a to jedna z najbardziej spektakularnych metamorfoz w historii kina.",
        "Analizujemy przesunięcie linii pośrodkowej oraz zastosowanie [licówek porcelanowych](/treatments/porcelain-laminate-veneers).",
      ],
      pt: [
        "A transformação dental de Tom Cruise desde 1983 é um marco na odontologia estética.",
        "Conheça o papel da ortodontia e das [facetas de porcelana](/treatments/porcelain-laminate-veneers) no seu sorriso icónico.",
      ],
      es: [
        "La evolución dental de Tom Cruise desde 1983 es uno de los casos más fascinantes de Hollywood.",
        "Descubra los secretos de su diseño de sonrisa con [carillas de porcelana](/treatments/porcelain-laminate-veneers).",
      ],
      ru: [
        "История зубов Тома Круза — классический пример того, как эстетическая стоматология создает звездный образ.",
        "Разбираем асимметрию центральной линии и установку [керамических виниров](/treatments/porcelain-laminate-veneers).",
      ],
    },
    keyTakeaway: {
      en: 'Tom Cruise proves that slight facial-dental asymmetry (like a shifted midline) can still produce a world-class charismatic smile when tooth symmetry, optical translucency, and arch width are perfected with porcelain veneers.',
      tr: 'Tom Cruise vakası; orta hat kayması gibi küçük asimetrilerin bile diş formu, ışık geçirgenliği ve porselen laminalarla dengelendiğinde son derece karizmatik bir Hollywood gülüşü yaratabileceğinin en büyük kanıtıdır.',
      de: 'Asymmetrien wie eine verschobene Mittellinie können durch perfekte Zahnkonturen und Transluzenz meisterhaft harmonisiert werden.',
      pl: 'Nawet przesunięta linia pośrodkowa może wyglądać olśniewająco dzięki idealnemu kształtowi i przezierności licówek.',
      pt: 'Pequenas assimetrias podem resultar num sorriso magnético quando a translucidez e anatomia das facetas são perfeitas.',
      es: 'Incluso con una línea media desviada, las carillas de porcelana estratificadas logran una sonrisa magnética.',
      ru: 'Асимметрия зубного ряда может выглядеть гармонично при правильной форме и прозрачности керамических виниров.',
    },
    sections: [
      {
        id: 'the-monotooth-midline',
        heading: {
          en: 'The "Middle Tooth" Phenomenon & Orthodontic Realignment',
          tr: 'Meşhur "Orta Diş" Fenomeni ve Ortodontik Düzenleme',
          de: 'Das Phänomen des „Mittelzahns“ & Kieferorthopädie',
          pl: 'Fenomen „środkowego zęba” i korekta ortodontyczna',
          pt: 'O Fenómeno do "Dente Central" e Realinhamento Ortodôntico',
          es: 'El Fenómeno del "Diente Central" y Realineación Ortodóncica',
          ru: 'Феномен «центрального зуба» и ортодонтическая коррекция',
        },
        paragraphs: {
          en: [
            "Following extraction of an infected damaged tooth in his youth, Tom Cruise’s remaining upper teeth drifted toward the center. This resulted in his upper left central incisor sitting directly on his facial vertical midline.",
            "In 2002, at age 40, Cruise proudly wore ceramic braces on red carpets to expand his buccal corridors and optimize interproximal spaces. Afterward, high-translucency [E-Max porcelain veneers](/treatments/porcelain-laminate-veneers) were bonded to balance his smile arc, creating the bright, confident look seen today.",
          ],
          tr: [
            "Gençliğinde hasar gören bir dişinin çekilmesi sonucu üst dişleri merkeze doğru kaymış ve sol üst kesici dişi tam yüz ortasına denk gelmiştir.",
            "2002 yılında 40 yaşındayken kırmızı halıda cesurca şeffaf seramik teller takan Cruise, diş kavisini genişletmiş; ardından uygulanan [İsviçre E-Max porselen laminalar](/treatments/porcelain-laminate-veneers) ile ışıl ışıl ve dengeli bir gülüşe kavuşmuştur.",
          ],
          de: [
            'Nach einem Zahnverlust verschob sich die Zahnreihe. Mit 40 Jahren trug Cruise eine Keramikspange, gefolgt von E-Max Veneers.',
          ],
          pl: [
            'Po utracie zęba w młodości linia zębów przesunęła się. W wieku 40 lat założył aparat, a następnie licówki E-Max.',
          ],
          pt: [
            'Após a perda de um dente na juventude, os dentes desviaram-se. Aos 40 anos usou aparelho cerâmico e colocou facetas E-Max.',
          ],
          es: [
            'Tras perder una pieza en la juventud, sus dientes se desplazaron. A los 40 años llevó ortodoncia y luego carillas E-Max.',
          ],
          ru: [
            'После удаления травмированного зуба ряд сместился. В 40 лет актер прошел курс брекетов и установил виниры E-Max.',
          ],
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'Why is Tom Cruise’s front tooth in the middle of his face?',
          tr: 'Tom Cruise’un ön dişi neden yüzünün tam ortasındadır?',
          de: 'Warum sitzt Tom Cruises Schneidezahn in der Gesichtsmitte?',
          pl: 'Dlaczego ząb Toma Cruise’a znajduje się na środku twarzy?',
          pt: 'Por que o dente frontal de Tom Cruise está no meio do rosto?',
          es: '¿Por qué el diente frontal de Tom Cruise está en el centro de su cara?',
          ru: 'Почему передний зуб Тома Круза находится ровно по центру лица?',
        },
        a: {
          en: 'Due to early tooth extraction without immediate space maintenance, his dental arch drifted to the left. Cosmetic dentists preserved his facial character while perfecting tooth shade, texture, and proportion with porcelain veneers.',
          tr: 'Genç yaşta çekilen bir dişin ardından yer tutucu kullanılmadığı için tüm diş dizisi sola kaymıştır. Estetik hekimler bu karakteristik özelliği koruyarak porselen laminalarla kusursuz beyazlık ve estetik kazandırmıştır.',
          de: 'Ein früher Zahnverlust führte zur Verschiebung; Veneers perfektionierten Farbe und Form.',
          pl: 'Wczesna ekstrakcja spowodowała przesunięcie łuku; licówki nadały idealną biel i harmonię.',
          pt: 'A perda precoce de um dente deslocou a arcada; as facetas devolveram brilho e proporção.',
          es: 'La pérdida temprana de un diente desvió la arcada; las carillas perfeccionaron el color y la forma.',
          ru: 'Раннее удаление зуба привело к смещению ряда; виниры обеспечили идеальную белизну и пропорции.',
        },
      },
    ],
  },
};
