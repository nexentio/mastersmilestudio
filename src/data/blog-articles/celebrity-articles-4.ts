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

export const CELEBRITY_ARTICLES_4: Record<string, BlogDetailArticle> = {
  // 6. SCARLETT JOHANSSON
  'scarlett-johansson-teeth-veneers-smile-evolution-guide': {
    slug: 'scarlett-johansson-teeth-veneers-smile-evolution-guide',
    category: 'celebrities-teeth',
    image: '/blog/scarlett-johansson-smile.webp',
    publishDate: '2026-07-29',
    readTime: '8 min read',
    author: AUTHOR_DATA,
    stats: [
      {
        value: '1998',
        label: {
          en: 'The Horse Whisperer era: natural slightly uneven juvenile smile with small lateral incisors',
          tr: 'The Horse Whisperer dönemi: küçük yan kesici dişler ve doğal hafif çapraşık gençlik gülüşü',
          de: 'The Horse Whisperer Ära: Jugendliches Lächeln mit zierlichen seitlichen Schneidezähnen',
          pl: 'Era Zaklinacza Koni: młodzieńczy uśmiech z drobnymi dwójkami',
          pt: 'Era The Horse Whisperer: sorriso juvenil com incisivos laterais pequenos',
          es: 'Era de The Horse Whisperer: sonrisa juvenil con incisivos laterales reducidos',
          ru: 'Эра «Заклинателя лошадей»: юношеская улыбка с миниатюрными боковыми резцами',
        },
      },
      {
        value: 'Feminine Arc',
        label: {
          en: 'Gentle convex smile curve following the inner curvature of the lower lip',
          tr: 'Alt dudak kıvrımını mükemmel takip eden yumuşak ve feminen gülüş arkı',
          de: 'Feminine Lächeln-Kurve entlang der Unterlippe',
          pl: 'Subtelny, kobiecy łuk uśmiechu podążający za linią dolnej wargi',
          pt: 'Curvatura suave e feminina que acompanha o lábio inferior',
          es: 'Curva de sonrisa suave y femenina que sigue el labio inferior',
          ru: 'Мягкая женственная дуга улыбки, повторяющая контур нижней губы',
        },
      },
      {
        value: 'E-Max BL2',
        label: {
          en: 'Natural luxury bleach shade balancing red-carpet glamour with true organic realism',
          tr: 'Kırmızı halı ışıltısı ile organik doğallığı dengeleyen E-Max BL2 porselen tonu',
          de: 'Natürlicher Luxus-Bleachton E-Max BL2',
          pl: 'Luksusowy odcień E-Max BL2 łączący blask z naturalnym wyglądem',
          pt: 'Tom de porcelana luxuoso E-Max BL2 de alta naturalidade',
          es: 'Tono de porcelana de lujo E-Max BL2 con máxima naturalidad',
          ru: 'Премиальный оттенок E-Max BL2 с естественной прозрачностью',
        },
      },
    ],
    intro: {
      en: [
        "Scarlett Johansson is widely regarded as one of modern cinema’s most captivating leading ladies, known for iconic roles in Lost in Translation, Her, and Marvel's Avengers series. Her smile exudes timeless Hollywood glamour, elegance, and warmth.",
        "However, looking back at her early film career in the late 1990s reveals a distinct evolution. Her youthful teeth featured slightly uneven incisal edges, modest peg-shaped lateral incisors, and minor crowding.",
        "In this clinical aesthetic breakdown, the Master Smile Studio Medical Board examines the feminine smile arc design, micro-layering porcelain techniques, and subtle golden-ratio proportioning that created Scarlett Johansson's radiant smile.",
      ],
      tr: [
        "Scarlett Johansson, Lost in Translation, Her ve Marvel Avengers serisindeki unutulmaz rolleriyle modern sinemanın en büyüleyici kadın oyuncularından biridir. Gülüşü; zarafet, sıcaklık ve klasik Hollywood ışıltısının kusursuz bir birleşimidir.",
        "Ancak 1990'ların sonundaki ilk filmlerine bakıldığında belirgin bir estetik evrim görülür. Gençlik yıllarında yan kesici dişleri daha küçük, kesici kenarları hafif düzensiz ve doğal fildişi tonundaydı.",
        "Bu klinik estetik analizde Master Smile Studio Hekim Kurulu; feminen gülüş arkı tasarımını, mikro katmanlı porselen tekniklerini ve Scarlett Johansson'ın gülüşündeki altın oran detaylarını inceliyor.",
      ],
      de: [
        "Scarlett Johanssons Lächeln gilt als Inbegriff moderner Hollywood-Eleganz. Von zierlichen Zähnen in den 90ern bis zum perfekten Smile Arc.",
        "Erfahren Sie, wie feminine [Porzellan-Veneers](/treatments/porcelain-laminate-veneers) Gesichtszüge harmonisch unterstreichen.",
      ],
      pl: [
        "Uśmiech Scarlett Johansson to wzór kobiecej elegancji i harmonii. Analizujemy przejście od młodzieńczych nierówności do perfekcyjnych licówek E-Max.",
        "Poznaj zasady projektowania kobiecego łuku uśmiechu w Master Smile Studio.",
      ],
      pt: [
        "O sorriso de Scarlett Johansson combina sofisticação e naturalidade. Descubra a evolução do seu sorriso com facetas ultrafinas.",
        "A equipa da Master Smile Studio analisa as proporções áureas femininas.",
      ],
      es: [
        "La sonrisa de Scarlett Johansson es un modelo de armonía y elegancia femenina. Analizamos su evolución estética con carillas de porcelana.",
        "Conozca los principios del diseño de arco de sonrisa en Master Smile Studio.",
      ],
      ru: [
        "Улыбка Скарлетт Йоханссон — эталон женственности и голливудского шарма. Разбираем эволюцию формы зубов и микротекстуру виниров.",
        "Врачи Master Smile Studio раскрывают секреты создания гармоничной женской улыбки.",
      ],
    },
    keyTakeaway: {
      en: 'Scarlett Johansson’s smile makeover is the gold standard for feminine dental aesthetics: rounded incisal line angles, subtle central incisor dominance, and a convex smile arc that follows the lower lip contour.',
      tr: 'Scarlett Johansson’ın gülüşü, feminen diş estetiğinin altın standardıdır: yuvarlatılmış kesici kenar açıları, ön kesici dişlerin zarif baskınlığı ve alt dudak kavisini kusursuz takip eden gülüş hattı.',
      de: 'Ein feminines Lächeln erfordert abgerundete Kanten und eine harmonische Kurve entlang der Unterlippe.',
      pl: 'Kobiecy uśmiech opiera się na zaokrąglonych kątach siecznych i dominacji jedynek nad dwójkami.',
      pt: 'A estética feminina exige contornos suaves e arredondados com harmonia labial perfeita.',
      es: 'La estética femenina se caracteriza por bordes redondeados y una curvatura convexa natural.',
      ru: 'Женская эстетика улыбки строится на закругленных углах резцов и плавной дуге вдоль нижней губы.',
    },
    sections: [
      {
        id: 'feminine-smile-design',
        heading: {
          en: 'Feminine Smile Arc Architecture & Rounded Line Angles',
          tr: 'Feminen Gülüş Arkı Mimarisi ve Yuvarlatılmış Hatlar',
          de: 'Feminine Lächeln-Architektur & Weiche Linienführung',
          pl: 'Architektura kobiecego uśmiechu i zaokrąglone krawędzie',
          pt: 'Arquitetura do Sorriso Feminino e Linhas Suaves',
          es: 'Arquitectura de Sonrisa Femenina y Líneas Suaves',
          ru: 'Архитектура женской улыбки и скругленные линии',
        },
        paragraphs: {
          en: [
            "In aesthetic smile design, tooth gender characteristics are vital. Masculine smiles typically feature square, bold line angles with flat incisal edges. In contrast, feminine smiles prioritize rounded mesial and distal line angles, delicate incisal embrasures, and softer contours.",
            "By choosing [custom Ivoclar E-Max laminate veneers](/treatments/porcelain-laminate-veneers) crafted with delicate rounded edges and translucent BL2 shading, Scarlett Johansson preserved her organic facial warmth while illuminating her entire red-carpet presence.",
          ],
          tr: [
            "Estetik gülüş tasarımında cinsiyet karakteristikleri büyük önem taşır. Maskülen gülüşlerde düz ve köşeli hatlar tercih edilirken, feminen gülüşlerde yuvarlatılmış kenar açıları, yumuşak geçişler ve narin embrazürler ön plandadır.",
            "Scarlett Johansson, yuvarlatılmış hatlara ve yarı saydam BL2 tonuna sahip [özel Ivoclar E-Max porselen laminalar](/treatments/porcelain-laminate-veneers) ile doğal yüz sıcaklığını koruyarak büyüleyici bir ışıltı elde etmiştir.",
          ],
          de: [
            'Weiche Kanten und individuelle Transluzenz schaffen ein strahlendes, natürliches und feminines Ergebnis.',
          ],
          pl: [
            'Zaokrąglone krawędzie i naturalna przezierność tworzą ciepły, a zarazem hollywoodzki uśmiech.',
          ],
          pt: [
            'Bordos arredondados e translucidez orgânica criam um sorriso feminino e luminoso.',
          ],
          es: [
            'Bordes suaves y translucidez natural logran un resultado femenino y elegante.',
          ],
          ru: [
            'Мягкие скругленные грани и естественный блеск подчеркивают женственность и утонченность.',
          ],
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'What veneer shade does Scarlett Johansson have?',
          tr: 'Scarlett Johansson hangi porselen kaplama rengini kullanıyor?',
          de: 'Welchen Veneer-Farbton trägt Scarlett Johansson?',
          pl: 'Jaki odcień licówek ma Scarlett Johansson?',
          pt: 'Qual a cor das facetas de Scarlett Johansson?',
          es: '¿Qué tono de carillas lleva Scarlett Johansson?',
          ru: 'Какой оттенок виниров у Скарлетт Йоханссон?',
        },
        a: {
          en: 'Scarlett Johansson features an E-Max Bleach 2 (BL2) / B1 high-translucency shade, combining bright celebrity luminescence with organic enamel depth.',
          tr: 'Scarlett Johansson, aşırı yapay tebeşir beyazlığından uzak, doğal ışık geçirgenliğine sahip İsviçre E-Max BL2 / B1 porselen tonunu tercih etmiştir.',
          de: 'Sie trägt den natürlichen Bleachton E-Max BL2/B1 mit hoher Transluzenz.',
          pl: 'Jej licówki wykonano w naturalnym odcieniu BL2/B1 o wysokiej przezierności.',
          pt: 'Ela utiliza o tom E-Max BL2/B1 que equilibra brilho e naturalidade.',
          es: 'Lleva el tono E-Max BL2/B1 que combina luminosidad y esmalte natural.',
          ru: 'У нее установлен оттенок E-Max BL2/B1 с высокой степенью прозрачности эмали.',
        },
      },
    ],
  },

  // 7. MORGAN FREEMAN
  'morgan-freeman-smile': {
    slug: 'morgan-freeman-smile',
    category: 'celebrities-teeth',
    image: '/blog/morgan-freeman-teeth.webp',
    publishDate: '2026-07-31',
    readTime: '8 min read',
    author: AUTHOR_DATA,
    stats: [
      {
        value: 'Age 70+',
        label: {
          en: 'The age when Morgan Freeman chose to undergo comprehensive smile rejuvenation',
          tr: 'Morgan Freeman’ın kapsamlı gülüş gençleştirme tedavisi yaptırdığı yaş dönemi (70+)',
          de: 'Alter bei der umfassenden Lächeln-Verjüngung (über 70 Jahre)',
          pl: 'Wiek, w którym Morgan Freeman zdecydował się na odmłodzenie uśmiechu (70+ lat)',
          pt: 'Idade em que Morgan Freeman realizou o rejuvenescimento do sorriso (70+)',
          es: 'Edad en que Morgan Freeman rejuveneció su sonrisa por completo (70+)',
          ru: 'Возраст, в котором Морган Фриман прошел комплексное омоложение улыбки (70+ лет)',
        },
      },
      {
        value: 'Full Arch',
        label: {
          en: 'Reconstruction of severe attrition, tooth loss, and bite collapse',
          tr: 'İleri derece diş aşınması, diş kaybı ve kapanış çökmesinin tam çene restorasyonu',
          de: 'Vollständige Rekonstruktion von Zahnverschleiß und Bisssenkung',
          pl: 'Pełna rekonstrukcja starcia zębów i obniżonego zwarcia',
          pt: 'Reconstrução de desgaste severo e colapso de mordida',
          es: 'Reconstrucción de desgaste severo y pérdida de dimensión vertical',
          ru: 'Полная реконструкция при генерализованной стираемости и снижении прикуса',
        },
      },
      {
        value: '15 Yrs Younger',
        label: {
          en: 'Facial rejuvenation effect achieved by restoring vertical occlusal dimension (VDO)',
          tr: 'Dikey boyut yükseltilmesiyle elde edilen 10-15 yaş cerrahisiz yüz gençleşmesi',
          de: 'Verjüngungseffekt durch Anhebung der vertikalen Bisshöhe',
          pl: 'Efekt odmłodzenia twarzy dzięki podniesieniu wysokości zwarcia',
          pt: 'Efeito de rejuvenescimento facial ao restabelecer a dimensão vertical da oclusão',
          es: 'Efecto de rejuvenecimiento facial al restaurar la dimensión vertical oclusal',
          ru: 'Эффект омоложения лица благодаря восстановлению высоты прикуса',
        },
      },
    ],
    intro: {
      en: [
        "Morgan Freeman is one of cinema’s most revered and recognizable figures, possessing an authoritative voice and commanding presence in films like The Shawshank Redemption, Driving Miss Daisy, and Million Dollar Baby.",
        "For decades, Freeman sported his natural teeth with significant age-related yellowing, severe occlusal wear (attrition), and dark interdental gaps. In his late 60s and early 70s, he underwent a comprehensive dental rehabilitation.",
        "In this clinical analysis, the Master Smile Studio Medical Board explains how geriatric and mature smile makeovers restore vertical facial height, support sunken lips, and provide healthy lifelong function through [Zirconium crowns](/treatments/zirconium-crowns) and [dental implants](/treatments/dental-implants).",
      ],
      tr: [
        "Morgan Freeman, The Shawshank Redemption, Driving Miss Daisy ve Million Dollar Baby gibi başyapıtlardaki etkileyici sesi ve asil duruşuyla sinema tarihinin en büyük efsanelerinden biridir.",
        "Onlarca yıl boyunca yaşa bağlı sararmış, çiğneme yüzeyleri aşınmış ve aralarında koyu boşluklar oluşan doğal dişleriyle izleyicilerin karşısına çıkan Freeman, 70'li yaşlarının başında kapsamlı bir gülüş gençleştirme tedavisi yaptırdı.",
        "Bu klinik vaka çalışmasında Master Smile Studio Hekim Kurulu; ileri yaşlarda dikey kapanış yüksekliğinin (VDO) [zirkonyum kaplamalar](/treatments/zirconium-crowns) ve [diş implantları](/treatments/dental-implants) ile nasıl yükseltildiğini ve yüzdeki kırışıklıkların nasıl ameliyatsız giderildiğini açıklıyor.",
      ],
      de: [
        "Morgan Freemans Lächeln-Verjüngung im Alter von über 70 Jahren zeigt die transformative Kraft moderner Zahnmedizin.",
        "Erfahren Sie, wie [Zirkonkronen](/treatments/zirconium-crowns) und Implantate die vertikale Gesichtshöhe wiederherstellen.",
      ],
      pl: [
        "Odmłodzenie uśmiechu Morgana Freemana po 70. roku życia to inspirujący przykład odbudowy zwarcia.",
        "Sprawdź, jak [korony cyrkonowe](/treatments/zirconium-crowns) i implanty przywracają młodzieńczy profil twarzy.",
      ],
      pt: [
        "O rejuvenescimento dental de Morgan Freeman após os 70 anos devolveu o suporte labial e a mastigação perfeita.",
        "Conheça o impacto das [coroas de zircónia](/treatments/zirconium-crowns) na estética madura.",
      ],
      es: [
        "El rejuvenecimiento dental de Morgan Freeman a los 70 años devolvió soporte a sus labios y mejoró su mordida.",
        "Descubra cómo las [coronas de circonio](/treatments/zirconium-crowns) restauran la dimensión vertical.",
      ],
      ru: [
        "Омоложение улыбки Моргана Фримана после 70 лет — яркий пример комплексного антивозрастного протезирования.",
        "Разбираем восстановление прикуса с помощью [циркониевых коронок](/treatments/zirconium-crowns) и имплантов.",
      ],
    },
    keyTakeaway: {
      en: 'A smile makeover has no age limit. Restoring worn teeth and lost vertical dimension supports the facial soft tissues, smooths marionette lines around the mouth, and takes 10 to 15 years off facial appearance.',
      tr: 'Gülüş tasarımının yaşı yoktur. Aşınmış dişleri yükseltmek ve eksikleri tamamlamak; dudak desteğini geri kazandırır, ağız çevresindeki derin çizgileri açar ve kişiyi 10-15 yaş gençleştirir.',
      de: 'Zahnästhetik kennt kein Alter. Die Wiederherstellung der Bisshöhe strafft die Mundpartie um Jahre.',
      pl: 'Stomatologia estetyczna nie ma limitu wieku. Odbudowa starcia zębów wygładza zmarszczki wokół ust.',
      pt: 'Não há limite de idade para um novo sorriso. A elevação da mordida rejuvenesce toda a face.',
      es: 'El diseño de sonrisa no tiene edad. Restaurar la mordida rejuvenece la zona peribucal de forma inmediata.',
      ru: 'Эстетическое протезирование не имеет возрастных ограничений. Восстановление высоты зубов омолаживает нижнюю треть лица.',
    },
    sections: [
      {
        id: 'anti-aging-dentistry',
        heading: {
          en: 'Anti-Aging Dentistry: Restoring Vertical Occlusal Dimension',
          tr: 'Anti-Aging Diş Hekimliği: Dikey Boyutun Yükseltilmesi ve Yüz Gençleştirme',
          de: 'Anti-Aging Zahnmedizin: Rekonstruktion der vertikalen Dimension',
          pl: 'Stomatologia przeciwstarzeniowa: Podniesienie wysokości zwarcia',
          pt: 'Odontologia Anti-Aging: Reabilitação da Dimensão Vertical',
          es: 'Odontología Anti-Aging: Restauración de la Dimensión Vertical',
          ru: 'Антивозрастная стоматология: восстановление высоты прикуса',
        },
        paragraphs: {
          en: [
            "As we age, continuous chewing causes teeth to wear down by 2mm to 4mm, causing the lower jaw to over-close. This loss of vertical dimension leads to sunken lips, deepened nasolabial folds, and a collapsed facial profile.",
            "For Morgan Freeman, prosthodontists restored his vertical height using biocompatible [German Zirconium full-coverage crowns](/treatments/zirconium-crowns). The crowns provided strong structural support, filled out his buccal corridors, and created a warm, dignified, natural ivory-white smile.",
          ],
          tr: [
            "Yaşlandıkça çiğneme kuvvetleri nedeniyle diş minesi 2-4 mm aşınır ve çene birbirine fazla yaklaşır. Dikey boyutun çökmesi; dudakların içeri çekilmesine, burun-dudak çizgilerinin derinleşmesine ve yaşlı bir yüz profiline yol açar.",
            "Morgan Freeman için uzman hekimler, biyouyumlu [Alman Zirkonyum kaplamalar](/treatments/zirconium-crowns) ile dikey boyutu ideal seviyeye yükseltti. Bu işlem dudaklara hacim kazandırdı ve Freeman'ın asil duruşunu tamamlayan doğal fildişi tonunda bir gülüş sundu.",
          ],
          de: [
            'Der Wiederaufbau der Zahnhöhe mit Zirkonkronen glättet Falten und stützt die Lippen von innen heraus.',
          ],
          pl: [
            'Odbudowa wysokości zębów koronami cyrkonowymi wypełnia policzki i podpiera zapadnięte usta.',
          ],
          pt: [
            'A reconstrução da altura dental com zircónia restaura o volume dos lábios e suaviza rugas.',
          ],
          es: [
            'La recuperación de la altura dental con circonio da volumen a los labios y rejuvenece el rostro.',
          ],
          ru: [
            'Поднятие высоты зубов циркониевыми коронками восстанавливает объем губ и разглаживает носогубные складки.',
          ],
        },
      },
    ],
    faqs: [
      {
        q: {
          en: 'Is it safe to get a full smile makeover in your 60s or 70s?',
          tr: '60 veya 70 yaş üstünde tam diş kaplaması ve implant yaptırmak güvenli midir?',
          de: 'Ist ein komplettes Smile Makeover im Alter von 60 oder 70 sicher?',
          pl: 'Czy pełna metamorfoza uśmiechu po 60. lub 70. roku życia jest bezpieczna?',
          pt: 'É seguro fazer uma transformação dental completa aos 60 ou 70 anos?',
          es: '¿Es seguro realizarse un cambio de sonrisa completo a los 60 o 70 años?',
          ru: 'Безопасно ли делать полное протезирование зубов в возрасте 60–70 лет?',
        },
        a: {
          en: 'Yes, absolutely. With modern 3D CBCT digital planning, minimally invasive local anesthesia, and biocompatible zirconium/titanium materials, full smile rehabilitation is safe and profoundly beneficial for senior patients.',
          tr: 'Evet, kesinlikle güvenlidir. 3D dijital tomografi, konforlu lokal anestezi ve biyouyumlu zirkonyum/titanyum malzemeler sayesinde ileri yaşlardaki hastalarımızda tedavi son derece güvenli ve hayat kalitesini artırıcıdır.',
          de: 'Ja, moderne 3D-Diagnostik und schonende Verfahren machen die Behandlung in jedem Alter sicher.',
          pl: 'Tak, zaawansowana diagnostyka 3D i biokompatybilne materiały gwarantują pełne bezpieczeństwo seniorom.',
          pt: 'Sim, os procedimentos modernos com planeamento 3D são totalmente seguros para pacientes seniores.',
          es: 'Sí, la tecnología 3D y materiales biocompatibles permiten tratamientos 100% seguros a cualquier edad.',
          ru: 'Да, современная 3D-томография и биосовместимые материалы обеспечивают полную безопасность для пожилых пациентов.',
        },
      },
    ],
  },
};
