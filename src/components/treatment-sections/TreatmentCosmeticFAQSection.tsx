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

const COSMETIC_FAQ_DATA: Record<string, FAQDictionary> = {
  en: {
    title: 'Frequently Asked Questions About Cosmetic Dentistry & Hollywood Smile',
    subText:
      'Everything you need to know about 3D Digital Smile Design, Hollywood Smile makeovers, laser gum aesthetics, and tooth whitening in Istanbul.',
    items: [
      {
        q: 'What is a Hollywood Smile Makeover and what does it include?',
        a: 'A Hollywood Smile is a total aesthetic smile transformation designed using golden proportion mathematical ratios. Depending on your oral anatomy, it combines 16 to 20 ultra-thin Ivoclar E-Max laminates or zirconia crowns, diode laser gum contouring (gingivoplasty), and bite alignment to create a symmetrically bright, radiant smile.',
      },
      {
        q: 'How does 3D Digital Smile Design (DSD) work and can I preview my new smile?',
        a: 'Yes! Using facial intraoral 3D scanning and dynamic smile video analysis, we design your ideal teeth on digital CAD software. Before any treatment begins, we place a physical 3D "Mock-Up" over your natural teeth so you can evaluate the shape, length, shade, and lip harmony directly in the mirror.',
      },
      {
        q: 'What is Gummy Smile treatment and how is laser gum contouring performed?',
        a: 'A Gummy Smile occurs when excessive gum tissue is displayed when smiling. Using pain-free diode laser gingivoplasty, we gently sculpt and reshape the gum margins in minutes with zero bleeding or stitches, lengthening the visible tooth surface and creating a balanced pink-to-white aesthetic ratio.',
      },
      {
        q: 'Can I choose super bright Hollywood shades like BL1 or BL2?',
        a: 'Yes! We offer the full Bleach spectrum (BL1, BL2, BL3, BL4) as well as natural Vita shades (A1, B1, etc.). Our cosmetic master ceramists guide you to ensure the shade compliments your skin tone, lip volume, and eye color without appearing artificial.',
      },
      {
        q: 'How long does a Hollywood Smile transformation last?',
        a: 'With good oral hygiene, routine dental checkups, and wearing a night guard if you clench your teeth, custom Ivoclar E-Max and porcelain smile makeovers typically last 15 to 20+ years without losing their luster or color.',
      },
      {
        q: 'Is the Hollywood Smile procedure painful?',
        a: 'Not at all. Every step is performed under gentle computer-guided local anesthesia. Temporary teeth are placed immediately on day one to prevent sensitivity while your permanent teeth are crafted in our lab.',
      },
      {
        q: 'How many days do I need to stay in Istanbul for a Hollywood Smile?',
        a: 'A complete Hollywood Smile transformation takes only 4 to 6 days in Istanbul (typically 3 visits: 1. Consultation, DSD scan & mock-up; 2. Enamel preparation & digital impression; 3. Try-in, final aesthetic check & bonding).',
      },
      {
        q: 'Can cosmetic dentistry fix gaps between my teeth (Diastema)?',
        a: 'Yes! Porcelain laminates and composite bonding are the premier solutions to close mid-line diastemas and gaps permanently without needing orthodontic braces.',
      },
      {
        q: 'What is the difference between In-Office Laser Whitening and Home Whitening?',
        a: 'In-office Philips Zoom laser whitening delivers up to 6–8 shades of brightness in a single 45-minute clinical session. Home whitening trays are provided to maintain and enhance your brightness over time.',
      },
      {
        q: 'Will my Hollywood Smile veneers stain from coffee, tea, or smoking?',
        a: 'No. Glazed high-density Ivoclar E-Max porcelain has a glass-smooth, non-porous surface that is completely impervious to staining from coffee, red wine, tea, turmeric, and nicotine.',
      },
      {
        q: 'Can I get a Hollywood Smile if I have crooked or crowded teeth?',
        a: 'Yes! For mild to moderate crowding or misalignment, veneers can create the appearance of perfectly straight, aligned teeth ("instant orthodontics") in just 5 days.',
      },
      {
        q: 'What materials are used for Hollywood Smile at Master Smile Studio?',
        a: 'We use genuine Swiss Ivoclar Vivadent E-Max lithium disilicate glass-ceramics and German Amann Girrbach zirconia blocks.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept Visa, MasterCard, bank wire transfers, and cash in GBP (£), EUR (€), and USD ($).',
      },
      {
        q: 'Can I pay for my smile makeover package in installments?',
        a: 'Yes! A small deposit confirms your appointment, and the remainder is split across your clinic visits in Istanbul.',
      },
      {
        q: 'What warranty is provided with cosmetic treatments at Master Smile Studio?',
        a: 'All our custom-crafted Ivoclar E-Max and porcelain smile makeovers come with an official 5-Year Studio Quality Certificate guaranteeing against structural defects or debonding.',
      },
      {
        q: 'Can I combine cosmetic dentistry with dental implants or bridges?',
        a: 'Yes, absolutely. We frequently combine cosmetic veneers on front teeth with zirconia implants or bridges on missing areas for a seamless, harmonious full-mouth restoration.',
      },
    ],
  },
  tr: {
    title: 'Estetik Diş Hekimliği & Hollywood Smile Hakkında Sıkça Sorulan Sorular',
    subText:
      '3D Dijital Gülüş Tasarımı, Hollywood Smile dönüşümleri, lazerle diş eti estetiği (Gummy Smile) ve diş beyazlatma hakkında tüm klinik detaylar.',
    items: [
      {
        q: 'Hollywood Smile (Gülüş Tasarımı) nedir ve neleri kapsar?',
        a: 'Hollywood Smile; kişinin yüz hatları, dudak yapısı ve ten rengine altın oran kurallarıyla uyarlanan kapsamlı bir gülüş estetiği tedavisidir. Genellikle 16-20 adet ultra ince Ivoclar E-Max lamina veya zirkonyum kaplama, lazerle pembe estetik (diş eti seviyeleme) ve diş beyazlatma işlemlerinin kombinasyonunu içerir.',
      },
      {
        q: '3D Dijital Gülüş Tasarımı (DSD) nasıl çalışır ve yeni gülüşümü önceden görebilir miyim?',
        a: 'Evet! 3D ağız içi tarayıcılar ve yüz fotoğrafları ile bilgisayar ortamında gülüşünüz tasarlanır. Dişlerinize hiçbir işlem yapılmadan önce "Mock-Up" adı verilen 3D deneme modeli ağzınıza takılarak yeni dişlerinizin boyunu, formunu ve yüzünüzle uyumunu aynada bizzat deneyimlemeniz sağlanır.',
      },
      {
        q: 'Gummy Smile (Diş Eti Görünmesi) tedavisi nedir ve lazerle nasıl yapılır?',
        a: 'Güldüğünüzde diş etlerinin gereğinden fazla görünmesi durumudur. Ağrısız diyot lazer yöntemiyle diş eti seviyeleri milimetrik olarak yukarı kaydırılır; kanama veya dikiş olmadan diş boyları uzatılarak pembe-beyaz estetik dengesi sağlanır.',
      },
      {
        q: 'Hollywood beyazı (BL1, BL2 gibi ekstra beyaz) tonları seçebilir miyim?',
        a: 'Evet! Ivoclar Bleach serisi (en beyaz ton olan BL1’den BL4’e kadar) ve doğal diş skalasındaki tüm tonlar mevcuttur. Uzman seramistlerimiz ten renginiz ve dudak dolgunluğunuza en çok yakışan parlaklığı belirlemenize yardımcı olur.',
      },
      {
        q: 'Hollywood Smile gülüş tasarımının ömrü ne kadardır?',
        a: 'Düzenli ağız bakımı, diş ipi kullanımı ve rutin kontrollerle kaliteli Ivoclar E-Max laminalar ve zirkonyum kaplamalar 15 ila 20+ yıl boyunca parlaklığını ve formunu ilk günkü gibi korur.',
      },
      {
        q: 'Hollywood Smile tedavisi sırasında ağrı veya sızı hisseder miyim?',
        a: 'Hayır. Tüm aşındırma ve yapıştırma işlemleri gelişmiş lokal anestezi altında tamamen ağrısız olarak gerçekleştirilir. İşlem sonrasında takılan geçici dişler sayesinde hiçbir hassasiyet yaşanmaz.',
      },
      {
        q: 'Hollywood Smile tedavisi için İstanbul’da kaç gün kalmam gerekir?',
        a: 'Komple Hollywood Smile dönüşümü 4 ila 6 gün (3 klinik seansı) içinde tamamlanır.',
      },
      {
        q: 'Ayrık dişler (Diastema) estetik diş hekimliği ile kapatılabilir mi?',
        a: 'Evet! Porselen laminalar veya kompozit bonding yöntemiyle diş aralıkları tel takmaya gerek kalmadan birkaç gün içinde kalıcı ve simetrik olarak kapatılır.',
      },
      {
        q: 'Klinik tipi lazer diş beyazlatma ile ev tipi beyazlatma arasındaki fark nedir?',
        a: 'Kliniğimizde uygulanan Philips Zoom lazer beyazlatma tek seansta (45 dakika) diş rengini 6-8 tona kadar açar. Ev tipi plaklar ise elde edilen beyazlığın kalıcılığını korumak için destek olarak verilir.',
      },
      {
        q: 'Hollywood Smile kaplamaları çay, kahve veya sigaradan lekelenir mi?',
        a: 'Hayır. Yüksek ısıda fırınlanmış sırlı (glazed) E-Max porselen yüzeyler pürüzsüz ve gözeneksizdir; kahve, şarap, çay ve sigaradan kesinlikle leke tutmaz.',
      },
      {
        q: 'Çapraşık dişler tel takmadan Hollywood Smile ile düzeltilebilir mi?',
        a: 'Evet! Hafif ve orta düzeydeki çapraşıklıklarda "anında ortodonti" yöntemiyle laminalar sayesinde dişler 5 gün içinde kusursuz bir hizaya kavuşturulabilir.',
      },
      {
        q: 'Hollywood Smile tedavisinde hangi malzemeleri kullanıyorsunuz?',
        a: 'Orijinal İsviçre Ivoclar E-Max cam seramik ve Alman Amann Girrbach zirkonyum bloklar kullanılmaktadır.',
      },
      {
        q: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
        a: 'Visa, MasterCard kredi kartları, banka havalesi ve GBP, EUR, USD nakit ödemeler kabul edilmektedir.',
      },
      {
        q: 'Tedavi ücretini taksitle ödeyebilir miyim?',
        a: 'Evet, seyahatiniz boyunca klinik seanslarınıza bölünmüş esnek ödeme planları sunuyoruz.',
      },
      {
        q: 'Gülüş tasarımı tedavisine resmi garanti veriyor musunuz?',
        a: 'Evet, uygulanan tüm E-Max ve zirkonyum gülüş tasarımları 5 Yıl Resmi Klinik Garanti Sertifikası ile teslim edilir.',
      },
      {
        q: 'Gülüş tasarımını implant veya diş köprüleri ile birleştirebilir miyim?',
        a: 'Evet! Ön bölgede estetik E-Max laminalar yapılırken eksik dişlerin olduğu arka bölgelere implant ve zirkonyum köprüler uygulanarak tüm ağız aynı renkte kusursuzca tamamlanır.',
      },
    ],
  },
  de: {
    title: 'Häufig gestellte Fragen zu Ästhetischer Zahnmedizin & Hollywood Smile',
    subText:
      'Alles über 3D Digital Smile Design, Hollywood Smile Makeover, Laser-Zahnfleischkorrektur und Bleaching in Istanbul.',
    items: [
      {
        q: 'Was ist ein Hollywood Smile Makeover und was beinhaltet es?',
        a: 'Ein Hollywood Smile ist eine ganzheitliche Lächeln-Transformation nach dem goldenen Schnitt. Es kombiniert 16–20 Ivoclar E-Max Veneers oder Zirkonkronen mit Laser-Zahnfleischkorrektur und Zahnaufhellung für ein perfekt symmetrisches Lächeln.',
      },
      {
        q: 'Wie funktioniert das 3D Digital Smile Design (DSD) und kann ich mein Lächeln vorab testen?',
        a: 'Ja! Mit 3D-Scans und Gesichtsanalyse planen wir Ihr Lächeln digital. Ein physisches 3D-Mock-Up wird vor Behandlungsbeginn im Mund getestet, sodass Sie Form und Farbe vorab im Spiegel bewerten.',
      },
      {
        q: 'Was ist ein Gummy Smile und wie funktioniert die Laser-Zahnfleischkorrektur?',
        a: 'Bei zu viel sichtbarem Zahnfleisch modelliert ein schmerzfreier Diodenlaser die Zahnfleischränder in Minuten ohne Blutung oder Nähte für perfekte Proportionen.',
      },
      {
        q: 'Kann ich extra weiße Hollywood-Bleach-Farbtöne wie BL1 oder BL2 wählen?',
        a: 'Ja! Wir bieten die komplette Bleach-Skala (BL1 bis BL4) sowie alle natürlichen Farbtöne an.',
      },
      {
        q: 'Wie lange hält ein Hollywood Smile Makeover?',
        a: 'Bei guter Mundhygiene und regelmäßigen Kontrollen hält ein Ivoclar E-Max Smile Makeover 15 bis über 20 Jahre bei voller Farbbrillanz.',
      },
      {
        q: 'Ist die Behandlung schmerzhaft?',
        a: 'Nein, alle Schritte erfolgen vollkommen schmerzfrei unter moderner Lokalanästhesie mit sofortigen Provisorien.',
      },
      {
        q: 'Wie viele Tage Aufenthalt in Istanbul sind erforderlich?',
        a: 'Die komplette Behandlung dauert nur 4 bis 6 Tage (3 kurze Termine in unserer Klinik).',
      },
      {
        q: 'Können Zahnlücken (Diastema) geschlossen werden?',
        a: 'Ja! Veneers und Bonding schließen Zahnlücken dauerhaft ohne Zahnspange.',
      },
      {
        q: 'Was ist der Unterschied zwischen In-Office Laser-Bleaching und Home-Bleaching?',
        a: 'Philips Zoom Laser-Bleaching hellt Zähne in 45 Minuten um 6–8 Nuancen auf. Home-Bleaching dient der Auffrischung.',
      },
      {
        q: 'Verfärben sich Hollywood Smile Veneers durch Kaffee oder Rauchen?',
        a: 'Nein. Glasierte Ivoclar E-Max Keramik ist absolut porenfrei und resistent gegen jegliche Verfärbungen.',
      },
      {
        q: 'Funktioniert ein Hollywood Smile bei schiefen Zähnen ohne Spange?',
        a: 'Ja! Bei leichten bis mittleren Fehlstellungen sorgt "Sofort-Orthodontie" mit Veneers in 5 Tagen für gerade Zähne.',
      },
      {
        q: 'Welche Materialien werden verwendet?',
        a: 'Original Schweizer Ivoclar Vivadent E-Max Glaskeramik und deutsches Amann Girrbach Zirkon.',
      },
      {
        q: 'Welche Zahlungsmethoden werden akzeptiert?',
        a: 'Kreditkarten (Visa, MasterCard), Banküberweisungen sowie Bargeld in EUR, USD und GBP.',
      },
      {
        q: 'Kann die Behandlung in Raten gezahlt werden?',
        a: 'Ja, nach einer Anzahlung wird der Restbetrag auf die Behandlungstermine in Istanbul aufgeteilt.',
      },
      {
        q: 'Welche Garantie erhalte ich auf mein Hollywood Smile?',
        a: 'Offizielles 5-Jahres-Garantiezertifikat auf alle E-Max und Zirkon Restaurationen.',
      },
      {
        q: 'Kann ein Hollywood Smile mit Implantaten kombiniert werden?',
        a: 'Ja, wir kombinieren Veneers im Frontzahnbereich mit farblich exakt abgestimmten Implantaten im Seitenzahnbereich.',
      },
    ],
  },
  pl: {
    title: 'Często Zadawane Pytania o Stomatologię Estetyczną i Hollywood Smile',
    subText:
      'Wszystko o Cyfrowym Projektowaniu Uśmiechu 3D, metamorfozie Hollywood Smile, plastyce dziąseł i wybielaniu w Stambule.',
    items: [
      {
        q: 'Czym jest Hollywood Smile i co obejmuje metamorfoza?',
        a: 'Hollywood Smile to kompleksowa metamorfoza uśmiechu według zasad złotego podziału. Obejmuje 16–20 licówek E-Max lub koron cyrkonowych, laserową plastykę dziąseł i wybielanie.',
      },
      {
        q: 'Jak działa Cyfrowe Projektowanie Uśmiechu (DSD) i czy mogę przymierzyć uśmiech przed zabiegiem?',
        a: 'Tak! Na podstawie skanów 3D projektujemy uśmiech cyfrowo, a model Mock-Up nakładamy na zęby, aby pacjent mógł ocenić efekt w lustrze przed szlifowaniem.',
      },
      {
        q: 'Czym jest leczenie Gummy Smile (uśmiechu dziąsłowego) za pomocą lasera?',
        a: 'Bezbolesny laser diodowy koryguje linię dziąseł w kilka minut bez krwawienia i szwów, odsłaniając optymalną długość zębów.',
      },
      {
        q: 'Czy mogę wybrać śnieżnobiały odcień Hollywood Bleach (BL1–BL4)?',
        a: 'Tak! Posiadamy pełną paletę odcieni Bleach od najbielszego BL1 oraz naturalne odcienie Vita.',
      },
      {
        q: 'Jaka jest żywotność uśmiechu Hollywood Smile?',
        a: 'Licówki Ivoclar E-Max i korony cyrkonowe służą od 15 do ponad 20 lat przy prawidłowej higienie.',
      },
      {
        q: 'Czy zabieg Hollywood Smile boli?',
        a: 'Zabieg jest w 100% bezbolesny w znieczuleniu miejscowym. Natychmiast montowane są korony tymczasowe.',
      },
      {
        q: 'Ile dni trwa zabieg Hollywood Smile w Stambule?',
        a: 'Cała metamorfoza trwa zaledwie 4 do 6 dni (3 krótkie wizyty w klinice).',
      },
      {
        q: 'Czy można zamknąć szpary między zębami (Diastemę)?',
        a: 'Tak! Licówki i bonding zamykają diastemy trwale i symetrycznie bez aparatu ortodontycznego.',
      },
      {
        q: 'Czym różni się wybielanie laserowe w gabinecie od wybielania nakładkowego?',
        a: 'Wybielanie Philips Zoom w gabinecie rozjaśnia zęby o 6–8 odcieni w 45 minut. Nakładki służą do podtrzymania efektu.',
      },
      {
        q: 'Czy licówki Hollywood Smile ulegają przebarwieniom od kawy i wina?',
        a: 'Nie. Szkliwiona ceramika Ivoclar E-Max jest całkowicie nieporowata i odporna na wszelkie plamy.',
      },
      {
        q: 'Czy można wykonać Hollywood Smile na krzywych zębach bez aparatu?',
        a: 'Tak! W lekkich i umiarkowanych stłoczeniach licówki korygują uśmiech w 5 dni ("natychmiastowa ortodoncja").',
      },
      {
        q: 'Jakich materiałów używacie do Hollywood Smile?',
        a: 'Oryginalna szwajcarska ceramika Ivoclar E-Max oraz niemiecki tlenek cyrkonu Amann Girrbach.',
      },
      {
        q: 'Jakie metody płatności są akceptowane?',
        a: 'Karty kredytowe (Visa, MasterCard), przelewy oraz gotówka w EUR, USD, GBP i PLN.',
      },
      {
        q: 'Czy mogę rozłożyć płatność na raty?',
        a: 'Tak, płatność może być dzielona pomiędzy kolejne etapy wizyt w Stambule.',
      },
      {
        q: 'Jaką gwarancję otrzymuję na Hollywood Smile?',
        a: 'Certyfikat Jakości z 5-letnią oficjalną gwarancją na wszystkie odbudowy E-Max i cyrkonowe.',
      },
      {
        q: 'Czy można łączyć Hollywood Smile z implantami?',
        a: 'Tak! Wykonujemy licówki na przodzie i dopasowane kolorystycznie implanty w odcinkach bocznych.',
      },
    ],
  },
  pt: {
    title: 'Perguntas Frequentes Sobre Odontologia Estética e Hollywood Smile',
    subText:
      'Tudo sobre Design Digital 3D, transformação Hollywood Smile, plástica gengival a laser e clareamento em Istambul.',
    items: [
      {
        q: 'O que é o Hollywood Smile e o que ele inclui?',
        a: 'O Hollywood Smile é uma transformação estética total planejada segundo a proporção áurea. Combina de 16 a 20 facetas E-Max ou coroas de zircônia, plástica gengival a laser e clareamento.',
      },
      {
        q: 'Como funciona o Design Digital do Sorriso (DSD) e posso testar antes?',
        a: 'Sim! Com escaneamento 3D e fotos faciais, projetamos o sorriso digitalmente e aplicamos o modelo Mock-Up para você aprovar o resultado no espelho antes do preparo.',
      },
      {
        q: 'O que é o tratamento de Sorriso Gengival (Gummy Smile) a laser?',
        a: 'O laser de diodo remodela a margem gengival em minutos sem sangramento nem pontos, harmonizando a proporção rosa-branca do sorriso.',
      },
      {
        q: 'Posso escolher tons extra brancos Hollywood como BL1 ou BL2?',
        a: 'Sim! Dispomos de toda a gama Bleach (BL1 a BL4) e tons naturais Vita com suporte de especialistas.',
      },
      {
        q: 'Quanto tempo dura o Hollywood Smile?',
        a: 'Com boa higiene e visitas regulares, o sorriso em porcelana E-Max dura de 15 a mais de 20 anos com brilho intacto.',
      },
      {
        q: 'O procedimento de Hollywood Smile dói?',
        a: 'Não, é 100% livre de dor com anestesia computadorizada e colocação de dentes provisórios imediatos.',
      },
      {
        q: 'Quantos dias preciso ficar em Istambul para o Hollywood Smile?',
        a: 'A transformação completa leva de 4 a 6 dias (3 consultas clínicas).',
      },
      {
        q: 'É possível fechar espaços entre dentes (Diastemas)?',
        a: 'Sim! Facetas e resinas fecham diastemas de forma definitiva sem necessidade de aparelho fixo.',
      },
      {
        q: 'Qual a diferença entre clareamento a laser de consultório e caseiro?',
        a: 'O clareamento Philips Zoom no consultório clareia de 6 a 8 tons em 45 minutos. O caseiro serve para manutenção.',
      },
      {
        q: 'As facetas do Hollywood Smile mancham com café ou cigarro?',
        a: 'Não. A cerâmica vítrea vitrificada E-Max é 100% não porosa e resistente a qualquer mancha.',
      },
      {
        q: 'Posso fazer Hollywood Smile com dentes desalinhados sem aparelho?',
        a: 'Sim! Em desalinhamentos leves a moderados, as facetas alinham o sorriso em 5 dias.',
      },
      {
        q: 'Quais materiais são utilizados?',
        a: 'Cerâmica vítrea Ivoclar E-Max suíça e zircônia alemã Amann Girrbach.',
      },
      {
        q: 'Quais métodos de pagamento são aceitos?',
        a: 'Cartões de crédito (Visa, MasterCard), transferências bancárias e dinheiro em EUR, USD e GBP.',
      },
      {
        q: 'Posso parcelar o tratamento?',
        a: 'Sim, o pagamento é dividido ao longo dos dias de consulta em Istambul.',
      },
      {
        q: 'Qual a garantia oferecida no Hollywood Smile?',
        a: 'Certificado de Garantia Clínica Oficial de 5 Anos em todas as peças E-Max e zircônia.',
      },
      {
        q: 'É possível combinar Hollywood Smile com implantes dentários?',
        a: 'Sim, realizamos facetas nos dentes anteriores e implantes com perfeita harmonia cromática.',
      },
    ],
  },
  es: {
    title: 'Preguntas Frecuentes Sobre Estética Dental y Hollywood Smile',
    subText:
      'Todo lo que necesita saber sobre Diseño Digital 3D, transformación Hollywood Smile, gingivoplastia láser y blanqueamiento en Estambul.',
    items: [
      {
        q: '¿Qué es el Hollywood Smile y qué incluye?',
        a: 'El Hollywood Smile es una transformación estética integral basada en la proporción áurea. Combina de 16 a 20 carillas E-Max o coronas de zirconio, gingivoplastia láser y blanqueamiento dental.',
      },
      {
        q: '¿Cómo funciona el Diseño Digital 3D (DSD) y puedo probar mi sonrisa antes?',
        a: '¡Sí! Diseñamos su sonrisa en software CAD 3D y colocamos una maqueta Mock-Up en su boca para que apruebe forma, longitud y color antes de cualquier tallado.',
      },
      {
        q: '¿Qué es el tratamiento de Sonrisa Gingival (Gummy Smile) con láser?',
        a: 'Un láser de diodo indoloro remodela la encía en minutos sin sangrado ni puntos, logrando una armonía perfecta entre encía y diente.',
      },
      {
        q: '¿Puedo elegir tonos blancos Hollywood como BL1 o BL2?',
        a: '¡Sí! Disponemos de la gama completa Bleach (BL1 a BL4) y todos los tonos naturales de la guía Vita.',
      },
      {
        q: '¿Cuánto dura el tratamiento Hollywood Smile?',
        a: 'Con revisiones periódicas e higiene adecuada, las carillas Ivoclar E-Max duran de 15 a más de 20 años sin perder brillo ni color.',
      },
      {
        q: '¿Es doloroso el tratamiento de Hollywood Smile?',
        a: 'No, es 100% indoloro con anestesia local avanzada y colocación de dientes provisionales inmediatos.',
      },
      {
        q: '¿Cuántos días de estancia en Estambul se requieren?',
        a: 'La transformación completa se realiza en tan solo 4 a 6 días (3 citas clínicas).',
      },
      {
        q: '¿Se pueden cerrar espacios entre dientes (Diastemas)?',
        a: '¡Sí! Las carillas y el composite cierran los diastemas de forma permanente sin brackets.',
      },
      {
        q: '¿Cuál es la diferencia entre blanqueamiento láser en clínica y en casa?',
        a: 'El blanqueamiento Philips Zoom en clínica aclara de 6 a 8 tonos en 45 minutos. El kit domiciliario sirve para mantenimiento.',
      },
      {
        q: '¿Las carillas de Hollywood Smile se manchan con café o tabaco?',
        a: 'No. La porcelana vitrificada Ivoclar E-Max no tiene poros y es totalmente inmune a manchas.',
      },
      {
        q: '¿Puedo ponerme Hollywood Smile si tengo los dientes algo torcidos sin brackets?',
        a: 'Sí, en apiñamientos leves o moderados las carillas alinean los dientes en solo 5 días.',
      },
      {
        q: '¿Qué materiales se utilizan?',
        a: 'Cerámica de disilicato de litio Ivoclar E-Max suiza y zirconio alemán Amann Girrbach.',
      },
      {
        q: '¿Qué formas de pago aceptan?',
        a: 'Tarjetas de crédito (Visa, MasterCard), transferencias bancarias y efectivo en EUR, USD y GBP.',
      },
      {
        q: '¿Se puede pagar a plazos?',
        a: 'Sí, el importe se abona de manera escalonada en cada fase del tratamiento en Estambul.',
      },
      {
        q: '¿Qué garantía tiene el Hollywood Smile?',
        a: 'Entregamos Certificado de Garantía Clínica Oficial de 5 Años en todas las restauraciones.',
      },
      {
        q: '¿Se puede combinar Hollywood Smile con implantes dentales?',
        a: 'Sí, combinamos carillas frontales con implantes coordinando el color con total exactitud.',
      },
    ],
  },
  ru: {
    title: 'Часто задаваемые вопросы об эстетической стоматологии и Голливудской улыбке',
    subText:
      'Все о цифровом дизайне 3D DSD, Голливудской улыбке (Hollywood Smile), лазерной пластике десен и отбеливании в Стамбуле.',
    items: [
      {
        q: 'Что такое Голливудская улыбка (Hollywood Smile) и что входит в комплекс?',
        a: 'Hollywood Smile — это комплексное эстетическое преображение по правилам золотого сечения. Включает 16–20 виниров Ivoclar E-Max или циркониевых коронок, лазерную коррекцию десны и отбеливание.',
      },
      {
        q: 'Как работает 3D дизайн улыбки (DSD) и можно ли примерить результат заранее?',
        a: 'Да! Мы создаем 3D-модель и примеряем физический макет Mock-Up на ваши зубы, чтобы вы утвердили форму и цвет в зеркале до начала манипуляций.',
      },
      {
        q: 'Что такое десневая улыбка (Gummy Smile) и как проводится лазерная коррекция?',
        a: 'Диодный лазер бережно и бескровно корректирует контур десны за несколько минут без швов, открывая правильную длину зубов.',
      },
      {
        q: 'Можно ли выбрать ультрабелые оттенки Bleach (BL1–BL4)?',
        a: 'Да! Доступна вся палитра Bleach (от белоснежного BL1 до BL4) и естественные цвета Vita.',
      },
      {
        q: 'Сколько служит Голливудская улыбка?',
        a: 'Керамика Ivoclar E-Max и цирконий служат от 15 до более 20 лет при правильном уходе.',
      },
      {
        q: 'Болезненна ли процедура создания Hollywood Smile?',
        a: 'Процедура на 100% безболезненна благодаря качественной местной анестезии. В первый же день ставятся временные виниры.',
      },
      {
        q: 'Сколько дней занимает создание Hollywood Smile в Стамбуле?',
        a: 'Полное преображение занимает от 4 до 6 дней (всего 3 визита в клинику).',
      },
      {
        q: 'Можно ли убрать щели между зубами (диастемы)?',
        a: 'Да! Виниры позволяют навсегда закрыть диастемы без ношения брекетов.',
      },
      {
        q: 'В чем разница между кабинетным отбеливанием Philips Zoom и домашним?',
        a: 'Кабинетное отбеливание Philips Zoom осветляет зубы на 6–8 тонов за 45 минут. Домашнее отбеливание поддерживает эффект.',
      },
      {
        q: 'Окрашиваются ли виниры Hollywood Smile от кофе и курения?',
        a: 'Нет. Глазурованная керамика Ivoclar E-Max полностью непористая и устойчива к любым красителям.',
      },
      {
        q: 'Можно ли исправить неровные зубы без брекетов?',
        a: 'Да! При легкой и умеренной кривизне виниры создают ровный зубной ряд за 5 дней («мгновенная ортодонтия»).',
      },
      {
        q: 'Какие материалы используются?',
        a: 'Оригинальная швейцарская стеклокерамика Ivoclar E-Max и немецкий цирконий Amann Girrbach.',
      },
      {
        q: 'Какие способы оплаты принимаются?',
        a: 'Банковские карты (Visa, MasterCard), безналичные переводы и наличные в EUR, USD, GBP и RUB.',
      },
      {
        q: 'Возможна ли оплата в рассрочку?',
        a: 'Да, оплата распределяется поэтапно между визитами в клинику в Стамбуле.',
      },
      {
        q: 'Какая гарантия предоставляется на Hollywood Smile?',
        a: 'Выдается официальный Сертификат качества с гарантией 5 лет на все реставрации E-Max и цирконий.',
      },
      {
        q: 'Можно ли совместить Голливудскую улыбку с имплантацией?',
        a: 'Да! Мы устанавливаем виниры в зоне улыбки и импланты в жевательном отделе с идеальным подбором цвета.',
      },
    ],
  },
};

export default function TreatmentCosmeticFAQSection() {
  const locale = useLocale();
  const dict = COSMETIC_FAQ_DATA[locale] || COSMETIC_FAQ_DATA.en;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section aria-labelledby="cosmetic-faq-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Head */}
        <div className={styles.head}>
          <div>
            <h2 id="cosmetic-faq-heading" className={styles.title}>
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
                  aria-controls={`cosmetic-faq-answer-${idx}`}
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
                    id={`cosmetic-faq-answer-${idx}`}
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
