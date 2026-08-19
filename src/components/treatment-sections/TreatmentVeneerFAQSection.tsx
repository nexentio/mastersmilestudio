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

const FAQ_DATA: Record<string, FAQDictionary> = {
  en: {
    title: 'Frequently Asked Questions About Dental Veneers',
    subText:
      'Everything you need to know about porcelain laminates, E-Max veneers, tooth preparation, and your smile transformation in Antalya.',
    items: [
      {
        q: 'Which veneer material is the best: Ivoclar E-Max, Zirconia, or Composite?',
        a: 'For front teeth aesthetic makeovers, Swiss-made Ivoclar E-Max (lithium disilicate) is the gold standard worldwide due to its lifelike translucency, light transmission, and natural opal effect. Zirconia is stronger and ideal for molars, bridges, or patients with severe bruxism. Composite bonding is a faster, economical same-day option but is more prone to staining and chipping over time.',
      },
      {
        q: 'Can I see and test my new smile before the permanent veneers are made?',
        a: 'Yes, absolutely! At Master Smile Studio, we use Digital Smile Design (DSD) and physical 3D "mock-up" try-ins. Before any enamel preparation, a temporary model of your new teeth is placed over your natural teeth so you can evaluate the length, curvature, shade, and overall facial harmony in the mirror.',
      },
      {
        q: 'Can veneers be done without shaving or drilling my natural teeth (No-Prep)?',
        a: 'Yes, in suitable cases! Ultra-thin "Lumineers" or No-Prep veneers (0.2mm - 0.3mm) can be bonded directly onto natural enamel without shaving. However, if teeth are crowded, rotated, or heavily discolored, minimal preparation (0.3mm - 0.5mm, strictly confined to the outer enamel) is necessary to avoid bulky or unnatural-looking results.',
      },
      {
        q: 'What is the difference between Porcelain Veneers, Composite Bonding, and Zirconia Crowns?',
        a: 'Porcelain veneers are ultra-thin shells bonded only to the front and biting edge of the tooth, preserving 85-90% of your natural tooth structure. Crowns cover the entire tooth 360 degrees and require more shaving, ideal for heavily broken or root-canal treated teeth. Composite bonding uses resin sculpted directly onto teeth in a single visit.',
      },
      {
        q: 'Why are Zirconia crowns recommended for back teeth while E-Max is used for front teeth?',
        a: 'Molar teeth endure intense masticatory bite forces (up to 700 Newtons), where Zirconia’s ultra-high flexural strength (1200+ MPa) is essential to prevent fractures. Front teeth require maximum light transmission and natural translucency, where E-Max glass ceramic excels aesthetically.',
      },
      {
        q: 'How long do porcelain and E-Max veneers last?',
        a: 'With good oral hygiene, regular dental check-ups, and wearing a protective night guard if you grind your teeth, high-quality Ivoclar E-Max veneers typically last between 15 to 20+ years without losing their luster or color.',
      },
      {
        q: 'Can I choose super bright Hollywood white shades like BL1 or BL2?',
        a: 'Yes! We offer the full Bleach shade spectrum (BL1, BL2, BL3, BL4) as well as natural Vita classic shades (A1, B1, etc.). Our aesthetic specialists and master ceramists guide you to ensure the brightness harmonizes naturally with your skin tone, eye color, and lip line.',
      },
      {
        q: 'Do porcelain veneers stain from red wine, coffee, tea, or smoking?',
        a: 'No. Glazed high-density porcelain and E-Max ceramic have a glass-smooth, non-porous surface that is completely impervious to staining from coffee, red wine, tea, turmeric, and nicotine.',
      },
      {
        q: 'Is the veneer preparation and bonding procedure painful?',
        a: 'Not at all. The procedure is performed under gentle local anesthesia. Patients report zero pain during the preparation and bonding. For anxious patients, conscious IV sedation is also available upon request.',
      },
      {
        q: 'What should I do if a veneer chips, cracks, or debonds?',
        a: 'While debonding or chipping is rare with modern adhesive resin cements, all veneers at Master Smile Studio are covered by a comprehensive 5-year quality guarantee. Contact our coordinator immediately; if a veneer detaches, keep it safe and our clinic will rebond or replace it swiftly.',
      },
      {
        q: 'Can veneers fix gaps between my teeth (Diastema)?',
        a: 'Yes, porcelain veneers are one of the most effective and popular solutions for closing midline diastemas and unwanted tooth gaps permanently, giving you a continuous, symmetric smile without orthodontic braces.',
      },
      {
        q: 'Can I get veneers if I have mild crowding or crooked teeth?',
        a: 'Yes. For mild to moderate crowding or misalignment, veneers can create the appearance of perfectly straight, aligned teeth (often called "instant orthodontics") in just 5 days.',
      },
      {
        q: 'Do you accept international and online payments?',
        a: 'Yes, we accept major credit and debit cards (Visa, MasterCard), secure online wire transfers, and cash in GBP (£), EUR (€), and USD ($).',
      },
      {
        q: 'Can I pay for my veneer package in installments?',
        a: 'Yes, flexible payment schedules are available. A deposit is placed upon treatment confirmation, with the remainder payable across your clinic visits in Antalya.',
      },
      {
        q: 'What guarantees do you offer for dental veneers?',
        a: 'All our custom-crafted Ivoclar E-Max and porcelain restorations come with an official 5-Year Studio Quality Certificate guaranteeing against manufacturing defects, chipping, or debonding under normal oral use.',
      },
      {
        q: 'How many days do I need to stay in Antalya for a complete smile makeover?',
        a: 'A standard veneer smile makeover takes only 4 to 6 days in Antalya. During this period, you will have 3 short appointments: 1) Consultation, digital scan & mock-up; 2) Enamel preparation & high-precision digital impression; 3) Try-in, final aesthetic check & permanent bonding.',
      },
    ],
  },
  tr: {
    title: 'Diş Kaplamaları & Lamina Hakkında Sıkça Sorulan Sorular',
    subText:
      'Porselen lamina, E-Max kaplamalar, törpüleme miktarı ve Antalya’daki gülüş dönüşümünüz hakkında merak ettiğiniz tüm klinik detaylar.',
    items: [
      {
        q: 'Kliniğinizde hangi kaplama materyalleri kullanılıyor? E-Max mi Zirkonyum mu daha iyidir?',
        a: 'Kliniğimizde dünya standartlarında İsviçre menşeli Ivoclar E-Max porselenler ve Alman Amann-Girrbach zirkonyum bloklar kullanılmaktadır. Ön diş estetiğinde doğal ışık geçirgenliği ve saydamlığı nedeniyle Ivoclar E-Max altın standarttır. Çiğneme kuvvetinin yüksek olduğu arka azı dişlerinde ise zirkonyum önerilir.',
      },
      {
        q: 'Dişlerim yapılmadan önce rengini ve şeklini görebilir miyim?',
        a: 'Evet, kesinlikle! Dijital Gülüş Tasarımı (DSD) sürecinde "mock-up" adı verilen 3D deneme modeli hazırlanır. Dişlerinize hiçbir işlem yapılmadan önce yeni dişlerinizin formunu, uzunluğunu ve yüzünüzle uyumunu aynada bizzat deneyimlersiniz. Onayınız alındıktan sonra kalıcı laminalar üretilir.',
      },
      {
        q: 'Dişlerim hiç törpülenmeden (No-Prep) kaplama veya lamina yapılabilir mi?',
        a: 'Uygun vakalarda evet! "Lumineers" veya "No-Prep" (sıfır kesim) yöntemiyle 0.2 - 0.3 mm inceliğindeki laminalar doğal diş minesine hiç dokunulmadan yapıştırılabilir. Ancak dişlerde çapraşıklık, ileri derece renk bozukluğu veya dışa çıkıklık varsa, doğal bir görünüm için mine tabakasında 0.3 - 0.5 mm mikro aşındırma gerekebilir.',
      },
      {
        q: 'Laminate veneer, kompozit bonding ve zirkonyum kuron arasındaki fark nedir?',
        a: 'Laminate veneerler (yaprak porselen), dişin yalnızca ön yüzeyine yapıştırılır ve diş dokusunun %90’ı korunur. Zirkonyum kuronlar ise dişi 360 derece çevreler ve daha fazla kesim gerektirir. Kompozit bonding ise klinikte hekim tarafından tek seansta reçine ile şekillendirilen ekonomik bir yöntemdir ancak zamanla lekelenebilir.',
      },
      {
        q: 'Arka dişlerde neden laminate yerine zirkonyum önerilir?',
        a: 'Arka azı dişleri yaklaşık 700 Newton’a varan çiğneme kuvvetine maruz kalır. Zirkonyumun yüksek kırılma direnci (1200+ MPa) bu baskıyı mükemmel karşılar. Ön dişlerde ise estetik ve ışık geçirgenliği ön planda olduğu için E-Max cam seramik tercih edilir.',
      },
      {
        q: 'Porselen ve E-Max laminaların ömrü ne kadardır?',
        a: 'Düzenli ağız bakımı, hekim kontrolleri ve gerekiyorsa gece plağı kullanımı ile kaliteli Ivoclar E-Max laminalar 15 ila 20+ yıl boyunca parlaklığını ve estetiğini ilk günkü gibi korur.',
      },
      {
        q: 'Hollywood beyazı (BL1, BL2 gibi ekstra beyaz) tonları seçebilir miyim?',
        a: 'Evet! Ivoclar Bleach serisi (BL1 en beyaz olmak üzere BL2, BL3, BL4) ve doğal Vita renk skalasındaki tüm tonlar mevcuttur. Uzman hekimlerimiz ve seramistlerimiz ten renginize ve dudak yapınıza en yakışan tonu belirlemenize yardımcı olur.',
      },
      {
        q: 'Porselen laminalar çay, kahve veya sigaradan lekelenir mi?',
        a: 'Hayır. Yüksek ısıda fırınlanmış sırlı (glazed) E-Max ve porselen yüzeyler pürüzsüz ve gözeneksizdir. Kahve, çay, şarap ve sigara gibi leke yapıcı maddeler porselen yüzeye tutunamaz ve renk değişimi yapmaz.',
      },
      {
        q: 'Lamina tedavisi sırasında ağrı veya sızı hisseder miyim?',
        a: 'Hayır. Tüm aşındırma ve yapıştırma işlemleri gelişmiş lokal anestezi altında tamamen ağrısız olarak gerçekleştirilir. İşlem sonrasında da geçici dişler takıldığı için hassasiyet yaşanmaz.',
      },
      {
        q: 'Lamina kırılırsa veya yerinden çıkarsa ne yapmalıyım?',
        a: 'Modern adeziv yapıştırıcılar sayesinde laminanın düşmesi çok nadirdir. Master Smile Studio’da yapılan tüm kaplamalar 5 yıl klinik garanti kapsamındadır. Böyle bir durumda parçayı muhafaza ederek koordinatörümüzle iletişime geçmeniz yeterlidir; kliniğimizde ücretsiz onarım veya yenileme yapılır.',
      },
      {
        q: 'Ayrık dişler (Diastema) lamina ile kapatılabilir mi?',
        a: 'Evet! Diş ayrıklıklarının kapatılmasında lamina porselenler en popüler ve estetik çözümdür. Tel takmaya gerek kalmadan diş aralıkları kalıcı ve simetrik olarak kapatılır.',
      },
      {
        q: 'Çapraşık dişlere tel takmadan lamina yapılabilir mi?',
        a: 'Hafif ve orta düzeydeki çapraşıklıklarda "anında ortodonti" olarak adlandırılan lamina yöntemiyle dişler 5 gün içinde mükemmel hizaya kavuşturulabilir.',
      },
      {
        q: 'Online ödeme ve kredi kartı kabul ediyor musunuz?',
        a: 'Evet, kliniğimizde Visa, MasterCard kredi kartları, güvenli online transfer ve GBP (£), EUR (€), USD ($) nakit ödemeler kabul edilmektedir.',
      },
      {
        q: 'Tedavi ücretini taksitle ödeyebilir miyim?',
        a: 'Evet, esnek ödeme planlarımız mevcuttur. Tedavi onayında cüzi bir ön depozito alınır, kalan tutar ise Antalya’daki seanslarınıza bölünerek ödenebilir.',
      },
      {
        q: 'Lamina kaplamalara garanti veriyor musunuz?',
        a: 'Evet, uygulanan tüm orijinal Ivoclar E-Max restorasyonlar üretim ve malzeme hatalarına karşı 5 Yıl Resmi Klinik Kalite Sertifikası ve Garantisi ile teslim edilir.',
      },
      {
        q: 'Tam bir gülüş tasarımı için Antalya’da kaç gün kalmam gerekir?',
        a: 'Lamina gülüş tasarımı tedavisi genellikle 4 ila 6 gün (3 klinik seansı) içinde tamamlanır. Kalan vakitlerinizde Antalya’nın tarihi ve turistik güzelliklerinin tadını çıkarabilirsiniz.',
      },
    ],
  },
  de: {
    title: 'Häufig gestellte Fragen zu Veneers & Zahnverblendungen',
    subText:
      'Klinische Details zu Porzellan-Laminaten, E-Max Veneers, Vorbereitung und Ihrer Lächeln-Transformation in Antalya.',
    items: [
      {
        q: 'Welches Veneer-Material ist das beste: Ivoclar E-Max oder Zirkon?',
        a: 'Für den Frontzahnbereich ist Ivoclar E-Max Glaskeramik aus der Schweiz der weltweite Goldstandard, da sie die natürliche Lichtdurchlässigkeit und Opaleszenz echter Zähne perfekt nachahmt. Zirkon wird vor allem für Backenzähne mit hoher Kaukraft empfohlen.',
      },
      {
        q: 'Kann ich mein neues Lächeln vor der Herstellung der Veneers sehen?',
        a: 'Ja, absolut! Wir nutzen Digital Smile Design (DSD) und 3D-Mock-Ups im Mund. Sie sehen und testen Form, Länge und Farbe Ihres neuen Lächelns im Spiegel, bevor Zähne beschliffen werden.',
      },
      {
        q: 'Sind Veneers ohne Beschleifen der Zähne (No-Prep / Lumineers) möglich?',
        a: 'Ja, bei geeigneten Zähnen! Hauchdünne No-Prep Veneers (0,2–0,3 mm) können direkt ohne Beschleifen auf den Zahnschmelz geklebt werden. Bei Fehlstellungen ist ein minimaler Abtrag von 0,3–0,5 mm erforderlich.',
      },
      {
        q: 'Was ist der Unterschied zwischen Veneers, Composite-Bonding und Zirkonkronen?',
        a: 'Veneers bedecken nur die Vorderseite und erhalten 90% der Zahnsubstanz. Kronen umfassen den Zahn 360 Grad bei stark geschädigten Zähnen. Bonding ist eine direkte Kunststoffmodellage in einer Sitzung.',
      },
      {
        q: 'Warum wird Zirkon für Backenzähne und E-Max für Frontzähne gewählt?',
        a: 'Backenzähne tragen Kaukulturen von bis zu 700 Newton, wofür Zirkon mit 1200+ MPa ideal ist. Frontzähne erfordern höchste Lichtdurchlässigkeit, die E-Max Glaskeramik bietet.',
      },
      {
        q: 'Wie lange halten E-Max Porzellan-Veneers?',
        a: 'Bei guter Mundhygiene und regelmäßiger Kontrolle halten hochwertige Ivoclar E-Max Veneers 15 bis über 20 Jahre, ohne an Glanz oder Farbe zu verlieren.',
      },
      {
        q: 'Kann ich extra weiße Hollywood-Bleach-Töne wie BL1 oder BL2 wählen?',
        a: 'Ja! Wir bieten die komplette Bleach-Skala (BL1 bis BL4) sowie alle klassischen Vita-Farbtöne an.',
      },
      {
        q: 'Verfärben sich Veneers durch Kaffee, Tee, Rotwein oder Rauchen?',
        a: 'Nein. Hochverdichtete, glasierte E-Max Keramik ist vollkommen porenfrei und resistent gegen jegliche Verfärbungen.',
      },
      {
        q: 'Ist die Behandlung schmerzhaft?',
        a: 'Nein. Alle Schritte erfolgen schmerzfrei unter moderner Lokalanästhesie. Für ängstliche Patienten bieten wir auch Sedierung an.',
      },
      {
        q: 'Was passiert, wenn ein Veneer splittert oder sich löst?',
        a: 'Alle unsere Veneers sind durch eine 5-jährige Garantie abgedeckt. Bei Problemen wird das Veneer schnell und kostenfrei repariert oder neu angefertigt.',
      },
      {
        q: 'Können Zahnlücken (Diastema) mit Veneers geschlossen werden?',
        a: 'Ja! Veneers sind die eleganteste Methode, um Zahnlücken dauerhaft ohne Zahnspange zu schließen.',
      },
      {
        q: 'Können schiefe Zähne ohne Spange mit Veneers korrigiert werden?',
        a: 'Ja, bei leichten bis mittleren Fehlstellungen ermöglicht die "Sofort-Orthodontie" mit Veneers ein perfekt gerades Lächeln in 5 Tagen.',
      },
      {
        q: 'Welche Zahlungsmethoden werden akzeptiert?',
        a: 'Wir akzeptieren Kreditkarten (Visa, MasterCard), Banküberweisungen sowie Bargeld in EUR, USD und GBP.',
      },
      {
        q: 'Kann ich die Behandlung in Raten zahlen?',
        a: 'Ja, nach einer Anzahlung kann der Restbetrag auf die Behandlungstage in Antalya aufgeteilt werden.',
      },
      {
        q: 'Welche Garantie erhalte ich auf meine Veneers?',
        a: 'Sie erhalten ein offizielles 5-Jahres-Garantiezertifikat auf alle Ivoclar E-Max Restaurationen.',
      },
      {
        q: 'Wie viele Tage Aufenthalt in Antalya sind für ein Smile Makeover nötig?',
        a: 'Ein komplettes Veneer Makeover dauert nur 4 bis 6 Tage (3 kurze Termine in unserer Klinik).',
      },
    ],
  },
  pl: {
    title: 'Często Zadawane Pytania o Licówki Dentystyczne',
    subText:
      'Wszystko o licówkach porcelanowych E-Max, przygotowaniu zębów i Twojej metamorfozie uśmiechu w Antalyi.',
    items: [
      {
        q: 'Jaki materiał na licówki jest najlepszy: Ivoclar E-Max czy Cyrkon?',
        a: 'W strefie estetycznej zębów przednich szwajcarski Ivoclar E-Max jest złotym standardem dzięki idealnej przezierności i naturalnemu efektowi opalu. Cyrkon stosuje się na zęby boczne o dużych siłach żucia.',
      },
      {
        q: 'Czy mogę zobaczyć i przymierzyć nowy uśmiech przed wykonaniem licówek?',
        a: 'Tak! Wykorzystujemy Cyfrowe Projektowanie Uśmiechu (DSD) oraz przymiarkę Mock-Up na własnych zębach, dzięki czemu oceniasz kształt i kolor w lustrze przed szlifowaniem.',
      },
      {
        q: 'Czy licówki można założyć bez szlifowania zębów (No-Prep / Lumineers)?',
        a: 'Tak, w odpowiednich przypadkach ultracienkie licówki (0,2–0,3 mm) są mocowane bez szlifowania. Przy stłoczeniach wykonuje się mikroszlifowanie 0,3–0,5 mm w obrębie szkliwa.',
      },
      {
        q: 'Czym różnią się licówki od bondingu i koron cyrkonowych?',
        a: 'Licówki pokrywają tylko przód zęba i zachowują 90% własnej tkanki. Korony obejmują ząb dookoła (360°). Bonding to bezpośrednia odbudowa kompozytowa na 1 wizycie.',
      },
      {
        q: 'Dlaczego cyrkon poleca się na tył, a E-Max na przód?',
        a: 'Zęby trzonowe przenoszą siły żucia do 700 N, gdzie odporność cyrkonu (1200 MPa) zapobiega pęknięciom, natomiast przód wymaga naturalnej przezierności szkliwa E-Max.',
      },
      {
        q: 'Jaka jest żywotność licówek porcelanowych E-Max?',
        a: 'Przy prawidłowej higienie licówki Ivoclar E-Max służą od 15 do ponad 20 lat, nie tracąc połysku ani koloru.',
      },
      {
        q: 'Czy mogę wybrać śnieżnobiały odcień Hollywood BL1 lub BL2?',
        a: 'Tak! Posiadamy pełną paletę odcieni Bleach (od najbielszego BL1 do BL4) oraz klasyczne odcienie Vita.',
      },
      {
        q: 'Czy licówki porcelanowe przebarwiają się od kawy, wina i papierosów?',
        a: 'Nie. Szkliwiona porcelana E-Max jest całkowicie nieporowata i odporna na wszelkie przebarwienia spożywcze i nikotynę.',
      },
      {
        q: 'Czy zabieg zakadania licówek boli?',
        a: 'Zabieg jest w 100% bezbolesny dzięki nowoczesnemu znieczuleniu miejscowemu. Dostępna jest również sedacja dla osób z lękiem.',
      },
      {
        q: 'Co zrobić, jeśli licówka ukruszy się lub odklei?',
        a: 'Wszystkie licówki w Master Smile Studio objęte są 5-letnią gwarancją. Zapewniamy bezpłatną naprawę lub wykonanie nowej licówki.',
      },
      {
        q: 'Czy licówki mogą zamknąć przerwę między zębami (Diastemę)?',
        a: 'Tak, licówki porcelanowe to najpopularniejsza i najtrwalsza metoda zamykania przerw między zębami bez aparatu ortodontycznego.',
      },
      {
        q: 'Czy można założyć licówki na lekko krzywe zęby?',
        a: 'Tak, w łagodnych stłoczeniach licówki pozwalają uzyskać idealnie prosty uśmiech ("natychmiastowa ortodoncja") w 5 dni.',
      },
      {
        q: 'Jakie formy płatności są akceptowane?',
        a: 'Akceptujemy karty kredytowe (Visa, MasterCard), przelewy bankowe oraz gotówkę w walutach EUR, USD, GBP i PLN.',
      },
      {
        q: 'Czy mogę rozłożyć płatność na raty?',
        a: 'Tak, po wpłacie zalipki reszta kwoty może być płacona etapami podczas wizyt w klinice w Antalyi.',
      },
      {
        q: 'Jaką gwarancję otrzymuję na licówki?',
        a: 'Każdy pacjent otrzymuje Certyfikat Gwarancji Jakości na 5 lat na wszystkie uzupełnienia Ivoclar E-Max.',
      },
      {
        q: 'Ile dni trwa pełna metamorfoza uśmiechu w Antalyi?',
        a: 'Zabieg trwa od 4 do 6 dni (obejmuje 3 krótkie wizyty w klinice).',
      },
    ],
  },
  pt: {
    title: 'Perguntas Frequentes Sobre Facetas Dentárias',
    subText:
      'Tudo sobre lentes de contato dental, facetas E-Max, preparo e sua transformação de sorriso em Antalya.',
    items: [
      {
        q: 'Qual material de faceta é o melhor: Ivoclar E-Max ou Zircônia?',
        a: 'Para os dentes anteriores, o E-Max suíço (dissilicato de lítio) é o padrão ouro mundial devido à sua translucidez e reflexão de luz idênticas ao esmalte natural. A zircônia é ideal para dentes posteriores.',
      },
      {
        q: 'Posso ver e testar meu novo sorriso antes da colagem definitiva?',
        a: 'Sim, com certeza! Usamos o Design Digital do Sorriso (DSD) e o teste Mock-Up 3D em boca para você aprovar o resultado no espelho antes do preparo.',
      },
      {
        q: 'É possível fazer facetas sem desgastar os dentes (No-Prep / Lentes de Contato)?',
        a: 'Sim, em casos indicados! Lentes ultrafinas (0,2–0,3 mm) são coladas diretamente sobre o esmalte. Em dentes desalinhados, faz-se um microdesgaste de 0,3–0,5 mm.',
      },
      {
        q: 'Qual a diferença entre facetas, bonding em resina e coroas de zircônia?',
        a: 'Facetas cobrem apenas a frente do dente preservando 90% da estrutura. Coroas cobrem 360° dentes muito destruídos. Bonding é escultura direta em resina.',
      },
      {
        q: 'Por que zircônia é indicada para dentes posteriores e E-Max para anteriores?',
        a: 'Molares exigem resistência de 1200 MPa da zircônia para suportar a mastigação. Dentes frontais exigem a estética superior da cerâmica vítrea E-Max.',
      },
      {
        q: 'Quanto tempo duram as facetas em porcelana E-Max?',
        a: 'Com boa higiene e consultas regulares, as facetas Ivoclar E-Max duram de 15 a mais de 20 anos sem perder o brilho nem a cor.',
      },
      {
        q: 'Posso escolher tons super brancos como BL1 ou BL2?',
        a: 'Sim! Oferecemos a escala completa Bleach (BL1 a BL4) e tons naturais Vita, com suporte dos nossos especialistas para harmonizar com sua pele.',
      },
      {
        q: 'As facetas mancham com café, vinho ou cigarro?',
        a: 'Não. A porcelana vitrificada é 100% não porosa e imune a manchas de café, vinho tinto, chá e nicotina.',
      },
      {
        q: 'O procedimento de facetas é doloroso?',
        a: 'Não, o tratamento é totalmente indolor com anestesia local de última geração e opção de sedação consciente.',
      },
      {
        q: 'O que acontece se uma faceta quebrar ou soltar?',
        a: 'Todas as facetas da Master Smile Studio possuem 5 anos de garantia clínica com reposição ou recolagem gratuita.',
      },
      {
        q: 'Facetas corrigem espaços entre dentes (Diastemas)?',
        a: 'Sim, são a solução mais rápida e definitiva para fechar diastemas sem necessidade de aparelhos ortodônticos.',
      },
      {
        q: 'Posso colocar facetas se tiver dentes levemente tortos?',
        a: 'Sim, facetas corrigem desalinhamentos leves a moderados em apenas 5 dias ("ortodontia instantânea").',
      },
      {
        q: 'Quais métodos de pagamento são aceitos?',
        a: 'Aceitamos cartões de crédito (Visa, MasterCard), transferências bancárias e dinheiro em EUR, USD e GBP.',
      },
      {
        q: 'Posso parcelar meu tratamento?',
        a: 'Sim, após o sinal de reserva, o restante pode ser quitado ao longo dos dias de consulta em Antalya.',
      },
      {
        q: 'Qual a garantia oferecida nas facetas?',
        a: 'Garantia Clínica Oficial por escrito de 5 Anos em todas as restaurações originais Ivoclar E-Max.',
      },
      {
        q: 'Quantos dias preciso ficar em Antalya?',
        a: 'A transformação completa do sorriso com facetas leva apenas de 4 a 6 dias (3 consultas clínicas).',
      },
    ],
  },
  es: {
    title: 'Preguntas Frecuentes Sobre Carillas Dentales',
    subText:
      'Todo lo que necesita saber sobre carillas de porcelana E-Max, tallado y su diseño de sonrisa en Antalya.',
    items: [
      {
        q: '¿Qué material de carillas es mejor: Ivoclar E-Max o Zirconio?',
        a: 'Para los dientes frontales, Ivoclar E-Max suizo es el estándar de oro mundial por su translucidez natural y brillo idéntico al esmalte real. El zirconio se reserva para molares de gran carga masticatoria.',
      },
      {
        q: '¿Puedo ver y probar mi nueva sonrisa antes de fabricar las carillas?',
        a: '¡Sí, totalmente! Con el Diseño Digital 3D (DSD) y la prueba Mock-Up sobre sus dientes, verá y evaluará el resultado en el espejo antes de iniciar cualquier tallado.',
      },
      {
        q: '¿Se pueden colocar carillas sin tallar el diente (No-Prep / Lumineers)?',
        a: 'Sí, en casos indicados. Las microcarillas (0,2–0,3 mm) se adhieren sin tocar el esmalte. En dientes con apiñamiento, se realiza un microtallado de 0,3–0,5 mm.',
      },
      {
        q: '¿Qué diferencia hay entre carillas, composite bonding y coronas de zirconio?',
        a: 'Las carillas cubren solo el frente y conservan el 90% del diente. Las coronas cubren 360° dientes muy destruidos. El bonding es modelado directo en resina.',
      },
      {
        q: '¿Por qué se usa zirconio en molares y E-Max en el frente?',
        a: 'Los molares soportan fuerzas de 700 N, ideales para la resistencia de 1200 MPa del zirconio. Los dientes frontales requieren la máxima estética óptica de E-Max.',
      },
      {
        q: '¿Cuánto duran las carillas de porcelana E-Max?',
        a: 'Con higiene adecuada y revisiones periódicas, las carillas Ivoclar E-Max duran de 15 a más de 20 años sin perder color ni brillo.',
      },
      {
        q: '¿Puedo elegir tonos blancos Hollywood como BL1 o BL2?',
        a: '¡Sí! Disponemos de la gama completa Bleach (BL1 a BL4) y todos los tonos naturales Vita.',
      },
      {
        q: '¿Las carillas de porcelana se manchan con café, vino o tabaco?',
        a: 'No. La porcelana vitrificada E-Max no tiene poros y es totalmente inmune a manchas de café, vino, té y nicotina.',
      },
      {
        q: '¿El procedimiento de colocación de carillas es doloroso?',
        a: 'No, es 100% indoloro gracias a la anestesia local avanzada y disponemos de sedación para pacientes con fobia.',
      },
      {
        q: '¿Qué ocurre si una carilla se fractura o se despega?',
        a: 'Todas las carillas en Master Smile Studio cuentan con 5 Años de Garantía Oficial con reposición o recementado gratuito.',
      },
      {
        q: '¿Las carillas corrigen separaciones entre dientes (Diastemas)?',
        a: 'Sí, son la solución más estética y rápida para cerrar diastemas de forma permanente sin ortodoncia.',
      },
      {
        q: '¿Puedo ponerme carillas si tengo los dientes algo torcidos?',
        a: 'Sí, en apiñamientos leves o moderados las carillas permiten alinear los dientes en solo 5 días ("ortodoncia instantánea").',
      },
      {
        q: '¿Qué formas de pago aceptan?',
        a: 'Aceptamos tarjetas de crédito (Visa, MasterCard), transferencias bancarias y efectivo en EUR, USD y GBP.',
      },
      {
        q: '¿Se puede pagar a plazos el tratamiento?',
        a: 'Sí, tras un depósito inicial, el resto se abona fraccionado durante las citas en la clínica en Antalya.',
      },
      {
        q: '¿Qué garantía tienen las carillas?',
        a: 'Entregamos Certificado de Garantía Clínica Oficial de 5 Años en todas las restauraciones Ivoclar E-Max.',
      },
      {
        q: '¿Cuántos días de estancia en Antalya son necesarios?',
        a: 'El tratamiento completo de carillas se realiza en tan solo 4 a 6 días (3 citas clínicas).',
      },
    ],
  },
  ru: {
    title: 'Часто задаваемые вопросы о винирах для зубов',
    subText:
      'Все о керамических винирах E-Max, обработке эмали и преображении вашей улыбки в Анталье.',
    items: [
      {
        q: 'Какой материал для виниров лучше: Ivoclar E-Max или Диоксид циркония?',
        a: 'Для зоны улыбки швейцарская стеклокерамика Ivoclar E-Max — мировой золотой стандарт благодаря идеальной светопроницаемости и естественной опалесценции. Цирконий идеален для жевательных зубов.',
      },
      {
        q: 'Могу ли я примерить будущую улыбку до начала обработки зубов?',
        a: 'Да! Мы применяем технологию 3D Mock-Up, позволяющую примерить и утвердить форму и цвет будущих зубов в зеркале до начала манипуляций.',
      },
      {
        q: 'Можно ли установить виниры без обточки зубов (No-Prep / Люминиры)?',
        a: 'Да, при благоприятной анатомии ультратонкие виниры (0,2–0,3 мм) фиксируются без обточки. При кривизне зубов требуется микропрепарирование 0,3–0,5 мм в пределах эмали.',
      },
      {
        q: 'В чем разница между винирами, бондингом и циркониевыми коронками?',
        a: 'Виниры покрывают только переднюю поверхность, сохраняя 90% тканей зуба. Коронки покрывают зуб на 360°. Бондинг — это прямая композитная реставрация за 1 день.',
      },
      {
        q: 'Почему на жевательные зубы ставят цирконий, а на передние — E-Max?',
        a: 'Жевательные зубы выдерживают нагрузки до 700 Н, для чего необходим цирконий прочностью 1200 МПа. Зона улыбки требует оптической прозрачности керамики E-Max.',
      },
      {
        q: 'Сколько служат керамические виниры Ivoclar E-Max?',
        a: 'При надлежащей гигиене виниры служат от 15 до более 20 лет, не теряя своего первоначального блеска и цвета.',
      },
      {
        q: 'Можно ли выбрать ультрабелые оттенки Hollywood BL1 или BL2?',
        a: 'Да! В наличии вся палитра Bleach (от белоснежного BL1 до BL4) и классическая шкала Vita.',
      },
      {
        q: 'Окрашиваются ли керамические виниры от кофе, чая, вина и курения?',
        a: 'Нет. Глазурованная непористая керамика E-Max абсолютно устойчива к любым пищевым красителям и никотину.',
      },
      {
        q: 'Болезненна ли процедура установки виниров?',
        a: 'Процедура на 100% безболезненна благодаря современной анестезии. Также доступна седация во сне.',
      },
      {
        q: 'Что делать, если винир сколется или отклеится?',
        a: 'Все виниры в Master Smile Studio защищены 5-летней клинической гарантией с бесплатной заменой или фиксацией.',
      },
      {
        q: 'Помогают ли виниры закрыть щели между зубами (диастемы)?',
        a: 'Да, виниры — самый надежный и быстрый способ закрытия межзубных промежутков без ношения брекетов.',
      },
      {
        q: 'Можно ли ставить виниры при неровных зубах?',
        a: 'Да, при легкой и средней скученности виниры позволяют получить идеально ровный ряд за 5 дней («мгновенная ортодонтия»).',
      },
      {
        q: 'Какие способы оплаты принимаются в клинике?',
        a: 'Мы принимаем банковские карты (Visa, MasterCard), безналичные переводы и наличные в EUR, USD, GBP и RUB.',
      },
      {
        q: 'Возможна ли оплата в рассрочку?',
        a: 'Да, после внесения депозита остаток суммы распределяется по дням визитов в Анталье.',
      },
      {
        q: 'Какая гарантия предоставляется на виниры?',
        a: 'Выдается официальный Сертификат качества с гарантией 5 лет на все реставрации Ivoclar E-Max.',
      },
      {
        q: 'Сколько дней занимает установка виниров в Анталье?',
        a: 'Полное преображение улыбки занимает от 4 до 6 дней (всего 3 комфортных визита в клинику).',
      },
    ],
  },
};

export default function TreatmentVeneerFAQSection() {
  const locale = useLocale();
  const dict = FAQ_DATA[locale] || FAQ_DATA.en;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section aria-labelledby="veneer-faq-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Head */}
        <div className={styles.head}>
          <div>
            <h2 id="veneer-faq-heading" className={styles.title}>
              {dict.title}
            </h2>
          </div>
          <div>
            <p className={styles.subText}>{dict.subText}</p>
          </div>
        </div>

        {/* Accordion List */}
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
                  aria-controls={`veneer-faq-answer-${idx}`}
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
                    id={`veneer-faq-answer-${idx}`}
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
