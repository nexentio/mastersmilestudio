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

const CROWNS_FAQ_DATA: Record<string, FAQDictionary> = {
  en: {
    title: 'Frequently Asked Questions About Dental Crowns & Zirconia',
    subText:
      'Everything you need to know about Zirconia crowns, E-Max porcelain, root-canal tooth protection, and clinical longevity in Antalya.',
    items: [
      {
        q: 'What is a dental crown and when is it necessary?',
        a: 'A dental crown is a full-coverage prosthetic "cap" engineered to encase the entire visible portion of a compromised tooth (360 degrees). It is necessary when a tooth is severely decayed, cracked, has undergone root canal therapy, or has large failing fillings that threaten structural integrity.',
      },
      {
        q: 'Which crown material is best: German Zirconia or Swiss Ivoclar E-Max?',
        a: 'Zirconia (1200+ MPa) is exceptionally strong and fracture-resistant, making it the ideal choice for back molars, multi-unit bridges, and patients who clench their teeth. Ivoclar E-Max (lithium disilicate) offers superior glass-like translucency and opalescence, making it the gold standard for front teeth aesthetic makeovers.',
      },
      {
        q: 'How long do Zirconia and E-Max dental crowns last?',
        a: 'With good daily oral hygiene, regular dental check-ups, and wearing a night guard if you grind your teeth, high-quality German Zirconia and Swiss E-Max crowns typically last between 15 to 25+ years without degrading or discoloring.',
      },
      {
        q: 'Will getting a dental crown in Antalya be painful?',
        a: 'Not at all. The entire tooth preparation and digital scanning process is performed under gentle local anesthesia. Temporary crowns are placed immediately on day one, completely preventing any sensitivity while your permanent custom crowns are milled in our lab.',
      },
      {
        q: 'How many days do I need to stay in Antalya for dental crowns?',
        a: 'A complete crown treatment takes only 4 to 6 days in Antalya (typically 3 visits: 1. Consultation, preparation & temporary placement; 2. Frame try-in and shade verification; 3. Final bonding and bite calibration).',
      },
      {
        q: 'Will my dental crowns look bulky, opaque, or fake?',
        a: 'No. Our in-house dental laboratory uses multi-layered gradient zirconia blocks and master hand-layering ceramic techniques to mimic natural enamel translucency, root shading, and surface light reflection.',
      },
      {
        q: 'What is the difference between a dental crown and a dental veneer?',
        a: 'A dental veneer is an ultra-thin shell (0.3mm–0.5mm) bonded only to the front surface of a tooth for cosmetic enhancement, preserving 90% of the tooth. A crown covers the entire tooth 360 degrees to restore structural strength to a heavily damaged or broken tooth.',
      },
      {
        q: 'Do teeth under dental crowns require a root canal treatment first?',
        a: 'Not always. If the nerve inside the tooth is healthy and unaffected by deep decay, we preserve the living pulp (vital tooth preparation). If the tooth has deep irreversible pulpitis, severe pain, or an infection, a microscopic root canal is performed first.',
      },
      {
        q: 'Can dental crowns stain from coffee, tea, or smoking?',
        a: 'No. Glazed high-density Zirconia and E-Max ceramic have a glass-smooth, non-porous surface that is 100% impervious to staining from coffee, red wine, tea, and tobacco.',
      },
      {
        q: 'What happens if a dental crown chips or becomes loose?',
        a: 'While modern resin bonding makes debonding very rare, all crowns at Master Smile Studio are covered by an official 5-Year Clinical Warranty. If any issue arises, contact our coordinators and we will rebond or replace the crown promptly.',
      },
      {
        q: 'Can I choose super white Hollywood bleach shades for my crowns?',
        a: 'Yes! We offer the full spectrum of bleach shades (BL1, BL2, BL3, BL4) as well as all classic natural Vita tooth shades (A1, B1, etc.). Our cosmetic prosthodontists will help you select the ideal shade for your face and complexion.',
      },
      {
        q: 'What is a Metal-Porcelain (PFM) crown and why do you prefer Zirconia?',
        a: 'PFM crowns have a dark metal sub-structure that can cause a dark grey line along the gumline over time and blocks natural light transmission. Zirconia is 100% metal-free, biocompatible, and never creates grey margins.',
      },
      {
        q: 'Do you accept credit cards and international currencies?',
        a: 'Yes, we accept Visa, MasterCard, secure bank wire transfers, and cash in GBP (£), EUR (€), and USD ($).',
      },
      {
        q: 'Can I pay for my crown treatment in installments?',
        a: 'Yes, flexible payment schedules are available. A small initial deposit confirms your appointment, and the remainder is split across your clinic visits in Antalya.',
      },
      {
        q: 'What warranty is provided with dental crowns at Master Smile Studio?',
        a: 'All our custom-milled German Zirconia and Swiss E-Max crowns come with an official 5-Year Studio Quality Certificate guaranteeing against structural defects or breakage.',
      },
      {
        q: 'Can I combine dental crowns with implants or teeth whitening?',
        a: 'Yes, absolutely. We frequently combine crowns on natural teeth with implant crowns on missing areas, ensuring all teeth are perfectly color-matched and balanced.',
      },
    ],
  },
  tr: {
    title: 'Zirkonyum & Kron Kaplamalar Hakkında Sıkça Sorulan Sorular',
    subText:
      'Zirkonyum kaplamalar, E-Max porselen, kanal tedavili dişlerin korunması ve Antalya’daki tedavi süreciniz hakkında tüm klinik detaylar.',
    items: [
      {
        q: 'Diş kronu (kaplama) nedir ve ne zaman gereklidir?',
        a: 'Diş kronu, aşırı madde kaybına uğramış, kırılmış, kanal tedavisi görmüş veya büyük dolgular nedeniyle zayıflamış dişleri 360 derece çevreleyerek koruyan ve estetik görünüm kazandıran sabit protezdir.',
      },
      {
        q: 'Hangi kaplama materyali daha iyidir: Alman Zirkonyum mu İsviçre E-Max mi?',
        a: 'Zirkonyum (1200+ MPa) aşırı yüksek çiğneme kuvvetlerine dayanıklıdır; bu nedenle arka azı dişlerinde ve köprülerde idealdir. Ivoclar E-Max ise doğal diş minesinin ışık geçirgenliğini birebir yansıttığı için ön diş estetiğinde altın standarttır.',
      },
      {
        q: 'Zirkonyum ve E-Max kron kaplamaların ömrü ne kadardır?',
        a: 'Düzenli ağız bakımı, diş ipi kullanımı ve rutin hekim kontrolleri ile yüksek kaliteli zirkonyum ve E-Max kronlar 15 ila 25+ yıl boyunca ilk günkü formunu ve rengini korur.',
      },
      {
        q: 'Antalya’da kron kaplama tedavisi sırasında ağrı çeker miyim?',
        a: 'Hayır. Tüm kesim ve ölçü işlemleri gelişmiş lokal anestezi altında tamamen ağrısız gerçekleşir. İlk gün takılan geçici dişler sayesinde kalıcı dişleriniz üretilene kadar hiçbir hassasiyet yaşamazsınız.',
      },
      {
        q: 'Kron kaplama tedavisi için Antalya’da kaç gün kalmam gerekir?',
        a: 'Komple kron tedavisi genellikle 4 ila 6 gün (3 klinik seansı) içinde tamamlanır. Kalan vakitlerinizde Antalya’nın tarihi ve turistik güzelliklerini keşfedebilirsiniz.',
      },
      {
        q: 'Kaplamalarım dışarıdan bakıldığında yapay veya mat görünür mü?',
        a: 'Hayır. Kliniğimiz bünyesindeki CAD/CAM laboratuvarımızda çok katmanlı doğal renk geçişli zirkonyum bloklar ve el işçiliği porselen fırınlama teknikleri kullanılarak doğal dişten ayırt edilemeyen sonuçlar elde edilir.',
      },
      {
        q: 'Diş kaplaması (kron) ile lamine veneer arasındaki fark nedir?',
        a: 'Lamine veneerler dişin sadece ön yüzeyine yapıştırılır ve dişin %90’ı korunur. Kronlar ise zayıflamış veya kırılmış dişi 360 derece sararak tam çiğneme direnci sağlar.',
      },
      {
        q: 'Kaplama yapılacak dişlere mutlaka kanal tedavisi gerekir mi?',
        a: 'Hayır. Dişin sinir dokusu (pulpası) sağlıklıysa canlı diş kesimi yapılır ve dişin canlılığı korunur. Sadece derin çürük veya enfeksiyon olan dişlere kanal tedavisi uygulanır.',
      },
      {
        q: 'Zirkonyum kaplamalar çay, kahve veya sigaradan lekelenir mi?',
        a: 'Hayır. Yüksek ısıda fırınlanmış sırlı (glazed) zirkonyum ve E-Max yüzeyler tamamen pürüzsüz ve gözeneksizdir; leke tutmaz ve sararma yapmaz.',
      },
      {
        q: 'Kaplama dişim kırılırsa veya gevşerse ne yapmalıyım?',
        a: 'Master Smile Studio’da yapılan tüm kaplamalar 5 Yıl Resmi Klinik Garanti kapsamındadır. Bir problem yaşanması halinde koordinatörümüzle iletişime geçmeniz yeterlidir; ücretsiz yenileme sağlanır.',
      },
      {
        q: 'Hollywood beyazı (BL1, BL2 gibi ekstra beyaz) tonları seçebilir miyim?',
        a: 'Evet! Ivoclar Bleach serisi (en beyaz ton olan BL1’den BL4’e kadar) ve doğal diş skalasındaki tüm tonlar mevcuttur. Hekimlerimiz ten renginize en uygun tonu seçmenize rehberlik eder.',
      },
      {
        q: 'Metal destekli porselen kaplama yerine neden zirkonyum öneriyorsunuz?',
        a: 'Metal porselenlerde alttaki koyu metal zamanla diş eti kenarında gri bir çizgi oluşturur ve ışık geçirgenliğini engeller. Zirkonyum ise %100 metalsizdir, diş etiyle mükemmel uyumludur ve asla gri çizgi yapmaz.',
      },
      {
        q: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
        a: 'Visa, MasterCard kredi kartları, banka havalesi ve GBP, EUR, USD nakit ödemeler geçerlidir.',
      },
      {
        q: 'Tedavi ücretini taksitle ödeyebilir miyim?',
        a: 'Evet, tedavi onayında cüzi bir ön depozito alınır; kalan tutar ise Antalya’daki seanslarınıza bölünerek ödenebilir.',
      },
      {
        q: 'Kron kaplamalara resmi garanti veriyor musunuz?',
        a: 'Evet, uygulanan tüm Alman Zirkonyum ve İsviçre E-Max kronlar 5 Yıl Resmi Klinik Kalite Sertifikası ve Garantisi ile teslim edilir.',
      },
      {
        q: 'Kron kaplamaları implant veya diş beyazlatma ile birleştirebilir miyim?',
        a: 'Evet, eksik dişlerin olduğu bölgelere implant yapılırken mevcut dişlere kron kaplamalar uygulanarak tüm ağız aynı renk ve form uyumunda tamamlanır.',
      },
    ],
  },
  de: {
    title: 'Häufig gestellte Fragen zu Zahnkronen & Zirkon',
    subText:
      'Klinische Details zu Zirkonkronen, E-Max Keramik, Zahnerhalt und Ihrer Behandlung in Antalya.',
    items: [
      {
        q: 'Was ist eine Zahnkrone und wann wird sie benötigt?',
        a: 'Eine Zahnkrone ist eine festsitzende Kappe, die einen stark beschädigten oder wurzelbehandelten Zahn 360 Grad umschließt, um seine Kaufunktion und Stabilität wiederherzustellen.',
      },
      {
        q: 'Welches Material ist besser: Deutsches Zirkon oder Schweizer E-Max?',
        a: 'Zirkon (1200+ MPa) bietet unübertroffene Bruchfestigkeit für Backenzähne und Brücken. Ivoclar E-Max Glaskeramik besitzt die höchste Transluzenz für ästhetische Frontzahnkronen.',
      },
      {
        q: 'Wie lange halten Zirkon- und E-Max Kronen?',
        a: 'Bei guter Mundhygiene halten hochwertige Zirkon- und E-Max-Kronen 15 bis über 25 Jahre ohne Qualitätsverlust.',
      },
      {
        q: 'Ist das Einsetzen von Zahnkronen in Antalya schmerzhaft?',
        a: 'Nein. Die Präparation erfolgt vollkommen schmerzfrei unter moderner Lokalanästhesie mit sofortigen Provisorien am selben Tag.',
      },
      {
        q: 'Wie viele Tage Aufenthalt in Antalya sind erforderlich?',
        a: 'Die Behandlung dauert nur 4 bis 6 Tage (3 kurze Termine in unserer Klinik).',
      },
      {
        q: 'Wirken Zirkonkronen künstlich oder unnatürlich?',
        a: 'Nein. Unser CAD/CAM-Meisterlabor nutzt mehrschichtige Zirkonblöcke mit natürlichen Farbverläufen für ein naturgetreues Lächeln.',
      },
      {
        q: 'Was ist der Unterschied zwischen einer Krone und einem Veneer?',
        a: 'Veneers bedecken nur die Vorderseite zur Ästhetikverbesserung. Kronen umfassen den Zahn 360° zur strukturellen Verstärkung.',
      },
      {
        q: 'Muss ein überkronter Zahn immer wurzelbehandelt werden?',
        a: 'Nein. Gesunde Zähne bleiben vital erhalten. Nur bei tiefen Entzündungen ist vorher eine Wurzelbehandlung nötig.',
      },
      {
        q: 'Können sich Zirkonkronen durch Kaffee oder Tabak verfärben?',
        a: 'Nein. Glasierte Zirkon- und Keramikoberflächen sind vollkommen porenfrei und dauerhaft farbstabil.',
      },
      {
        q: 'Was passiert, wenn sich eine Krone lockert oder splittert?',
        a: 'Alle Kronen bei Master Smile Studio besitzen eine 5-Jahres-Garantie mit kostenloser Neuanfertigung oder Reparatur.',
      },
      {
        q: 'Kann ich extra weiße Hollywood-Bleach-Töne (BL1, BL2) wählen?',
        a: 'Ja! Wir bieten die gesamte Bleach-Palette (BL1 bis BL4) sowie alle natürlichen Vita-Farbtöne an.',
      },
      {
        q: 'Warum empfehlen Sie Zirkon statt Metallkeramik (PFM)?',
        a: 'Metallkeramik verursacht oft dunkle Zahnfleischränder. Zirkon ist 100% metallfrei, biokompatibel und bildet niemals graue Ränder.',
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
        q: 'Welche Garantie erhalte ich auf Zahnkronen?',
        a: 'Sie erhalten ein offizielles 5-Jahres-Garantiezertifikat auf alle Zirkon- und E-Max Kronen.',
      },
      {
        q: 'Können Kronen mit Implantaten kombiniert werden?',
        a: 'Ja, wir stimmen Implantatkronen und Kronen auf natürlichen Zähnen farblich und funktionell perfekt aufeinander ab.',
      },
    ],
  },
  pl: {
    title: 'Często Zadawane Pytania o Korony Zębowe i Cyrkon',
    subText:
      'Wszystko o koronach cyrkonowych, porcelanie E-Max, ratowaniu zębów i leczeniu w Antalyi.',
    items: [
      {
        q: 'Czym jest korona zębowa i kiedy jest konieczna?',
        a: 'Korona zębowa to precyzyjna odbudowa obejmująca ząb dookoła (360°), stosowana przy znacznym zniszczeniu próchnicą, po leczeniu kanałowym lub złamaniu zęba.',
      },
      {
        q: 'Który materiał jest lepszy: Niemiecki Cyrkon czy Szwajcarski E-Max?',
        a: 'Cyrkon (1200+ MPa) jest niezwykle wytrzymały na siły żucia w zębach bocznych. E-Max zapewnia niezrównaną przezierność naturalnego szkliwa w zębach przednich.',
      },
      {
        q: 'Jaka jest żywotność koron cyrkonowych i E-Max?',
        a: 'Przy prawidłowej higienie korony cyrkonowe i E-Max służą od 15 do ponad 25 lat bez utraty koloru i połysku.',
      },
      {
        q: 'Czy szlifowanie zębów pod korony w Antalyi boli?',
        a: 'Zabieg jest w 100% bezbolesny w znieczuleniu miejscowym. Natychmiast po zabiegu pacjent otrzymuje korony tymczasowe.',
      },
      {
        q: 'Ile dni trwa wykonanie koron zębowych w Antalyi?',
        a: 'Leczenie trwa zaledwie 4 do 6 dni (obejmuje 3 wizyty w klinice).',
      },
      {
        q: 'Czy korony cyrkonowe wyglądają sztucznie?',
        a: 'Nie. Stosujemy wielowarstwowe bloczki cyrkonowe z gradientem przezierności, idealnie naśladujące naturalne zęby.',
      },
      {
        q: 'Czym różni się korona od licówki?',
        a: 'Licówka pokrywa tylko przód zęba w celach estetycznych. Korona obejmuje cały ząb 360° dla przywrócenia jego wytrzymałości.',
      },
      {
        q: 'Czy każdy ząb pod koronę musi być leczony kanałowo?',
        a: 'Nie. Zdrowe zęby szlifuje się z zachowaniem żywej miazgi. Leczenie kanałowe wykonujemy tylko przy głębokich infekcjach.',
      },
      {
        q: 'Czy korony cyrkonowe przebarwiają się od kawy i papierosów?',
        a: 'Nie. Szkliwiony cyrkon jest w 100% nieporowaty i całkowicie odporny na plamy i przebarwienia.',
      },
      {
        q: 'Co zrobić, jeśli korona ukruszy się lub odklei?',
        a: 'Wszystkie korony objęte są 5-letnią oficjalną gwarancją kliniczną z bezpłatną naprawą lub wymianą.',
      },
      {
        q: 'Czy mogę wybrać śnieżnobiały odcień Hollywood Bleach (BL1–BL4)?',
        a: 'Tak! Oferujemy pełną paletę odcieni Bleach oraz klasyczne odcienie naturalne Vita.',
      },
      {
        q: 'Dlaczego cyrkon jest lepszy od koron metalowo-porcelanowych (PFM)?',
        a: 'Korony PFM z czasem powodują siny rąbek przy dziąśle. Cyrkon jest w 100% bezmetalowy i biozgodny z dziąsłem.',
      },
      {
        q: 'Jakie metody płatności są akceptowane?',
        a: 'Akceptujemy karty kredytowe (Visa, MasterCard), przelewy bankowe oraz gotówkę w EUR, USD, GBP i PLN.',
      },
      {
        q: 'Czy mogę rozłożyć płatność na raty?',
        a: 'Tak, po wpłacie zaliczki reszta kwoty jest regulowana podczas kolejnych wizyt w Antalyi.',
      },
      {
        q: 'Jaką gwarancję otrzymuję na korony?',
        a: 'Certyfikat Jakości z 5-letnią oficjalną gwarancją na wszystkie korony z tlenku cyrkonu i E-Max.',
      },
      {
        q: 'Czy można łączyć korony na zębach własnych z implantami?',
        a: 'Tak, wykonujemy kompleksowe rekonstrukcje łączące korony na implantach i zębach naturalnych w idealnie dopasowanym kolorze.',
      },
    ],
  },
  pt: {
    title: 'Perguntas Frequentes Sobre Coroas Dentárias e Zircônia',
    subText:
      'Tudo sobre coroas em zircônia alemã, cerâmica E-Max, durabilidade e seu tratamento em Antalya.',
    items: [
      {
        q: 'O que é uma coroa dentária e quando é necessária?',
        a: 'Uma coroa dentária é uma capa protética que envolve o dente em 360°, indicada para dentes com fraturas extensas, canal tratado ou grandes restaurações.',
      },
      {
        q: 'Qual material é melhor: Zircônia Alemã ou E-Max Suíço?',
        a: 'A zircônia (1200+ MPa) oferece resistência máxima para molares e pontes. O E-Max é o padrão ouro em estética e translucidez para dentes frontais.',
      },
      {
        q: 'Quanto tempo duram as coroas em zircônia e E-Max?',
        a: 'Com boa higiene e consultas regulares, as coroas de zircônia e E-Max duram de 15 a mais de 25 anos com total estabilidade.',
      },
      {
        q: 'O tratamento de coroas dentárias em Antalya dói?',
        a: 'Não. Todo o preparo é realizado sob anestesia local moderna e com colocação imediata de dentes provisórios.',
      },
      {
        q: 'Quantos dias preciso ficar em Antalya para coroas?',
        a: 'O tratamento completo leva de 4 a 6 dias (apenas 3 consultas clínicas).',
      },
      {
        q: 'As coroas de zircônia parecem dentes artificiais?',
        a: 'Não. Nosso laboratório utiliza zircônia multicamadas com gradiente natural de cor idêntico ao esmalte dental.',
      },
      {
        q: 'Qual a diferença entre coroa e faceta dentária?',
        a: 'A faceta cobre apenas a face frontal do dente. A coroa envolve 360° toda a estrutura para suporte mecânico.',
      },
      {
        q: 'Todo dente com coroa precisa de tratamento de canal antes?',
        a: 'Não. Se o dente estiver saudável, preservamos a polpa viva. O canal é feito apenas em dentes com infecção profunda.',
      },
      {
        q: 'As coroas em zircônia mancham com café ou cigarro?',
        a: 'Não. A superfície vitrificada da zircônia é 100% não porosa e resistente a qualquer mancha alimentar ou nicotina.',
      },
      {
        q: 'O que acontece se uma coroa quebrar ou soltar?',
        a: 'Todas as coroas possuem 5 Anos de Garantia Clínica Oficial com reparo ou substituição gratuita.',
      },
      {
        q: 'Posso escolher tons super brancos Hollywood (BL1 a BL4)?',
        a: 'Sim! Dispomos de toda a escala Bleach e tons naturais Vita com assessoria estética personalizada.',
      },
      {
        q: 'Por que zircônia é melhor que metalocerâmica (PFM)?',
        a: 'As coroas de metalocerâmica deixam uma linha cinza na gengiva. A zircônia é 100% livre de metal e altamente estética.',
      },
      {
        q: 'Quais métodos de pagamento são aceitos?',
        a: 'Aceitamos cartões de crédito (Visa, MasterCard), transferências bancárias e dinheiro em EUR, USD e GBP.',
      },
      {
        q: 'Posso parcelar meu tratamento?',
        a: 'Sim, após o sinal inicial, o saldo restante pode ser pago ao longo das consultas em Antalya.',
      },
      {
        q: 'Qual a garantia oferecida nas coroas?',
        a: 'Certificado Oficial de Garantia Clínica de 5 Anos em todas as coroas de zircônia e E-Max.',
      },
      {
        q: 'É possível combinar coroas com implantes dentários?',
        a: 'Sim, realizamos reabilitações completas combinando dentes naturais e implantes com perfeita uniformidade de cor.',
      },
    ],
  },
  es: {
    title: 'Preguntas Frecuentes Sobre Coronas Dentales y Zirconio',
    subText:
      'Todo lo que necesita saber sobre coronas de zirconio alemán, porcelana E-Max y su tratamiento en Antalya.',
    items: [
      {
        q: '¿Qué es una corona dental y cuándo es necesaria?',
        a: 'Una corona dental es una funda que recubre el diente en 360°, indicada para dientes muy destruidos por caries, fracturados o con endodoncia previa.',
      },
      {
        q: '¿Qué material es mejor: Zirconio Alemán o E-Max Suizo?',
        a: 'El zirconio (1200+ MPa) ofrece máxima resistencia para molares y puentes. E-Max es el estándar de oro en estética para el sector anterior.',
      },
      {
        q: '¿Cuánto duran las coronas de zirconio y E-Max?',
        a: 'Con una higiene bucal adecuada y revisiones periódicas, duran de 15 a más de 25 años sin perder color ni resistencia.',
      },
      {
        q: '¿Es doloroso el tratamiento de coronas dentales?',
        a: 'No, el tallado y la colocación son 100% indoloros con anestesia local suave y coronas provisionales el mismo día.',
      },
      {
        q: '¿Cuántos días de estancia en Antalya se requieren?',
        a: 'El tratamiento completo se realiza en tan solo 4 a 6 días (3 citas clínicas).',
      },
      {
        q: '¿Las coronas de zirconio tienen un aspecto artificial?',
        a: 'No. Empleamos zirconio multicapa con gradiente de translucidez que replica a la perfección la luz del esmalte natural.',
      },
      {
        q: '¿Cuál es la diferencia entre una corona y una carilla?',
        a: 'La carilla solo cubre el frente del diente con fines estéticos. La corona cubre 360° para reforzar un diente debilitado.',
      },
      {
        q: '¿Todo diente con corona necesita endodoncia previa?',
        a: 'No. Si el nervio está sano, se mantiene el diente vivo. La endodoncia solo se realiza en dientes con caries muy profunda.',
      },
      {
        q: '¿Las coronas de zirconio se manchan con café o tabaco?',
        a: 'No. El zirconio pulido y vitrificado no tiene poros y es totalmente inmune a las manchas.',
      },
      {
        q: '¿Qué ocurre si una corona se despega o se fractura?',
        a: 'Todas nuestras coronas cuentan con 5 Años de Garantía Clínica Oficial por escrito con reposición gratuita.',
      },
      {
        q: '¿Puedo elegir tonos blancos Hollywood como BL1 o BL2?',
        a: '¡Sí! Disponemos de la gama completa Bleach (BL1 a BL4) y todos los tonos naturales de la guía Vita.',
      },
      {
        q: '¿Por qué el zirconio es superior al metal-porcelana (PFM)?',
        a: 'El metal-porcelana produce sombras grises en la encía. El zirconio es 100% biocompatible y sin metal.',
      },
      {
        q: '¿Qué formas de pago aceptan?',
        a: 'Aceptamos tarjetas de crédito (Visa, MasterCard), transferencias bancarias y efectivo en EUR, USD y GBP.',
      },
      {
        q: '¿Se puede pagar a plazos el tratamiento?',
        a: 'Sí, tras un depósito inicial, el resto se abona de forma fraccionada durante las citas en Antalya.',
      },
      {
        q: '¿Qué garantía tienen las coronas dentales?',
        a: 'Entregamos Certificado de Garantía Clínica Oficial de 5 Años en todas las coronas de zirconio y E-Max.',
      },
      {
        q: '¿Se pueden combinar coronas con implantes dentales?',
        a: 'Sí, realizamos rehabilitaciones integrales coordinando coronas sobre implantes y sobre dientes propios con idéntico color.',
      },
    ],
  },
  ru: {
    title: 'Часто задаваемые вопросы о зубных коронках и цирконии',
    subText:
      'Все о коронках из диоксида циркония, керамике E-Max, защите зубов и лечении в Анталье.',
    items: [
      {
        q: 'Что такое зубная коронка и в каких случаях она необходима?',
        a: 'Зубная коронка — это несъемный микропротез, покрывающий зуб на 360°, необходимый при сильном разрушении кариесом, сколах или после лечения каналов.',
      },
      {
        q: 'Какой материал лучше: Немецкий цирконий или Швейцарский E-Max?',
        a: 'Цирконий (1200+ МПа) максимально прочен для жевательных зубов и мостов. E-Max обладает идеальной светопроницаемостью для зоны улыбки.',
      },
      {
        q: 'Сколько служат коронки из циркония и E-Max?',
        a: 'При правильной гигиене циркониевые и E-Max коронки служат от 15 до более 25 лет без изменения цвета и формы.',
      },
      {
        q: 'Болезненна ли процедура установки коронок в Анталье?',
        a: 'Процедура абсолютно безболезненна благодаря современной местной анестезии. Временные коронки ставятся в день обточки.',
      },
      {
        q: 'Сколько дней занимает установка коронок в Анталье?',
        a: 'Полный курс лечения занимает от 4 до 6 дней (всего 3 визита в клинику).',
      },
      {
        q: 'Выглядят ли циркониевые коронки неестественно?',
        a: 'Нет. Мы используем многослойный цирконий с плавным градиентом прозрачности, неотличимый от натуральной эмали.',
      },
      {
        q: 'В чем разница между коронкой и виниром?',
        a: 'Винир закрывает только переднюю поверхность зуба, а коронка покрывает зуб на 360° для восстановления прочности.',
      },
      {
        q: 'Обязательно ли депульпировать (удалять нерв) зуб перед установкой коронки?',
        a: 'Нет. Если нерв здоров, зуб сохраняется живым. Лечение каналов проводится только при глубоком кариесе или пульпите.',
      },
      {
        q: 'Окрашиваются ли коронки из циркония от кофе и сигарет?',
        a: 'Нет. Глазурованный цирконий полностью непористый и абсолютно устойчив к любым пищевым красителям и никотину.',
      },
      {
        q: 'Что делать, если коронка сколется или расцементируется?',
        a: 'Все коронки в Master Smile Studio защищены официальной 5-летней гарантией с бесплатной фиксацией или заменой.',
      },
      {
        q: 'Можно ли выбрать белоснежные оттенки Bleach (BL1–BL4)?',
        a: 'Да! Доступна вся шкала ультрабелых оттенков Bleach и естественные тона шкалы Vita.',
      },
      {
        q: 'Почему цирконий лучше металлокерамики (PFM)?',
        a: 'Металлокерамика со временем дает синюшный ободок у десны. Цирконий на 100% безметалловый и биосовместимый с десной.',
      },
      {
        q: 'Какие способы оплаты принимаются?',
        a: 'Мы принимаем банковские карты (Visa, MasterCard), безналичные переводы и наличные в EUR, USD, GBP и RUB.',
      },
      {
        q: 'Возможна ли поэтапная оплата лечения?',
        a: 'Да, после внесения депозита остаток суммы распределяется по дням приемов в клинике.',
      },
      {
        q: 'Какая гарантия предоставляется на коронки?',
        a: 'Выдается официальный Сертификат качества с гарантией 5 лет на все коронки из циркония и E-Max.',
      },
      {
        q: 'Можно ли совместить установку коронок с имплантацией?',
        a: 'Да, мы выполняем комплексную реставрацию зубов и имплантатов в единой цветовой гамме и прикусе.',
      },
    ],
  },
};

export default function TreatmentCrownsFAQSection() {
  const locale = useLocale();
  const dict = CROWNS_FAQ_DATA[locale] || CROWNS_FAQ_DATA.en;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section aria-labelledby="crowns-faq-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Head */}
        <div className={styles.head}>
          <div>
            <h2 id="crowns-faq-heading" className={styles.title}>
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
                  aria-controls={`crowns-faq-answer-${idx}`}
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
                    id={`crowns-faq-answer-${idx}`}
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
