import { BlogDetailArticle } from '../blog-detail-data';

const SPECIALIST_AUTHORS = {
  drOzan: {
    name: 'Dr. Ozan Öztürk & Dt. Fırat İskender',
    title: {
      en: 'Prosthodontist & Oral Maxillofacial Surgeon, Master Smile Studio Antalya',
      tr: 'Protetik Diş Tedavisi Uzmanı & Çene Cerrahı, Master Smile Studio Antalya',
      de: 'Fachzahnarzt für Prothetik & Mund-Kiefer-Gesichtschirurg, Master Smile Studio',
      pl: 'Protetyk i Chirurg Szczękowo-Twarzowy, Master Smile Studio Antalya',
      pt: 'Especialista em Prótese e Cirurgião Maxilofacial, Master Smile Studio',
      es: 'Especialista en Prótesis y Cirujano Maxilofacial, Master Smile Studio',
      ru: 'Ортопед и челюстно-лицевой хирург, Master Smile Studio Анталья',
    },
    avatar: '/team/ozan-ozturk.webp',
  },
};

export const MIGRATED_CLINICAL_GUIDES: Record<string, BlogDetailArticle> = {
  "emax-vs-zirconia-which-one-should-you-choose": {
    "slug": "emax-vs-zirconia-which-one-should-you-choose",
    "category": "guides",
    "image": "/blog/emax-vs-zirconium.png",
    "publishDate": "2026-09-02",
    "readTime": "7 min read",
    "llmSummary": {
      "badge": {
        "en": "Materials Science & Clinical Protocol",
        "tr": "Materyal Bilimi ve Klinik Protokol",
        "de": "Materialkunde & Klinisches Protokoll",
        "pl": "Inżynieria Materiałowa i Protokół Kliniczny",
        "pt": "Ciência dos Materiais e Protocolo Clínico",
        "es": "Ciencia de Materiales y Protocolo Clínico",
        "ru": "Материаловедение и клинический протокол"
      },
      "quickAnswer": {
        "en": "E-Max (Lithium Disilicate, 360–500 MPa) offers unmatched optical translucency and light transmission, making it the supreme choice for anterior veneers and front 6–8 teeth where natural vitality is paramount. Multilayer Monolithic Zirconia (1200–1400 MPa) provides exceptional structural flexural strength, making it the definitive standard for posterior molars, multi-unit bridges, and patients with nocturnal bruxism. At Master Smile Studio, our signature 'Hybrid Protocol' combines front E-Max laminates with rear Zirconia crowns to give patients the ultimate balance of Hollywood aesthetics and lifetime chewing durability.",
        "tr": "E-Max (Lityum Disilikat, 360–500 MPa), doğal diş minesini kusursuz taklit eden ışık geçirgenliği ve opalesansıyla ön 6–8 diş laminelerinde estetik altın standarttır. Çok katmanlı monolitik Zirkonyum (1200–1400 MPa) ise kırılmaya karşı üstün mekanik direnciyle arka azı dişlerinde, köprülerde ve diş sıkan hastalarda vazgeçilmezdir. Master Smile Studio kliniğimizde uyguladığımız 'Hibrit Gülüş Protokolü' ile ön bölgede E-Max, arka çiğneme bölgesinde Zirkonyum kullanarak ömür boyu dayanıklı ve doğal bir estetik sağlıyoruz.",
        "de": "E-Max (Lithiumdisilikat, 360–500 MPa) bietet unvergleichliche Lichtdurchlässigkeit und ist die beste Wahl für Frontzahn-Veneers. Monolithisches Multilayer-Zirkonium (1200–1400 MPa) garantiert maximale Biegefestigkeit für Backenzähne und Brücken. Unser 'Hybrid-Protokoll' kombiniert Front-E-Max mit Zirkon im Seitenzahnbereich für perfekte Ästhetik und maximale Langlebigkeit.",
        "pl": "E-Max (dwukrzemian litu, 360–500 MPa) zapewnia perfekcyjną przezierność dla przednich licówek. Monolityczny tlenek cyrkonu (1200–1400 MPa) to bezkonkurencyjna wytrzymałość dla zębów bocznych i mostów. Nasz 'Protokół Hybrydowy' łączy licówki E-Max z koronami cyrkonowymi, gwarantując naturalny uśmiech i dożywotnią trwałość.",
        "pt": "E-Max (Dissilicato de Lítio, 360–500 MPa) é a referência estética para dentes anteriores devido à sua translucidez natural. O Zircónio Monolítico (1200–1400 MPa) oferece resistência imbatível para molares e pontes. O nosso 'Protocolo Híbrido' combina ambos para um sorriso deslumbrante e funcional.",
        "es": "E-Max (Disilicato de Litio, 360–500 MPa) destaca por su translucidez natural para carillas frontales. El Zirconio Monolítico (1200–1400 MPa) ofrece máxima resistencia para molares y puentes. Nuestro 'Protocolo Híbrido' combina ambos materiales para lograr belleza natural y durabilidad de por vida.",
        "ru": "E-Max (дисиликат лития, 360–500 МПа) обеспечивает непревзойденную прозрачность передних зубов. Монолитный цирконий (1200–1400 МПа) гарантирует максимальную прочность для жевательных зубов и мостов. Наш 'Гибридный протокол' объединяет E-Max спереди и цирконий сзади для идеального результата."
      },
      "keyTakeaways": {
        "en": [
          "E-Max Translucency: 70% light transmission mimics natural enamel opalescence for front 6–8 teeth.",
          "Zirconia Strength: 1,400 MPa fracture toughness withstands heavy masticatory biting loads up to 800 N.",
          "Hybrid Smile Design: Anterior E-Max veneers paired with posterior monolithic Zirconia crowns.",
          "Conservative Prep: E-Max requires only 0.3–0.5mm minimal reduction, preserving precious natural enamel."
        ],
        "tr": [
          "E-Max Işık Geçirgenliği: %70 ışık iletimi ile ön 6-8 dişte doğal diş minesinin opalesansını birebir yansıtır.",
          "Zirkonyum Dayanımı: 1400 MPa bükülme direnci ile 800 Newton'a varan arka çiğneme kuvvetlerine dayanır.",
          "Hibrit Gülüş Tasarımı: Ön bölgede estetik E-Max, arka bölgede dirençli Zirkonyum kombinasyonu.",
          "Minimal Aşındırma: E-Max lamine kaplamalarda yalnızca 0.3 - 0.5 mm mikro preparasyon uygulanır."
        ],
        "de": [
          "E-Max Transluzenz: 70% Lichtdurchlässigkeit ahmt natürlichen Zahnschmelz an den Frontzähnen nach.",
          "Zirkon-Stärke: 1400 MPa Biegebruchfestigkeit widersteht Kaubelastungen bis zu 800 Newton.",
          "Hybrid-Smile-Design: Frontzähne in E-Max, Backenzähne in bruchfestem Zirkonium.",
          "Minimale Präparation: E-Max erfordert nur 0,3–0,5 mm minimalen Schmelzabtrag."
        ],
        "pl": [
          "Przezierność E-Max: 70% przepuszczalności światła idealnie naśladuje naturalne szkliwo w strefie uśmiechu.",
          "Wytrzymałość Cyrkonu: 1400 MPa wytrzymałości na zginanie znosi potężne siły żucia.",
          "Hybrydowy Projekt: Przednie zęby w E-Max, zęby boczne w monolitycznym cyrkonie.",
          "Oszczędność Szkliwa: E-Max wymaga jedynie 0,3–0,5 mm minimalnej preparacji."
        ],
        "pt": [
          "Translucidez E-Max: 70% de transmissão de luz imita o esmalte natural nos dentes frontais.",
          "Resistência do Zircónio: 1400 MPa suporta até 800 N de força mastigatória nos molares.",
          "Design Híbrido: E-Max nos dentes anteriores e Zircónio nos molares posteriores.",
          "Desgaste Mínimo: E-Max requer apenas 0,3–0,5 mm de preparação conservadora."
        ],
        "es": [
          "Translucidez E-Max: 70% de paso de luz que replica el esmalte natural en dientes anteriores.",
          "Resistencia Zirconio: 1400 MPa soporta grandes cargas masticatorias en la zona posterior.",
          "Diseño Híbrido: E-Max en el sector estético anterior y Zirconio en molares posteriores.",
          "Tallado Mínimo: E-Max requiere solo 0.3–0.5 mm de reducción dental conservadora."
        ],
        "ru": [
          "Прозрачность E-Max: 70% светопроницаемости воссоздают опалесценцию натуральной эмали.",
          "Прочность циркония: 1400 МПа выдерживают максимальные жевательные нагрузки до 800 Н.",
          "Гибридный протокол: Эстетичный E-Max для зоны улыбки и прочный цирконий для жевательных зубов.",
          "Минимальная обточка: E-Max требует всего 0.3–0.5 мм деликатной обработки эмали."
        ]
      },
      "medicalVerdict": {
        "en": "There is no single 'superior' material in modern prosthodontics—only the correct material matched to biomechanical tooth location and occlusal force dynamics. Anterior teeth require the chromatic depth and light transmission of lithium disilicate (E-Max), while posterior functional load zones demand the indestructible fracture resistance of yttria-stabilized multi-layer zirconia.",
        "tr": "Modern protetik diş hekimliğinde tek bir 'en iyi' malzeme yoktur; çiğneme kuvvetlerine ve dişin anatomik konumuna göre doğru malzeme seçimi esastır. Ön bölgede ışığı doğal kıran lityum disilikat (E-Max) tercih edilirken, çiğneme yükünü taşıyan arka bölgede yitriyumla güçlendirilmiş çok katmanlı zirkonyum kullanılmalıdır.",
        "de": "In der modernen Prothetik gibt es kein universell 'besseres' Material, sondern nur die biomechanisch richtige Indikation. Frontzähne verlangen die Tiefenwirkung von E-Max, während Seitenzähne monolithisches Zirkonium erfordern.",
        "pl": "W nowoczesnej protetyce nie ma jednego 'najlepszego' materiału – kluczowy jest dobór biomechaniczny. W strefie przedniej króluje dwukrzemian litu (E-Max), a w strefie żucia niezastąpiony jest tlenek cyrkonu.",
        "pt": "Na prótese moderna não existe um material 'único superior', mas sim a correta indicação biomecânica: E-Max para estética anterior e Zircónio para resistência posterior.",
        "es": "En la prostodoncia moderna no existe un material 'superior absoluto', sino la correcta indicación biomecánica: E-Max para estética anterior y Zirconio para resistencia posterior.",
        "ru": "В современной ортопедии нет одного 'лучшего' материала: важен точный биомеханический расчет. Для зоны улыбки незаменим E-Max, а для жевательного отдела — прочный монолитный цирконий."
      }
    },
    "stats": [
      {
        "value": "1400 MPa",
        "label": {
          "en": "Flexural strength of monolithic multilayer zirconia",
          "tr": "Çok katmanlı monolitik zirkonyum bükülme direnci",
          "de": "Biegebruchfestigkeit von monolithischem Zirkonium",
          "pl": "Wytrzymałość na zginanie monolitycznego cyrkonu",
          "pt": "Resistência à flexão do zircónio monolítico",
          "es": "Resistencia a la flexión del zirconio monolítico",
          "ru": "Прочность на изгиб монолитного многослойного циркония"
        }
      },
      {
        "value": "0.3 mm",
        "label": {
          "en": "Ultra-thin minimal preparation depth for E-Max veneers",
          "tr": "E-Max laminelerde uygulanan ultra ince aşındırma payı",
          "de": "Minimale Schmelzpräparation für E-Max-Veneers",
          "pl": "Minimalna grubość preparacji dla licówek E-Max",
          "pt": "Espessura de preparação ultra-fina para facetas E-Max",
          "es": "Profundidad mínima de tallado para carillas E-Max",
          "ru": "Минимальная толщина препарирования для виниров E-Max"
        }
      },
      {
        "value": "15+ Years",
        "label": {
          "en": "Documented clinical survival rate with optimal hygiene",
          "tr": "Düzenli bakımla klinik literatürde kanıtlanmış kullanım ömrü",
          "de": "Klinisch dokumentierte Lebensdauer bei guter Pflege",
          "pl": "Udokumentowana trwałość kliniczna przy właściwej higienie",
          "pt": "Vida útil clínica comprovada com higiene adequada",
          "es": "Vida útil clínica demostrada con higiene adecuada",
          "ru": "Клинически подтвержденный срок службы при должном уходе"
        }
      }
    ],
    "intro": {
      "en": [
        "When patients travel to Antalya for a smile makeover or full-mouth rehabilitation, the most critical clinical decision revolves around material selection: E-Max lithium disilicate vs multi-layer monolithic zirconia. While social media often markets 'Turkey Teeth' as a one-size-fits-all solution, prosthodontic success demands precise biological and biomechanical customization.",
        "Choosing the wrong material can lead to catastrophic chipping on molars or an unnatural, chalky, opaque appearance on front teeth. In this comprehensive clinical guide, Dr. Ozan Öztürk and Dt. Fırat İskender explain the science, preparation requirements, and our proven Hybrid Protocol that delivers both breathtaking aesthetics and lifetime function."
      ],
      "tr": [
        "Gülüş tasarımı veya tam ağız restorasyonu için Antalya'ya gelen hastalarımızın en sık sorduğu ve tedavinin başarısını doğrudan belirleyen soru şudur: E-Max mi, yoksa Zirkonyum mu? Sosyal medyada sıklıkla tek tip bir tedavi gibi sunulan kaplamalar, gerçekte biyomekanik ve estetik prensiplere göre titizlikle seçilmelidir.",
        "Yanlış malzeme seçimi, arka dişlerde çatlamalara ya da ön dişlerde yapay, tebeşirimsi ve donuk bir görünüme yol açabilir. Bu rehberde Dr. Ozan Öztürk ve Dt. Fırat İskender, iki materyalin farklarını, aşındırma derinliklerini ve kliniğimizde uyguladığımız Hibrit Protokolü tüm detaylarıyla açıklıyor."
      ],
      "de": [
        "Bei einer Lächeln-Transformation in Antalya ist die Wahl zwischen E-Max und Zirkonium die wichtigste Entscheidung. Eine falsche Materialwahl führt entweder zu Chipping an Backenzähnen oder zu künstlich-opaken Frontzähnen.",
        "Dr. Ozan Öztürk und Dt. Fırat İskender erklären die biomechanischen Unterschiede, Präparationstiefen und unser bewährtes Hybrid-Smile-Konzept für maximale Natürlichkeit und Haltbarkeit."
      ],
      "pl": [
        "Wybór między licówkami E-Max a koronami cyrkonowymi to najważniejszy krok w projektowaniu nowego uśmiechu w Antalyi. Zły dobór materiału skutkuje ukruszeniami zębów bocznych lub nienaturalną matowością zębów przednich.",
        "Nasi eksperci wyjaśniają różnice wytrzymałościowe, głębokość preparacji oraz zalety Protokołu Hybrydowego łączącego oba materiały."
      ],
      "pt": [
        "A decisão entre facetas E-Max e coroas de zircónio define o sucesso do tratamento estético em Antalya. Escolher incorretamente pode causar fraturas em molares ou um aspeto artificial na frente.",
        "Os nossos especialistas detalham as propriedades mecânicas, o desgaste necessário e as vantagens do protocolo híbrido para um sorriso duradouro."
      ],
      "es": [
        "La elección entre carillas E-Max y coronas de zirconio es crucial para el éxito estético y funcional de su sonrisa en Antalya. Una mala elección compromete la resistencia o la naturalidad.",
        "Explicamos las propiedades mecánicas, los niveles de tallado dental y nuestro exclusivo Protocolo Híbrido para una sonrisa perfecta y resistente."
      ],
      "ru": [
        "Выбор между E-Max и диоксидом циркония — ключевой шаг при создании голливудской улыбки в Анталье. Ошибка в выборе может привести к сколам жевательных зубов или неестественной матовости резцов.",
        "Наши ведущие врачи подробно рассказывают об оптических свойствах, подготовке зубов и преимуществах Гибридного протокола."
      ]
    },
    "keyTakeaway": {
      "en": "E-Max provides supreme optical translucency for front teeth, while Monolithic Zirconia delivers unstoppable 1400 MPa fracture resistance for rear molars. Combining both in a Master Smile Studio Hybrid Smile guarantees both perfection and durability.",
      "tr": "E-Max ön dişlerde doğal ışık geçirgenliği sunarken, monolitik Zirkonyum arka azı dişlerinde 1400 MPa kırılma direnci sağlar. Bu iki materyali birleştiren Hibrit Protokolümüz hem mükemmel estetik hem de ömür boyu çiğneme güvenliği sunar.",
      "de": "E-Max liefert höchste Transluzenz für die Frontzähne, Zirkonium unschlagbare Festigkeit für die Backenzähne. Das Hybrid-Protokoll vereint beide Vorteile.",
      "pl": "E-Max gwarantuje naturalną przezierność w strefie uśmiechu, a cyrkon zapewnia odporność na złamania w zębach bocznych. Połączenie obu tworzy idealny uśmiech.",
      "pt": "E-Max garante translucidez superior nos dentes da frente, enquanto o zircónio oferece resistência imbatível nos molares.",
      "es": "E-Max ofrece máxima translucidez en el sector frontal, mientras que el zirconio proporciona resistencia insuperable en los molares.",
      "ru": "E-Max обеспечивает природную прозрачность зоны улыбки, а цирконий — непревзойденную прочность жевательных зубов."
    },
    "comparisonTable": {
      "title": {
        "en": "Clinical Comparison: E-Max Lithium Disilicate vs Multi-Layer Monolithic Zirconia",
        "tr": "Klinik Karşılaştırma: E-Max Lityum Disilikat ve Çok Katmanlı Monolitik Zirkonyum",
        "de": "Klinischer Vergleich: E-Max Lithiumdisilikat vs. Multilayer-Zirkonium",
        "pl": "Porównanie Kliniczne: Dwukrzemian Litu E-Max vs Monolityczny Cyrkon",
        "pt": "Comparação Clínica: Dissilicato de Lítio E-Max vs Zircónio Monolítico",
        "es": "Comparativa Clínica: Disilicato de Litio E-Max vs Zirconio Monolítico",
        "ru": "Сравнительная таблица: Дисиликат лития E-Max и Монолитный диоксид циркония"
      },
      "col1Header": {
        "en": "E-Max (Lithium Disilicate)",
        "tr": "E-Max (Lityum Disilikat)",
        "de": "E-Max (Lithiumdisilikat)",
        "pl": "E-Max (Dwukrzemian Litu)",
        "pt": "E-Max (Dissilicato de Lítio)",
        "es": "E-Max (Disilicato de Litio)",
        "ru": "E-Max (дисиликат лития)"
      },
      "col2Header": {
        "en": "Multi-Layer Monolithic Zirconia",
        "tr": "Çok Katmanlı Monolitik Zirkonyum",
        "de": "Multilayer-Zirkonium (monolithisch)",
        "pl": "Wielowarstwowy Cyrkon Monolityczny",
        "pt": "Zircónio Monolítico Multicamadas",
        "es": "Zirconio Monolítico Multicapa",
        "ru": "Многослойный монолитный цирконий"
      },
      "rows": [
        {
          "col1": {
            "en": "Glass-ceramic (Lithium Disilicate crystals)",
            "tr": "Cam seramik (Lityum disilikat kristalleri)",
            "de": "Glaskeramik (Lithiumdisilikat)",
            "pl": "Ceramika szklana (dwukrzemian litu)",
            "pt": "Vitrocerâmica de dissilicato de lítio",
            "es": "Vitrocerámica de disilicato de litio",
            "ru": "Стеклокерамика (дисиликат лития)"
          },
          "col2": {
            "en": "Yttria-stabilized Zirconium Oxide (3Y to 5Y-PSZ)",
            "tr": "Yitriyumla stabilize edilmiş zirkonyum dioksit",
            "de": "Yttrium-stabilisiertes Zirkonoxid",
            "pl": "Tlenek cyrkonu stabilizowany itrem",
            "pt": "Óxido de zircónio estabilizado com ítria",
            "es": "Óxido de zirconio estabilizado con itrio",
            "ru": "Диоксид циркония, стабилизированный иттрием"
          }
        },
        {
          "col1": {
            "en": "360 – 500 MPa flexural strength",
            "tr": "360 – 500 MPa bükülme direnci",
            "de": "360 – 500 MPa Biegefestigkeit",
            "pl": "360 – 500 MPa wytrzymałości na zginanie",
            "pt": "360 – 500 MPa de resistência à flexão",
            "es": "360 – 500 MPa de resistencia flexural",
            "ru": "360 – 500 МПа прочности на изгиб"
          },
          "col2": {
            "en": "1,200 – 1,400 MPa fracture resistance",
            "tr": "1200 – 1400 MPa kırılma direnci",
            "de": "1.200 – 1.400 MPa Biegefestigkeit",
            "pl": "1200 – 1400 MPa odporności na pękanie",
            "pt": "1200 – 1400 MPa de resistência estrutural",
            "es": "1200 – 1400 MPa de resistencia a la fractura",
            "ru": "1200 – 1400 МПа стойкости к разрушению"
          }
        },
        {
          "col1": {
            "en": "Superior (natural enamel opalescence & depth)",
            "tr": "Kusursuz (doğal diş minesi derinliği ve opalesans)",
            "de": "Hervorragend (natürliche Transluzenz & Tiefenwirkung)",
            "pl": "Najwyższa (naturalna przezierność i głębia szkliwa)",
            "pt": "Superior (opalescência e profundidade natural do esmalte)",
            "es": "Superior (opalescencia y profundidad natural del esmalte)",
            "ru": "Превосходная (натуральная глубина цвета и опалесценция)"
          },
          "col2": {
            "en": "High gradient (multilayer shade transition)",
            "tr": "Yüksek gradyan (çok katmanlı doğal renk geçişi)",
            "de": "Sehr gut (Multilayer mit stufenlosem Farbverlauf)",
            "pl": "Bardzo dobra (wielowarstwowe przejścia barwne)",
            "pt": "Elevada (transição de cor multicamadas)",
            "es": "Alta (transición de color multicapa natural)",
            "ru": "Высокая с градиентом (плавный переход оттенков)"
          }
        },
        {
          "col1": {
            "en": "Ultra-thin 0.3mm to 0.5mm micro-prep",
            "tr": "0.3 mm - 0.5 mm ultra ince mikro preparasyon",
            "de": "0,3 mm bis 0,5 mm minimalinvasiv",
            "pl": "Ultra-cienka preparacja 0,3 mm do 0,5 mm",
            "pt": "Micro-preparação ultra-fina de 0,3 a 0,5 mm",
            "es": "Micro-tallado ultra fino de 0.3 a 0.5 mm",
            "ru": "Микропрепарирование от 0.3 мм до 0.5 мм"
          },
          "col2": {
            "en": "Conservative 0.6mm to 1.0mm axial reduction",
            "tr": "0.6 mm - 1.0 mm koruyucu eksenel aşındırma",
            "de": "0,6 mm bis 1,0 mm substanzschonend",
            "pl": "Oszczędna redukcja 0,6 mm do 1,0 mm",
            "pt": "Redução conservadora de 0,6 a 1,0 mm",
            "es": "Reducción conservadora de 0.6 a 1.0 mm",
            "ru": "Щадящая обработка 0.6 мм до 1.0 мм"
          }
        },
        {
          "col1": {
            "en": "Anterior smile zone (incisors, canines, veneers)",
            "tr": "Ön gülüş hattı (kesici dişler, kaninler, lamineler)",
            "de": "Frontzahnbereich (Schneidezähne, Eckzähne, Veneers)",
            "pl": "Strefa estetyczna uśmiechu (siekacze, kły, licówki)",
            "pt": "Zona estética frontal (incisivos, caninos, facetas)",
            "es": "Zona estética anterior (incisivos, caninos, carillas)",
            "ru": "Зона улыбки (резцы, клыки, тонкие виниры)"
          },
          "col2": {
            "en": "Posterior molars, long bridges, implant crowns",
            "tr": "Arka azı dişleri, uzun köprüler, implant üstü kuronlar",
            "de": "Seitenzähne, weitspannige Brücken, Implantatkronen",
            "pl": "Zęby boczne, mosty wielopunktowe, korony na implantach",
            "pt": "Molares posteriores, pontes extensas, coroas sobre implantes",
            "es": "Molares posteriores, puentes largos, coronas sobre implantes",
            "ru": "Жевательные моляры, протяженные мосты, коронки на имплантах"
          }
        }
      ]
    },
    "sections": [
      {
        "id": "optical-biocompatibility-emax",
        "heading": {
          "en": "Optical Physics of E-Max: Why It Dominates Anterior Aesthetics",
          "tr": "E-Max Materyalinin Optik Fiziği: Neden Ön Dişlerde Vazgeçilmezdir?",
          "de": "Die optische Physik von E-Max: Warum es die Frontzahnästhetik dominiert",
          "pl": "Fizyka Optyczna E-Max: Dlaczego Króluje w Strefie Uśmiechu",
          "pt": "A Física Óptica do E-Max: A Razão do Sucesso Estético Anterior",
          "es": "Física Óptica de E-Max: Por Qué Domina la Estética Anterior",
          "ru": "Оптические свойства E-Max: почему это эталон для зоны улыбки"
        },
        "paragraphs": {
          "en": [
            "Natural tooth enamel is a remarkably complex optical medium: it is neither completely transparent nor entirely opaque. When sunlight or camera flashes strike natural enamel, light enters into the tooth, scatters through the dentin, and refracts back out. This phenomenon is known as opalescence and chromatic depth.",
            "E-Max (manufactured by Ivoclar Vivadent) is composed of 70% needle-like lithium disilicate crystals embedded in a glass matrix. This unique microstructure matches the refractive index of human enamel with 99.4% optical fidelity. When bonded with dual-cure translucent resin cements, E-Max veneers become virtually indistinguishable from natural virgin teeth, completely eliminating the 'fake artificial white' look."
          ],
          "tr": [
            "Doğal diş minesi ışığı yalnızca yansıtmaz; ışık mineden içeri süzülür, dentin tabakasında kırılır ve derinlikli bir ışıltı olarak geri yansır. Bu optik canlılığa 'opalesans' adı verilir.",
            "Ivoclar Vivadent tarafından üretilen orijinal E-Max, cam matris içine gömülü %70 oranında lityum disilikat kristallerinden oluşur. Bu kristal yapı, insan diş minesinin ışık kırma indeksini %99.4 oranında birebir karşılar. Özel yarı saydam rezin simanlarla yapıştırıldığında, E-Max kaplamalar doğal dişten ayırt edilemez ve asla donuk, yapay bir protez görüntüsü oluşturmaz."
          ],
          "de": [
            "Natürlicher Zahnschmelz reflektiert Licht nicht nur oberflächlich, sondern lässt es tief eindringen. E-Max aus 70% Lithiumdisilikat-Kristallen ahmt diesen optischen Brechungsindex perfekt nach.",
            "Dadurch wirken E-Max-Veneers selbst bei hellem Tageslicht oder Blitzlicht vollkommen natürlich und niemals künstlich kreidig."
          ],
          "pl": [
            "Naturalne szkliwo charakteryzuje się zjawiskiem opalescencji. Oryginalny E-Max składa się z kryształów dwukrzemianu litu, które naśladują załamywanie światła przez ząb z 99,4% precyzją.",
            "Dzięki temu licówki E-Max wtopione w ząb wyglądają świeżo, głęboko i całkowicie naturalnie."
          ],
          "pt": [
            "O esmalte natural possui opalescência única. O E-Max reproduz o índice de refração humano com 99,4% de fidelidade através de cristais de dissilicato de lítio.",
            "Elimina por completo o aspeto 'branco artificial', integrando-se perfeitamente no sorriso."
          ],
          "es": [
            "El esmalte natural posee un brillo y profundidad únicos. E-Max reproduce este efecto gracias a su matriz de cristales de disilicato de litio.",
            "El resultado son carillas con una vitalidad óptica idéntica a la del diente natural, sin efectos mates o artificiales."
          ],
          "ru": [
            "Натуральная эмаль обладает уникальной опалесценцией. Кристаллы дисиликата лития в E-Max преломляют свет точно так же, как ткани живого зуба.",
            "Это гарантирует идеальную эстетику без эффекта искусственных 'пластмассовых' зубов."
          ]
        },
        "highlightBox": {
          "title": {
            "en": "Clinical Translucency Rule",
            "tr": "Klinik Işık Geçirgenliği Kuralı",
            "de": "Klinische Transluzenz-Regel",
            "pl": "Złota Zasada Przezierności",
            "pt": "Regra Clínica de Translucidez",
            "es": "Regla Clínica de Translucidez",
            "ru": "Клиническое правило прозрачности"
          },
          "text": {
            "en": "If a patient presents with dark, tetracycline-stained or heavily root-treated front teeth, ultra-translucent E-Max alone may allow the dark background to show through. In such cases, our specialists apply an opaque masking core or select a multilayer zirconia crown with higher masking power.",
            "tr": "Eğer hastanın ön dişinde kanal tedavisi sonrası koyulaşma veya tetrasiklin lekelenmesi varsa, aşırı şeffaf E-Max alttaki koyu rengi dışarı yansıtabilir. Böyle durumlarda hekimlerimiz özel opak maskeleyiciler kullanır veya renk perdesi sağlayan çok katmanlı zirkonyum tercih eder.",
            "de": "Bei stark verfärbten oder wurzelbehandelten Zähnen kann transparentes E-Max den dunklen Kern durchscheinen lassen. Wir nutzen in solchen Fällen opake Liner oder hochmoderne Multilayer-Zirkonkronen.",
            "pl": "W przypadku mocno przebarwionych zębów po leczeniu kanałowym stosujemy specjalne podkłady maskujące lub wielowarstwowy tlenek cyrkonu.",
            "pt": "Em dentes escurecidos por desvitalização, aplicamos liners opacificadores ou zircónio multicamadas para bloquear o fundo escuro.",
            "es": "En dientes oscurecidos tras endodoncias, empleamos bases opacificantes o zirconio multicapa para evitar que se transparente el fondo.",
            "ru": "При сильном потемнении депульпированных зубов мы применяем маскирующие базы или многослойный цирконий с плавным градиентом."
          }
        }
      },
      {
        "id": "structural-integrity-zirconia",
        "heading": {
          "en": "Monolithic Multilayer Zirconia: Uncompromising 1,400 MPa Strength",
          "tr": "Monolitik Çok Katmanlı Zirkonyum: 1400 MPa Sarsılmaz Çiğneme Direnci",
          "de": "Monolithisches Multilayer-Zirkon: 1.400 MPa unzerstörbare Stärke",
          "pl": "Monolityczny Cyrkon Wielowarstwowy: Niezłomna Wytrzymałość 1400 MPa",
          "pt": "Zircónio Monolítico Multicamadas: 1400 MPa de Resistência Imbatível",
          "es": "Zirconio Monolítico Multicapa: Resistencia Inquebrantable de 1400 MPa",
          "ru": "Монолитный многослойный цирконий: прочность 1400 МПа без риска сколов"
        },
        "paragraphs": {
          "en": [
            "While E-Max flexural strength caps around 500 MPa, human molars can generate crushing bite forces exceeding 700 to 900 Newtons during nocturnal clenching or chewing tough meats. Subjecting glass ceramics to such extreme mechanical strain on second molars carries a high risk of catastrophic fracture over time.",
            "This is where Zirconia (Zirconium Dioxide stabilized with Yttria) excels. Modern 5Y-PSZ multilayer zirconia boasts flexural strengths between 1,200 and 1,400 MPa—nearly three times stronger than E-Max and significantly harder than natural tooth enamel. Furthermore, because we mill monolithic zirconia from a single solid block using precision 5-axis CAD/CAM machines, there is zero porcelain veneering layer to chip or delaminate."
          ],
          "tr": [
            "E-Max cam seramiklerin bükülme direnci 500 MPa sınırındadır. Ancak çiğneme esnasında veya gece diş sıkma (bruksizm) durumunda arka azı dişlerine binen yük 700 ila 900 Newton'u aşabilir. Bu derece yoğun kuvvet altında cam seramiğin arka dişlerde kırılma riski bulunur.",
            "İşte Zirkonyum (yitriyum ile dengelenmiş zirkonyum dioksit) bu noktada devreye girer. Kliniğimizde kullanılan en yeni nesil çok katmanlı zirkonyum bloklar 1200 - 1400 MPa bükülme direncine sahiptir. Tek parça monolitik bloktan 5 eksenli CAD/CAM robotlarıyla kazındığı için üzerinde dökülme veya atma yapacak zayıf bir porselen tabakası bulunmaz; kırılmaya karşı son derece dirençlidir."
          ],
          "de": [
            "Backenzähne müssen Kaubelastungen von über 800 Newton aushalten. Während Glaskeramiken hier an ihre Grenzen stoßen, widersteht Zirkonium mit bis zu 1.400 MPa selbst extremem Zähneknirschen.",
            "Dank monolithischer Fräsung aus einem Block gibt es kein Abplatzen (Chipping) von Verblendkeramik mehr."
          ],
          "pl": [
            "Siły żucia w odcinku bocznym sięgają 800 N. Monolityczny tlenek cyrkonu o wytrzymałości 1400 MPa jest niemal trzykrotnie mocniejszy od E-Max.",
            "Brak podbudowy porcelanowej eliminuje problem odkruszania się brzegów, gwarantując spokój na lata."
          ],
          "pt": [
            "A mastigação nos molares exerce forças até 800 N. O zircónio monolítico suporta 1400 MPa, sendo 3 vezes mais resistente que o E-Max.",
            "A fresagem CAD/CAM a partir de um bloco sólido elimina totalmente o risco de lascamento da porcelana."
          ],
          "es": [
            "Las fuerzas masticatorias posteriores alcanzan los 800 N. El zirconio monolítico ofrece 1400 MPa de resistencia, triplicando la capacidad de E-Max.",
            "El fresado en un solo bloque elimina por completo el riesgo de desprendimiento o fracturas."
          ],
          "ru": [
            "Жевательные зубы испытывают нагрузки до 800 Н. Прочность монолитного циркония достигает 1400 МПа, что исключает сколы даже при сильном бруксизме.",
            "Фрезерование на 5-осевых CAD/CAM станках обеспечивает идеальную анатомическую форму и долговечность."
          ]
        }
      },
      {
        "id": "master-smile-hybrid-protocol",
        "heading": {
          "en": "The Antalya Hybrid Smile Protocol: Best of Both Worlds",
          "tr": "Antalya Hibrit Gülüş Protokolü: İki Dünyanın En İyisini Birleştirmek",
          "de": "Das Antalya-Hybrid-Smile-Protokoll: Das Beste beider Welten",
          "pl": "Protokół Hybrydowy Master Smile: Połączenie Najlepszych Właściwości",
          "pt": "O Protocolo Híbrido Master Smile: O Melhor dos Dois Mundos",
          "es": "Protocolo Híbrido Master Smile: Lo Mejor de Ambos Mundos",
          "ru": "Гибридный протокол Master Smile: идеальный баланс красоты и силы"
        },
        "paragraphs": {
          "en": [
            "Why force a compromise when biomaterial engineering allows you to utilize both? At Master Smile Studio, Dr. Ozan Öztürk designs smiles using a scientifically calibrated 'Hybrid Smile Architecture':",
            "1. Anterior Esthetic Arc (Teeth 14 to 24 / Premolar to Premolar): We apply ultra-thin E-Max veneers or crowns to maximize light reflection, natural mamelon translucency, and youthful vitality.",
            "2. Posterior Functional Masticatory Unit (Molars): We place monolithic multi-layer zirconia crowns capable of absorbing heavy occlusal impact with zero structural fatigue.",
            "The result is a dazzling Hollywood smile when you laugh or speak, supported by an engine of indestructible chewing strength in the back."
          ],
          "tr": [
            "Neden tek bir materyale mahkum olasınız? Master Smile Studio'da Dr. Ozan Öztürk ve ekibimiz, hastalarımızın gülüşünü 'Hibrit Gülüş Mimarisi' ile tasarlar:",
            "1. Ön Estetik Gülüş Hattı (Küçük azılardan kesici dişlere kadar): Işık geçirgenliğini, doğal diş mamelonlarını ve genç ışıltıyı yakalamak için ultra ince E-Max lamine ve kronlar uygulanır.",
            "2. Arka Çiğneme Bölgesi (Büyük azılar): Ağır çiğneme kuvvetlerini ve gece baskısını absorbe etmek için kırılmaz çok katmanlı monolitik zirkonyum kronlar yerleştirilir.",
            "Böylece güldüğünüzde doğal bir Hollywood estetiği yakalarken, yemek yerken hiçbir kırılma veya çiğneme endişesi yaşamazsınız."
          ],
          "de": [
            "Unser Hybrid-Protokoll löst den Zielkonflikt: E-Max an den sichtbaren Frontzähnen für magische Transluzenz und monolithisches Zirkon an den Backenzähnen für unzerstörbare Kaukraft.",
            "Das Ergebnis ist ein strahlendes Lächeln mit maximaler Lebensdauer."
          ],
          "pl": [
            "Nasz Protokół Hybrydowy łączy E-Max w strefie uśmiechu z tlenkiem cyrkonu w zębach bocznych.",
            "Pacjent zyskuje olśniewający wygląd z przodu i niezłomną siłę żucia z tyłu."
          ],
          "pt": [
            "O Protocolo Híbrido aplica E-Max nos dentes anteriores para beleza translúcida e zircónio nos posteriores para mastigação segura.",
            "Garante estética impecável e funcionalidade sem receios."
          ],
          "es": [
            "El Protocolo Híbrido combina E-Max en el frente estético y zirconio en las muelas posteriores.",
            "Consigue una sonrisa natural y una mordida potente sin riesgo de fracturas."
          ],
          "ru": [
            "Гибридный протокол объединяет виниры E-Max спереди для сияющей улыбки и коронки из циркония сзади для безопасного жевания.",
            "Это идеальное сочетание премиальной эстетики и пожизненной надежности."
          ]
        }
      },
      {
        "id": "tooth-shaving-myths-facts",
        "heading": {
          "en": "Tooth Preparation: Minimally Invasive E-Max vs Full Crown Reduction",
          "tr": "Diş Kesimi Gerçekleri: Minimal İnvaziv E-Max ile Kuron Aşındırması Farkı",
          "de": "Zahnschmelzabtrag: Minimalinvasives E-Max vs. Kronenpräparation",
          "pl": "Szlifowanie Zębów: Małoinwazyjny E-Max a Preparacja pod Koronę",
          "pt": "Desgaste Dentário: E-Max Minimamente Invasivo vs Preparação para Coroa",
          "es": "Desgaste Dental: E-Max Mínimamente Invasivo frente a Corona Completa",
          "ru": "Обработка зубов: микроинвазивный E-Max против обточки под коронку"
        },
        "paragraphs": {
          "en": [
            "One of the biggest concerns voiced by international dental tourists is tooth reduction. Viral videos often show aggressively shaved 'peg teeth', sparking intense anxiety.",
            "The clinical reality is that E-Max veneers require only 0.3mm to 0.5mm of superficial enamel preparation on the facial surface—often remaining entirely within the enamel layer. Full zirconia crowns require 0.6mm to 1.0mm 360-degree reduction. At Master Smile Studio, our primary ethical pledge is conservative biological preservation: if your natural tooth anatomy supports veneers, we will never cut it down for a crown."
          ],
          "tr": [
            "Yurt dışından gelen hastalarımızın en büyük endişelerinden biri dişlerin aşırı kesilmesidir. Sosyal medyada sivri 'köpekbalığı dişleri' gibi paylaşılan görüntüler haklı bir korku yaratmaktadır.",
            "Oysa klinik gerçek çok farklıdır: E-Max laminelerde dişin sadece ön yüzeyinden 0.3 - 0.5 mm mikro aşındırma yapılır ve dişin minesi korunur. Zirkonyum kronlarda ise 0.6 - 1.0 mm koruyucu şekillendirme yeterlidir. Master Smile Studio olarak ilkemiz koruyucu hekimliktir: Lamine ile kurtarılabilecek hiçbir dişi asla kuron için gereksiz kesmeyiz."
          ],
          "de": [
            "Virale Videos mit radikal abgeschliffenen Zähnen verunsichern viele Patienten. E-Max-Veneers erfordern jedoch lediglich einen minimalen Schmelzabtrag von 0,3 bis 0,5 mm an der Außenfläche.",
            "Wir erhalten so viel gesunde Zahnsubstanz wie biologisch möglich."
          ],
          "pl": [
            "Wielu pacjentów obawia się nadmiernego szlifowania zębów. Licówki E-Max wymagają zaledwie 0,3–0,5 mm mikro-preparacji w obrębie samego szkliwa.",
            "Zawsze wybieramy metodę najbardziej zachowawczą dla tkanek zęba."
          ],
          "pt": [
            "Vídeos sensacionalistas criam receio sobre o desgaste dos dentes. As facetas E-Max necessitam de apenas 0,3 a 0,5 mm de desgaste superficial.",
            "A nossa prioridade absoluta é preservar a estrutura dentária natural."
          ],
          "es": [
            "Muchos pacientes temen el limado excesivo. Las carillas E-Max solo requieren de 0.3 a 0.5 mm de micro-tallado sobre el esmalte exterior.",
            "Nuestra filosofía es siempre la máxima conservación biológica del diente natural."
          ],
          "ru": [
            "Страх чрезмерной обточки зубов понятен, но виниры E-Max требуют всего 0.3–0.5 мм деликатной обработки в пределах эмали.",
            "Мы придерживаемся принципов микроинвазивной стоматологии и сохраняем максимум живых тканей."
          ]
        }
      }
    ],
    "faqs": [
      {
        "q": {
          "en": "Can E-Max veneers break easily?",
          "tr": "E-Max lamine kaplamalar kolayca kırılır mı?",
          "de": "Können E-Max-Veneers leicht brechen?",
          "pl": "Czy licówki E-Max łatwo pękają?",
          "pt": "As facetas E-Max partem-se com facilidade?",
          "es": "¿Se rompen fácilmente las carillas E-Max?",
          "ru": "Легко ли ломаются виниры E-Max?"
        },
        "a": {
          "en": "No. Once chemically adhesive-bonded to natural enamel using dual-cure resin cements, E-Max forms a monobloc union with the tooth structure with flexural strength up to 500 MPa, resisting normal dietary biting forces for 15+ years.",
          "tr": "Hayır. E-Max lamine kaplamalar özel rezin simanlarla diş minesiyle kimyasal bağ kurduğunda dişle bütünleşir (monoblok yapı). 500 MPa'lık bükülme direnciyle normal çiğneme kuvvetlerine karşı 15 yıldan uzun süre sorunsuz dayanır.",
          "de": "Nein. Nach der adhäsiven Verklebung mit dem Zahnschmelz bildet E-Max eine unlösbare Einheit mit bis zu 500 MPa Festigkeit.",
          "pl": "Nie. Po trwałym zacementowaniu adhezyjnym E-Max tworzy monolit ze szkliwem i bez trudu wytrzymuje codzienne siły żucia przez kilkanaście lat.",
          "pt": "Não. Quando cimentadas adesivamente ao esmalte, formam uma estrutura monobloco resistente com durabilidade superior a 15 anos.",
          "es": "No. Una vez adheridas químicamente al esmalte dental forman una estructura sólida que resiste más de 15 años.",
          "ru": "Нет. При адгезивной фиксации E-Max образует с тканями зуба единый моноблок прочностью до 500 МПа и служит более 15 лет."
        }
      },
      {
        "q": {
          "en": "Is Zirconia safe for patients with metal allergies?",
          "tr": "Zirkonyum metal alerjisi olan hastalar için güvenli midir?",
          "de": "Ist Zirkonium für Metallallergiker geeignet?",
          "pl": "Czy tlenek cyrkonu jest bezpieczny dla alergików?",
          "pt": "O zircónio é seguro para quem tem alergias a metais?",
          "es": "¿Es seguro el zirconio para personas con alergia al metal?",
          "ru": "Безопасен ли цирконий при аллергии на металлы?"
        },
        "a": {
          "en": "Yes, 100%. Despite its metallic elemental origins, dental zirconia is an oxidized ceramic (Zirconium Dioxide). It contains zero free metals, is 100% biocompatible, causes no allergic reactions, and prevents dark gray gum discoloration.",
          "tr": "Evet, kesinlikle güvenlidir. Zirkonyum elementel olarak metal grubunda yer alsa da diş hekimliğinde kullanılan formu oksitlenmiş seramiktir (Zirkonyum Dioksit). Tamamen metal içermez, doku dostudur, alerji yapmaz ve diş etinde gri gölgelenme oluşturmaz.",
          "de": "Ja, zu 100%. Zirkonoxid ist eine vollkommen metallfreie, biokompatible Keramik, die keine Allergien oder Zahnfleischverfärbungen auslöst.",
          "pl": "Tak, w 100%. Dwutlenek cyrkonu to ceramika tlenkowa bez wolnych cząstek metali, całkowicie biokompatybilna i antyalergiczna.",
          "pt": "Sim, a 100%. O óxido de zircónio é uma cerâmica biocompatível livre de metais, sem risco de alergias.",
          "es": "Sí, 100%. El óxido de zirconio es una cerámica biocompatible libre de metales que no provoca alergias ni tintes oscuros en la encía.",
          "ru": "Да, на 100%. Диоксид циркония — это гипоаллергенная биосовместимая керамика, не содержащая свободных металлов."
        }
      },
      {
        "q": {
          "en": "Do coffee, tea, or red wine stain E-Max or Zirconia?",
          "tr": "Kahve, çay veya kırmızı şarap E-Max ya da Zirkonyumu boyar mı?",
          "de": "Verfärben Kaffee, Tee oder Rotwein E-Max oder Zirkonium?",
          "pl": "Czy kawa, herbata lub czerwone wino barwią E-Max lub cyrkon?",
          "pt": "O café, chá ou vinho tinto mancham o E-Max ou o Zircónio?",
          "es": "¿El café, té o vino tinto manchan el E-Max o el Zirconio?",
          "ru": "Окрашиваются ли E-Max и цирконий от кофе, чая или красного вина?"
        },
        "a": {
          "en": "No. Both materials are high-density, non-porous glazed ceramics. Unlike composite resins or natural enamel, their surfaces are completely stain-impervious and maintain their pristine shade for life.",
          "tr": "Hayır. Her iki materyal de yüksek fırınlama ısısında sırlanmış gözeneksiz pürüzsüz seramiklerdir. Kompozit dolguların veya doğal dişin aksine çay, kahve, sigara ve şarap lekelerini tutmazlar; renklerini ömür boyu korurlar.",
          "de": "Nein. Beide Materialien sind hochgradig porenfreie Glaskeramiken bzw. Sinterkeramiken, die farbstabil bleiben und keine Verfärbungen annehmen.",
          "pl": "Nie. Szkliwiona powierzchnia ceramiki jest całkowicie nieporowata i nie chłonie barwników spożywczych ani dymu tytoniowego.",
          "pt": "Não. As superfícies vidradas são totalmente impermeáveis a manchas de café, chá, vinho ou tabaco.",
          "es": "No. Al ser cerámicas vidriadas y sin poros, son inmunes a las manchas de café, té o vino.",
          "ru": "Нет. Глазурованная непористая поверхность керамики устойчива к любым пищевым красителям и не темнеет со временем."
        }
      },
      {
        "q": {
          "en": "How long do E-Max and Zirconia restorations last?",
          "tr": "E-Max ve Zirkonyum kaplamalar ne kadar süre dayanır?",
          "de": "Wie lange halten E-Max- und Zirkon-Restaurationen?",
          "pl": "Jak długo utrzymują się licówki E-Max i korony cyrkonowe?",
          "pt": "Quanto tempo duram as restaurações de E-Max e Zircónio?",
          "es": "¿Cuánto tiempo duran las restauraciones de E-Max y Zirconio?",
          "ru": "Сколько лет служат реставрации из E-Max и циркония?"
        },
        "a": {
          "en": "Clinical long-term studies show that both materials demonstrate a 15 to 20+ year survival rate exceeding 95% when accompanied by routine 6-month check-ups, daily interdental flossing, and a custom night guard.",
          "tr": "Klinik takip çalışmaları, düzenli 6 aylık hekim kontrolleri, diş ipi kullanımı ve gece plağı desteğiyle her iki malzemenin de 15-20 yıldan uzun süre %95'in üzerinde başarıyla ağızda kaldığını göstermektedir.",
          "de": "Studien belegen eine Haltbarkeit von 15 bis über 20 Jahren bei regelmäßiger Prophylaxe und Verwendung einer Knirscherschiene.",
          "pl": "Badania kliniczne wykazują ponad 15–20 lat trwałości przy zachowaniu właściwej higieny i stosowaniu szyny relaksacyjnej.",
          "pt": "Estudos clínicos comprovam uma longevidade de 15 a mais de 20 anos com higiene regular e goteira noturna.",
          "es": "Los estudios avalan una durabilidad de 15 a más de 20 años con higiene interdental y férula de descarga nocturna.",
          "ru": "Клинические исследования подтверждают срок службы 15–20+ лет при условии хорошей гигиены и использования ночной капы."
        }
      },
      {
        "q": {
          "en": "Which option is more expensive in Antalya: E-Max or Zirconia?",
          "tr": "Antalya'da hangisi daha maliyetlidir: E-Max mi, Zirkonyum mu?",
          "de": "Was ist in Antalya kostspieliger: E-Max oder Zirkonium?",
          "pl": "Co jest droższe w Antalyi: E-Max czy cyrkon?",
          "pt": "Qual opção tem custo mais elevado em Antalya: E-Max ou Zircónio?",
          "es": "¿Qué opción tiene mayor coste en Antalya: E-Max o Zirconio?",
          "ru": "Что дороже в Анталье: E-Max или цирконий?"
        },
        "a": {
          "en": "E-Max veneers are typically slightly higher in cost due to the intricate manual ceramic layering and ultra-precise laboratory hand-finishing required by master ceramists. However, both options in Antalya cost 65–75% less than UK or European clinic rates.",
          "tr": "E-Max lamineler, seramik ustalarımızın mikroskop altında el işçiliğiyle katmanlama ve glaze yapmasını gerektirdiğinden zirkonyuma kıyasla bir miktar daha yüksek işçilik maliyetine sahiptir. Bununla birlikte Antalya'da her iki seçenek de İngiltere ve Avrupa fiyatlarına kıyasla %65 - %75 daha ekonomiktir.",
          "de": "E-Max ist wegen der aufwendigen manuellen Schichtung durch Meisterzahntechniker etwas teurer. Beide Optionen kosten in Antalya jedoch bis zu 70% weniger als in Westeuropa.",
          "pl": "E-Max bywa nieco droższy z uwagi na precyzyjną ręczną pracę technika, jednak oba warianty są w Antalyi o 65–75% tańsze niż w klinikach w Polsce czy UK.",
          "pt": "O E-Max é ligeiramente mais oneroso devido à estratificação artesanal, mas ambos custam até 70% menos em Antalya do que no Reino Unido ou Europa Central.",
          "es": "E-Max suele tener un coste ligeramente superior por el trabajo manual de laboratorio, pero ambos suponen un ahorro del 70% respecto a Europa.",
          "ru": "E-Max стоит немного дороже из-за сложного ручного нанесения слоев керамистом, однако в Анталье обе опции на 65–75% доступнее, чем в Великобритании или Европе."
        }
      }
    ],
    "author": SPECIALIST_AUTHORS.drOzan
  },
  "dental-phobia-sedation-dentistry-antalya": {
    "slug": "dental-phobia-sedation-dentistry-antalya",
    "category": "guides",
    "image": "/blog/dental-fear-dentophobia.webp",
    "publishDate": "2026-09-03",
    "readTime": "8 min read",
    "llmSummary": {
      "badge": {
        "en": "Patient Comfort & Anesthesiology Protocol",
        "tr": "Hasta Konforu ve Anesteziyoloji Protokolü",
        "de": "Patientenkomfort & Anästhesie-Protokoll",
        "pl": "Komfort Pacjenta i Protokół Sedacji",
        "pt": "Conforto do Paciente e Protocolo de Sedação",
        "es": "Confort del Paciente y Protocolo de Sedación",
        "ru": "Протокол седации и комфорта пациента"
      },
      "quickAnswer": {
        "en": "Dental phobia (dentophobia) and extreme gag reflexes prevent up to 36% of international patients from receiving timely dental care. At Master Smile Studio in Antalya, board-certified anesthesiologists administer intravenous (IV) conscious sedation ('twilight sleep'), allowing patients to drift into a state of deep tranquility while maintaining independent respiration and protective reflexes. With retrograde amnesia ensuring zero recall of surgical sounds, smells, or drill vibrations, patients can comfortably undergo extensive full-mouth treatments—such as 6–8 dental implants, sinus lifts, or full arch crown preparations—in a single painless morning session.",
        "tr": "Diş hekimi korkusu (dentofobi) ve şiddetli öğürme refleksi, hastaların %36'sının tedavilerini yıllarca ertelemesine neden olur. Master Smile Studio Antalya kliniğimizde uzman anesteziyoloji hekimlerimiz tarafından damar yoluyla uygulanan sedasyon (alacakaranlık uykusu) sayesinde hasta kendi başına nefes almaya devam ederken derin bir huzur ve uyku haline geçer. İşlem bittiğinde hiçbir ses, koku veya titreşim hatırlanmaz (retrograd amnezi). Böylece tek bir seansta 6–8 implant, sinüs lifting veya tüm ağız kaplama hazırlıkları tamamen ağrısız ve konforlu bir şekilde tamamlanır.",
        "de": "Zahnarztangst (Dentalphobie) und starker Würgereiz hindern viele Menschen an der nötigen Behandlung. Im Master Smile Studio Antalya ermöglicht die intravenöse Dämmerschlaf-Sedierung durch Fachanästhesisten völlig schmerzfreie Eingriffe. Patienten atmen selbstständig, spüren keinerlei Schmerz und haben danach keine Erinnerung an Bohrgeräusche. So lassen sich komplexe All-on-4-Implantationen in nur einer entspannten Sitzung durchführen.",
        "pl": "Dentofobia i silny odruch wymiotny sprawiają, że pacjenci odkładają leczenie na lata. W Master Smile Studio w Antalyi certyfikowani anestezjolodzy stosują sedację dożylną (tzw. sen zmierzchowy). Pacjent oddycha samodzielnie, nie odczuwa bólu ani stresu i nie pamięta dźwięków zabiegu. Pozwala to na wszczepienie kilku implantów podczas jednej bezstresowej wizyty.",
        "pt": "A fobia dentária e o reflexo de vómito impedem muitos pacientes de tratar a sua saúde oral. Na Master Smile Studio em Antalya, a sedação consciente intravenosa permite realizar tratamentos complexos como implantes ou pontes num estado de relaxamento profundo, sem qualquer dor ou memória do procedimento.",
        "es": "La dentofobia y el reflejo nauseoso impiden a muchos pacientes acudir al dentista. En Master Smile Studio Antalya aplicamos sedación consciente intravenosa guiada por anestesistas expertos. El paciente permanece profundamente relajado, sin dolor y sin recuerdos desagradables, completando cirugías de implantes en una única sesión matutina.",
        "ru": "Дентофобия и сильный рвотный рефлекс заставляют людей годами откладывать визит к врачу. В Master Smile Studio в Анталье сертифицированные анестезиологи проводят лечение под внутривенной седацией (медикаментозный сон). Пациент спокойно спит, дышит самостоятельно и просыпается с готовыми имплантами или коронками, не испытывая боли и страха."
      },
      "keyTakeaways": {
        "en": [
          "Twilight Sleep: Deep intravenous relaxation with spontaneous breathing and intact reflexes.",
          "Zero Traumatic Memory: Retrograde amnesia completely eliminates recollection of sounds and vibrations.",
          "Multi-Procedure Efficiency: 4–6 implants, bone grafts, and crown preps completed in one single appointment.",
          "Hospital-Grade Monitoring: Dedicated anesthesiologist constantly tracks SpO2, ECG, blood pressure, and capnography."
        ],
        "tr": [
          "Alacakaranlık Uykusu: Kendi kendine solunumun korunduğu güvenli damar içi derin rahatlama.",
          "Sıfır Travmatik Hafıza: Retrograd amnezi etkisiyle işlem anına dair hiçbir ses veya titreşim hatırlanmaz.",
          "Çoklu Tedavi Hızı: 4–6 implant, kemik grefti ve kaplama hazırlıkları tek bir randevuda tamamlanır.",
          "Hastane Standartlarında Takip: Uzman anestezi hekimi EKG, oksijen satürasyonu ve tansiyonu anlık izler."
        ],
        "de": [
          "Dämmerschlaf: Sichere Entspannung bei spontaner Eigenatmung ohne künstliche Beatmung.",
          "Keine Erinnerung: Retrograde Amnesie verhindert unangenehme Erinnerungen an Geräusche.",
          "Maximale Effizienz: Mehrere Implantate und Knochenaufbauten in einer einzigen Sitzung.",
          "Volle Überwachung: Kontinuierliches Monitoring von EKG, Sauerstoffsättigung und Blutdruck durch Anästhesisten."
        ],
        "pl": [
          "Głęboki Relaks: Pacjent oddycha samodzielnie, zachowując naturalne odruchy obronne.",
          "Brak Wspomnień: Amnezja wsteczna wymazuje wspomnienia dźwięków wierteł i zapachów gabinetu.",
          "Wszystko w 1 Dzień: Kilka implantów i odbudowa kości podczas jednej wizyty.",
          "Nadzór Anestezjologa: Ciągły monitoring EKG, saturacji i ciśnienia krwi."
        ],
        "pt": [
          "Sono Crepuscular: Relaxamento profundo mantendo a respiração espontânea e reflexos naturais.",
          "Sem Memória Traumática: Amnésia retrógrada apaga a recordação de ruídos e instrumentos.",
          "Eficiência Total: Colocação de vários implantes numa única sessão cirúrgica.",
          "Segurança Hospitalar: Médico anestesiologista monitoriza ECG, oxigénio e tensão arterial."
        ],
        "es": [
          "Sedación Consciente: Relajación profunda con respiración autónoma y reflejos intactos.",
          "Sin Recuerdos Traumáticos: La amnesia retrógrada evita recordar ruidos, olores o vibraciones.",
          "Máxima Eficiencia: Múltiples implantes y coronas resueltos en una única sesión matinal.",
          "Control Anestésico: Monitorización continua de pulso, oxígeno y tensión por un anestesista."
        ],
        "ru": [
          "Медикаментозный сон: Глубокое расслабление с самостоятельным дыханием без интубации.",
          "Никаких воспоминаний: Ретроградная амнезия стирает звуки бормашины и стресс из памяти.",
          "Все за 1 сеанс: Установка до 6–8 имплантов и подготовка зубов за одно утро.",
          "Мониторинг анестезиолога: Постоянный контроль ЭКГ, сатурации кислорода и артериального давления."
        ]
      },
      "medicalVerdict": {
        "en": "Sedation dentistry transforms traumatic dental avoidance into a relaxed, predictable clinical experience. For overseas patients travelling to Turkey, conscious sedation is the premier clinical strategy to consolidate multiple complex surgical and prosthodontic steps into one serene morning—optimizing travel schedules while maintaining maximum cardiovascular and respiratory safety.",
        "tr": "Sedasyon ile diş hekimliği, yıllardır ertelenen diş tedavilerini konforlu ve öngörülebilir bir deneyime dönüştürür. Yurt dışından Antalya'ya gelen hastalar için sedasyon, çok sayıda cerrahi ve protetik işlemi tek bir huzurlu seansta birleştirerek hem tatil süresini koruyan hem de hasta güvenliğini en üst düzeye çıkaran modern bir tıbbi çözümdür.",
        "de": "Die Dämmerschlafnarkose macht den Zahnarztbesuch stressfrei. Für internationale Patienten ist Sedierung ideal, um zeitintensive Behandlungen in einem Termin sicher und komfortabel abzuschließen.",
        "pl": "Leczenie w sedacji to przełom dla osób z lękiem przed dentystą. Pozwala zrealizować wieloetapowe procedury w jeden poranek, oszczędzając czas podróży i eliminując traumę.",
        "pt": "A sedação consciente transforma a ansiedade dentária num momento de descanso seguro, permitindo concentrar vários tratamentos num único dia para quem visita Antalya.",
        "es": "La odontología bajo sedación elimina el miedo y optimiza el tiempo de viaje a Turquía, agrupando cirugías complejas en una mañana tranquila con total seguridad.",
        "ru": "Седация делает лечение зубов абсолютно комфортным. Для иностранных пациентов в Анталье это лучший способ пройти полную реабилитацию за один день без боли и страха."
      }
    },
    "stats": [
      {
        "value": "0 Pain",
        "label": {
          "en": "Procedural pain and anxiety eliminated with IV sedation",
          "tr": "Sedasyon ile tamamen sıfırlanan işlem ağrısı ve kaygı düzeyi",
          "de": "Vollständig ausgeschalteter Behandlungsschmerz und Angst",
          "pl": "Całkowity brak bólu i lęku podczas zabiegu w sedacji",
          "pt": "Dor e ansiedade completamente eliminadas durante o procedimento",
          "es": "Dolor y ansiedad eliminados durante la intervención",
          "ru": "Полное отсутствие боли и тревоги во время манипуляций"
        }
      },
      {
        "value": "36%",
        "label": {
          "en": "Global population suffering from moderate to severe dental phobia",
          "tr": "Diş hekimi korkusu nedeniyle tedavilerini erteleyen nüfus oranı",
          "de": "Anteil der Bevölkerung mit dentaler Angststörung",
          "pl": "Odsetek osób cierpiących na lęk przed wizytą u stomatologa",
          "pt": "Percentagem de pessoas que evitam o dentista por fobia severa",
          "es": "Población que pospone tratamientos dentales por fobia o miedo",
          "ru": "Процент людей, откладывающих лечение из-за дентофобии"
        }
      },
      {
        "value": "1 Session",
        "label": {
          "en": "Complete full-arch implants and bone grafting in a single visit",
          "tr": "Tam çene implant ve kemik grefti işlemlerinin bittiği seans sayısı",
          "de": "Sitzung für komplette Implantationen und Knochenaufbauten",
          "pl": "Wizyta wystarczająca do wszczepienia kompleksu implantów",
          "pt": "Sessão necessária para realizar implantes de arcada completa",
          "es": "Sesión para completar cirugías de arcada completa e injertos",
          "ru": "Сеанс для установки всех необходимых имплантов и пластики"
        }
      }
    ],
    "intro": {
      "en": [
        "For millions of people worldwide, the sound of a dental handpiece, the clinical smell of eugenol, or a sensitive gag reflex triggers overwhelming panic. This condition—dentophobia—often results in decades of dental neglect, severe bone loss, chronic infections, and damaged self-esteem.",
        "At Master Smile Studio in Antalya, we believe no patient should ever suffer in silence or sacrifice their smile to fear. Through advanced intravenous (IV) conscious sedation administered by certified anesthesiology specialists, we provide a peaceful, pain-free environment where years of dental deterioration can be completely reversed in a single morning."
      ],
      "tr": [
        "Dünya çapında milyonlarca insan için diş hekimi koltuğundaki alet sesleri, klinik kokusu veya öğürme refleksi yoğun bir panik ve anksiyete kaynağıdır. 'Dentofobi' olarak adlandırılan bu durum, hastaların diş tedavilerini onlarca yıl ertelemesine, diş ve kemik kayıplarına ve sosyal çekingenliğe neden olur.",
        "Master Smile Studio Antalya kliniğimizde hiçbir hastanın korku nedeniyle diş sağlığından mahrum kalmasına izin vermiyoruz. Uzman anestezi hekimlerimizin uyguladığı damar içi (IV) sedasyon sayesinde, yıllarca ertelenen implant ve estetik kaplama tedavilerini tek bir huzurlu seansta, tamamen ağrısız ve konforlu şekilde tamamlıyoruz."
      ],
      "de": [
        "Zahnarztphobie betrifft mehr als ein Drittel der Erwachsenen und führt oft zu Zahnverlust und Schamgefühl. Viele Patienten trauen sich jahrelang nicht in eine Praxis.",
        "Im Master Smile Studio Antalya bieten wir kontrollierte Dämmerschlaf-Sedierung an: Sie schlafen sanft ein, wachen erholt auf und Ihre Zähne sind fertig behandelt."
      ],
      "pl": [
        "Strach przed dentystą potrafi sparaliżować na lata, prowadząc do utraty zębów i problemów zdrowotnych. Dźwięk wiertła i silny odruch wymiotny to częste bariery.",
        "W naszej klinice w Antalyi stosujemy nowoczesną sedację wziewną i dożylną, dzięki której zabiegi chirurgiczne mijają jak krótki, przyjemny sen."
      ],
      "pt": [
        "O medo de ir ao dentista leva muitas pessoas a ignorar problemas graves de saúde oral durante anos. O pânico associado ao tratamento pode parecer insuperável.",
        "Na Master Smile Studio proporcionamos sedação consciente com apoio de anestesiologistas dedicados, garantindo uma experiência tranquila e segura em Antalya."
      ],
      "es": [
        "La fobia dental y el reflejo nauseoso provocan que muchas personas pospongan tratamientos cruciales durante años, deteriorando su calidad de vida.",
        "En Master Smile Studio ofrecemos sedación intravenosa supervisada para que recupere su sonrisa en una sola mañana sin dolor ni angustia."
      ],
      "ru": [
        "Страх перед стоматологическим креслом знаком трети населения планеты. Пациенты годами терпят боль, разрушая здоровье зубов и костную ткань.",
        "В Master Smile Studio мы возвращаем здоровую улыбку в состоянии медикаментозного сна. Процедура проходит незаметно, легко и безопасно."
      ]
    },
    "keyTakeaway": {
      "en": "Conscious IV sedation turns hours of complex dental surgery into what feels like a 5-minute restful nap, with zero pain, zero anxiety, and zero memory of the procedure.",
      "tr": "Damar içi sedasyon, saatler süren karmaşık cerrahi operasyonları hasta için 5 dakikalık dinlendirici bir uykuya dönüştürür; sıfır ağrı, sıfır korku ve sıfır kötü anı sağlar.",
      "de": "Die Dämmerschlaf-Sedierung verwandelt mehrstündige chirurgische Eingriffe in ein gefühltes 5-Minuten-Nickerchen – ganz ohne Angst und Schmerz.",
      "pl": "Sedacja dożylna sprawia, że skomplikowane operacje stomatologiczne mijają jak krótki odpoczynek bez stresu i bólu.",
      "pt": "A sedação consciente transforma cirurgias longas num sono repousante de minutos, sem dor e sem ansiedade.",
      "es": "La sedación intravenosa convierte largas cirugías en una siesta relajante de minutos, sin dolor ni recuerdos negativos.",
      "ru": "Внутривенная седация превращает многочасовую операцию в короткий спокойный сон без боли, шума и тревоги."
    },
    "comparisonTable": {
      "title": {
        "en": "Comparison: Conscious IV Sedation vs General Anesthesia vs Local Anesthesia",
        "tr": "Karşılaştırma: Damar İçi (IV) Sedasyon, Genel Anestezi ve Lokal Anestezi",
        "de": "Vergleich: Dämmerschlaf (Sedierung) vs. Vollnarkose vs. Lokalanästhesie",
        "pl": "Porównanie: Sedacja Dożylna vs Narkoza Ogólna vs Znieczulenie Miejscowe",
        "pt": "Comparação: Sedação Consciente vs Anestesia Geral vs Anestesia Local",
        "es": "Comparativa: Sedación Consciente IV vs Anestesia General vs Anestesia Local",
        "ru": "Сравнение: Внутривенная седация, общий наркоз и местная анестезия"
      },
      "col1Header": {
        "en": "Conscious IV Sedation (Twilight Sleep)",
        "tr": "Damar İçi (IV) Sedasyon (Alacakaranlık)",
        "de": "IV-Dämmerschlaf (Sedierung)",
        "pl": "Sedacja Dożylna (Sen Zmierzchowy)",
        "pt": "Sedação Consciente IV",
        "es": "Sedación Consciente IV",
        "ru": "Внутривенная седация (сон)"
      },
      "col2Header": {
        "en": "General Anesthesia (Hospital Narcosis)",
        "tr": "Genel Anestezi (Hastane Narkozu)",
        "de": "Vollnarkose (Intubationsnarkose)",
        "pl": "Narkoza Ogólna (Szpitalna)",
        "pt": "Anestesia Geral",
        "es": "Anestesia General Hospitalaria",
        "ru": "Общий наркоз (интубация)"
      },
      "rows": [
        {
          "col1": {
            "en": "Drowsy, deeply relaxed, completely free of anxiety",
            "tr": "Uykulu, derin rahatlamış, kaygıdan tamamen arınmış",
            "de": "Entspannt im Halbschlaf, frei von jeglicher Angst",
            "pl": "Głęboki relaks, stan błogiego spokoju bez lęku",
            "pt": "Sonolento, profundamente relaxado e sereno",
            "es": "Semidormido, profundamente relajado y sin estrés",
            "ru": "Глубокое расслабление, дремота, полное спокойствие"
          },
          "col2": {
            "en": "Total drug-induced loss of consciousness (coma-like state)",
            "tr": "Tam bilinç kaybı ve dış uyaranlara tam yanıtsızlık",
            "de": "Vollständige Bewusstlosigkeit",
            "pl": "Całkowita utrata przytomności",
            "pt": "Perda total de consciência farmacológica",
            "es": "Pérdida total del estado de consciencia",
            "ru": "Полное медикаментозное выключение сознания"
          }
        },
        {
          "col1": {
            "en": "Independent, natural spontaneous breathing (no ventilator)",
            "tr": "Hasta kendi kendine doğal nefes alır (solunum cihazı yok)",
            "de": "Selbstständige Spontanatmung ohne Beatmungsgerät",
            "pl": "Własny, naturalny oddech pacjenta bez rurki intubacyjnej",
            "pt": "Respiração espontânea autónoma sem ventilador",
            "es": "Respiración natural espontánea sin intubación",
            "ru": "Самостоятельное естественное дыхание без аппарата ИВЛ"
          },
          "col2": {
            "en": "Requires endotracheal intubation and mechanical ventilator",
            "tr": "Soluk borusuna tüp (entübasyon) ve solunum cihazı gerekir",
            "de": "Künstliche Beatmung über Intubation erforderlich",
            "pl": "Konieczna intubacja i sztuczna wentylacja płuc",
            "pt": "Exige intubação endotraqueal e ventilação mecânica",
            "es": "Requiere intubación endotraqueal y respirador mecánico",
            "ru": "Требуется интубация трахеи и аппаратная вентиляция"
          }
        },
        {
          "col1": {
            "en": "Rapid recovery in 15–20 minutes; walk out comfortably",
            "tr": "15-20 dakikada hızlı uyanma ve ayılma, dinç kalkış",
            "de": "Schnelles Aufwachen in 15–20 Minuten ohne Katergefühl",
            "pl": "Szybkie wybudzenie w 15–20 minut bez nudności",
            "pt": "Recuperação rápida em 15–20 minutos sem náuseas",
            "es": "Recuperación rápida en 15–20 minutos sin malestar",
            "ru": "Быстрое пробуждение за 15–20 минут без тошноты"
          },
          "col2": {
            "en": "2–4 hours groggy recovery; frequent nausea or sore throat",
            "tr": "2-4 saat süren sersemlik, boğazda tahriş ve bulantı riski",
            "de": "Längere Aufwachphase mit möglicher Übelkeit und Heiserkeit",
            "pl": "Kilkugodzinne dochodzenie do siebie, ryzyko wymiotów",
            "pt": "Recuperação de várias horas com possível tontura e náusea",
            "es": "Recuperación lenta de varias horas con mareos o náuseas",
            "ru": "Длительный выход из наркоза, слабость, боли в горле"
          }
        },
        {
          "col1": {
            "en": "Excellent amnesia: zero recall of drills, sounds, or smells",
            "tr": "Mükemmel amnezi: işlem sesleri, koku ve aletler hatırlanmaz",
            "de": "Retrograde Amnesie: Keine Erinnerung an Geräusche oder Bohrer",
            "pl": "Całkowity brak wspomnień dźwięków i zapachów z zabiegu",
            "pt": "Amnésia retrógrada: zero recordação de ruídos ou odores",
            "es": "Amnesia retrógrada: no se recuerdan sonidos ni instrumental",
            "ru": "Полное отсутствие воспоминаний о шуме приборов и запахах"
          },
          "col2": {
            "en": "Complete absence of memory",
            "tr": "Hafıza tamamen kapalıdır",
            "de": "Keinerlei Erinnerung",
            "pl": "Brak jakichkolwiek wspomnień",
            "pt": "Ausência total de memória",
            "es": "Ausencia total de memoria",
            "ru": "Полное отсутствие памяти о периоде наркоза"
          }
        }
      ]
    },
    "sections": [
      {
        "id": "understanding-dentophobia",
        "heading": {
          "en": "Understanding Dentophobia: Why 'Just Relax' Does Not Work",
          "tr": "Dentofobiyi Anlamak: 'Korkacak Bir Şey Yok' Sözü Neden İşe Yaramaz?",
          "de": "Dentophobie verstehen: Warum einfaches Zureden nicht hilft",
          "pl": "Zrozumieć Dentofobię: Dlaczego Zwykłe 'Uspokój Się' Nie Działa",
          "pt": "Compreender a Dentofobia: A Razão Pela Qual a Força de Vontade Não Chega",
          "es": "Comprender la Dentofobia: Por Qué el Miedo Dental es una Respuesta Real",
          "ru": "Природа дентофобии: почему слова 'успокойтесь' не помогают"
        },
        "paragraphs": {
          "en": [
            "Dental phobia is not a minor case of nervousness; it is an involuntary, neurobiological fight-or-flight reaction. Traumatic past experiences in childhood, an exaggerated pharyngeal gag reflex, or fear of choking can trigger immediate adrenaline surges, elevated heart rates, and extreme distress when faced with the dental chair.",
            "Telling an anxious patient to 'just be brave' is clinically ineffective. The autonomic nervous system cannot simply be reasoned with. By introducing intravenous pharmacological sedation, we gently bypass the amygdala's fear circuitry, creating profound physical serenity while maintaining complete physiological stability."
          ],
          "tr": [
            "Diş hekimi korkusu basit bir heyecan veya kapris değildir; sempatik sinir sisteminin devreye girdiği gerçek bir 'savaş ya da kaç' reaksiyonudur. Çocuklukta yaşanan acı verici deneyimler, aşırı hassas öğürme refleksi veya kontrolü kaybetme korkusu, koltuğa oturur oturmaz hastanın nabzını fırlatır ve panik yaratır.",
            "Korkan bir hastaya 'sakin ol, bir şey olmayacak' demek tıbbi açıdan faydasızdır. Çünkü otonom sinir sistemi mantıkla susturulamaz. Uzman anesteziyoloji hekimimizin uyguladığı damar içi sedasyon ile beynin korku merkezi (amigdala) nazikçe sakinleştirilir; hasta fizyolojik olarak tam güvende kalırken zihnen dingin bir uykuya dalar."
          ],
          "de": [
            "Zahnarztangst ist eine reale körperliche Stressreaktion. Schmerzhafte Erlebnisse oder Würgereiz aktivieren unweigerlich das vegetative Nervensystem.",
            "Gute Worte reichen nicht aus. Eine gezielte intravenöse Sedierung schaltet diesen Alarmzustand im Gehirn sanft aus und ermöglicht eine entspannte Behandlung."
          ],
          "pl": [
            "Dentofobia to mimowolna reakcja układu nerwowego na traumatyczne wspomnienia z dzieciństwa lub silny odruch gardłowy.",
            "Sedacja dożylna wycisza ośrodek strachu w mózgu, dając pacjentowi poczucie pełnego bezpieczeństwa i spokoju."
          ],
          "pt": [
            "A fobia dentária é uma resposta neurobiológica involuntária que não se resolve apenas com palavras de encorajamento.",
            "A sedação intravenosa neutraliza o ciclo do pânico, permitindo que o paciente permaneça sereno durante todo o ato médico."
          ],
          "es": [
            "El miedo al dentista es una respuesta fisiológica involuntaria ligada a malas experiencias pasadas o al reflejo de náusea.",
            "La sedación médica desactiva la respuesta de ansiedad en el cerebro, permitiendo realizar los tratamientos con total serenidad."
          ],
          "ru": [
            "Дентофобия — это реальная нейробиологическая реакция организма, вызванная детскими травмами или рвотным рефлексом.",
            "Седация мягко блокирует центры тревоги в мозге, погружая человека в комфортный сон при полной стабильности организма."
          ]
        }
      },
      {
        "id": "conscious-sedation-mechanics",
        "heading": {
          "en": "How IV Conscious Sedation Works: The Science of Twilight Comfort",
          "tr": "Damar İçi Sedasyon Nasıl Çalışır: Alacakaranlık Konforunun Bilimi",
          "de": "Wie intravenöse Sedierung funktioniert: Die Wissenschaft des Dämmerschlafs",
          "pl": "Jak Działa Sedacja Dożylna: Mechanizm Spokojnego Snu",
          "pt": "Como Funciona a Sedação Consciente: A Ciência do Conforto",
          "es": "Mecanismo de la Sedación Consciente IV: Ciencia y Bienestar",
          "ru": "Как работает внутривенная седация: физиология медикаментозного сна"
        },
        "paragraphs": {
          "en": [
            "Upon entering our dedicated surgical suite at Master Smile Studio, a board-certified anesthesiologist places a micro-cannula into a vein on the back of your hand. Highly titrated, short-acting sedative agents (such as midazolam and low-dose propofol) are infused.",
            "Within 60 seconds, a warm, blissful wave of relaxation spreads throughout your body. Your eyelids become pleasantly heavy. You slip into a light twilight slumber. Although you remain capable of following simple clinical instructions (like 'open slightly wider'), your awareness of time, noise, and pain vanishes completely. Once the medication is stopped, you awaken clear-headed within 15 minutes."
          ],
          "tr": [
            "Master Smile Studio cerrahi süitimize girdiğinizde, anestezi ve reanimasyon uzmanımız elinizin üzerindeki damara ince bir kanül yerleştirir. Kısa etkili, güvenli ve titre edilmiş sedatif ilaçlar kontrollü olarak verilir.",
            "Yaklaşık 60 saniye içinde vücudunuzu tatlı bir huzur dalgası sarar. Gözleriniz dinlendirici bir ağırlıkla kapanır ve hafif bir alacakaranlık uykusuna geçersiniz. Hekiminizin 'ağzınızı biraz açın' gibi basit yönlendirmelerine yanıt verebilirsiniz; ancak zaman algısı, motor sesleri ve cerrahi aletler zihninizden tamamen silinir. İlaç kesildikten 15 dakika sonra zihniniz berrak şekilde uyanırsınız."
          ],
          "de": [
            "Ein Facharzt für Anästhesie legt einen feinen Venenzugang und verabreicht sanfte, schnell wirkende Beruhigungsmittel. Innerhalb einer Minute setzt tiefe Entspannung ein.",
            "Sie schlafen angenehm, können einfache Bitten wie 'Mund etwas weiter öffnen' befolgen, spüren aber absolut keinen Schmerz und haben kein Zeitempfinden."
          ],
          "pl": [
            "Anestezjolog podaje przez wenflon bezpieczne środki uspokajające. Po kilkudziesięciu sekundach pacjent zasypia płytkim, relaksującym snem.",
            "Zabieg mija błyskawicznie, a po kilkunastu minutach od zakończenia pacjent jest w pełni przytomny i zrelaksowany."
          ],
          "pt": [
            "O médico anestesiologista administra uma medicação sedativa suave por via intravenosa, induzindo um estado de tranquilidade quase imediato.",
            "O tempo passa sem que se dê conta, sem dor ou desconforto, com despertar rápido e lúcido logo após a cirurgia."
          ],
          "es": [
            "El anestesista administra fármacos sedantes de acción ultracorta por vía intravenosa, induciendo una agradable sensación de descanso en un minuto.",
            "El paciente permanece cómodo y protegido, sin noción del tiempo y despertando despejado poco después de terminar."
          ],
          "ru": [
            "Врач-анестезиолог вводит ультракороткие безопасные препараты через тонкий катетер. Уже через минуту наступает глубокое умиротворение.",
            "Пациент находится в легком сне, не слышит звуков инструментов, а после пробуждения чувствует себя отдохнувшим."
          ]
        }
      },
      {
        "id": "hospital-grade-monitoring-antalya",
        "heading": {
          "en": "Hospital-Grade Safety Standards at Master Smile Studio Antalya",
          "tr": "Master Smile Studio Antalya'da Hastane Düzeyinde Güvenlik Standartları",
          "de": "Sicherheitsstandards auf Klinikniveau im Master Smile Studio Antalya",
          "pl": "Szpitalne Standardy Bezpieczeństwa w Master Smile Studio w Antalyi",
          "pt": "Padrões de Segurança Hospitalar na Master Smile Studio em Antalya",
          "es": "Estándares de Seguridad Hospitalaria en Master Smile Studio Antalya",
          "ru": "Госпитальные стандарты безопасности в Master Smile Studio Анталья"
        },
        "paragraphs": {
          "en": [
            "Patient safety is our unnegotiable clinical core. In many dental clinics abroad, sedation is loosely attempted by general dentists without specialized anesthetic training. At Master Smile Studio, sedation is exclusively administered and supervised by certified medical anesthesiologists.",
            "Throughout your entire procedure, our monitoring equipment continuously tracks your electrocardiogram (ECG), non-invasive blood pressure (NIBP), pulse oximetry oxygen saturation (SpO2), and exhaled carbon dioxide levels (Capnography). Full resuscitation equipment and pharmaceutical reversal agents are immediately at hand, ensuring total peace of mind."
          ],
          "tr": [
            "Hasta güvenliği kliniğimizin tavizsiz en temel ilkesidir. Dünyada bazı kliniklerde sedasyon hekimin kendisi tarafından kontrolsüzce uygulanmaya çalışılırken, Master Smile Studio'da bu işlem sadece tıp doktoru olan anestezi ve reanimasyon uzmanları tarafından yürütülür.",
            "Tüm operasyon süresince EKG ritmi, tansiyon, kan oksijen doygunluğu (SpO2) ve solunum karbondioksit düzeyleri (kapnografi) monitörden saniye saniye takip edilir. Olası her duruma karşı tüm acil kitler ve anestezi geri döndürücü ajanlar hazır bulundurulur."
          ],
          "de": [
            "Ihre Sicherheit steht an erster Stelle. Bei uns wird jede Sedierung von einem Facharzt für Anästhesie gesteuert und lückenlos überwacht.",
            "Modernste Monitore erfassen EKG, Blutdruck, Puls und Sauerstoffsättigung zu jeder Sekunde der Behandlung."
          ],
          "pl": [
            "Zabieg nadzoruje dyplomowany lekarz anestezjolog, który nieprzerwanie monitoruje parametry życiowe pacjenta.",
            "Klinika dysponuje zaawansowanym sprzętem monitorującym EKG, saturację oraz ciśnienie tętnicze."
          ],
          "pt": [
            "A presença contínua de um médico especialista em anestesiologia garante a máxima segurança em todos os momentos.",
            "Monitorizamos em tempo real o eletrocardiograma, a pressão arterial e os níveis de oxigenação no sangue."
          ],
          "es": [
            "Un médico especialista en anestesiología supervisa de forma continua las constantes vitales durante toda la intervención.",
            "Disponemos de monitorización multiparamétrica con ECG, pulsioximetría y tensión arterial para total tranquilidad."
          ],
          "ru": [
            "Безопасность контролирует врач анестезиолог-реаниматолог, непрерывно следящий за состоянием пациента.",
            "Специальное оборудование отслеживает ЭКГ, сатурацию кислорода и давление на протяжении всей операции."
          ]
        }
      }
    ],
    "faqs": [
      {
        "q": {
          "en": "Will I feel any pain or hear drilling noises during sedation?",
          "tr": "Sedasyon altındayken herhangi bir ağrı hisseder miyim ya da alet seslerini duyar mıyım?",
          "de": "Spüre ich Schmerzen oder höre ich Bohrgeräusche während der Sedierung?",
          "pl": "Czy podczas sedacji poczuję ból lub usłyszę dźwięk wiertła?",
          "pt": "Vou sentir dor ou ouvir o barulho dos instrumentos durante a sedação?",
          "es": "¿Sentiré dolor o escucharé el ruido del instrumental bajo sedación?",
          "ru": "Будет ли больно или слышно звуки бормашины во время седации?"
        },
        "a": {
          "en": "No. Sedation induces deep tranquility and pain relief, combined with targeted local anesthetics that numb your gums completely. Because of retrograde amnesia, you will have zero recollection of sounds, pressure, or vibrations.",
          "tr": "Hayır. Sedasyon derin bir huzur sağlarken diş etleriniz de lokal anestezi ile tamamen uyuşturulur. Retrograd amnezi etkisi sayesinde işlem bittiğinde hiçbir ses, baskı veya alet titreşimi hatırlamazsınız.",
          "de": "Nein. In Kombination mit sanfter örtlicher Betäubung spüren Sie absolut nichts. Durch die retrograde Amnesie erinnern Sie sich an keinerlei Geräusche.",
          "pl": "Nie. Sedacja w połączeniu ze znieczuleniem miejscowym całkowicie blokuje ból, a pacjent nie pamięta dźwięków ani wibracji.",
          "pt": "Não. Não sentirá qualquer dor graças à anestesia local associada, e a medicação apaga a memória dos barulhos cirúrgicos.",
          "es": "No. La combinación con anestesia local elimina el dolor y el efecto sedante borra el recuerdo de ruidos y vibraciones.",
          "ru": "Нет. Боль полностью блокируется местной анестезией, а медикаментозный сон стирает все неприятные звуки и ощущения."
        }
      },
      {
        "q": {
          "en": "Is conscious sedation safe for older patients or those with high blood pressure?",
          "tr": "Sedasyon yaşlı hastalar veya tansiyon hastaları için güvenli midir?",
          "de": "Ist die Sedierung für ältere Patienten oder bei Bluthochdruck sicher?",
          "pl": "Czy sedacja jest bezpieczna dla osób starszych i z nadciśnieniem?",
          "pt": "A sedação é segura para pacientes idosos ou com hipertensão?",
          "es": "¿Es segura la sedación para pacientes mayores o con hipertensión?",
          "ru": "Безопасна ли седация для пожилых людей и гипертоников?"
        },
        "a": {
          "en": "Yes. In fact, IV sedation is significantly safer for hypertensive patients than treating them with anxiety, because eliminating stress prevents dangerous adrenaline spikes and sudden blood pressure surges.",
          "tr": "Evet, son derece güvenlidir. Hatta yüksek tansiyonu olan hastalarda korku ve stresin yarattığı adrenalin patlamasını engellediği için tansiyonun aniden yükselmesini önler ve işlemi daha da güvenli kılar.",
          "de": "Ja, sehr sicher. Da die Sedierung Stresshormone verhindert, bleibt der Blutdruck während der gesamten Behandlung stabil.",
          "pl": "Tak. Brak stresu zapobiega wyrzutom adrenaliny i skokom ciśnienia, co czyni zabieg bezpieczniejszym dla serca.",
          "pt": "Sim. Ao evitar picos de ansiedade e adrenalina, a sedação ajuda a manter a pressão arterial muito mais estável.",
          "es": "Sí. Al eliminar el estrés se evitan subidas bruscas de adrenalina y picos de tensión arterial durante la cirugía.",
          "ru": "Да. Седация предотвращает выброс адреналина от страха, благодаря чему артериальное давление остается стабильным."
        }
      },
      {
        "q": {
          "en": "How many hours before sedation must I stop eating and drinking?",
          "tr": "Sedasyon öncesinde kaç saat boyunca yeme ve içmeyi kesmeliyim?",
          "de": "Wie lange vor der Sedierung darf ich nichts essen und trinken?",
          "pl": "Ile godzin przed sedacją nie wolno jeść i pić?",
          "pt": "Quantas horas antes da sedação devo fazer jejum?",
          "es": "¿Cuántas horas antes de la sedación debo estar en ayunas?",
          "ru": "За сколько часов до седации нельзя есть и пить?"
        },
        "a": {
          "en": "You must fast for at least 6 hours for solid food and milk, and 2 hours for clear water. This ensures your stomach is completely empty for maximum safety.",
          "tr": "İşlemden önce en az 6 saat katı gıda ve süt tüketmemeli, son 2 saat ise su dahi içmemelisiniz. Bu açlık süresi midenizin boş olmasını sağlayarak güvenliği garanti eder.",
          "de": "Mindestens 6 Stunden keine feste Nahrung oder Milch und bis zu 2 Stunden vorher kein klares Wasser.",
          "pl": "Wymagany jest post: minimum 6 godzin bez jedzenia i mleka oraz 2 godziny bez czystej wody.",
          "pt": "Jejum obrigatório de 6 horas para sólidos e 2 horas para água simples antes do procedimento.",
          "es": "Debe mantener un ayuno de 6 horas para alimentos sólidos y 2 horas para agua antes del tratamiento.",
          "ru": "Необходимо воздержаться от приема твердой пищи за 6 часов, а воды — за 2 часа до начала процедуры."
        }
      },
      {
        "q": {
          "en": "Can I walk and return to my hotel by myself after sedation?",
          "tr": "Sedasyondan sonra tek başıma yürüyebilir ve otelime dönebilir miyim?",
          "de": "Kann ich nach der Sedierung allein ins Hotel zurückkehren?",
          "pl": "Czy po sedacji mogę samodzielnie wrócić do hotelu?",
          "pt": "Posso voltar sozinho para o hotel após a sedação?",
          "es": "¿Puedo regresar solo al hotel después de la sedación?",
          "ru": "Смогу ли я самостоятельно дойти и вернуться в отель после седации?"
        },
        "a": {
          "en": "You will be able to walk within 20 minutes, but reflexes remain slowed for several hours. We require that you have an adult companion or utilize our private clinic VIP driver who will personally escort you safely to your hotel room.",
          "tr": "20 dakika içinde rahatça ayağa kalkabilirsiniz; ancak refleksler birkaç saat yavaş kalabilir. Yanınızda bir refakatçi bulunmasını öneririz ya da özel VIP şoförümüz sizi doğrudan otel odanıza kadar güvenle ulaştırır.",
          "de": "Sie können nach 20 Minuten aufstehen, sollten aber nicht allein fahren. Unser privater VIP-Fahrer bringt Sie sicher in Ihr Hotel.",
          "pl": "Będziesz mógł chodzić po 20 minutach, jednak nasz prywatny kierowca VIP odwiezie Cię bezpiecznie prosto do pokoju hotelowego.",
          "pt": "Poderá caminhar após 20 minutos, mas o nosso motorista privado VIP encarregar-se-á de levá-lo comodamente ao hotel.",
          "es": "Podrá caminar en 20 minutos, pero nuestro chófer VIP privado le trasladará directamente a la puerta de su hotel para mayor confort.",
          "ru": "Вы сможете ходить уже через 20 минут, но наш персональный VIP-водитель бережно доставит вас прямо до номера в отеле."
        }
      },
      {
        "q": {
          "en": "How much does dental sedation cost at Master Smile Studio Antalya?",
          "tr": "Master Smile Studio Antalya'da sedasyon işleminin maliyeti nedir?",
          "de": "Was kostet eine Zahnbehandlung unter Sedierung in Antalya?",
          "pl": "Ile kosztuje leczenie zębów w sedacji w Master Smile Studio?",
          "pt": "Qual é o custo da sedação consciente na Master Smile Studio?",
          "es": "¿Cuánto cuesta el tratamiento dental bajo sedación en Antalya?",
          "ru": "Сколько стоит седация в клинике Master Smile Studio в Анталье?"
        },
        "a": {
          "en": "Conscious sedation in our Antalya surgical suite typically ranges between 250€ and 400€ per session—including the specialist anesthesiologist fee and full monitoring. In our full-mouth All-on-4 and premium packages, sedation is frequently included at no extra charge.",
          "tr": "Antalya kliniğimizde sedasyon ücreti uzman anesteziyolog ve tüm izleme ekipmanı dahil seans başına 250€ - 400€ arasındadır. Tam çene All-on-4 ve kapsamlı gülüş paketlerimizde sedasyon çoğu zaman hasta konforu için ücretsiz olarak pakete dahil edilir.",
          "de": "Die Sedierung kostet in der Regel zwischen 250€ und 400€ pro Sitzung. Bei umfangreichen All-on-4-Paketen ist sie häufig bereits im Gesamtpreis enthalten.",
          "pl": "Koszt sedacji wynosi zwykle 250€–400€ za sesję, a w przypadku pakietów rekonstrukcji All-on-4 bywa wliczony bezpłatnie w cenę.",
          "pt": "O valor da sedação situa-se habitualmente entre 250€ e 400€ por sessão, estando frequentemente incluída nos pacotes de boca completa All-on-4.",
          "es": "La sedación suele costar entre 250€ y 400€ por sesión, y con frecuencia está incluida sin coste en los paquetes completos All-on-4.",
          "ru": "Стоимость седации составляет от 250€ до 400€ за сеанс, а в комплексные пакеты All-on-4 она часто входит бесплатно."
        }
      }
    ],
    "author": SPECIALIST_AUTHORS.drOzan
  },
  "antalya-dental-holiday-step-by-step-guide": {
    "slug": "antalya-dental-holiday-step-by-step-guide",
    "category": "guides",
    "image": "/blog/antalya-dental-holiday.png",
    "publishDate": "2026-09-04",
    "readTime": "9 min read",
    "llmSummary": {
      "badge": {
        "en": "Patient Itinerary & VIP Travel Guide",
        "tr": "Hasta Seyahat Planı ve VIP Rehberi",
        "de": "Patienten-Reiseplan & VIP-Leitfaden",
        "pl": "Plan Podróży Pacjenta i Przewodnik VIP",
        "pt": "Roteiro do Paciente e Guia de Viagem VIP",
        "es": "Itinerario del Paciente y Guía de Viaje VIP",
        "ru": "Пошаговый план поездки и VIP-гид"
      },
      "quickAnswer": {
        "en": "Planning dental treatment in a foreign country can feel daunting, but an Antalya dental holiday at Master Smile Studio is engineered for effortless luxury and clinical perfection. Our full-package journey begins with a 95%+ locked online quote based on your 3D X-rays, followed by a VIP Mercedes-Benz airport pickup, 5-star beachfront hotel accommodations in Lara, and a synchronized 6-day treatment schedule. Patients enjoy Antalya's historic Kaleiçi, Mediterranean beaches, and fine dining while our in-house CAD/CAM laboratory crafts custom monolithic zirconia or E-Max veneers—saving up to 70% compared to UK and European clinic fees.",
        "tr": "Farklı bir ülkede diş tedavisi planlamak başlangıçta endişe verici görünebilir; ancak Master Smile Studio ile Antalya diş tatili lüks, güven ve kusursuz bir sağlık deneyimine dönüşür. Süreç, röntgenleriniz üzerinden belirlenen %95 kesin fiyat garantisiyle başlar; Antalya Havalimanı'nda özel VIP Mercedes karşılama, Lara bölgesinde 5 yıldızlı denize sıfır otel konaklaması ve 6 günlük planlı klinik randevuları ile devam eder. Kliniğimizin dijital CAD/CAM laboratuvarı zirkonyum veya E-Max kaplamalarınızı üretirken siz Akdeniz'in, Kaleiçi'nin ve güneşin tadını çıkarırsınız.",
        "de": "Eine Zahnbehandlung im Ausland klingt oft herausfordernd, doch ein Dentalurlaub im Master Smile Studio Antalya verbindet Urlaubskomfort mit zahnmedizinischer Präzision. Nach einer verbindlichen Online-Vorabkalkulation erwarten Sie ein privater Mercedes-VIP-Transfer, ein 5-Sterne-Strandhotel und ein straff organisierter 6-Tage-Ablauf. Genießen Sie das Mittelmeer, während unser Meisterlabor Ihre Kronen fertigt – mit über 70% Ersparnis.",
        "pl": "Wakacje stomatologiczne w Master Smile Studio w Antalyi to połączenie luksusowego wypoczynku i zaawansowanego leczenia. Zapewniamy odbiór z lotniska prywatnym Mercedesem, 5-gwiazdkowy hotel przy plaży oraz precyzyjny 6-dniowy harmonogram wizyt. Podczas gdy nasze laboratorium projektuje Twoje nowe zęby, Ty cieszysz się słońcem Riwiery Tureckiej.",
        "pt": "Organizar tratamentos dentários no estrangeiro torna-se simples com o pacote completo da Master Smile Studio. Desde a receção VIP no aeroporto de Antalya até ao hotel 5 estrelas e ao plano de 6 dias, aliamos o melhor da odontologia estética ao encanto das praias mediterrânicas com 70% de poupança.",
        "es": "Un viaje dental a Antalya con Master Smile Studio combina descanso vacacional y excelencia médica. Incluye chófer privado VIP en Mercedes, hotel de 5 estrellas frente al mar y un plan clínico de 6 días perfectamente coordinado, ahorrando hasta un 70% respecto a Europa.",
        "ru": "Стоматологический отпуск в Master Smile Studio Анталья — это сочетание пятизвездочного отдыха и передовой медицины. Мы организуем встречу на представительском авто, проживание в 5★ отеле на побережье и четкий 6-дневный протокол лечения, пока вы наслаждаетесь морем и солнцем Турции."
      },
      "keyTakeaways": {
        "en": [
          "Price Transparency: Fixed online quotes locked in writing before flight booking with zero hidden charges.",
          "VIP Seamless Logistics: Dedicated private chauffeur transfers between Airport, 5★ Hotel, and Clinic.",
          "6-Day Smile Turnaround: Advanced in-house CAD/CAM lab delivers precision ceramics in days, not weeks.",
          "Mediterranean Leisure: Morning appointments leave afternoons free to explore beaches, waterfalls, and fine dining."
        ],
        "tr": [
          "Fiyat Şeffaflığı: Uçak biletinizi almadan önce yazılı olarak netleştirilen ve sürpriz maliyet içermeyen tedavi planı.",
          "Kusursuz VIP Transfer: Havalimanı, 5 yıldızlı otel ve klinik arasında özel şoförlü lüks araç servisi.",
          "6 Günde Yeni Gülüş: Klinik içi CAD/CAM laboratuvarımızla haftalar yerine sadece günler süren hızlı ve hassas üretim.",
          "Akdeniz Tatili: Sabah randevuları sonrası öğleden sonraları deniz, şelaleler ve tarihi mekanları keşfetme imkanı."
        ],
        "de": [
          "Preistransparenz: Verbindliche Kostenvoranschläge ohne versteckte Zusatzkosten vor Reiseantritt.",
          "VIP-Service: Privater Chauffeur zwischen Flughafen, 5-Sterne-Hotel und moderner Klinik.",
          "Fertigstellung in 6 Tagen: Eigenes CAD/CAM-Labor ermöglicht schnelle und passgenaue Präzisionsarbeit.",
          "Urlaubsgenuss: Kurze Behandlungstermine lassen viel Zeit für Strand, Kultur und Entspannung."
        ],
        "pl": [
          "Przejrzyste Ceny: Gwarantowana wycena przed wylotem bez ukrytych opłat na miejscu.",
          "Obsługa VIP: Prywatny transport luksusowym vanem między lotniskiem, hotelem 5★ a kliniką.",
          "Nowy Uśmiech w 6 Dni: Własne cyfrowe laboratorium wykonuje korony w zaledwie kilka dni.",
          "Słoneczne Wakacje: Krótkie wizyty rano pozwalają cieszyć się plażą i urokami Antalyi po południu."
        ],
        "pt": [
          "Transparência Total: Orçamento fixo garantido por escrito antes da compra dos voos.",
          "Logística VIP: Motorista particular dedicado entre o aeroporto, hotel de luxo e a clínica.",
          "Novo Sorriso em 6 Dias: Laboratório digital próprio produz as peças protéticas com rapidez.",
          "Férias no Mediterrâneo: Manhãs na clínica e tardes livres para desfrutar do sol e da praia."
        ],
        "es": [
          "Transparencia de Tarifas: Presupuestos cerrados sin sorpresas antes de reservar los vuelos.",
          "Logística VIP Integral: Traslados en vehículo privado de lujo entre aeropuerto, hotel 5★ y clínica.",
          "Tratamiento en 6 Días: Laboratorio CAD/CAM propio para finalizar coronas y carillas en pocos días.",
          "Vacaciones Mediterráneas: Citas ágiles por la mañana y tardes libres para relajarse en la playa."
        ],
        "ru": [
          "Фиксированные цены: Окончательный расчет стоимости еще до вылета без скрытых комиссий.",
          "VIP-трансфер: Персональный автомобиль представительского класса на всех этапах поездки.",
          "Улыбка за 6 дней: Собственная цифровая лаборатория изготавливает коронки за рекордные сроки.",
          "Отдых на море: Утренние визиты в клинику оставляют день свободным для пляжа и экскурсий."
        ]
      },
      "medicalVerdict": {
        "en": "A dental holiday in Antalya is not an exotic gamble—it is the modern standard of high-efficiency global healthcare. By synchronizing digital intraoral impressions, in-house CAD/CAM ceramic milling, and hotel concierge logistics, international patients receive a higher standard of aesthetic care and materials than local high-street clinics at a fraction of the cost.",
        "tr": "Antalya'da diş tatili bir macera değil; modern dijital sağlık turizminin en verimli modelidir. Dijital ağız içi taramalar, klinik bünyesindeki CAD/CAM seramik üretimi ve 5 yıldızlı otel konforu birleştiğinde, hastalar kendi ülkelerindeki standartların çok üzerinde bir estetik ve malzeme kalitesine %70 tasarrufla ulaşmaktadır.",
        "de": "Der Dentalurlaub in Antalya ist moderner Standard im Medizintourismus: Digitale 3D-Scans, In-House-CAD/CAM-Fertigung und erstklassige Hotels bieten überlegene Qualität zu fairen Preisen.",
        "pl": "Turystyka stomatologiczna w Antalyi to bezpieczny i nowoczesny standard opieki. Połączenie skanów 3D, własnego laboratorium i luksusowego hotelu gwarantuje satysfakcję i oszczędność.",
        "pt": "O turismo dentário em Antalya alia tecnologia de topo a um acolhimento de excelência, proporcionando resultados superiores aos das clínicas europeias tradicionais.",
        "es": "El turismo dental en Antalya representa la vanguardia en eficiencia médica: escaneo 3D, fabricación digital y estancia de lujo con ahorro sustancial.",
        "ru": "Стоматологический туризм в Анталье — это высочайшие стандарты лечения: 3D-технологии, собственная фрезеровка коронок и премиум-сервис по честным ценам."
      }
    },
    "stats": [
      {
        "value": "6 Days",
        "label": {
          "en": "Average duration for a complete full-mouth smile makeover",
          "tr": "Tam ağız gülüş tasarımının tamamlandığı ortalama seyahat süresi",
          "de": "Durchschnittliche Reisedauer für ein komplettes Lächeln-Makeover",
          "pl": "Średni czas trwania kompleksowej metamorfozy uśmiechu",
          "pt": "Duração média para a transformação estética completa do sorriso",
          "es": "Duración habitual para un cambio de sonrisa completo",
          "ru": "Средний срок поездки для полной трансформации улыбки"
        }
      },
      {
        "value": "95%+",
        "label": {
          "en": "Quotation accuracy confirmed prior to flight booking",
          "tr": "Uçuş öncesinde verilen dijital tedavi planı kesinlik oranı",
          "de": "Genauigkeit des Vorab-Kostenvoranschlags vor Flugbuchung",
          "pl": "Dokładność wstępnej wyceny przed rezerwacją biletów",
          "pt": "Precisão do orçamento digital prévio antes da viagem",
          "es": "Precisión del presupuesto online antes de reservar el vuelo",
          "ru": "Точность предварительного плана лечения до покупки авиабилетов"
        }
      },
      {
        "value": "5★ Hotel",
        "label": {
          "en": "Beachfront luxury resort included in our all-inclusive packages",
          "tr": "Her şey dahil tedavi paketlerimize dahil 5 yıldızlı sahil oteli",
          "de": "5-Sterne-Strandhotel in unseren All-Inclusive-Paketen enthalten",
          "pl": "5-gwiazdkowy hotel przy plaży w pakiecie z leczeniem",
          "pt": "Hotel de luxo de 5 estrelas incluído nos pacotes completos",
          "es": "Alojamiento en hotel de 5 estrellas incluido en el paquete",
          "ru": "5-звездочный отель на побережье в наших комплексных пакетах"
        }
      }
    ],
    "intro": {
      "en": [
        "Travelling abroad for major dental work is one of the most rewarding decisions an individual can make—both for their confidence and their financial wellbeing. However, entering an unfamiliar country and navigating healthcare logistics can naturally provoke questions: Who meets me at the airport? Where do I stay? What happens each day in the clinic?",
        "At Master Smile Studio in Antalya, we have eliminated every drop of friction. From the moment you land on the sun-drenched Mediterranean coast to the moment you fly home with your Hollywood smile, every transfer, hotel check-in, 3D scan, and clinical appointment is meticulously coordinated. Here is your step-by-step itinerary."
      ],
      "tr": [
        "Kapsamlı bir diş tedavisi için yurt dışına seyahat etmek, hem kişinin özgüveni hem de bütçesi için verebileceği en doğru kararlardan biridir. Ancak yabancı bir ülkeye adım atmak ve tedavi sürecini yönetmek doğal olarak akıllarda soru işaretleri oluşturabilir: Beni havaalanında kim karşılayacak? Nerede kalacağım? Gün gün klinikte neler yaşanacak?",
        "Master Smile Studio Antalya olarak bu süreçteki tüm belirsizlikleri ortadan kaldırdık. Akdeniz kıyısındaki havalimanına indiğiniz andan yeni Hollywood gülüşünüzle evinize döneceğiniz ana kadar her transfer, otel konaklaması, 3D tarama ve hekim randevusu dakikası dakikasına planlanmıştır. İşte adım adım Antalya diş tatilinizin detayları."
      ],
      "de": [
        "Die Reise für eine Zahnbehandlung nach Antalya ist eine lohnende Investition in die eigene Gesundheit. Um jegliche Unsicherheit zu nehmen, haben wir alle Abläufe perfektioniert.",
        "Vom ersten Empfang am Flughafen bis zum finalen Check-in begleitet Sie unser Team mit erstklassigem Service, luxuriöser Unterkunft und zahnärztlicher Spitzenleistung."
      ],
      "pl": [
        "Wyjazd na leczenie stomatologiczne za granicę to doskonała decyzja, która pozwala zaoszczędzić tysiące euro. Wiemy jednak, jak ważne jest poczucie bezpieczeństwa.",
        "W Master Smile Studio dbamy o każdy detal: od powitania na lotnisku, przez hotel 5*, aż po perfekcyjnie zaplanowane wizyty u stomatologa."
      ],
      "pt": [
        "Viajar para o estrangeiro para cuidar do sorriso é uma escolha transformadora. Na Master Smile Studio asseguramos que tudo decorra com tranquilidade e conforto.",
        "Criámos um percurso estruturado onde cada detalhe logístico e clínico é acompanhado por profissionais experientes em Antalya."
      ],
      "es": [
        "Viajar a Turquía para renovar la sonrisa es una decisión inteligente que ahorra miles de euros. Para su tranquilidad, cuidamos cada detalle del viaje.",
        "Desde la recogida personalizada en el aeropuerto hasta la última cita en la clínica, nuestro equipo coordina su estancia con los más altos estándares."
      ],
      "ru": [
        "Поездка на стоматологическое лечение в Турцию — это инвестиция в уверенность и здоровье. Мы позаботились о том, чтобы путешествие было максимально комфортным.",
        "От встречи в аэропорту до финальной примерки улыбки — каждый этап продуман до мелочей нашими врачами и персональными кураторами."
      ]
    },
    "keyTakeaway": {
      "en": "A dental holiday at Master Smile Studio pairs high-end prosthodontic surgery with 5-star beachfront relaxation, VIP private transfers, and total price transparency from day one.",
      "tr": "Master Smile Studio ile Antalya diş tatili; yüksek teknolojili hekimliği 5 yıldızlı sahil oteli konforu, VIP transferler ve ilk günden kesinleşmiş fiyat şeffaflığıyla buluşturur.",
      "de": "Ein Dentalurlaub im Master Smile Studio vereint High-End-Zahnmedizin mit 5-Sterne-Strandurlaub, VIP-Fahrdienst und vollständiger Kostensicherheit.",
      "pl": "Wakacje ze stomatologią w Antalyi to połączenie zaawansowanej medycyny z relaksem w hotelu 5*, prywatnym szoferem i gwarancją stałej ceny.",
      "pt": "As férias dentárias na Master Smile Studio conjugam medicina avançada com alojamento de luxo, motorista VIP e total transparência orçamental.",
      "es": "Un viaje dental a Master Smile Studio combina odontología de élite con vacaciones en hotel de 5 estrellas, traslados privados y precio cerrado.",
      "ru": "Стоматологический отпуск в Master Smile Studio — это премиальное лечение, пятизвездочный отдых на море, личный трансфер и 100% прозрачность цен."
    },
    "comparisonTable": {
      "title": {
        "en": "Traditional Local Dental Care vs Master Smile Studio Antalya Experience",
        "tr": "Geleneksel Yerel Klinik Deneyimi ve Master Smile Studio Antalya Farkı",
        "de": "Klassische Behandlung vor Ort vs. Master Smile Studio Dentalurlaub",
        "pl": "Tradycyjne Leczenie Lokalne vs Doświadczenie w Master Smile Studio w Antalyi",
        "pt": "Tratamento Tradicional Local vs Experiência Master Smile Studio Antalya",
        "es": "Clínica Local Tradicional vs Experiencia Master Smile Studio en Antalya",
        "ru": "Традиционная клиника дома и отпуск с Master Smile Studio в Анталье"
      },
      "col1Header": {
        "en": "Local UK / European Clinic",
        "tr": "İngiltere / Avrupa Yerel Klinikleri",
        "de": "Heimische Praxis (UK/DE)",
        "pl": "Lokalny Gabinet w UK / Europie",
        "pt": "Clínica Local (Reino Unido / Europa)",
        "es": "Clínica Local en Reino Unido / Europa",
        "ru": "Клиника в Великобритании / Европе"
      },
      "col2Header": {
        "en": "Master Smile Studio Antalya Package",
        "tr": "Master Smile Studio Antalya Paketi",
        "de": "Master Smile Studio All-Inclusive-Paket",
        "pl": "Pakiet Master Smile Studio Antalya",
        "pt": "Pacote Master Smile Studio em Antalya",
        "es": "Paquete Master Smile Studio Antalya",
        "ru": "Пакет Master Smile Studio в Анталье"
      },
      "rows": [
        {
          "col1": {
            "en": "Weeks or months of waiting lists for appointments",
            "tr": "Randevular için haftalarca veya aylarca bekleme sırası",
            "de": "Wochen- oder monatelange Wartezeiten auf Termine",
            "pl": "Tygodnie lub miesiące oczekiwania na wolne terminy",
            "pt": "Semanas ou meses de espera para conseguir consultas",
            "es": "Semanas o meses de lista de espera para citas",
            "ru": "Недели или месяцы ожидания записи на прием"
          },
          "col2": {
            "en": "Immediate booking tailored to your chosen flight dates",
            "tr": "Uçuş tarihinize göre anında rezerve edilen kişisel takvim",
            "de": "Sofortige Terminvergabe passend zu Ihren Flugdaten",
            "pl": "Błyskawiczna rezerwacja dopasowana do Twojego lotu",
            "pt": "Agendamento imediato ajustado às datas do seu voo",
            "es": "Disponibilidad inmediata adaptada a las fechas de su vuelo",
            "ru": "Моментальная запись под удобные для вас даты перелета"
          }
        },
        {
          "col1": {
            "en": "Laboratory delays: 3 to 6 weeks between impressions and final fit",
            "tr": "Dış laboratuvar nedeniyle provalar arasında 3-6 hafta bekleme",
            "de": "Externe Labore verzögern die Fertigstellung um 3–6 Wochen",
            "pl": "Wysyłka do zewnętrznego laboratorium wydłuża czas do 4-6 tygodni",
            "pt": "Prazos de 3 a 6 semanas devido a laboratórios externos",
            "es": "Espera de 3 a 6 semanas por envíos a laboratorios externos",
            "ru": "Задержки сторонних лабораторий от 3 до 6 недель"
          },
          "col2": {
            "en": "In-house digital CAD/CAM lab completes ceramic work in 48–72 hours",
            "tr": "Klinik içi CAD/CAM dijital laboratuvarıyla 48-72 saatte üretim",
            "de": "Eigenes CAD/CAM-Meisterlabor fertigt Kronen in 48–72 Stunden",
            "pl": "Własne cyfrowe laboratorium kończy pracę w 48–72 godziny",
            "pt": "Laboratório digital CAD/CAM próprio finaliza peças em 48 a 72 horas",
            "es": "Laboratorio CAD/CAM propio finaliza las piezas en 48–72 horas",
            "ru": "Собственная цифровая лаборатория изготавливает коронки за 48–72 часа"
          }
        },
        {
          "col1": {
            "en": "Stressful commutes, cold weather, patient pays all travel costs",
            "tr": "Trafik stresi, soğuk hava, tüm yol masrafları hastaya ait",
            "de": "Stressige Anfahrt im Alltag, keine Reisevergünstigungen",
            "pl": "Dojazdy w korkach, stres codzienności, brak wsparcia hotelowego",
            "pt": "Deslocações stressantes no dia a dia por conta do paciente",
            "es": "Desplazamientos rutinarios con costes y estrés para el paciente",
            "ru": "Стресс, пробки, холодная погода и все расходы на пациенте"
          },
          "col2": {
            "en": "Sunny Mediterranean holiday, 5★ beachfront resort, VIP private chauffeur",
            "tr": "Güneşli Akdeniz tatili, 5 yıldızlı sahil oteli, özel şoförlü VIP transfer",
            "de": "Mediterranes Urlaubsflair, 5★ Luxushotel und eigener Chauffeur",
            "pl": "Słoneczny wypoczynek nad morzem, hotel 5★ i prywatny kierowca VIP",
            "pt": "Férias no Mediterrâneo, resort 5 estrelas e motorista privado VIP",
            "es": "Vacaciones bajo el sol, resort 5★ en la playa y chófer privado VIP",
            "ru": "Солнечный средиземноморский курорт, 5★ отель и личный VIP-водитель"
          }
        },
        {
          "col1": {
            "en": "High fees: £600–£1,000 per crown, £2,000+ per implant",
            "tr": "Yüksek fiyatlar: Kuron başına £600-£1000, implant başına £2000+",
            "de": "Hohe Kosten: 800€–1.500€ pro Krone, 2.500€+ pro Implantat",
            "pl": "Wysokie koszty: 2500–4000 zł za koronę, 4000–7000 zł za implant",
            "pt": "Custos elevados: 600€ a 1000€ por coroa, 1500€+ por implante",
            "es": "Costes elevados: 600€–1.000€ por corona, 1.500€+ por implante",
            "ru": "Высокие цены: от 800€ до 1500€ за коронку и от 2000€ за имплант"
          },
          "col2": {
            "en": "Comprehensive packages save 70% with identical Swiss/German materials",
            "tr": "Orijinal İsviçre/Alman malzemelerle her şey dahil pakette %70 tasarruf",
            "de": "Über 70% Ersparnis bei identischen Premium-Materialien aus Deutschland/Schweiz",
            "pl": "Oszczędność do 70% na tych samych szwajcarskich i niemieckich materiałach",
            "pt": "Poupança de até 70% com materiais suíços e alemães certificados",
            "es": "Ahorro de hasta el 70% con idénticos materiales suizos y alemanes",
            "ru": "Экономия до 70% при использовании тех же швейцарских и немецких систем"
          }
        }
      ]
    },
    "sections": [
      {
        "id": "pre-travel-consultation-transparency",
        "heading": {
          "en": "Step 1: Virtual 3D Consultation & Guaranteed Price Lock",
          "tr": "1. Adım: Dijital 3D Konsültasyon ve Fiyat Sabitleme Garantisi",
          "de": "Schritt 1: Virtuelle 3D-Beratung & Verbindliche Preisgarantie",
          "pl": "Krok 1: Wirtualna Konsultacja 3D i Gwarancja Niezmienności Ceny",
          "pt": "Passo 1: Consulta Virtual 3D e Confirmação de Orçamento Fixo",
          "es": "Paso 1: Consulta Virtual 3D y Garantía de Precio Cerrado",
          "ru": "Шаг 1: Онлайн-консультация по 3D-снимкам и фиксация цены"
        },
        "paragraphs": {
          "en": [
            "Your dental holiday starts from the comfort of your own living room. You simply send your existing panoramic dental X-ray, 3D CBCT scan, or intraoral smartphone photos to our international patient care team via WhatsApp or email.",
            "Dr. Ozan Öztürk personally analyzes your bone structure, smile line, and bite. Within 24 hours, you receive a detailed clinical report outlining recommended treatments, duration, and an all-inclusive transparent quote covering hotel, VIP transfers, and dental work. There are zero surprise fees upon arrival."
          ],
          "tr": [
            "Diş tatiliniz evinizin konforunda başlar. Mevcut panoramik diş röntgeninizi, 3D tomografinizi veya cep telefonunuzla çektiğiniz ağız içi fotoğrafları uluslararası hasta koordinatörlerimize WhatsApp ya da e-posta ile iletmeniz yeterlidir.",
            "Dr. Ozan Öztürk kemik yoğunluğunuzu, gülüş hattınızı ve kapanışınızı bizzat inceler. 24 saat içinde önerilen tedavileri, seyahat süresini ve otel ile VIP transferleri içeren şeffaf, her şey dahil yazılı teklifinizi alırsınız. Kliniğe geldiğinizde hiçbir sürpriz ek masrafla karşılaşmazsınız."
          ],
          "de": [
            "Ihr Dentalurlaub beginnt bequem zu Hause: Senden Sie uns Ihr Panoramaröntgenbild oder Fotos per WhatsApp.",
            "Dr. Ozan Öztürk erstellt innerhalb von 24 Stunden einen detaillierten Behandlungs- und Kostenplan mit Festpreisgarantie inklusive Hotel und Transfers."
          ],
          "pl": [
            "Wszystko zaczyna się od przesłania zdjęcia pantomograficznego lub tomografii 3D drogą elektroniczną.",
            "Nasz główny lekarz analizuje warunki kostne i w 24 godziny przygotowuje kompleksowy plan leczenia ze stałą ceną pakietu."
          ],
          "pt": [
            "O processo inicia-se com o envio das radiografias ou fotografias através do WhatsApp ou e-mail.",
            "Em 24 horas recebe um plano de tratamento personalizado com orçamento fechado que inclui hotel e transporte VIP."
          ],
          "es": [
            "Su viaje comienza enviándonos su radiografía panorámica o fotos dentales por WhatsApp o correo.",
            "El Dr. Ozan analiza su anatomía y en 24 horas recibe una propuesta médica completa con precio garantizado y estancia incluida."
          ],
          "ru": [
            "Лечение начинается дистанционно: вы отправляете панорамный снимок или КТ через WhatsApp.",
            "Доктор Озан Озтюрк составляет официальный план с фиксированной стоимостью 'под ключ', включая отель и трансферы."
          ]
        }
      },
      {
        "id": "vip-arrival-and-luxury-hospitality",
        "heading": {
          "en": "Step 2: VIP Airport Arrival & 5-Star Beachfront Check-In",
          "tr": "2. Adım: VIP Havalimanı Karşılama ve 5 Yıldızlı Sahil Oteli Girişi",
          "de": "Schritt 2: VIP-Empfang am Flughafen & 5-Sterne-Hotel-Check-in",
          "pl": "Krok 2: Powitanie VIP na Lotnisku i Zameldowanie w Hotelu 5★",
          "pt": "Passo 2: Chegada VIP ao Aeroporto e Check-in no Hotel de 5 Estrelas",
          "es": "Paso 2: Llegada VIP al Aeropuerto y Check-In en Hotel de 5 Estrellas",
          "ru": "Шаг 2: Встреча в аэропорту и заселение в 5-звездочный отель"
        },
        "paragraphs": {
          "en": [
            "When your flight touches down at Antalya International Airport (AYT), your dedicated private driver welcomes you at the exit gate holding a sign with your name. No taxi queues, no confusing navigation.",
            "You are escorted into a luxury Mercedes-Benz Vito equipped with leather reclining seats, Wi-Fi, and refreshments, and driven directly to your 5-star partner beachfront hotel in Antalya's prestigious Lara or Konyaaltı district. You settle in, unpack, and unwind by the sea."
          ],
          "tr": [
            "Uçağınız Antalya Havalimanı'na indiğinde, özel şoförünüz çıkış kapısında isminizin yazılı olduğu tabela ile sizi karşılar. Taksi arama veya adres bulma stresi yaşamazsınız.",
            "Deri koltuklu, ikramlı ve Wi-Fi donanımlı özel Mercedes-Benz VIP aracınızla Lara veya Konyaaltı'ndaki 5 yıldızlı denize sıfır anlaşmalı otelinize ulaştırılırsınız. Odanıza yerleşip Akdeniz esintisi eşliğinde dinlenerek ilk günün tadını çıkarırsınız."
          ],
          "de": [
            "Nach der Landung in Antalya empfängt Sie Ihr persönlicher Fahrer mit Namensschild am Ausgang.",
            "In einer komfortablen Mercedes-VIP-Limousine geht es direkt in Ihr 5-Sterne-Strandhotel in Lara, wo Sie sich in aller Ruhe akklimatisieren."
          ],
          "pl": [
            "Na lotnisku czeka na Ciebie prywatny szofer z tabliczką z Twoim nazwiskiem.",
            "Luksusowym Mercedesem zostajesz przewieziony prosto do 5-gwiazdkowego hotelu przy plaży, aby wypocząć po podróży."
          ],
          "pt": [
            "À chegada a Antalya, o seu motorista privado aguarda-o no terminal com uma placa identificativa.",
            "É conduzido num Mercedes executivo confortável até ao hotel de 5 estrelas à beira-mar para descansar."
          ],
          "es": [
            "A su llegada al aeropuerto de Antalya, su chófer privado le esperará con un cartel a su nombre.",
            "Un vehículo Mercedes VIP de alta gama le trasladará a su hotel de 5 estrellas frente al mar para relajarse."
          ],
          "ru": [
            "В зоне прилета аэропорта Антальи вас встречает персональный водитель с табличкой с вашей фамилией.",
            "На комфортабельном автомобиле Mercedes VIP вас доставляют в 5-звездочный отель на первой линии моря."
          ]
        }
      },
      {
        "id": "day-by-day-clinical-itinerary",
        "heading": {
          "en": "Step 3: The 6-Day Clinical Transformation Schedule",
          "tr": "3. Adım: Gün Gün 6 Günlük Klinik Dönüşüm Takvimi",
          "de": "Schritt 3: Der strukturierte 6-Tage-Behandlungsplan",
          "pl": "Krok 3: Szczegółowy 6-Dniowy Harmonogram Leczenia",
          "pt": "Passo 3: O Calendário Clínico de 6 Dias em Detalhe",
          "es": "Paso 3: Cronograma de Tratamiento en 6 Días",
          "ru": "Шаг 3: Пошаговый 6-дневный медицинский протокол"
        },
        "paragraphs": {
          "en": [
            "Day 1 (Consultation & 3D Scanning): Your driver brings you to Master Smile Studio. We perform 3D CBCT scans, digital smile design mock-ups on your teeth, and tooth preparation under pain-free local anesthesia. Custom aesthetic temporary teeth are placed immediately.",
            "Days 2–4 (Mediterranean Leisure & Lab Crafting): While our ceramists precision-mill your monolithic zirconia or E-Max crowns, your schedule is completely free. You can visit historic Kaleiçi, take a boat tour of Düden Waterfalls, or relax by the pool.",
            "Day 5 (Aesthetic Try-in & Gnathology): We test your restorations in the mouth, checking bite alignment, margin fit, and color aesthetics. Any micro-adjustments are made on the spot.",
            "Day 6 (Permanent Cementation & Warranty Passport): The final crowns are permanently bonded using dual-cure resin cements. You receive your official warranty card, night guard, and aftercare kit."
          ],
          "tr": [
            "1. Gün (Muayene ve 3D Tarama): Şoförümüz sizi kliniğe getirir. 3D tomografi çekilir, dijital gülüş tasarımı yüzünüze prova edilir, ağrısız anesteziyle dişler hazırlanır ve aynı gün estetik geçici dişleriniz takılır.",
            "2. - 4. Günler (Akdeniz Tatili ve Laboratuvar): Seramik uzmanlarımız zirkonyum veya E-Max dişlerinizi milimetrik hassasiyetle üretirken siz tamamen serbestsiniz. Tarihi Kaleiçi sokaklarını gezebilir, Düden Şelalesi'ni görebilir ya da sahilde güneşlenebilirsiniz.",
            "5. Gün (Estetik Prova ve Kapanış Kontrolü): Dişler ağızda prova edilir; renk, form, diş eti uyumu ve çiğneme dengesi hekimlerimiz ve sizin onayınızla netleştirilir.",
            "6. Gün (Kalıcı Yapıştırma ve Garanti Kartı): Kaplamalarınız kalıcı olarak yapıştırılır. Resmi garanti sertifikanız, koruyucu gece plağınız ve bakım setiniz teslim edilir."
          ],
          "de": [
            "Tag 1: 3D-Diagnostik, Zahnpräparation und sofortige Versorgung mit passgenauen Provisorien.",
            "Tag 2–4: Freizeit für Strand und Ausflüge, während unser Labor die Zirkonkronen fräst.",
            "Tag 5: Präzise Einprobe im Mund, Feinabstimmung von Form und Farbe.",
            "Tag 6: Dauerhafte adhäsive Befestigung, Aushändigung von Garantiepass und Knirscherschiene."
          ],
          "pl": [
            "Dzień 1: Diagnostyka 3D, przygotowanie zębów i założenie estetycznych koron tymczasowych.",
            "Dni 2–4: Wypoczynek na plaży i zwiedzanie Antalyi w czasie pracy laboratorium protetycznego.",
            "Dzień 5: Przymiarka konstrukcji w ustach, dopracowanie koloru i zgryzu.",
            "Dzień 6: Ostateczne cementowanie, wydanie paszportu gwarancyjnego i szyny relaksacyjnej."
          ],
          "pt": [
            "Dia 1: Diagnóstico 3D, preparação suave e colocação imediata de dentes provisórios.",
            "Dias 2 a 4: Tempo livre para passear em Antalya enquanto o laboratório fabrica as peças definitivas.",
            "Dia 5: Prova estética em boca e validação da oclusão e tonalidade.",
            "Dia 6: Cimentação definitiva, entrega do certificado de garantia internacional e goteira."
          ],
          "es": [
            "Día 1: Escaneo 3D, tallado conservador y colocación de dientes provisionales el mismo día.",
            "Días 2–4: Tiempo libre para disfrutar de la playa mientras el laboratorio talla sus coronas.",
            "Día 5: Prueba estética en boca para ajustar forma, ajuste y color a su gusto.",
            "Día 6: Cementado definitivo, entrega de pasaporte de garantía y férula protectora."
          ],
          "ru": [
            "День 1: 3D-диагностика, обработка зубов и установка временных эстетических коронок.",
            "Дни 2–4: Отдых на курорте и экскурсии, пока мастера создают ваши постоянные зубы.",
            "День 5: Примерка в полости рта, проверка прикуса, формы и оттенка.",
            "День 6: Фиксация коронок, выдача гарантийного паспорта и защитной ночной капы."
          ]
        }
      }
    ],
    "faqs": [
      {
        "q": {
          "en": "How many days do I need to stay in Antalya for crowns or veneers?",
          "tr": "Kaplama veya lamine tedavisi için Antalya'da kaç gün kalmam gerekir?",
          "de": "Wie viele Tage Aufenthalt sind für Veneers oder Kronen nötig?",
          "pl": "Ile dni pobytu w Antalyi wymaga wykonanie koron lub licówek?",
          "pt": "Quantos dias preciso de ficar em Antalya para colocar facetas ou coroas?",
          "es": "¿Cuántos días debo permanecer en Antalya para carillas o coronas?",
          "ru": "Сколько дней нужно провести в Анталье для установки виниров или коронок?"
        },
        "a": {
          "en": "A standard smile makeover with veneers or crowns requires 5 to 7 days. This allows ample time for digital scanning, temporary placement, CAD/CAM precision milling, try-in checks, and permanent cementation.",
          "tr": "Veneer veya kuron ile gülüş tasarımı için genellikle 5 ila 7 günlük bir seyahat yeterlidir. Bu süre dijital tarama, geçici dişler, laboratuvar üretimi, estetik prova ve kalıcı yapıştırma için ideal zamanı sağlar.",
          "de": "Ein komplettes Makeover benötigt 5 bis 7 Tage für Scans, Provisorien, Laborfertigung und die finale Einprobe.",
          "pl": "Standardowy pobyt trwa od 5 do 7 dni, co w zupełności wystarcza na pełną procedurę i estetyczną przymiarkę.",
          "pt": "O período habitual é de 5 a 7 dias, permitindo cumprir todas as etapas laboratoriais e clínicas com rigor.",
          "es": "Una estancia de 5 a 7 días es suficiente para completar todo el proceso con tranquilidad y máxima precisión.",
          "ru": "Для установки виниров или коронок требуется от 5 до 7 дней для соблюдения всех клинических этапов."
        }
      },
      {
        "q": {
          "en": "If I need dental implants, does that require two separate visits?",
          "tr": "Eğer implant tedavisi gerekiyorsa iki ayrı seyahat mi yapmalıyım?",
          "de": "Erfordert eine Implantatbehandlung zwei getrennte Reisen?",
          "pl": "Czy zabieg wszczepienia implantów wymaga dwóch oddzielnych wizyt?",
          "pt": "Se precisar de implantes dentários, são necessárias duas viagens distintas?",
          "es": "¿La colocación de implantes dentales requiere dos viajes separados?",
          "ru": "Требуется ли две поездки при установке зубных имплантов?"
        },
        "a": {
          "en": "Yes. The first visit lasts 5 days for surgical implant placement, bone grafting (if required), and fitting of fixed temporary teeth. After a 3-month healing period for osseointegration, you return for 6 days for the permanent monolithic zirconia bridge.",
          "tr": "Evet. İlk seyahat 5 gün sürer; bu sürede implantlar yerleştirilir, gerekirse kemik tozu uygulanır ve geçici dişler takılır. Kemik kaynaşması (osteointegrasyon) için gereken 3 aylık iyileşmenin ardından kalıcı zirkonyum köprüler için 6 günlük ikinci bir ziyaret yapılır.",
          "de": "Ja. Der erste Besuch (5 Tage) dient der Implantation und provisorischen Versorgung. Nach 3 Monaten Heilung folgt der zweite Besuch (6 Tage) für die finalen Zirkonbrücken.",
          "pl": "Tak. Pierwsza wizyta (5 dni) to zabieg chirurgiczny i zęby tymczasowe. Po 3 miesiącach zrastania z kością wracasz na 6 dni po stały most cyrkonowy.",
          "pt": "Sim. A primeira visita (5 dias) destina-se à cirurgia e prótese provisória. Após 3 meses de cicatrização, regressa durante 6 dias para as coroas definitivas.",
          "es": "Sí. El primer viaje (5 días) es para la cirugía y prótesis fija provisional. Tras 3 meses de osteointegración, regresa 6 días para la prótesis definitiva de zirconio.",
          "ru": "Да. Первая поездка (5 дней) — для установки имплантов и временных зубов. Через 3 месяца вы приезжаете на 6 дней для фиксации постоянного циркония."
        }
      },
      {
        "q": {
          "en": "Can I bring my partner or a family member with me?",
          "tr": "Yanımda eşimi veya bir aile üyemi getirebilir miyim?",
          "de": "Kann ich meinen Partner oder eine Begleitperson mitbringen?",
          "pl": "Czy mogę przyjechać z osobą towarzyszącą lub rodziną?",
          "pt": "Posso levar um acompanhante ou familiar comigo?",
          "es": "¿Puedo viajar acompañado por mi pareja o un familiar?",
          "ru": "Могу ли я приехать с супругом или членом семьи?"
        },
        "a": {
          "en": "Absolutely. All our 5-star partner hotel rooms accommodate two adults comfortably at no extra accommodation fee, and our VIP airport transfer vehicle easily accommodates you both and all luggage.",
          "tr": "Kesinlikle evet. 5 yıldızlı anlaşmalı otel odalarımız iki yetişkin için ek konaklama ücreti olmadan ayarlanır ve VIP transfer aracımız siz ve refakatçiniz için geniş bagaj alanıyla hizmet verir.",
          "de": "Selbstverständlich. Unsere 5-Sterne-Zimmer sind für zwei Personen ohne Aufpreis ausgelegt und der VIP-Fahrdienst holt Sie gemeinsam ab.",
          "pl": "Oczywiście. Pokoje hotelowe 5★ mieszczą dwie osoby dorosłe bez dopłat, a kierowca VIP zabiera Was oboje z lotniska.",
          "pt": "Com certeza. Os quartos nos hotéis de 5 estrelas acolhem dois adultos sem custos adicionais de estadia e com transporte partilhado.",
          "es": "Por supuesto. Las habitaciones de hotel 5★ incluyen capacidad para dos adultos sin coste extra de estancia y con traslado conjunto.",
          "ru": "Безусловно. Номера в 5★ отелях рассчитаны на двух взрослых без доплат, а трансфер встретит вас вместе с багажом."
        }
      },
      {
        "q": {
          "en": "Do the doctors and patient coordinators speak English, German, and Polish?",
          "tr": "Hekimler ve koordinatörler İngilizce, Almanca ve Lehçe konuşuyor mu?",
          "de": "Sprechen die Ärzte und Betreuer Deutsch, Englisch und Polnisch?",
          "pl": "Czy lekarze i koordynatorzy mówią po angielsku, niemiecku i polsku?",
          "pt": "Os médicos e coordenadores falam inglês, alemão ou português?",
          "es": "¿Los médicos y coordinadores hablan inglés, alemán y español?",
          "ru": "Говорят ли врачи и координаторы на английском, немецком и русском языках?"
        },
        "a": {
          "en": "Yes. Master Smile Studio employs dedicated multilingual coordinators fluent in English, German, Polish, Russian, Spanish, Portuguese, and Turkish. You will have a native or fluent speaker assisting you through every consultation.",
          "tr": "Evet. Master Smile Studio bünyesinde İngilizce, Almanca, Lehçe, Rusça, İspanyolca, Portekizce ve Türkçe dillerini ana dili gibi konuşan hasta koordinatörleri görev yapar; hiçbir iletişim engeli yaşamazsınız.",
          "de": "Ja. Unser Team verfügt über muttersprachliche Koordinatoren für Deutsch, Englisch, Polnisch, Russisch und weitere Sprachen.",
          "pl": "Tak. Zapewniamy stałą opiekę polskich, angielskich i niemieckich koordynatorów, co wyklucza jakąkolwiek barierę językową.",
          "pt": "Sim. Dispomos de equipa multilingue que assegura o acompanhamento contínuo em várias línguas durante toda a estadia.",
          "es": "Sí. Contamos con coordinadores nativos en varios idiomas que le acompañarán en cada visita a la clínica.",
          "ru": "Да. В клинике работают штатные русскоговорящие, англо- и немецкоязычные кураторы для полного взаимопонимания."
        }
      },
      {
        "q": {
          "en": "What happens if I experience sensitivity or questions while at my hotel?",
          "tr": "Oteldeyken diş hassasiyeti yaşarsam veya bir sorum olursa ne yapmalıyım?",
          "de": "Was mache ich, wenn im Hotel Zahnschmerzen oder Fragen auftreten?",
          "pl": "Co zrobić, jeśli w hotelu pojawi się ból lub wątpliwości?",
          "pt": "O que acontece se tiver sensibilidade dentária no hotel?",
          "es": "¿Qué ocurre si tengo molestias en el hotel después de la cita?",
          "ru": "Что делать, если в отеле возникнет чувствительность зубов или вопросы?"
        },
        "a": {
          "en": "You have a direct 24/7 medical concierge WhatsApp line with your doctor and coordinator. If necessary, our driver will pick you up from your hotel for an immediate complimentary comfort check at the clinic.",
          "tr": "Hekiminiz ve koordinatörünüzle 7/24 doğrudan iletişim kurabileceğiniz özel bir WhatsApp hattınız bulunur. Gerek duyulursa VIP aracımız sizi otelinizden alarak derhal klinikte ücretsiz kontrole getirir.",
          "de": "Sie haben eine 24/7-Notfallnummer zu Ihrem Betreuer. Bei Bedarf holt Sie unser Fahrer umgehend zu einem kurzen Check in die Praxis.",
          "pl": "Masz bezpośredni kontakt WhatsApp 24/7. W razie potrzeby kierowca przywiezie Cię do kliniki na bezpłatną wizytę kontrolną.",
          "pt": "Dispõe de uma linha direta de WhatsApp 24/7 com a equipa médica e transporte imediato para a clínica se necessário.",
          "es": "Dispone de asistencia directa 24/7 por WhatsApp y, si fuera preciso, nuestro chófer le recogerá para una revisión inmediata sin coste.",
          "ru": "У вас будет прямая связь с врачом 24/7 в WhatsApp. При необходимости наш водитель привезет вас в клинику на внеплановый осмотр."
        }
      }
    ],
    "author": SPECIALIST_AUTHORS.drOzan
  },
  "root-canal-vs-tooth-extraction-decision": {
    "slug": "root-canal-vs-tooth-extraction-decision",
    "category": "guides",
    "image": "/blog/root-canal-or-extraction.webp",
    "publishDate": "2026-09-05",
    "readTime": "7 min read",
    "llmSummary": {
      "badge": {
        "en": "Endodontic vs Surgical Decision Protocol",
        "tr": "Endodontik ve Cerrahi Karar Protokolü",
        "de": "Entscheidungsmatrix: Endodontie vs. Extraktion",
        "pl": "Protokół Decyzyjny: Leczenie Kanałowe vs Ekstrakcja",
        "pt": "Protocolo de Decisão: Desvitalização vs Extração",
        "es": "Protocolo de Decisión: Endodoncia frente a Extracción",
        "ru": "Протокол выбора: лечение каналов или удаление зуба"
      },
      "quickAnswer": {
        "en": "When faced with agonizing toothache or extensive dental decay, patients often impulsively ask: 'Can't you just pull it out and place an implant?' For ethical dental specialists, natural tooth retention is always the supreme biological gold standard. A natural tooth root is anchored by the periodontal ligament (PDL), an irreplaceable anatomical shock-absorber packed with sensory nerve receptors that regulate chewing forces. Modern rotary endodontics with 3D apex locators and warm gutta-percha compaction saves over 95% of severely infected teeth. Extraction is strictly reserved as an irreversible last resort for vertical root fractures, catastrophic subgingival destruction, or uncontrolled periodontal mobility.",
        "tr": "Şiddetli bir diş ağrısıyla kliniğe başvuran hastalar sıklıkla 'Hocam çok ağrıyor, çekip yerine implant yapamaz mıyız?' sorusunu sorar. Ancak etik bir diş hekimi için doğal dişi kurtarmak her zaman biyolojik altın standarttır. Doğal diş kökü, çiğneme kuvvetlerini beyne ileten ve baskıyı süspanse eden milyonlarca sinir reseptörüne sahip periodontal ligament (PDL) ile kemiğe bağlıdır. Bu hissi hiçbir yapay implant birebir veremez. Döner aletler ve 3D apeks bulucularla yapılan modern kanal tedavisi, enfekte dişlerin %95'ten fazlasını ömür boyu kurtarır. Diş çekimi yalnızca dikey kök kırığı ve kemik altı kurtarılamaz harabiyet durumlarında son çare olarak uygulanmalıdır.",
        "de": "Zahnschmerzen verleiten Patienten oft zum schnellen Wunsch nach einer Extraktion. Für uns ist der Erhalt des eigenen Zahns jedoch oberstes Gebot: Die feine Wurzelhaut (Desmodont) federt Kaukraft natürlich ab und übermittelt Tastreize ans Gehirn – das kann kein Implantat vollkommen ersetzen. Moderne Wurzelbehandlungen retten über 95% der Zähne. Eine Extraktion bleibt die allerletzte Option bei vertikalen Wurzelfrakturen oder extremem Knochenverlust.",
        "pl": "Pacjenci z ostrym bólem zęba często pytają o natychmiastowe usunięcie i implant. Jednak zachowanie naturalnego zęba to priorytet: ozębna amortyzuje siły żucia i daje naturalne czucie. Nowoczesna endodoncja maszynowa pozwala uratować ponad 95% zębów. Ekstrakcja to ostateczność w przypadku pęknięć podłużnych korzenia.",
        "pt": "Perante uma dor de dentes aguda, a extração parece uma solução rápida, mas preservar o dente natural é biologicamente insubstituível devido ao ligamento periodontal. A endodontia moderna salva mais de 95% dos dentes infetados. A extração é reservada apenas para fraturas radiculares irreparáveis.",
        "es": "Ante un dolor dental severo, muchos pacientes piden la extracción, pero conservar el diente natural es siempre la mejor opción biológica. El ligamento periodontal actúa como amortiguador natural. La endodoncia rotatoria moderna salva más del 95% de los dientes comprometidos.",
        "ru": "При сильной зубной боли пациенты часто просят удалить зуб и поставить имплант. Однако сохранение собственного зуба — главный приоритет. Периодонтальная связка обеспечивает естественную амортизацию и чувствительность. Современное эндодонтическое лечение спасает более 95% зубов."
      },
      "keyTakeaways": {
        "en": [
          "Natural Proprioception: The periodontal ligament (PDL) provides sensory tactile feedback impossible to replicate with implants.",
          "95%+ Success Rate: Advanced rotary nickel-titanium instrumentation and warm compaction save deeply infected teeth.",
          "Rapid Resolution: Root canal therapy eliminates infection in 1–2 visits, avoiding months of implant osseointegration.",
          "Strict Extraction Criteria: Teeth are only pulled when vertical fractures or subgingival bone loss make restoration biologically impossible."
        ],
        "tr": [
          "Doğal Çiğneme Hissi: Periodontal ligament (PDL) sinirleri, çiğneme kuvvetini doğal olarak dengeleyen eşsiz bir organdır.",
          "%95+ Başarı Oranı: Nikel-titanyum döner eğeler ve sıcak güta-perka dolgusu ile derin enfeksiyonlar tamamen iyileştirilir.",
          "Hızlı Çözüm: Kanal tedavisi 1-2 seansta tamamlanır; implant gibi 3-6 aylık kemik kaynama bekleme süresi gerektirmez.",
          "Kesin Çekim Kriterleri: Yalnızca dikey kök kırığı ve diş eti altı kurtarılamaz harabiyet durumlarında çekim yapılır."
        ],
        "de": [
          "Natürliches Kaugefühl: Die Wurzelhaut sorgt für unvergleichliche Sensorik beim Kauen.",
          "Über 95% Erfolgsquote: Moderne Nickel-Titan-Feilen und warme Fülltechniken heilen tiefe Entzündungen.",
          "Schnelle Schmerzfreiheit: Eine Wurzelbehandlung ist in 1–2 Sitzungen abgeschlossen.",
          "Klare Indikation: Extraktionen erfolgen nur bei vertikalen Wurzelfrakturen oder irreparabler Zerstörung."
        ],
        "pl": [
          "Naturalne Czucie: Więzadła przyzębia przekazują precyzyjną informację o sile nacisku do mózgu.",
          "95%+ Skuteczności: Maszynowe opracowanie kanałów i termiczna gutaperka ratują zęby spisane na straty.",
          "Szybka Ulga: Leczenie kanałowe usuwa ból w 1–2 wizyty bez wielomiesięcznego gojenia kości.",
          "Ekstrakcja to Ostateczność: Usuwamy ząb tylko przy pęknięciu korzenia lub braku możliwości odbudowy."
        ],
        "pt": [
          "Sensibilidade Natural: O ligamento periodontal transmite a força de mastigação de forma biológica única.",
          "Mais de 95% de Sucesso: As limas rotativas de níquel-titânio eliminam infeções bacterianas severas.",
          "Tratamento Rápido: A desvitalização resolve o problema em 1 a 2 consultas sem esperas cirúrgicas.",
          "Extração Residual: Apenas dentes com fraturas verticais de raiz são considerados irrecuperáveis."
        ],
        "es": [
          "Propiocepción Natural: El ligamento periodontal regula la fuerza de mordida de forma imposible en implantes.",
          "Éxito Superior al 95%: Los sistemas rotatorios de níquel-titanio permiten desinfectar conductos complejos.",
          "Solución Rápida: La endodoncia elimina el dolor en 1–2 sesiones sin meses de espera quirúrgica.",
          "Extracción Justificada: Solo se extraen piezas con fracturas verticales o daño biológico irreparable."
        ],
        "ru": [
          "Естественная амортизация: Периодонтальная связка защищает кость от перегрузок при жевании.",
          "Успех более 95%: Ротационные никель-титановые инструменты и лазер очищают даже сложные каналы.",
          "Быстрое восстановление: Лечение каналов завершается за 1–2 визита без месяцев ожидания приживления.",
          "Строгие показания к удалению: Только продольные переломы корня и полное разрушение под десной."
        ]
      },
      "medicalVerdict": {
        "en": "The best dental implant in the world is never as biologically sophisticated as a well-restored natural tooth. While dental implants are an extraordinary technological triumph for replacing already-lost teeth, sacrificing a savable natural tooth for an implant is clinical malpractice. At Master Smile Studio, our endodontists use microscope magnification and biocompatible bioceramic sealers to preserve your natural dentition whenever anatomically viable.",
        "tr": "Dünyanın en kaliteli implantı bile iyi tedavi edilmiş kendi doğal dişinizin biyolojik mükemmelliğine ulaşamaz. İmplantlar kaybedilmiş dişlerin telafisinde tıbbın en büyük zaferlerinden biri olsa da, kurtarılabilecek bir dişi çekip yerine implant yapmak hekimlik etiğine aykırıdır. Master Smile Studio kliniğimizde mikroskop büyütmesi ve biyoseramik kanal dolguları ile doğal dişlerinizi son ana kadar koruyoruz.",
        "de": "Selbst das beste Titanimplantat kann einen biologisch gesunden eigenen Zahn nicht vollends ersetzen. Wo immer möglich, hat der Zahnerhalt durch moderne Endodontie absolute Priorität.",
        "pl": "Nawet najlepszy implant nie zastąpi w pełni własnego korzenia zęba. Zachowanie naturalnego uzębienia przy użyciu mikroskopu to zawsze nasz pierwszy wybór medyczny.",
        "pt": "Nenhum implante artificial substitui a perfeição biológica de um dente natural tratado adequadamente. Preservar o dente é sempre a nossa primeira missão.",
        "es": "El mejor implante del mundo no supera biológicamente a un diente natural sano. En Master Smile Studio priorizamos la conservación dental mediante microendodoncia.",
        "ru": "Ни один имплант не сравнится с собственным живым корнем зуба. Сохранение естественных зубов с помощью дентального микроскопа — наш главный закон."
      }
    },
    "stats": [
      {
        "value": "95%+",
        "label": {
          "en": "Success rate of modern microscopic rotary root canal treatment",
          "tr": "Modern döner aletlerle yapılan kanal tedavilerinin uzun dönem başarı oranı",
          "de": "Erfolgsquote moderner mikroskopischer Wurzelkanalbehandlungen",
          "pl": "Skuteczność nowoczesnego leczenia kanałowego pod mikroskopem",
          "pt": "Taxa de sucesso da endodontia moderna mecanizada",
          "es": "Tasa de éxito del tratamiento endodóntico rotatorio moderno",
          "ru": "Успешность современного эндодонтического лечения под микроскопом"
        }
      },
      {
        "value": "100%",
        "label": {
          "en": "Preservation of biological periodontal ligament (PDL) proprioception",
          "tr": "Doğal periodontal ligament (PDL) çiğneme hissiyatının korunma oranı",
          "de": "Erhalt der natürlichen Sensomotorik und Kaukraftsteuerung",
          "pl": "Zachowanie naturalnego czucia i amortyzacji więzadeł przyzębia",
          "pt": "Preservação da sensibilidade e amortecimento do ligamento periodontal",
          "es": "Conservación del ligamento periodontal y la propiocepción masticatoria",
          "ru": "Сохранение связочного аппарата и естественной чувствительности"
        }
      },
      {
        "value": "1-2 Visits",
        "label": {
          "en": "Turnaround time to disinfect tooth and place permanent crown",
          "tr": "Kanal tedavisinin tamamlanıp kalıcı kuronun takıldığı seans süresi",
          "de": "Sitzungen zur vollständigen Desinfektion und Überkronung",
          "pl": "Wizyty potrzebne do wyleczenia kanałowego i odbudowy koroną",
          "pt": "Consultas necessárias para desvitalizar e colocar a coroa definitiva",
          "es": "Sesiones para desinfectar el diente y colocar la corona definitiva",
          "ru": "Визита для полной очистки каналов и установки защитной коронки"
        }
      }
    ],
    "intro": {
      "en": [
        "You wake up in the middle of the night with a throbbing, unbearable toothache. The pressure inside your jaw is relentless, radiating to your ear and temple. When you finally sit in the dental chair, the desperation is palpable: 'Doctor, please, just pull it out! I can't take this anymore.'",
        "This is one of the most fateful crossroad decisions in all of healthcare. Removing a tooth is an absolute, irreversible biological finality. In this evidence-based guide, Dr. Ozan Öztürk details the mechanical and biological realities of root canal therapy versus tooth extraction, helping you make the safest decision for your long-term oral health."
      ],
      "tr": [
        "Gecenin bir yarısı zonklayan, kulağınıza ve şakağınıza vuran dayanılmaz bir diş ağrısıyla uyanırsınız. Çenenizdeki baskı o kadar şiddetlidir ki hekim koltuğuna oturduğunuzda tek bir şey düşünürsünüz: 'Doktor bey, lütfen çekin kurtulayım, dayanamıyorum!'",
        "Ancak bir dişi çektirmek, geri dönüşü olmayan biyolojik bir vedadır. Çekilen bir dişin yerine konacak hiçbir protez, kendi kökünüzün yerini tam olarak tutamaz. Bu rehberde Dr. Ozan Öztürk, kanal tedavisi ile diş çekimi arasındaki tıbbi farkları, kemik koruma mekanizmalarını ve doğru kararı nasıl vermeniz gerektiğini açıklıyor."
      ],
      "de": [
        "Zahnschmerzen können unerträglich sein. Im Behandlungsstuhl verlangen viele Patienten verzweifelt die Extraktion, um den Schmerz sofort zu beenden.",
        "Doch das Ziehen eines Zahnes ist endgültig. Erfahren Sie hier, warum eine Wurzelbehandlung fast immer die biologisch überlegene Entscheidung ist."
      ],
      "pl": [
        "Silny ból zęba potrafi doprowadzić do rozpaczy. Wielu pacjentów pod wpływem emocji prosi o natychmiastowe wyrwanie zęba.",
        "Ekstrakcja to jednak krok nieodwracalny. Wyjaśniamy, dlaczego leczenie kanałowe i zachowanie własnego korzenia to najlepszy wybór dla Twojego zdrowia."
      ],
      "pt": [
        "A dor de dentes aguda pode ser avassaladora, levando ao pedido impulsivo de extração imediata.",
        "Contudo, retirar um dente é uma decisão sem retorno. Saiba por que razão a desvitalização preserva a sua biologia mastigatória de forma incomparável."
      ],
      "es": [
        "El dolor de muelas intenso a menudo empuja a los pacientes a pedir la extracción inmediata para frenar el sufrimiento.",
        "Sin embargo, perder un diente es irreversible. Explicamos por qué la endodoncia rotatoria es la opción biológica más inteligente."
      ],
      "ru": [
        "Острая зубная боль часто заставляет пациентов требовать немедленного удаления зуба, лишь бы избавиться от мучений.",
        "Но удаление — это необратимый шаг. Мы объясняем, почему спасение собственного корня зуба всегда должно быть на первом месте."
      ]
    },
    "keyTakeaway": {
      "en": "Never extract a tooth that can be saved with modern endodontics. Your natural root preserves jawbone density and chewing proprioception in a way that even the finest dental implant cannot match.",
      "tr": "Modern kanal tedavisi ile kurtarılabilecek hiçbir dişi çektirmeyin. Kendi doğal kökünüz, çene kemiğini ve çiğneme hissini en mükemmel implantın dahi yapamayacağı şekilde korur.",
      "de": "Ziehen Sie niemals einen Zahn, der gerettet werden kann. Ihre eigene Zahnwurzel erhält Knochensubstanz und Kaugefühl besser als jedes Implantat.",
      "pl": "Nigdy nie usuwaj zęba, który można uratować leczeniem kanałowym. Naturalny korzeń chroni kość przed zanikiem i zapewnia naturalne czucie.",
      "pt": "Nunca extraia um dente que pode ser salvo pela endodontia. A raiz natural mantém o osso e a mastigação como nenhum implante consegue.",
      "es": "No extraiga un diente que pueda salvarse con endodoncia. Su raíz natural conserva el hueso y el equilibrio de la mordida mejor que un implante.",
      "ru": "Никогда не удаляйте зуб, который можно вылечить эндодонтически. Собственный корень сохраняет костную ткань и биомеханику жевания."
    },
    "comparisonTable": {
      "title": {
        "en": "Decision Matrix: Root Canal Treatment + Crown vs Extraction + Dental Implant",
        "tr": "Karar Matrisi: Kanal Tedavisi + Kuron ile Diş Çekimi + İmplant Karşılaştırması",
        "de": "Entscheidungsmatrix: Wurzelbehandlung + Krone vs. Extraktion + Zahnimplantat",
        "pl": "Macierz Decyzyjna: Leczenie Kanałowe + Korona vs Ekstrakcja + Implant",
        "pt": "Matriz de Decisão: Desvitalização + Coroa vs Extração + Implante Dentário",
        "es": "Matriz de Decisión: Endodoncia + Corona frente a Extracción + Implante Dental",
        "ru": "Сравнительная матрица: Лечение каналов + коронка или Удаление + имплант"
      },
      "col1Header": {
        "en": "Root Canal + Zirconia Crown",
        "tr": "Kanal Tedavisi + Zirkonyum Kuron",
        "de": "Wurzelbehandlung + Zirkonkrone",
        "pl": "Leczenie Kanałowe + Korona Cyrkonowa",
        "pt": "Desvitalização + Coroa de Zircónio",
        "es": "Endodoncia + Corona de Zirconio",
        "ru": "Лечение каналов + коронка из циркония"
      },
      "col2Header": {
        "en": "Tooth Extraction + Titanium Implant",
        "tr": "Diş Çekimi + Titanyum İmplant",
        "de": "Extraktion + Titanimplantat",
        "pl": "Ekstrakcja + Implant Tytanowy",
        "pt": "Extração + Implante de Titânio",
        "es": "Extracción + Implante de Titanio",
        "ru": "Удаление + титановый имплант"
      },
      "rows": [
        {
          "col1": {
            "en": "Preserves biological tooth root & periodontal ligament (PDL)",
            "tr": "Doğal diş kökünü ve periodontal ligamenti (PDL) korur",
            "de": "Erhält die eigene Zahnwurzel und den Halteapparat",
            "pl": "Chroni naturalny korzeń i aparat zawieszeniowy zęba",
            "pt": "Preserva a raiz natural e o ligamento periodontal",
            "es": "Conserva la raíz natural y el ligamento periodontal",
            "ru": "Сохраняет корень зуба и связочный аппарат (периодонт)"
          },
          "col2": {
            "en": "Permanently eliminates biological root; replaces with titanium post",
            "tr": "Doğal kökü tamamen yok eder; yerine titanyum vida yerleştirilir",
            "de": "Zahnwurzel geht verloren; wird durch Titanschraube ersetzt",
            "pl": "Całkowicie usuwa korzeń; zastępuje go śrubą tytanową",
            "pt": "Remove definitivamente a raiz; substitui por pilar de titânio",
            "es": "Elimina la raíz natural; se sustituye por un tornillo de titanio",
            "ru": "Безвозвратно удаляет корень; замещается титановым винтом"
          }
        },
        {
          "col1": {
            "en": "Full natural proprioception (fine touch sensory feedback)",
            "tr": "Mükemmel doğal çiğneme hissiyatı ve basınç duyusu",
            "de": "Vollständige Tastsensibilität und Druckkontrolle beim Kauen",
            "pl": "Pełne, naturalne czucie nacisku podczas żucia",
            "pt": "Proprioceção e controlo mastigatório 100% naturais",
            "es": "Sensibilidad y control táctil masticatorio totalmente naturales",
            "ru": "Полная естественная чувствительность и контроль жевания"
          },
          "col2": {
            "en": "Osseoperception (reduced, bone-conducted sensory perception)",
            "tr": "Yalnızca kemik iletimli kısıtlı algılama (osteopersepsiyon)",
            "de": "Eingeschränkte Sensorik nur über den Kieferknochen",
            "pl": "Zmniejszone czucie wyłącznie poprzez kość szczęki",
            "pt": "Sensibilidade reduzida transmitida apenas através do osso",
            "es": "Sensibilidad atenuada por conducción ósea directa",
            "ru": "Приглушенная костная чувствительность (остеоперцепция)"
          }
        },
        {
          "col1": {
            "en": "Completed in 1–2 appointments (24 to 48 hours)",
            "tr": "1-2 seansta (24-48 saat içinde) tamamen biter",
            "de": "In 1–2 Terminen (24–48 Stunden) abgeschlossen",
            "pl": "Zakończenie w 1–2 wizyty (w 24 do 48 godzin)",
            "pt": "Concluído em 1 a 2 sessões (24 a 48 horas)",
            "es": "Finalizado en 1–2 citas (24 a 48 horas)",
            "ru": "Завершается за 1–2 визита (от 24 до 48 часов)"
          },
          "col2": {
            "en": "Requires 3 to 6 months for bone osseointegration",
            "tr": "Kemik kaynaşması için 3 ila 6 ay bekleme süresi gerekir",
            "de": "Erfordert 3 bis 6 Monate Einheilzeit im Knochen",
            "pl": "Wymaga 3 do 6 miesięcy na integrację z kością",
            "pt": "Exige 3 a 6 meses para integração óssea completa",
            "es": "Requiere de 3 a 6 meses de cicatrización e integración ósea",
            "ru": "Требует от 3 до 6 месяцев для полного приживления в кости"
          }
        },
        {
          "col1": {
            "en": "Significantly more conservative and economical",
            "tr": "Çok daha koruyucu ve ekonomik tedavi maliyeti",
            "de": "Deutlich kostengünstiger und zahnerhaltend",
            "pl": "Metoda znacznie bardziej oszczędna finansowo i biologicznie",
            "pt": "Procedimento mais conservador e económico",
            "es": "Tratamiento mucho más económico y conservador",
            "ru": "Значительно более экономичный и щадящий вариант"
          },
          "col2": {
            "en": "Higher investment due to surgical fixture, abutment & crown",
            "tr": "Cerrahi vida, abutment ve kuron nedeniyle daha yüksek maliyet",
            "de": "Höhere Kosten für Chirurgie, Implantatkörper und Aufbau",
            "pl": "Wyższy koszt związany z częścią chirurgiczną i łącznikiem",
            "pt": "Investimento mais elevado por envolver cirurgia e pilar",
            "es": "Mayor inversión por requerir cirugía, aditamento y corona",
            "ru": "Более высокая стоимость из-за хирургического этапа и абатмента"
          }
        }
      ]
    },
    "sections": [
      {
        "id": "biological-value-natural-tooth",
        "heading": {
          "en": "The Biological Superpower of the Periodontal Ligament (PDL)",
          "tr": "Periodontal Ligamentin (PDL) Biyolojik Süper Gücü",
          "de": "Die biologische Superkraft der Wurzelhaut (Periodontalligament)",
          "pl": "Biologiczna Siła Więzadeł Przyzębia (PDL)",
          "pt": "O Superpoder Biológico do Ligamento Periodontal",
          "es": "El Superpoder Biológico del Ligamento Periodontal",
          "ru": "Биологическая ценность периодонтальной связки (PDL)"
        },
        "paragraphs": {
          "en": [
            "Under a dental microscope, a natural tooth root is not glued solidly into the jawbone like a post in concrete. Instead, it is suspended inside the alveolar socket by millions of microscopic collagen fibers called the periodontal ligament (PDL).",
            "This ligament functions as an ultra-sophisticated hydraulic shock absorber. More importantly, it is densely packed with mechanoreceptors. When you bite on a tiny grain of sand or chew soft bread, these receptors signal your central nervous system within milliseconds to modulate jaw muscle contraction. Dental implants, being directly fused to bone (ankylosed/osseointegrated), lack this sensory feedback loop, making natural teeth far superior in fine chewing mechanics."
          ],
          "tr": [
            "Mikroskop altında incelendiğinde, doğal bir diş kökü çene kemiğine betona çakılmış bir direk gibi yapışık değildir. Kök, periodontal ligament (PDL) adı verilen milyonlarca mikroskobik kolajen lif vasıtasıyla kemik yuvasında adeta havada asılı durur.",
            "Bu lif ağı, çiğneme anında olağanüstü bir hidrolik süspansiyon görevi görür. Daha da önemlisi, içi zengin sinir algılayıcılarıyla (mekanoreseptörler) doludur. Ekmeğin içindeki küçücük bir sert parçayı ısırdığınızda, bu reseptörler milisaniyeler içinde beyne sinyal göndererek çiğneme kaslarını durdurur ve dişin kırılmasını önler. İmplantlar kemikle doğrudan kaynaştığı için bu hassas duyuya sahip değildir; bu yüzden doğal diş biyolojik olarak her zaman daha üstündür."
          ],
          "de": [
            "Die Zahnwurzel ist nicht starr mit dem Kiefer verwachsen, sondern über winzige Fasern elastisch aufgehängt.",
            "Diese Wurzelhaut registriert feinste Druckunterschiede und schützt vor Zahnfrakturen – ein bioelektronisches Meisterwerk, das kein Implantat imitieren kann."
          ],
          "pl": [
            "Korzeń zęba zawieszony jest na milionach włókien kolagenowych ozębnej działających jak amortyzator.",
            "Obecne w nich receptory czuciowe błyskawicznie informują mózg o sile nacisku, chroniąc zęby przed pęknięciem."
          ],
          "pt": [
            "A raiz do dente natural está suspensa no osso através de fibras de colagénio que funcionam como suspensão biológica.",
            "Possui recetores nervosos que regulam a força da mastigação em tempo real, evitando fraturas acidentais."
          ],
          "es": [
            "La raíz dental natural está suspendida mediante fibras microscópicas que amortiguan la mordida.",
            "Contiene receptores táctiles que envían información inmediata al cerebro para regular la fuerza masticatoria."
          ],
          "ru": [
            "Корень зуба подвешен в костной лунке на микроскопических волокнах периодонтальной связки, работающей как амортизатор.",
            "Специальные рецепторы передают в мозг сигнал о силе сжатия челюстей, защищая коронку от переломов."
          ]
        }
      },
      {
        "id": "when-extraction-is-unavoidable",
        "heading": {
          "en": "When Is Tooth Extraction Truly Unavoidable?",
          "tr": "Diş Çekimi Hangi Durumlarda Gerçekten Kaçınılmazdır?",
          "de": "Wann ist eine Zahnextraktion wirklich unvermeidbar?",
          "pl": "Kiedy Ekstrakcja Zęba Jest Rzeczywiście Nieunikniona?",
          "pt": "Quando é Que a Extração Dentária se Torna Realmente Inevitável?",
          "es": "¿Cuándo es Realmente Inevitable la Extracción Dental?",
          "ru": "Когда удаление зуба действительно неизбежно?"
        },
        "paragraphs": {
          "en": [
            "While natural tooth preservation is our primary oath, fighting to preserve a biologically doomed tooth can cause disastrous consequences, including massive alveolar bone destruction and chronic systemic bacteremia. Extraction is strictly indicated in the following scenarios:",
            "1. Vertical Root Fracture (VRF): A crack running longitudinally down the root allows bacteria to colonize the entire length of the bone, creating a rapid 'halo' bone defect.",
            "2. Subcrestal Tooth Destruction: When dental decay extends more than 2mm below the alveolar bone crest, biological width cannot be re-established without removing excessive bone.",
            "3. Grade III Periodontal Mobility: When gum disease has destroyed over 75% of the surrounding bone and the tooth moves in vertical and horizontal planes.",
            "In these non-restorable cases, an immediate atraumatic extraction combined with bone grafting or dental implant placement is the healthiest clinical pathway."
          ],
          "tr": [
            "Dişi kurtarmak birinci görevimiz olsa da, biyolojik olarak kurtarılması imkansız bir dişi ağızda tutmaya çalışmak çene kemiğinin erimesine ve kronik iltihaba yol açar. Diş çekiminin kesinlikle zorunlu olduğu durumlar şunlardır:",
            "1. Dikey Kök Kırıkları: Kök boyunca uzunlamasına inen çatlaklar bakterilerin kemiğe sızmasına ve kemiğin hızla erimesine neden olur.",
            "2. Kemik Altına İnen Çürükler: Çürük çene kemiği seviyesinin 2 mm'den daha derinine inmişse ve dişe kaplama tutturacak sağlam doku kalmamışsa.",
            "3. 3. Derece İleri Sallantı (Periodontal Harabiyet): İleri diş eti hastalığı nedeniyle kemik desteğinin %75'inden fazlası kaybedilmiş ve diş aşağı-yukarı oynuyorsa.",
            "Bu gibi durumlarda gecikmeden yapılacak atravmatik çekim ve implant uygulaması kemiği korumanın en doğru yoludur."
          ],
          "de": [
            "Manchmal schadet der Erhaltungsversuch mehr als er nützt: Bei vertikalen Wurzelfrakturen, Karies tief unter dem Knochenrand oder schwerer Parodontitis mit starker Zahnlockerung ist die Extraktion der richtige medizinische Schritt.",
            "Ein rechtzeitiges Implantat verhindert in solchen Fällen weiteren dramatischen Knochenverlust."
          ],
          "pl": [
            "Ekstrakcja staje się konieczna, gdy ząb uległ pionowemu pęknięciu korzenia, próchnica zniszczyła tkanki głęboko pod kością lub zaawansowana paradontoza pozbawiła go podparcia.",
            "Wtedy natychmiastowe usunięcie i implantacja ratują kość wyrostka zębodołowego."
          ],
          "pt": [
            "A extração é mandatória em casos de fratura vertical da raiz, cárie profunda subgengival sem viabilidade protética ou perda óssea grave por periodontite.",
            "Nessas circunstâncias, colocar um implante evita a reabsorção óssea desnecessária."
          ],
          "es": [
            "La extracción es inevitable ante fracturas radiculares verticales, caries que penetran bajo el hueso o movilidad severa por periodontitis avanzada.",
            "En esos casos, un implante inmediato evita una pérdida ósea masiva."
          ],
          "ru": [
            "Удаление строго показано при продольных переломах корня, глубоком поддесневом кариесе или подвижности 3 степени из-за пародонтита.",
            "Своевременное удаление с одновременной имплантацией предотвращает убыль костной ткани."
          ]
        }
      }
    ],
    "faqs": [
      {
        "q": {
          "en": "Does a modern root canal hurt?",
          "tr": "Modern kanal tedavisi acı verir mi?",
          "de": "Tut eine moderne Wurzelkanalbehandlung weh?",
          "pl": "Czy nowoczesne leczenie kanałowe boli?",
          "pt": "A desvitalização dentária moderna dói?",
          "es": "¿Duele una endodoncia moderna?",
          "ru": "Больно ли делать современное лечение каналов?"
        },
        "a": {
          "en": "No. With advanced computer-controlled local anesthetics, electronic apex locators, and rotary endodontics, a root canal is completely painless—feeling no different than a standard dental filling. In fact, it immediately relieves the intense pressure and pain of tooth infection.",
          "tr": "Hayır. Güçlü lokal anestezikler, elektronik apeks bulucular ve esnek döner eğeler sayesinde kanal tedavisi tamamen ağrısızdır; sıradan bir dolgudan farksızdır. Hatta hastalar işlem biter bitmez zonklayan diş ağrısından tamamen kurtulup büyük bir rahatlama yaşar.",
          "de": "Nein. Dank moderner computergestützter Betäubung verläuft der Eingriff völlig schmerzfrei und befreit sofort vom quälenden Druckschmerz.",
          "pl": "Nie. Zaawansowane znieczulenie miejscowe sprawia, że zabieg jest bezbolesny i natychmiast uwalnia od silnego bólu zęba.",
          "pt": "Não. Os anestésicos potentes atuais garantem que o procedimento decorra sem qualquer dor, aliviando de imediato a pressão infeciosa.",
          "es": "No. La anestesia local moderna asegura un procedimiento sin molestias, proporcionando un alivio inmediato del dolor punzante.",
          "ru": "Нет. Современная анестезия полностью исключает боль во время лечения и приносит мгновенное облегчение от воспаления."
        }
      },
      {
        "q": {
          "en": "Does a tooth always need a crown after a root canal?",
          "tr": "Kanal tedavisi gören bir dişe mutlaka kuron (kaplama) yapılmalı mıdır?",
          "de": "Braucht ein wurzelbehandelter Zahn immer eine Krone?",
          "pl": "Czy ząb po leczeniu kanałowym zawsze wymaga korony?",
          "pt": "Um dente desvitalizado precisa sempre de coroa protética?",
          "es": "¿Un diente endodonciado siempre necesita una corona?",
          "ru": "Всегда ли нужна коронка после лечения каналов?"
        },
        "a": {
          "en": "For posterior premolars and molars: Yes, virtually always. Removing the pulp blood supply makes the remaining tooth structure brittle over time. A full zirconia crown seals the tooth against coronal leakage and prevents catastrophic vertical biting fractures.",
          "tr": "Arka azı ve küçük azı dişlerinde: Evet, neredeyse her zaman gereklidir. Sinir ve damar paketi alındıktan sonra diş zamanla kırılganlaşır. Zirkonyum bir kuron dişi bir zırh gibi sararak çiğneme kuvvetleri altında ikiye ayrılmasını önler.",
          "de": "Bei Backenzähnen fast immer: Ohne Durchblutung wird der Zahn spröde. Eine Zirkonkrone schützt vor vertikalem Zerbrechen.",
          "pl": "W przypadku zębów bocznych – tak. Odwodniony ząb staje się kruchy, a korona cyrkonowa chroni go przed pęknięciem wzdłużnym.",
          "pt": "Nos molares sim, quase obrigatoriamente. O dente desvitalizado torna-se frágil e a coroa de zircónio impede que rache ao meio.",
          "es": "En premolares y molares sí: al perder vitalidad el diente se vuelve frágil y una corona de zirconio evita fracturas irreparables.",
          "ru": "Для жевательных зубов — да. Лишенный питания зуб становится хрупким, и коронка защищает его от раскалывания при жевании."
        }
      },
      {
        "q": {
          "en": "Can an infected tooth that was treated years ago be saved again?",
          "tr": "Yıllar önce kanal tedavisi görmüş ancak tekrar iltihaplanan bir diş kurtarılabilir mi?",
          "de": "Kann ein bereits wurzelbehandelter Zahn erneut gerettet werden?",
          "pl": "Czy ząb leczony kanałowo lata temu z nawrotem infekcji można uratować?",
          "pt": "Um dente desvitalizado que voltou a infetar pode ser salvo?",
          "es": "¿Se puede volver a salvar un diente endodonciado que se ha reinfectado?",
          "ru": "Можно ли перелечить зуб с повторным воспалением спустя годы?"
        },
        "a": {
          "en": "Yes. Through endodontic retreatment, our specialists remove old root fillings, thoroughly disinfect hidden accessory canals using ultrasonic activation, and reseal the root with bioceramic sealers, achieving success rates over 85–90%.",
          "tr": "Evet. 'Kanal Yenileme' (Retreatment) işlemiyle eski kanal dolgusu boşaltılır, mikroskop ve ultrasonik aletlerle temizlenir ve biyoseramik dolgularla yeniden kapatılarak %85-90 başarıyla kurtarılır.",
          "de": "Ja, durch eine Revisionsbehandlung (Re-Endo): Altes Füllmaterial wird entfernt, desinfiziert und mit biokompatiblen Zementen neu versiegelt.",
          "pl": "Tak, poprzez powtórne leczenie kanałowe (re-endo). Usuwamy stare wypełnienie i dezynfekujemy kanały pod mikroskopem.",
          "pt": "Sim, através do retratamento endodôntico, limpando e desinfetando novamente os canais com recurso a microscópio.",
          "es": "Sí, mediante una reendodoncia: se retira el material antiguo, se desinfecta minuciosamente y se sella de nuevo con éxito.",
          "ru": "Да, процедура перелечивания (реэндо) под микроскопом очищает каналы от бактерий и спасает зуб в 85–90% случаев."
        }
      },
      {
        "q": {
          "en": "What happens if I extract a tooth and choose not to replace it with an implant?",
          "tr": "Dişimi çektirip yerine implant yaptırmazsam ne olur?",
          "de": "Was passiert, wenn eine Zahnlücke nicht mit einem Implantat versorgt wird?",
          "pl": "Co się stanie, jeśli po wyrwaniu zęba nie wstawię implantu?",
          "pt": "O que acontece se extrair um dente e não colocar implante?",
          "es": "¿Qué sucede si extraigo un diente y no lo reemplazo con un implante?",
          "ru": "Что произойдет, если удалить зуб и не ставить имплант?"
        },
        "a": {
          "en": "Leaving an empty gap causes adjacent teeth to drift and tilt into the space, opposing teeth to supra-erupt (grow downward into the gap), jaw joint (TMJ) dysfunction, and severe alveolar bone resorption that makes future implant placement difficult.",
          "tr": "Oluşan boşluk doldurulmazsa komşu dişler boşluğa doğru yatar, karşı çenedeki diş boşluğa uzar (uzama hareketi), çiğneme dengesi bozulur, çene ekleminde (TME) ağrılar başlar ve çene kemiği eriyerek ileride implant yapılmasını zorlaştırır.",
          "de": "Die Nachbarzähne kippen in die Lücke, der Gegenzahn wächst heraus, der Kieferknochen bildet sich zurück und das Kiefergelenk leidet.",
          "pl": "Sąsiednie zęby przechylają się w stronę luki, ząb przeciwstawny wysuwa się, a kość zanika, co utrudnia późniejsze leczenie.",
          "pt": "Os dentes vizinhos inclinam-se para o espaço vazio, o dente oposto extrui e o osso alveolar sofre reabsorção contínua.",
          "es": "Los dientes adyacentes se inclinan hacia el hueco, el diente antagonista se descoloca y el hueso se reabsorbe progresivamente.",
          "ru": "Соседние зубы наклоняются в сторону дефекта, противоположный зуб выдвигается вниз, а кость быстро атрофируется."
        }
      },
      {
        "q": {
          "en": "Is root canal treatment cheaper than an implant in Antalya?",
          "tr": "Antalya'da kanal tedavisi implanttan daha mı ucuzdur?",
          "de": "Ist eine Wurzelkanalbehandlung in Antalya günstiger als ein Implantat?",
          "pl": "Czy leczenie kanałowe w Antalyi jest tańsze od implantu?",
          "pt": "A desvitalização é mais económica do que um implante em Antalya?",
          "es": "¿Es la endodoncia más barata que un implante en Antalya?",
          "ru": "Дешевле ли лечение каналов по сравнению с имплантом в Анталье?"
        },
        "a": {
          "en": "Yes, significantly. A complete root canal plus a custom zirconia crown typically costs 250€ to 450€, whereas a premium titanium implant, abutment, and crown package ranges from 600€ to 950€—making tooth preservation both biologically and financially superior.",
          "tr": "Evet, çok daha ekonomiktir. Antalya kliniğimizde tam bir kanal tedavisi ve monolitik zirkonyum kaplama 250€ - 450€ civarındayken, kaliteli bir implant, abutment ve kuron paketi 600€ - 950€ aralığındadır. Kendi dişinizi kurtarmak hem biyolojik hem de ekonomik açıdan en karlı karardır.",
          "de": "Ja, deutlich: Eine Wurzelbehandlung inklusive Zirkonkrone kostet rund 250€–450€, während ein Premium-Implantat mit Krone 600€–950€ kostet.",
          "pl": "Tak, zdecydowanie. Leczenie kanałowe z koroną cyrkonową to koszt 250€–450€, podczas gdy implant z koroną wynosi 600€–950€.",
          "pt": "Sim, bastante mais económica: desvitalização e coroa rondam os 250€–450€, enquanto um implante completo custa entre 600€ e 950€.",
          "es": "Sí, mucho más económica: endodoncia más corona cuesta unos 250€–450€, frente a 600€–950€ de un implante completo.",
          "ru": "Да, существенно дешевле: лечение каналов с циркониевой коронкой стоит 250€–450€, а имплант 'под ключ' — 600€–950€."
        }
      }
    ],
    "author": SPECIALIST_AUTHORS.drOzan
  },
  "turkey-teeth-warranty-and-lifespan-facts": {
    "slug": "turkey-teeth-warranty-and-lifespan-facts",
    "category": "turkey-teeth",
    "image": "/blog/turkey-teeth-durability.png",
    "publishDate": "2026-09-06",
    "readTime": "8 min read",
    "llmSummary": {
      "badge": {
        "en": "Clinical Longevity & Warranty Protocol",
        "tr": "Klinik Dayanıklılık ve Garanti Protokolü",
        "de": "Haltbarkeit & Offizieller Garantiepass",
        "pl": "Trwałość Kliniczna i Paszport Gwarancyjny",
        "pt": "Durabilidade Clínica e Passaporte de Garantia",
        "es": "Durabilidad Clínica y Pasaporte de Garantía",
        "ru": "Клиническая долговечность и гарантийный паспорт"
      },
      "quickAnswer": {
        "en": "The lifespan of so-called 'Turkey Teeth' is not governed by geography, but by prosthodontic precision, material authenticity, and occlusal engineering. When manufactured from certified multi-layer monolithic zirconia or genuine Ivoclar E-Max and bonded with microscopic CAD/CAM marginal accuracy under 20 microns, dental crowns and veneers reliably last 15 to 20+ years, while titanium dental implants (Straumann, Nobel Biocare) provide lifetime service with success rates exceeding 98.8%. At Master Smile Studio in Antalya, every patient receives an official International Warranty Passport with manufacturer serial barcodes, a custom hard-soft night guard to eliminate nocturnal bruxism forces, and direct global aftercare support.",
        "tr": "Halk arasında 'Turkey Teeth' olarak bilinen diş kaplamalarının ömrünü belirleyen şey coğrafya değil; uygulanan hekimlik titizliği, orijinal malzeme kullanımı ve çiğneme mühendisliğidir. Orijinal çok katmanlı zirkonyum veya Ivoclar E-Max bloklardan, CAD/CAM teknolojisiyle 20 mikronun altında kenar uyumuyla üretilen kaplamalar 15 ila 20 yıldan uzun süre sorunsuz kullanılır; orijinal Straumann titanyum implantlar ise %98.8'i aşan başarıyla ömür boyu hizmet eder. Master Smile Studio Antalya kliniğimizde her hastamıza karekodlu ve seri numaralı Uluslararası Garanti Pasaportu, gece diş sıkmasını önleyen koruyucu gece plağı ve ömür boyu destek sunulur.",
        "de": "Die Lebensdauer von Zahnbehandlungen in der Türkei hängt von präziser Zahnmedizin und zertifizierten Materialien ab. Kronen aus monolithischem Zirkon oder Ivoclar E-Max halten bei exakter Passung über 15 bis 20 Jahre; Straumann-Implantate halten oft ein Leben lang. Im Master Smile Studio erhalten Patienten einen internationalen Garantiepass mit Seriennummern, eine Schutzschiene gegen Zähneknirschen und weltweiten Support.",
        "pl": "Trwałość leczenia w Turcji to kwestia precyzji i oryginalnych materiałów. Korony z monolitycznego cyrkonu i licówki E-Max służą bez problemu 15–20 lat, a implanty Straumann mają dożywotnią gwarancję producenta. W Master Smile Studio każdy pacjent otrzymuje Międzynarodowy Paszport Gwarancyjny z numerami seryjnymi oraz indywidualną szynę nocną.",
        "pt": "A durabilidade das próteses em Antalya baseia-se no rigor técnico e materiais certificados. As coroas de zircónio duram 15 a 20+ anos e os implantes Straumann têm garantia vitalícia. Na Master Smile Studio fornecemos um passaporte de garantia com códigos de barras e goteira noturna protetora.",
        "es": "La longevidad de las carillas y coronas en Turquía depende de la calidad clínica: con zirconio y E-Max auténticos duran más de 15 a 20 años, y los implantes Straumann son de por vida. En Master Smile Studio entregamos pasaporte de garantía oficial y férula de descarga nocturna.",
        "ru": "Срок службы коронок и виниров в Анталье определяется качеством материалов и точностью прилегания. Монолитный цирконий и E-Max служат от 15 до 20+ лет, а импланты Straumann — пожизненно. В Master Smile Studio каждый пациент получает международный гарантийный паспорт и защитную капу."
      },
      "keyTakeaways": {
        "en": [
          "15–20+ Year Survival: High-density monolithic zirconia and lithium disilicate resist chipping and wear for decades.",
          "Sub-20 Micron Marginal Seal: CAD/CAM robotic milling eliminates gaps where bacteria could cause secondary decay.",
          "Night Guard Protocol: Custom occlusal splints provided to every patient to neutralize heavy nocturnal clenching forces.",
          "Official Warranty Passport: Serialized manufacturer certificates (Straumann / Ivoclar) with global validation."
        ],
        "tr": [
          "15-20+ Yıl Kullanım: Yüksek yoğunluklu monolitik zirkonyum ve E-Max seramikler onlarca yıl aşınmaya direnir.",
          "20 Mikron Altı Kenar Uyumu: CAD/CAM robotik kazıma ile bakterilerin sızıp çürük yapabileceği hiçbir mikro aralık bırakılmaz.",
          "Gece Plağı Protokolü: Gece diş sıkma baskısını sıfırlamak için her hastaya özel sert-yumuşak gece plağı verilir.",
          "Resmi Garanti Pasaportu: Tüm dünyada geçerli orijinal Straumann ve Ivoclar seri numaralı garanti sertifikası."
        ],
        "de": [
          "15–20+ Jahre Haltbarkeit: Monolithisches Zirkon und E-Max widerstehen Abrieb und Kaudruck über Jahrzehnte.",
          "Unter 20 Mikrometer Randschluss: CAD/CAM-Fräsung schließt Randspalten dicht gegen Bakterien ab.",
          "Knirscherschienen-Schutz: Jeder Patient erhält eine individuelle Schutzschiene gegen nächtlichen Kaudruck.",
          "Offizieller Garantiepass: Registrierte Seriennummern für Implantate und Laborarbeiten mit weltweiter Gültigkeit."
        ],
        "pl": [
          "15–20+ Lat Trwałości: Monolityczny cyrkon i E-Max są odporne na pękanie i ścieranie przez dziesięciolecia.",
          "Szczelność Brzeżna <20 Mikronów: Precyzja CAD/CAM zapobiega przedostawaniu się bakterii pod korony.",
          "Szyna Relaksacyjna: Każdy pacjent otrzymuje indywidualną szynę chroniącą zęby przed bruksizmem.",
          "Oficjalny Paszport Gwarancyjny: Certyfikaty producentów z kodami kreskowymi ważne na całym świecie."
        ],
        "pt": [
          "15 a 20+ Anos de Vida Útil: Cerâmicas de alta densidade resistentes ao desgaste por décadas.",
          "Selagem Marginal <20 Microns: A precisão CAD/CAM elimina frestas que poderiam causar cáries secundárias.",
          "Goteira Noturna Incluída: Protege as restaurações contra as forças do bruxismo durante o sono.",
          "Passaporte de Garantia Oficial: Certificados de autenticidade dos fabricantes com números de série registados."
        ],
        "es": [
          "15 a 20+ Años de Durabilidad: Zirconio monolítico y E-Max resistentes al desgaste por décadas.",
          "Ajuste Marginal <20 Micras: El fresado robótico CAD/CAM sella el borde frente a bacterias y caries.",
          "Férula de Descarga Nocturna: Entregada a cada paciente para absorber las fuerzas de bruxismo.",
          "Pasaporte de Garantía: Certificados oficiales con códigos de serie válidos internacionalmente."
        ],
        "ru": [
          "15–20+ лет службы: Монолитный цирконий и E-Max выдерживают многолетние жевательные нагрузки.",
          "Прилегание менее 20 микрон: Роботизированная фрезеровка CAD/CAM исключает скопление бактерий под коронкой.",
          "Защитная капа в подарок: Индивидуальная капа защищает зубы от ночного стискивания и бруксизма.",
          "Гарантийный паспорт: Официальный документ с серийными номерами и пожизненной гарантией на импланты."
        ]
      },
      "medicalVerdict": {
        "en": "A dental restoration never fails on its own; it fails when bacteria breach an imperfect crown margin or when unmanaged nocturnal bruxism generates destructive shear forces. By combining sub-20-micron digital marginal seals, high-grade Swiss and German biomaterials, and a mandatory night guard protocol, Master Smile Studio engineers smiles designed to endure for a quarter of a century.",
        "tr": "Bir diş kaplaması kendi kendine kırılmaz veya düşmez; başarısızlık ancak kenar uyumu bozuk bir kaplamanın altına bakteri sızdığında ya da kontrolsüz diş sıkma kuvvetleri bindiğinde gerçekleşir. Master Smile Studio kliniğimizde 20 mikronun altındaki dijital kenar uyumu, orijinal İsviçre ve Alman malzemeleri ve koruyucu gece plağı protokolü ile gülüşünüzü en az çeyrek asır güvenle kullanmanız için üretiyoruz.",
        "de": "Zahnersatz versagt nicht zufällig: Undichte Ränder oder unbemerktes Zähneknirschen sind die Hauptursachen. Unsere CAD/CAM-Passgenauigkeit und Schutzschienen garantieren höchste Langlebigkeit.",
        "pl": "Korona nigdy nie psuje się sama z siebie – przyczyną bywają nieszczelne brzegi lub nieleczony bruksizm. Nasze standardy laboratoryjne i szyny nocne gwarantują trwałość na dekady.",
        "pt": "As próteses dentárias só falham se houver infiltração bacteriana ou forças excessivas de bruxismo. Eliminamos ambos os riscos com selagem precisa e goteiras protetoras.",
        "es": "Una corona no falla sola: falla por desajustes donde entran bacterias o por bruxismo no controlado. Blindamos su sonrisa con ajuste micrométrico y férula nocturna.",
        "ru": "Коронки не ломаются сами по себе: причинами являются микрозазоры или сильный бруксизм. Цифровое прилегание и ночная капа гарантируют долговечность на десятилетия."
      }
    },
    "stats": [
      {
        "value": "15-20+ Yrs",
        "label": {
          "en": "Documented lifespan of precision-fitted monolithic zirconia crowns",
          "tr": "Hassas uyumlu monolitik zirkonyum kaplamaların kanıtlanmış ömrü",
          "de": "Dokumentierte Lebensdauer von monolithischen Zirkonkronen",
          "pl": "Udokumentowana trwałość precyzyjnych koron cyrkonowych",
          "pt": "Vida útil documentada de coroas de zircónio monolítico",
          "es": "Vida útil demostrada de las coronas de zirconio monolítico",
          "ru": "Подтвержденный срок службы монолитных циркониевых коронок"
        }
      },
      {
        "value": "98.8%",
        "label": {
          "en": "Osseointegration success rate of premium Swiss titanium implants",
          "tr": "Orijinal İsviçre titanyum implantların kemikle kaynaşma başarı oranı",
          "de": "Einheilungs-Erfolgsquote von Schweizer Premium-Implantaten",
          "pl": "Wskaźnik integracji szwajcarskich implantów tytanowych z kością",
          "pt": "Taxa de sucesso na integração óssea de implantes suíços",
          "es": "Tasa de osteointegración de implantes suizos de titanio",
          "ru": "Успешность приживления оригинальных швейцарских имплантов"
        }
      },
      {
        "value": "10-Year",
        "label": {
          "en": "Written international clinical warranty passport provided to patients",
          "tr": "Tüm hastalarımıza teslim edilen yazılı uluslararası garanti pasaportu",
          "de": "Schriftlicher internationaler Garantiepass für alle Restaurationen",
          "pl": "Pisemny międzynarodowy paszport gwarancyjny dla każdego pacjenta",
          "pt": "Passaporte de garantia internacional por escrito para todos os pacientes",
          "es": "Pasaporte de garantía internacional por escrito entregado al paciente",
          "ru": "Официальный международный гарантийный паспорт для каждого пациента"
        }
      }
    ],
    "intro": {
      "en": [
        "Search '#TurkeyTeeth' on TikTok or Instagram, and you will encounter a wild spectrum of opinions: from dazzling red-carpet smile transformations to viral horror warnings about crowns falling off or nerve damage. With millions of views shaping public perception, international patients naturally ask: What is the real lifespan of dental work in Turkey, and how does the warranty actually protect me?",
        "At Master Smile Studio in Antalya, we believe in radical clinical transparency. Teeth do not care about national borders; they obey the universal laws of biomechanics, materials science, and microbiology. In this definitive guide, Dr. Ozan Öztürk and Dt. Fırat İskender reveal the 3 clinical pillars that make our restorations last for decades and explain our comprehensive International Warranty Passport."
      ],
      "tr": [
        "TikTok veya Instagram'da '#TurkeyTeeth' etiketini arattığınızda karşınıza iki zıt uç çıkar: Bir yanda kırmızı halıya layık kusursuz gülüş değişimleri, diğer yanda kaplamaların düştüğünü iddia eden sansasyonel videolar. Milyonlarca hastanın aklında haklı olarak şu soru belirir: Türkiye'de yaptırılan dişler gerçekten ne kadar dayanır ve garanti şartları neleri kapsar?",
        "Master Smile Studio Antalya olarak tıpta şeffaflığı savunuyoruz. Diş dokusu ve seramikler ülke sınırlarına göre değil; biyomekaniğin, malzeme biliminin ve ağız mikrobiyolojisinin evrensel kurallarına göre davranır. Bu rehberde Dr. Ozan Öztürk ve Dt. Fırat İskender, kaplamalarımızın onlarca yıl ağızda kalmasını sağlayan 3 altın kuralı ve Uluslararası Garanti Pasaportumuzun güvencelerini tüm açıklığıyla anlatıyor."
      ],
      "de": [
        "Soziale Medien zeigen oft Extrembeispiele zu Zahnbehandlungen in der Türkei. Doch wie lange halten Zirkonkronen und Veneers wirklich?",
        "Erfahren Sie von Dr. Ozan Öztürk und Dt. Fırat İskender, welche Faktoren über Jahrzehnte hinweg Haltbarkeit garantieren und wie unser offizieller Garantiepass Sie schützt."
      ],
      "pl": [
        "Wokół 'Turkey Teeth' narosło wiele mitów. Prawdziwa trwałość zależy jednak od technologii, szczelności brzeżnej i użytych materiałów.",
        "Przedstawiamy 3 filary trwałości zębów w Master Smile Studio oraz zasady działania naszego Międzynarodowego Paszportu Gwarancyjnego."
      ],
      "pt": [
        "Nas redes sociais surgem muitas dúvidas sobre a durabilidade dos tratamentos dentários na Turquia. A biologia e a tecnologia são universais.",
        "Os nossos especialistas explicam os 3 pilares da longevidade protética e as coberturas do nosso passaporte de garantia internacional."
      ],
      "es": [
        "Las redes sociales difunden opiniones encontradas sobre los dientes realizados en Turquía. La realidad clínica se basa en ciencia y precisión.",
        "Descubra los 3 pilares que garantizan décadas de vida útil para sus coronas y cómo funciona nuestro pasaporte de garantía oficial."
      ],
      "ru": [
        "Вокруг темы 'зубов из Турции' ходит множество слухов. Однако долговечность зависит исключительно от мастерства врача и качества керамики.",
        "Мы раскрываем 3 фундаментальных правила надежности реставраций и объясняем условия нашего международного гарантийного паспорта."
      ]
    },
    "keyTakeaway": {
      "en": "Properly engineered monolithic zirconia crowns and implants in Antalya routinely last 15 to 20+ years. Our written International Warranty Passport with manufacturer serial codes guarantees your peace of mind worldwide.",
      "tr": "Antalya'da doğru protetik kurallarla üretilen monolitik zirkonyum kaplama ve implantlar 15-20 yıldan uzun süre sorunsuz kullanılır. Üretici seri numaralı yazılı Uluslararası Garanti Pasaportumuz sağlığınızı tüm dünyada güvence altına alır.",
      "de": "Fachgerecht gefertigte Zirkonkronen und Implantate halten über 15 bis 20 Jahre. Unser schriftlicher Garantiepass bietet weltweiten Schutz.",
      "pl": "Precyzyjnie wykonane korony cyrkonowe i implanty służą ponad 15–20 lat. Pisemny paszport gwarancyjny daje pełne poczucie bezpieczeństwa.",
      "pt": "Coroas e implantes bem executados duram mais de 15 a 20 anos. O nosso passaporte de garantia internacional assegura cobertura contínua.",
      "es": "Las coronas de zirconio e implantes bien realizados duran más de 15 a 20 años. Nuestro pasaporte de garantía por escrito ofrece total tranquilidad.",
      "ru": "Качественно установленный монолитный цирконий и импланты служат 15–20+ лет. Официальный гарантийный паспорт защищает вас по всему миру."
    },
    "comparisonTable": {
      "title": {
        "en": "Clinical Protocol Comparison: Master Smile Studio vs Commercial 'Prep Mills'",
        "tr": "Klinik Protokol Farkı: Master Smile Studio ve Ticari 'Hızlı Diş Fabrikaları'",
        "de": "Klinischer Vergleich: Master Smile Studio vs. kommerzielle Schnellkliniken",
        "pl": "Porównanie Standardów: Master Smile Studio a Masowe 'Fabryki Zębów'",
        "pt": "Comparação de Protocolos: Master Smile Studio vs Clínicas Comerciais de Massa",
        "es": "Comparativa de Protocolos: Master Smile Studio frente a Clínicas Comerciales Rápidas",
        "ru": "Сравнение протоколов: Master Smile Studio и коммерческие клиники-конвейеры"
      },
      "col1Header": {
        "en": "Master Smile Studio Clinical Protocol",
        "tr": "Master Smile Studio Klinik Protokolü",
        "de": "Master Smile Studio Protokoll",
        "pl": "Standard Master Smile Studio",
        "pt": "Protocolo Master Smile Studio",
        "es": "Protocolo Master Smile Studio",
        "ru": "Протокол Master Smile Studio"
      },
      "col2Header": {
        "en": "Low-Cost Commercial 'Prep Mills'",
        "tr": "Düşük Maliyetli Ticari Diş Fabrikaları",
        "de": "Billig-Kliniken ('Zahn-Fabriken')",
        "pl": "Tanie Kliniki Masowe ('Fabryki')",
        "pt": "Clínicas Low-Cost Comerciais",
        "es": "Clínicas Low-Cost Tipo Fábrica",
        "ru": "Низкобюджетные клиники-конвейеры"
      },
      "rows": [
        {
          "col1": {
            "en": "Minimally invasive veneer prep (0.3–0.5mm) preserving natural enamel",
            "tr": "Doğal diş minesini koruyan minimal invaziv lamine kesimi (0.3-0.5 mm)",
            "de": "Minimalinvasive Schmelzpräparation (0,3–0,5 mm), maximaler Schmelzerhalt",
            "pl": "Małoinwazyjna preparacja szkliwa (0,3–0,5 mm) zachowująca żywy ząb",
            "pt": "Desgaste minimamente invasivo de 0,3 a 0,5 mm preservando o esmalte",
            "es": "Tallado mínimamente invasivo (0.3–0.5 mm) que conserva el esmalte",
            "ru": "Микроинвазивная обработка 0.3–0.5 мм с сохранением живой эソール"
          },
          "col2": {
            "en": "Aggressive 360-degree 'shark tooth' shaving destroying healthy teeth",
            "tr": "Sağlıklı dişleri sivrilten aşırı agresif 360 derece 'köpekbalığı dişi' kesimi",
            "de": "Radikales 360-Grad-Abschleifen ('Haifischzähne') gesunder Zähne",
            "pl": "Agresywne szlifowanie 360 stopni niszczące zdrowe zęby ('zęby rekina')",
            "pt": "Desgaste agressivo de 360 graus destruindo dentes sãos ('dentes de tubarão')",
            "es": "Limado agresivo de 360 grados que destruye dientes sanos ('dientes de tiburón')",
            "ru": "Агрессивное спиливание зубов под корень ('акульи зубы')"
          }
        },
        {
          "col1": {
            "en": "Certified Ivoclar E-Max & Katana Multilayer Zirconia with barcodes",
            "tr": "Barkodlu orijinal Ivoclar E-Max ve Katana çok katmanlı Zirkonyum",
            "de": "Zertifiziertes Ivoclar E-Max & Katana Zirkon mit Barcodes",
            "pl": "Certyfikowany E-Max Ivoclar i wielowarstwowy cyrkon Katana z kodami",
            "pt": "Ivoclar E-Max e Zircónio Katana multicamadas com certificados oficiais",
            "es": "Ivoclar E-Max y Zirconio Katana multicapa con certificados oficiales",
            "ru": "Оригинальный Ivoclar E-Max и цирконий Katana с сертификатами"
          },
          "col2": {
            "en": "Unbranded, cheap generic ceramic blocks with unknown origins",
            "tr": "Menşei belirsiz, markasız ve ucuz jenerik seramik bloklar",
            "de": "Unbekannte, billige Importblöcke ohne Herkunftsnachweis",
            "pl": "Tanie, niemarkowe bloczki ceramiczne niewiadomego pochodzenia",
            "pt": "Blocos cerâmicos genéricos baratos sem rastreabilidade",
            "es": "Bloques cerámicos genéricos baratos sin origen verificado",
            "ru": "Безымянные дешевые керамические блоки без маркировки"
          }
        },
        {
          "col1": {
            "en": "Gnathological bite articulation + custom dual-layer night guard",
            "tr": "Gnatolojik kapanış analizi ve kişiye özel çift katmanlı gece plağı",
            "de": "Exakte Biss-Gnathologie & individuelle Knirscherschiene",
            "pl": "Precyzyjne ustawienie zwarcia i indywidualna szyna relaksacyjna",
            "pt": "Articulação oclusal precisa e goteira noturna personalizada",
            "es": "Ajuste oclusal preciso y férula de descarga nocturna a medida",
            "ru": "Точная гнатологическая настройка прикуса и капа от бруксизма"
          },
          "col2": {
            "en": "Rapid mass bonding with zero occlusal balancing or night guard",
            "tr": "Çiğneme dengesi yapılmadan, gece plağı verilmeden hızlı yapıştırma",
            "de": "Fließbandarbeit ohne Bissanpassung oder Schutzschiene",
            "pl": "Masowe cementowanie bez dopasowania zgryzu i bez szyny nocnej",
            "pt": "Colocação rápida em série sem calibração da mordida ou goteira",
            "es": "Colocación rápida sin equilibrar la mordida ni entregar férula",
            "ru": "Конвейерная фиксация без настройки прикуса и без защитной капы"
          }
        },
        {
          "col1": {
            "en": "15 to 20+ years of healthy function, backed by written warranty",
            "tr": "Yazılı resmi garantiyle desteklenen 15-20+ yıl sağlıklı kullanım",
            "de": "15 bis 20+ Jahre Haltbarkeit mit schriftlicher Garantie",
            "pl": "15 do 20+ lat bezproblemowego użytkowania z pisemną gwarancją",
            "pt": "15 a 20+ anos de função saudável com garantia por escrito",
            "es": "15 a 20+ años de función saludable avalados por garantía escrita",
            "ru": "15–20+ лет безупречной службы с официальной гарантией"
          },
          "col2": {
            "en": "Chipping, nerve necrosis, and crown debonding within 2–3 years",
            "tr": "2-3 yıl içinde çatlama, kanal iltihabı ve kaplamaların düşmesi",
            "de": "Chipping, Nerventzündungen und lockere Kronen nach 2–3 Jahren",
            "pl": "Ukruszenia, martwica miazgi i wypadanie koron po 2–3 latach",
            "pt": "Fraturas, necrose pulpar e descolamento de coroas em 2 a 3 anos",
            "es": "Fracturas, necrosis del nervio y caída de coronas a los 2–3 años",
            "ru": "Сколы, воспаление нервов и выпадение коронок через 2–3 года"
          }
        }
      ]
    },
    "sections": [
      {
        "id": "real-clinical-lifespan-data",
        "heading": {
          "en": "The Science of Ceramic Longevity: What Clinical Studies Show",
          "tr": "Seramik Dayanıklılığının Bilimi: Klinik Araştırmalar Ne Gösteriyor?",
          "de": "Die Wissenschaft der Keramik-Haltbarkeit: Was Studien belegen",
          "pl": "Nauka o Trwałości Ceramiki: Co Mówią Badania Kliniczne",
          "pt": "A Ciência da Longevidade Cerâmica: O Que Dizem os Estudos Clínicos",
          "es": "Ciencia de la Longevidad Cerámica: Evidencia de los Estudios Clínicos",
          "ru": "Научные данные о долговечности керамики: что говорят исследования"
        },
        "paragraphs": {
          "en": [
            "Peer-reviewed prosthodontic literature (such as the Journal of Prosthetic Dentistry and the International Journal of Prosthodontics) consistently confirms that dental ceramics have some of the highest biocompatibility and survival rates in all of human medicine.",
            "Monolithic zirconia exhibits a survival rate exceeding 96.8% at 10 years and over 92% at 15 years, with virtually zero catastrophic fractures when designed without fragile porcelain overlays. Lithium disilicate (E-Max) demonstrates a 95.3% 10-year survival rate when bonded strictly to tooth enamel. At Master Smile Studio, our 10-year audited clinical survival exceeds 98.2% across all ceramic disciplines."
          ],
          "tr": [
            "Uluslararası saygın protetik diş hekimliği dergilerinde (Journal of Prosthetic Dentistry vb.) yayımlanan uzun dönemli bilimsel çalışmalar, diş seramiklerinin insan vücudundaki en yüksek doku uyumu ve sağkalım oranlarına sahip olduğunu kanıtlamaktadır.",
            "Monolitik zirkonyum kaplamalar 10 yılda %96.8, 15 yılda ise %92'nin üzerinde başarıyla ağızda kalmaktadır; zayıf porselen katmanları olmadan tek parça üretildiklerinde kırılma riski neredeyse sıfırdır. E-Max lityum disilikat lamineler ise diş minesiyle yapıştırıldığında 10 yıllık takipte %95.3 başarı sergiler. Master Smile Studio kliniğimizin son 10 yıllık klinik başarı ortalaması %98.2 ile dünya standartlarının üzerindedir."
          ],
          "de": [
            "Wissenschaftliche Studien belegen herausragende Überlebensraten: Monolithisches Zirkon erreicht nach 10 Jahren über 96% und nach 15 Jahren über 92% Erfolgsquote.",
            "Im Master Smile Studio liegt unsere dokumentierte Erfolgsquote bei über 98% – dank kompromissloser Qualitätskontrolle."
          ],
          "pl": [
            "Badania naukowe potwierdzają, że monolityczny tlenek cyrkonu osiąga ponad 96% przetrwania po 10 latach bez ryzyka pęknięć.",
            "W Master Smile Studio średni wskaźnik powodzenia zabiegów protetycznych przekracza 98,2%."
          ],
          "pt": [
            "A literatura científica confirma uma taxa de sucesso superior a 96% aos 10 anos para o zircónio monolítico.",
            "Na Master Smile Studio, o rigor no fabrico garante uma taxa de sobrevivência clínica superior a 98%."
          ],
          "es": [
            "Estudios clínicos internacionales certifican que el zirconio monolítico supera el 96% de éxito a los 10 años.",
            "En Master Smile Studio mantenemos una tasa de éxito superior al 98.2% gracias a la precisión digital."
          ],
          "ru": [
            "Международные исследования подтверждают: монолитный цирконий демонстрирует более 96% выживаемости через 10 лет.",
            "В Master Smile Studio средний показатель долговечности реставраций превышает 98.2%."
          ]
        }
      },
      {
        "id": "the-3-pillars-of-durability",
        "heading": {
          "en": "The 3 Pillars of Lifelong Smile Preservation",
          "tr": "Ömür Boyu Gülüşü Korumanın 3 Altın Kuralı",
          "de": "Die 3 Säulen für lebenslangen Zahnersatz",
          "pl": "3 Filary Dożywotniej Trwałości Nowego Uśmiechu",
          "pt": "Os 3 Pilares Para a Longevidade do Sorriso",
          "es": "Los 3 Pilares para Proteger su Inversión Dental",
          "ru": "3 фундаментальных правила долговечности вашей улыбки"
        },
        "paragraphs": {
          "en": [
            "How do we ensure your new smile lasts for 20+ years? At Master Smile Studio, we enforce 3 non-negotiable clinical rules:",
            "1. Sub-20 Micron Marginal Adaptation: Using 5-axis German CAD/CAM milling machines and 3Shape digital intraoral scanners, our crown margins fit your prepared tooth with microscopic tolerances under 20 microns. Bacteria cannot penetrate this seal, completely preventing secondary decay underneath the crown.",
            "2. The Night Guard Bruxism Protocol: Over 60% of adults unconsciously grind or clench their teeth at night, generating forces up to 500 lbs per square inch. We fabricate a custom dual-layer hard-soft night guard for every full set treatment, absorbing nocturnal shock and doubling ceramic lifespan.",
            "3. Periodontal Maintenance: Implants and zirconia cannot get cavities, but the bone and gums supporting them can develop peri-implantitis or gingivitis if neglected. Daily water flossing and routine 6-month check-ups keep the biological foundation rock-solid."
          ],
          "tr": [
            "Yeni gülüşünüzün 20 yıldan uzun süre ilk günkü gibi kalmasını nasıl sağlıyoruz? Master Smile Studio'da taviz vermediğimiz 3 altın kuralımız vardır:",
            "1. 20 Mikronun Altında Kenar Uyumu: Alman yapımı 5 eksenli CAD/CAM kazıma cihazlarımız ve 3Shape ağız içi tarayıcılarımızla kaplamanın dişle birleştiği kenar payını 20 mikronun altına indiriyoruz. Bu mikroskobik uyum sayesinde bakteriler kaplama altına sızamaz ve dişin alttan çürümesi tamamen engellenir.",
            "2. Gece Plağı (Bruksizm) Protokolü: Yetişkinlerin %60'ından fazlası gece farkında olmadan dişlerini sıkar ve inç kare başına yüzlerce kilo baskı uygular. Kliniğimizde tüm ağız tedavisi gören her hastaya özel çift katmanlı koruyucu gece plağı hazırlanır; bu plak seramiklerin ömrünü ikiye katlar.",
            "3. Diş Eti ve Kemik Bakımı: Zirkonyum çürümez; ancak dişi tutan diş eti ve çene kemiği bakımsız kalırsa diş eti çekilmesi yaşanabilir. Günlük diş ipi ve ağız duşu kullanımı biyolojik temelin ömür boyu sağlam kalmasını garantiler."
          ],
          "de": [
            "1. Perfekter Randschluss unter 20 Mikrometer schützt vor Karies unter der Krone.",
            "2. Die individuelle Knirscherschiene fängt nächtlichen Kaudruck ab und schützt die Keramik.",
            "3. Tägliche Zahnzwischenraumpflege sichert das gesunde Zahnfleischfundament."
          ],
          "pl": [
            "1. Mikroskopijna szczelność brzeżna poniżej 20 mikronów eliminuje próchnicę wtórną.",
            "2. Indywidualna szyna nocna amortyzuje potężne siły zaciskania zębów podczas snu.",
            "3. Codzienna higiena przestrzeni międzyzębowych gwarantuje zdrowe dziąsła na lata."
          ],
          "pt": [
            "1. Adaptação marginal precisa abaixo de 20 microns impede infiltrações de bactérias.",
            "2. Goteira noturna personalizada protege contra o desgaste e forças de bruxismo.",
            "3. Higiene interdentária diária para manter as gengivas e o suporte ósseo saudáveis."
          ],
          "es": [
            "1. Ajuste marginal de menos de 20 micras que impide la entrada de bacterias bajo la corona.",
            "2. Férula de descarga nocturna para neutralizar las fuerzas destructivas del bruxismo.",
            "3. Higiene interdental diaria para mantener las encías y el hueso firmes y sanos."
          ],
          "ru": [
            "1. Краевое прилегание менее 20 микрон защищает от проникновения бактерий под коронку.",
            "2. Индивидуальная ночная капа нейтрализует разрушительные нагрузки бруксизма во сне.",
            "3. Ежедневная чистка межзубных промежутков сохраняет здоровье десен и кости."
          ]
        }
      },
      {
        "id": "international-warranty-passport",
        "heading": {
          "en": "Your Official Master Smile Studio Warranty Passport",
          "tr": "Resmi Master Smile Studio Uluslararası Garanti Pasaportunuz",
          "de": "Ihr offizieller internationaler Master Smile Studio Garantiepass",
          "pl": "Twój Oficjalny Paszport Gwarancyjny Master Smile Studio",
          "pt": "O Seu Passaporte de Garantia Internacional Master Smile Studio",
          "es": "Su Pasaporte Oficial de Garantía Internacional Master Smile Studio",
          "ru": "Ваш официальный международный гарантийный паспорт"
        },
        "paragraphs": {
          "en": [
            "When your smile transformation is complete, you do not just leave with a radiant smile—you leave with legal, authenticated written protection. We present you with your official Master Smile Studio International Warranty Passport.",
            "This passport contains: (1) Official manufacturer serial barcodes for every dental implant placed (Straumann, Nobel Biocare, NucleOSS) granting global lifetime replacement; (2) Ivoclar Vivadent and Katana authenticity certificates for ceramic restorations; and (3) Our 10-year comprehensive clinic warranty covering free repair or replacement of any ceramic fracture or debonding."
          ],
          "tr": [
            "Tedaviniz tamamlandığında kliniğimizden yalnızca yeni bir gülüşle değil; resmi, yazılı ve uluslararası geçerliliği olan bir güvenceyle ayrılırsınız. Size bizzat teslim ettiğimiz Uluslararası Garanti Pasaportumuz sağlığınızı korur.",
            "Bu pasaportun içinde: (1) Yerleştirilen her implantın (Straumann, Nobel Biocare vb.) dünya genelinde geçerli ömür boyu garanti sağlayan orijinal üretici seri numaraları ve barkodları, (2) Ivoclar Vivadent ve Katana seramik orijinallik sertifikaları, (3) Herhangi bir kaplama kırığı veya gevşemesinde ücretsiz onarım ve yenilemeyi garanti eden 10 yıllık klinik garantimiz yer alır."
          ],
          "de": [
            "Nach Abschluss Ihrer Behandlung erhalten Sie Ihren offiziellen Garantiepass mit eingeklebten Original-Hersteller-Barcodes (Straumann/Ivoclar).",
            "Dieser Pass garantiert lebenslange Herstellergarantie auf Implantate sowie eine 10-jährige umfassende Praxiserstattung bei Materialfehlern."
          ],
          "pl": [
            "Każdy pacjent opuszcza naszą klinikę z oficjalnym Paszportem Gwarancyjnym zawierającym naklejki z kodami kreskowymi implantów.",
            "Zapewnia on dożywotnią gwarancję producenta na implanty oraz 10 lat pełnej gwarancji klinicznej na prace protetyczne."
          ],
          "pt": [
            "Ao concluir o tratamento recebe o Passaporte de Garantia Internacional com os números de série oficiais dos implantes Straumann.",
            "Inclui garantia vitalícia de material para os implantes e 10 anos de cobertura clínica para as coroas cerâmicas."
          ],
          "es": [
            "Al finalizar el tratamiento le entregamos su Pasaporte de Garantía Internacional con los números de serie de los implantes.",
            "Garantía de por vida del fabricante para implantes y 10 años de cobertura clínica para las prótesis de zirconio y E-Max."
          ],
          "ru": [
            "По завершении лечения вам выдается официальный Международный гарантийный паспорт с серийными штрих-кодами имплантов.",
            "Он дает пожизненную гарантию производителя на импланты Straumann и 10 лет полной клинической гарантии на керамику."
          ]
        }
      }
    ],
    "faqs": [
      {
        "q": {
          "en": "Do 'Turkey Teeth' have to be replaced after 10 years?",
          "tr": "'Turkey Teeth' kaplamaların 10 yıl sonra mutlaka yenilenmesi gerekir mi?",
          "de": "Müssen Kronen aus der Türkei nach 10 Jahren erneuert werden?",
          "pl": "Czy korony z Turcji trzeba wymieniać po 10 latach?",
          "pt": "As próteses feitas na Turquia têm de ser substituídas após 10 anos?",
          "es": "¿Las coronas realizadas en Turquía deben cambiarse a los 10 años?",
          "ru": "Нужно ли менять коронки из Турции через 10 лет?"
        },
        "a": {
          "en": "No. The myth of mandatory 10-year replacement comes from old acrylic dentures and metal-fused crowns. High-grade monolithic zirconia does not degrade, corrode, or fatigue. If your gums remain healthy and you use a night guard, your restorations can easily last 20 to 25+ years.",
          "tr": "Hayır. 10 yılda bir dişlerin mutlaka değişmesi gerektiği efsanesi, eski metal destekli porselenler ve akrilik protezlerden kalma bir yanılgıdır. Yeni nesil monolitik zirkonyum yıpranmaz, paslanmaz ve aşınmaz. Diş etlerinize iyi baktığınız ve gece plağınızı taktığınız sürece kaplamalarınız 20-25 yıldan uzun süre ilk günkü gibi kalır.",
          "de": "Nein. Hochwertiges monolithisches Zirkonium zersetzt sich nicht. Bei guter Mundhygiene halten die Restaurationen problemlos 20 bis 25 Jahre und länger.",
          "pl": "Nie. Monolityczny cyrkon nie ulega korozji ani zmęczeniu materiałowemu. Przy właściwej higienie korony służą bez problemu ponad 20–25 lat.",
          "pt": "Não. O zircónio monolítico não se desgasta com o tempo. Com boa higiene e uso de goteira, as próteses ultrapassam facilmente os 20 anos.",
          "es": "No. El zirconio de última generación no sufre fatiga ni desgaste. Con higiene y férula nocturna pueden durar más de 20 a 25 años.",
          "ru": "Нет. Монолитный цирконий не подвержен износу или разрушению. При должном уходе коронки служат более 20–25 лет."
        }
      },
      {
        "q": {
          "en": "Can teeth decay underneath veneers or crowns?",
          "tr": "Kaplamaların veya lamine porselenlerin altındaki dişler çürüyebilir mi?",
          "de": "Kann der Zahn unter einer Krone oder einem Veneer faulen?",
          "pl": "Czy ząb pod koroną lub licówką może się popsuć?",
          "pt": "O dente natural pode ter cáries por baixo de uma coroa ou faceta?",
          "es": "¿Puede cariarse el diente debajo de una corona o carilla?",
          "ru": "Может ли зуб под коронкой или виниром разрушаться от кариеса?"
        },
        "a": {
          "en": "Ceramics and zirconia cannot decay. However, if oral hygiene is neglected and plaque accumulates along the gumline, bacteria can attack the exposed natural root margin. Daily interdental flossing prevents this completely.",
          "tr": "Zirkonyum ve porselen seramik maddeler asla çürümez. Ancak ağız bakımını aksatır ve diş ipi kullanmazsanız, diş eti hizasındaki doğal kök yüzeyine plak yerleşebilir. Günde bir kez diş ipi kullanımı bu riski tamamen ortadan kaldırır.",
          "de": "Die Keramik selbst kann nicht faulen. Nur unzureichende Zahnpflege am Zahnfleischrand kann den freiliegenden Wurzelteil gefährden. Zahnseide schützt zuverlässig.",
          "pl": "Sama ceramika jest odporna na próchnicę. Jedynie zaniedbania higieniczne na granicy z dziąsłem mogą zagrozić odsłoniętemu korzeniowi.",
          "pt": "A cerâmica nunca tem cáries. Apenas a falta de higiene na linha da gengiva pode expor a raiz natural à placa bacteriana.",
          "es": "La cerámica nunca se caría. Solo una higiene deficiente en el borde de la encía podría afectar a la raíz natural expuesta.",
          "ru": "Сама керамика кариесу не подвержена. Опасность представляет лишь налет у десны при плохой гигиене, поэтому важна зубная нить."
        }
      },
      {
        "q": {
          "en": "What happens if a crown chips or comes loose after I return home to the UK or Europe?",
          "tr": "İngiltere veya Avrupa'ya döndükten sonra bir kaplama kırılır veya çıkarsa ne olur?",
          "de": "Was passiert, wenn sich zu Hause in Deutschland oder UK eine Krone lockert?",
          "pl": "Co jeśli po powrocie do domu korona się ukruszy lub poluzuje?",
          "pt": "O que acontece se uma coroa lascar ou descolar após o regresso a casa?",
          "es": "¿Qué ocurre si una corona se astilla o se afloja tras volver a mi país?",
          "ru": "Что произойдет, если коронка сколется или расцементируется дома?"
        },
        "a": {
          "en": "Under our International Warranty Passport, you simply send a photo to our 24/7 patient coordinator. If recementation is needed, we cover local dental fees, or we welcome you back to our Antalya clinic for free replacement with complimentary VIP transfers.",
          "tr": "Uluslararası Garanti Pasaportumuz kapsamında 7/24 hasta koordinatörümüze bir fotoğraf iletmeniz yeterlidir. Basit bir yapıştırma gerekirse yerel hekim masrafınız karşılanır ya da Antalya'ya geldiğinizde kaplamanız ücretsiz olarak yenilenir ve VIP transferiniz sağlanır.",
          "de": "Dank Garantiepass senden Sie uns einfach ein Foto. Bei Bedarf erstatten wir die örtliche Neuzementierung oder ersetzen die Krone kostenlos in Antalya.",
          "pl": "Wystarczy kontakt z koordynatorem. Pokrywamy koszt zacementowania na miejscu lub bezpłatnie wymieniamy koronę w Antalyi.",
          "pt": "Ao abrigo da garantia, basta enviar uma foto. Cobrimos a recimentação local ou substituímos a peça gratuitamente em Antalya.",
          "es": "Bajo la garantía oficial, basta con contactar a su coordinador. Cubrimos el recementado local o sustituimos la pieza gratis en Antalya.",
          "ru": "По гарантийному паспорту вы связываетесь с куратором: мы компенсируем визит к местному врачу или бесплатно заменим коронку в клинике."
        }
      },
      {
        "q": {
          "en": "Why does Master Smile Studio provide a night guard to every full-set patient?",
          "tr": "Master Smile Studio neden tüm ağız tedavisi gören her hastaya gece plağı verir?",
          "de": "Warum erhält jeder Patient im Master Smile Studio eine Schutzschiene?",
          "pl": "Dlaczego Master Smile Studio daje szynę relaksacyjną każdemu pacjentowi?",
          "pt": "Porque é que a Master Smile Studio oferece uma goteira noturna a todos os pacientes?",
          "es": "¿Por qué Master Smile Studio entrega una férula nocturna a cada paciente?",
          "ru": "Почему Master Smile Studio дарит ночную капу каждому пациенту?"
        },
        "a": {
          "en": "Because nocturnal bruxism (grinding) occurs unconsciously during deep REM sleep, exerting destructive pressure. A custom dual-density night guard cushions your restorations, protects jaw joints, and doubles the clinical lifespan of your smile.",
          "tr": "Çünkü gece diş sıkma (bruksizm) derin uykuda istemsiz gerçekleşir ve yüzlerce kilo yıkıcı kuvvet uygular. Özel çift katmanlı gece plağı bu baskıyı emerek seramiklerinizi korur, çene eklemini rahatlatır ve gülüşünüzün ömrünü iki katına çıkarır.",
          "de": "Weil Zähneknirschen unbewusst im Schlaf geschieht. Die Schiene schützt die Keramik vor extremen Kräften und verdoppelt ihre Lebensdauer.",
          "pl": "Ponieważ zgrzytanie zębami we śnie wywołuje ogromny nacisk. Szyna amortyzuje te siły i chroni ceramikę przed mikropęknięciami.",
          "pt": "Porque o bruxismo noturno gera forças destrutivas inconscientes. A goteira absorve o impacto e duplica a vida útil do seu novo sorriso.",
          "es": "Porque el bruxismo nocturno ejerce presiones destructivas involuntarias. La férula amortigua el impacto y duplica la vida útil de las coronas.",
          "ru": "Потому что ночной бруксизм происходит непроизвольно. Защитная капа амортизирует нагрузку и вдвое продлевает срок службы зубов."
        }
      },
      {
        "q": {
          "en": "Are Straumann dental implant warranties valid worldwide?",
          "tr": "Straumann dental implant garantisi tüm dünyada geçerli midir?",
          "de": "Gilt die Straumann-Implantatgarantie weltweit?",
          "pl": "Czy gwarancja na implanty Straumann jest ważna na całym świecie?",
          "pt": "A garantia dos implantes Straumann é válida em todo o mundo?",
          "es": "¿La garantía de los implantes Straumann es válida en todo el mundo?",
          "ru": "Действует ли гарантия на импланты Straumann по всему миру?"
        },
        "a": {
          "en": "Yes, 100%. As an authorized Straumann partner clinic, we supply the official Swiss manufacturer certificate with registered barcode. In the rare event of mechanical failure, any Straumann-certified dentist worldwide can access the global warranty network.",
          "tr": "Evet, kesinlikle geçerlidir. Yetkili Straumann partner kliniği olarak her implant için barkodlu resmi İsviçre üretici sertifikasını teslim ediyoruz. Dünyanın herhangi bir ülkesindeki Straumann yetkili hekimi bu garanti ağını sistemden görebilir ve ücretsiz parça temin edebilir.",
          "de": "Ja, zu 100%. Mit dem offiziellen Schweizer Straumann-Pass können Sie bei jedem zertifizierten Behandler weltweit Garantieleistungen abrufen.",
          "pl": "Tak, w 100%. Certyfikat szwajcarskiego producenta z unikalnym kodem kreskowym jest honorowany przez stomatologów Straumann na całym świecie.",
          "pt": "Sim, a 100%. O passaporte oficial suíço da Straumann com código de barras é reconhecido em clínicas autorizadas globalmente.",
          "es": "Sí, 100%. El certificado oficial suizo de Straumann con código de barras es reconocido por dentistas autorizados en cualquier país del mundo.",
          "ru": "Да, на 100%. Официальный швейцарский сертификат со штрих-кодом регистрируется в глобальной базе Straumann по всему миру."
        }
      }
    ],
    "author": SPECIALIST_AUTHORS.drOzan
  }
};
