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

const BRIDGE_FAQ_DATA: Record<string, FAQDictionary> = {
  en: {
    title: 'Frequently Asked Questions About Dental Bridges & Zirconia',
    subText:
      'Everything you need to know about replacing missing teeth with fixed zirconia bridges, implant bridges, and chewing restoration in Antalya.',
    items: [
      {
        q: 'What is a dental bridge and how does it work?',
        a: 'A dental bridge is a permanent, non-removable dental restoration used to replace one or more missing teeth. It consists of artificial pontic teeth anchored securely onto the adjacent natural teeth (abutments) or dental implants on either side of the gap.',
      },
      {
        q: 'What is the main difference between a Dental Bridge and a Dental Implant?',
        a: 'A single dental implant replaces the missing tooth root directly in the jawbone without altering adjacent teeth. A traditional dental bridge spans the gap by preparing the adjacent teeth on either side as supporting anchors. If adjacent teeth already have crowns or large fillings, a bridge is often the faster, highly cost-effective solution.',
      },
      {
        q: 'How long do Zirconia dental bridges last?',
        a: 'With good daily oral hygiene, flossing under the pontic with bridge threaders, and regular check-ups, high-strength German Zirconia bridges typically last between 15 to 25+ years without breaking or wearing down.',
      },
      {
        q: 'Is getting a dental bridge painful?',
        a: 'Not at all. The procedure is performed under gentle local anesthesia. Temporary bridges are placed immediately on day one to prevent sensitivity and ensure normal chewing while your permanent bridge is custom milled.',
      },
      {
        q: 'How many days do I need to stay in Antalya for a dental bridge?',
        a: 'A complete fixed bridge restoration takes only 4 to 6 days in Antalya (3 short clinic visits: 1. Consultation, preparation & temporary bridge; 2. Frame fitting and shade calibration; 3. Permanent cementation and bite check).',
      },
      {
        q: 'What is an Implant-Supported Dental Bridge?',
        a: 'When 3 or 4 consecutive teeth are missing, an implant-supported bridge uses just 2 titanium dental implants as pillars to hold 3 or 4 zirconia crowns, avoiding the need for an implant per individual tooth and reducing cost.',
      },
      {
        q: 'Can a dental bridge come loose or fall off?',
        a: 'Modern adhesive resin cements provide an exceptionally strong, hermetic bond. However, if a bridge ever loosens, our clinic provides an official 5-year warranty with free recementation or replacement.',
      },
      {
        q: 'How do I clean and floss under a dental bridge?',
        a: 'You can clean under the bridge effortlessly using super-floss, dental floss threaders, or an oral water flosser (waterpik) to remove plaque and keep the gum tissue healthy.',
      },
      {
        q: 'What materials do you use for dental bridges?',
        a: 'We use high-translucency, multi-layered German Zirconia (1200+ MPa) and Swiss Ivoclar ceramics, eliminating black metal margins and providing 100% biocompatible strength.',
      },
      {
        q: 'What is a Maryland Bridge (Resin-Bonded Bridge)?',
        a: 'A Maryland bridge uses metal or ceramic "wings" bonded to the back of neighboring teeth with zero to minimal tooth shaving, making it a great conservative option for missing front teeth.',
      },
      {
        q: 'Can I choose the color of my new bridge to match my other teeth?',
        a: 'Yes! We use digital spectrophotometer shade matching to blend your new bridge seamlessly with your natural teeth, or create a full bleach shade transformation (BL1–BL4).',
      },
      {
        q: 'Do I get temporary teeth while waiting for my permanent bridge?',
        a: 'Yes, absolutely. Aesthetic temporary bridges are fabricated and placed immediately during your first visit so you never spend a single hour without teeth.',
      },
      {
        q: 'Can a dental bridge fix my chewing and speech problems?',
        a: 'Yes. Replacing missing teeth restores 100% of your bite forces, prevents neighboring teeth from tilting into gaps, and eliminates lisping caused by tooth loss.',
      },
      {
        q: 'What warranty is provided with dental bridges at Master Smile Studio?',
        a: 'All our custom-crafted zirconia dental bridges come with an official 5-Year Studio Quality Certificate guaranteeing against fractures or manufacturing defects.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept Visa, MasterCard, bank wire transfers, and cash in GBP (£), EUR (€), and USD ($).',
      },
      {
        q: 'Can I combine a dental bridge with other cosmetic treatments?',
        a: 'Yes! Many patients combine a dental bridge with veneers on adjacent front teeth, professional laser whitening, or dental implants for a complete full-mouth makeover.',
      },
    ],
  },
  tr: {
    title: 'Diş Köprüsü & Zirkonyum Hakkında Sıkça Sorulan Sorular',
    subText:
      'Eksik dişlerin tamamlanması, zirkonyum köprüler, implant destekli köprüler ve Antalya’daki tedavi süreciniz hakkında tüm klinik detaylar.',
    items: [
      {
        q: 'Diş köprüsü nedir ve nasıl çalışır?',
        a: 'Diş köprüsü, bir veya birden fazla eksik dişi tamamlamak için boşluğun her iki yanındaki komşu dişlerden (veya implantlardan) destek alınarak hazırlanan sabit, çıkmayan bir protez tedavisidir.',
      },
      {
        q: 'Diş köprüsü ile diş implantı arasındaki fark nedir?',
        a: 'İmplant doğrudan çene kemiğine yerleştirilir ve komşu dişlere hiç dokunulmaz. Geleneksel köprüde ise boşluğun yanındaki dişler destek ayak olarak kullanılır. Komşu dişlerde zaten dolgu veya çürük varsa, köprü hızlı ve ekonomik bir çözümdür.',
      },
      {
        q: 'Zirkonyum diş köprülerinin ömrü ne kadardır?',
        a: 'İyi bir ağız hijyeni, köprü altı diş ipi (superfloss) kullanımı ve düzenli hekim kontrolleri ile yüksek dirençli Alman zirkonyum köprüler 15 ila 25+ yıl boyunca güvenle kullanılır.',
      },
      {
        q: 'Diş köprüsü tedavisi sırasında ağrı hisseder miyim?',
        a: 'Hayır. Tüm kesim ve ölçü işlemleri lokal anestezi altında tamamen ağrısız gerçekleşir. İlk seansta takılan geçici dişler sayesinde kalıcı köprünüz takılana kadar hiçbir sızı yaşamazsınız.',
      },
      {
        q: 'Diş köprüsü tedavisi için Antalya’da kaç gün kalmam gerekir?',
        a: 'Komple diş köprüsü tedavisi 4 ila 6 gün (3 klinik seansı) içinde tamamlanır.',
      },
      {
        q: 'İmplant Destekli Diş Köprüsü nedir?',
        a: 'Yan yana 3 veya 4 diş eksikliğinde, her dişe ayrı implant yapmak yerine yalnızca 2 adet implant yerleştirilip üzerine 3-4 üyeli sabit zirkonyum köprü takılması işlemidir; maliyeti önemli ölçüde düşürür.',
      },
      {
        q: 'Diş köprüsü düşer mi veya yerinden oynar mı?',
        a: 'Modern reçine yapıştırıcılar ile köprüler dişe adeta kaynaşır. Olası bir gevşeme durumunda Master Smile Studio 5 Yıl Klinik Garanti kapsamında ücretsiz müdahale sağlar.',
      },
      {
        q: 'Köprü dişlerin altı nasıl temizlenir?',
        a: 'Özel köprü altı ipleri (Superfloss) veya ağız duşu (waterpik) kullanarak köprünün altındaki diş eti boşluğu kolaylıkla temizlenebilir.',
      },
      {
        q: 'Köprülerde hangi materyalleri kullanıyorsunuz?',
        a: '1200+ MPa kırılma direncine sahip orijinal Alman Zirkonyum ve İsviçre Ivoclar porselen bloklar kullanılmaktadır. Asla siyah metal altyapı kullanılmaz.',
      },
      {
        q: 'Maryland Köprü (Kanatlı Köprü) nedir?',
        a: 'Komşu dişleri kesmeden, dişin arkasına yapıştırılan kanatçıklarla tutturulan koruyucu bir köprü türüdür; özellikle ön tek diş eksikliklerinde tercih edilir.',
      },
      {
        q: 'Köprümün rengini kendi dişlerime uygun seçebilir miyim?',
        a: 'Evet! Dijital renk ölçüm cihazları ile köprünüz kendi dişlerinizle %100 aynı renkte üretilir veya dilerseniz Hollywood Bleach beyazlığı seçilebilir.',
      },
      {
        q: 'Kalıcı köprüm yapılana kadar dişsiz mi kalacağım?',
        a: 'Kesinlikle hayır! İlk seansta hazırlanan estetik geçici dişler hemen ağzınıza takılır ve hiçbir zaman dişsiz kalmazsınız.',
      },
      {
        q: 'Diş köprüsü çiğneme ve konuşma problemlerini çözer mi?',
        a: 'Evet. Eksik dişlerin tamamlanması çiğneme kuvvetini %100 geri kazandırır ve harflerin doğru telaffuz edilmesini sağlar.',
      },
      {
        q: 'Diş köprülerine resmi garanti veriyor musunuz?',
        a: 'Evet, uygulanan tüm zirkonyum köprüler üretim ve malzeme hatalarına karşı 5 Yıl Resmi Garanti Sertifikası ile teslim edilir.',
      },
      {
        q: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
        a: 'Visa, MasterCard kredi kartları, banka havalesi ve GBP, EUR, USD nakit ödemeler geçerlidir.',
      },
      {
        q: 'Diş köprüsünü lamina veya beyazlatma ile birleştirebilir miyim?',
        a: 'Evet! Eksik dişler köprü ile tamamlanırken diğer dişlere lamina veya beyazlatma uygulanarak kusursuz bir tam gülüş elde edilebilir.',
      },
    ],
  },
  de: {
    title: 'Häufig gestellte Fragen zu Zahnbrücken & Zirkon',
    subText:
      'Alles über den Ersatz fehlender Zähne mit festen Zirkonbrücken, Implantatbrücken und Kaufunktion in Antalya.',
    items: [
      {
        q: 'Was ist eine Zahnbrücke und wie funktioniert sie?',
        a: 'Eine Zahnbrücke ist ein festsitzender Zahnersatz, der Zahnlücken schließt, indem künstliche Zähne an benachbarten Pfeilerzähnen oder Implantaten verankert werden.',
      },
      {
        q: 'Was ist der Unterschied zwischen Zahnbrücke und Einzelimplantat?',
        a: 'Ein Implantat ersetzt die Zahnwurzel ohne Nachbarzähne anzutasten. Eine Brücke nutzt die Nachbarzähne als Pfeiler, was bei bereits gefüllten Nachbarzähnen eine schnelle und kostengünstige Lösung ist.',
      },
      {
        q: 'Wie lange hält eine Zirkon-Zahnbrücke?',
        a: 'Bei guter Mundhygiene halten deutsche Zirkonbrücken 15 bis über 25 Jahre ohne Stabilitätsverlust.',
      },
      {
        q: 'Ist das Einsetzen einer Zahnbrücke schmerzhaft?',
        a: 'Nein, die Behandlung erfolgt vollkommen schmerzfrei unter Lokalanästhesie mit sofortigen Provisorien am selben Tag.',
      },
      {
        q: 'Wie viele Tage Aufenthalt in Antalya sind erforderlich?',
        a: 'Die gesamte Brückenbehandlung dauert nur 4 bis 6 Tage (3 kurze Termine in unserer Klinik).',
      },
      {
        q: 'Was ist eine implantatgetragene Zahnbrücke?',
        a: 'Bei 3–4 fehlenden Zähnen tragen 2 Implantate eine mehrgliedrige Zirkonbrücke, was Kosten spart und Knochen schont.',
      },
      {
        q: 'Kann sich eine Zahnbrücke lockern?',
        a: 'Moderne Befestigungszemente bieten dauerhaften Halt. Unsere 5-Jahres-Garantie sichert Sie zusätzlich ab.',
      },
      {
        q: 'Wie reinigt man die Bereiche unter einer Zahnbrücke?',
        a: 'Mit spezieller Brückenzahnseide (Superfloss) oder einer Munddusche lässt sich der Brückenzwischenraum mühelos reinigen.',
      },
      {
        q: 'Welche Materialien werden für Brücken verwendet?',
        a: 'Ausschließlich 100% metallfreies deutsches Zirkon (1200+ MPa) und Schweizer Ivoclar Keramik ohne graue Ränder.',
      },
      {
        q: 'Was ist eine Maryland-Brücke (Klebebrücke)?',
        a: 'Eine minimalinvasive Brücke mit Flügeln auf der Rückseite der Nachbarzähne ohne Beschleifen der Zahnsubstanz.',
      },
      {
        q: 'Kann die Farbe der Brücke exakt angepasst werden?',
        a: 'Ja! Mittels digitaler Farbanalyse passen wir die Brücke perfekt an Ihre Nachbarzähne oder in Bleach-Weiß an.',
      },
      {
        q: 'Erhalte ich während der Wartezeit Provisorien?',
        a: 'Ja, Sie verlassen die Klinik am ersten Tag mit ästhetischen Provisorien und sind zu keinem Zeitpunkt zahnlos.',
      },
      {
        q: 'Stellt die Brücke Kauen und Sprechen wieder her?',
        a: 'Ja, die Brücke stellt die volle Beißkraft zu 100% wieder her und korrigiert Sprachprobleme durch Zahnlücken.',
      },
      {
        q: 'Welche Garantie erhalte ich auf Zahnbrücken?',
        a: 'Sie erhalten ein offizielles 5-Jahres-Garantiezertifikat auf alle Zirkonbrücken bei Master Smile Studio.',
      },
      {
        q: 'Welche Zahlungsmethoden werden akzeptiert?',
        a: 'Wir akzeptieren Kreditkarten (Visa, MasterCard), Banküberweisungen sowie Bargeld in EUR, USD und GBP.',
      },
      {
        q: 'Kann eine Brücke mit Veneers oder Bleaching kombiniert werden?',
        a: 'Ja, wir kombinieren Brücken häufig mit Veneers oder Bleaching für ein harmonisches Gesamtergebnis.',
      },
    ],
  },
  pl: {
    title: 'Często Zadawane Pytania o Mosty Zębowe i Cyrkon',
    subText:
      'Wszystko o mostach z tlenku cyrkonu, mostach na implantach i odbudowie funkcji żucia w Antalyi.',
    items: [
      {
        q: 'Czym jest most protetyczny i jak działa?',
        a: 'Most protetyczny to stałe uzupełnienie braków zębowych osadzane na zębach filarowych lub implantach otaczających lukę.',
      },
      {
        q: 'Czym różni się most od pojedynczego implantu?',
        a: 'Implant zastępuje korzeń bez naruszania sąsiadów. Most opiera się na zębach sąsiednich, co jest świetnym rozwiązaniem, gdy zęby te i tak wymagają koron.',
      },
      {
        q: 'Jaka jest żywotność mostów cyrkonowych?',
        a: 'Mosty z niemieckiego tlenku cyrkonu służą od 15 do ponad 25 lat przy odpowiedniej higienie.',
      },
      {
        q: 'Czy zabieg wykonania mostu boli?',
        a: 'Zabieg jest w 100% bezbolesny w znieczuleniu miejscowym. Natychmiast zakładany jest most tymczasowy.',
      },
      {
        q: 'Ile dni trwa leczenie w Antalyi?',
        a: 'Wykonanie mostu trwa zaledwie 4 do 6 dni (3 krótkie wizyty w klinice).',
      },
      {
        q: 'Czym jest most na implantach?',
        a: 'Przy braku 3–4 zębów 2 implanty utrzymują cały 3–4-punktowy most cyrkonowy, co obniża koszty leczenia.',
      },
      {
        q: 'Czy most zębowy może się odkleić?',
        a: 'Nowoczesne cementy żywiczne zapewniają nierozerwalne wiązanie. Obowiązuje 5-letnia gwarancja kliniczna.',
      },
      {
        q: 'Jak czyścić przestrzeń pod mostem?',
        a: 'Stosuje się specjalną nić z usztywnionym końcem (Superfloss) lub irygator stomatologiczny.',
      },
      {
        q: 'Jakich materiałów używacie do mostów?',
        a: 'Niemiecki tlenek cyrkonu 1200+ MPa i ceramika E-Max bez zawartości metalu.',
      },
      {
        q: 'Co to jest most Maryland (adhezyjny)?',
        a: 'Most z wypustkami przyklejanymi do tyłu zębów sąsiednich bez konieczności ich szlifowania.',
      },
      {
        q: 'Czy kolor mostu będzie pasował do reszty zębów?',
        a: 'Tak, dobieramy odcień cyfrowo, aby idealnie stapiał się z naturalnymi zębami.',
      },
      {
        q: 'Czy dostanę zęby tymczasowe?',
        a: 'Tak, most tymczasowy jest montowany natychmiast na pierwszej wizycie.',
      },
      {
        q: 'Czy most przywraca prawidłowe żucie i wymowę?',
        a: 'Tak, w 100% przywraca siłę żucia i likwiduje seplenienie spowodowane lukami zębowymi.',
      },
      {
        q: 'Jaką gwarancję otrzymuję na most?',
        a: 'Oficjalny Certyfikat Jakości z 5-letnią gwarancją na wszystkie mosty cyrkonowe.',
      },
      {
        q: 'Jakie formy płatności są akceptowane?',
        a: 'Karty kredytowe (Visa, MasterCard), przelewy oraz gotówka w EUR, USD, GBP i PLN.',
      },
      {
        q: 'Czy można łączyć mosty z licówkami lub wybielaniem?',
        a: 'Tak, łączymy mosty z licówkami na zębach przednich dla uzyskania pełnej harmonii uśmiechu.',
      },
    ],
  },
  pt: {
    title: 'Perguntas Frequentes Sobre Pontes Dentárias e Zircônia',
    subText:
      'Tudo sobre pontes fixas em zircônia, pontes sobre implantes e reabilitação mastigatória em Antalya.',
    items: [
      {
        q: 'O que é uma ponte dentária e como funciona?',
        a: 'Uma ponte dentária é uma prótese fixa usada para repor um ou mais dentes perdidos, apoiada em dentes vizinhos ou em implantes.',
      },
      {
        q: 'Qual a diferença entre ponte dentária e implante unitário?',
        a: 'O implante substitui a raiz sem tocar nos dentes vizinhos. A ponte usa os dentes adjacentes como pilares de sustentação.',
      },
      {
        q: 'Quanto tempo dura uma ponte em zircônia?',
        a: 'Pontes em zircônia alemã duram de 15 a mais de 25 anos com excelente estabilidade.',
      },
      {
        q: 'O procedimento de ponte dentária é doloroso?',
        a: 'Não, o tratamento é 100% indolor com anestesia local e colocação imediata de provisórios.',
      },
      {
        q: 'Quantos dias são necessários em Antalya?',
        a: 'O tratamento completo leva de 4 a 6 dias (apenas 3 consultas clínicas).',
      },
      {
        q: 'O que é uma ponte sobre implantes?',
        a: 'Para 3 ou 4 dentes ausentes, colocam-se apenas 2 implantes que sustentam uma ponte fixa de 3 a 4 coroas.',
      },
      {
        q: 'Uma ponte dentária pode soltar-se?',
        a: 'Com os cimentos resinosos atuais a fixação é permanente, com respaldo de 5 anos de garantia clínica.',
      },
      {
        q: 'Como higienizar embaixo da ponte dentária?',
        a: 'Utiliza-se fio dental passa-fio (Superfloss) ou irrigador bucal (Waterpik).',
      },
      {
        q: 'Quais materiais são utilizados nas pontes?',
        a: 'Zircônia alemã de alta resistência (1200+ MPa) 100% livre de metal.',
      },
      {
        q: 'O que é uma ponte Maryland (adesiva)?',
        a: 'Ponte fixada por aletas coladas atrás dos dentes vizinhos sem desgaste significativo do esmalte.',
      },
      {
        q: 'A cor da ponte combinará com meus outros dentes?',
        a: 'Sim, a cor é calibrada digitalmente para perfeita harmonia com os dentes naturais.',
      },
      {
        q: 'Ficarei sem dentes durante o processo?',
        a: 'Não, instalamos dentes provisórios imediatos no primeiro dia de atendimento.',
      },
      {
        q: 'A ponte resolve problemas de mastigação e fala?',
        a: 'Sim, recupera 100% da eficiência mastigatória e elimina falhas na pronúncia.',
      },
      {
        q: 'Qual a garantia oferecida nas pontes dentárias?',
        a: 'Garantia Clínica Oficial de 5 Anos em todas as pontes de zircônia.',
      },
      {
        q: 'Quais métodos de pagamento são aceitos?',
        a: 'Cartões de crédito (Visa, MasterCard), transferências bancárias e dinheiro em EUR, USD e GBP.',
      },
      {
        q: 'Posso combinar a ponte com facetas ou clareamento?',
        a: 'Sim, é muito comum associar pontes a facetas ou clareamento para um sorriso completo.',
      },
    ],
  },
  es: {
    title: 'Preguntas Frecuentes Sobre Puentes Dentales y Zirconio',
    subText:
      'Todo lo que necesita saber sobre puentes fijos de zirconio, puentes sobre implantes y recuperación masticatoria en Antalya.',
    items: [
      {
        q: '¿Qué es un puente dental y cómo funciona?',
        a: 'Un puente dental es una prótesis fija que sustituye uno o varios dientes ausentes apoyándose en los dientes vecinos o en implantes.',
      },
      {
        q: '¿Cuál es la diferencia entre un puente dental y un implante?',
        a: 'El implante repone la raíz sin tocar los dientes vecinos. El puente utiliza los dientes contiguos como pilares de apoyo.',
      },
      {
        q: '¿Cuánto dura un puente dental de zirconio?',
        a: 'Los puentes de zirconio alemán de 1200 MPa duran de 15 a más de 25 años con un cuidado bucal óptimo.',
      },
      {
        q: '¿Es doloroso el tratamiento de puente dental?',
        a: 'No, el tallado y la fijación son 100% indoloros con anestesia local suave y colocación de provisionales el mismo día.',
      },
      {
        q: '¿Cuántos días de estancia en Antalya se requieren?',
        a: 'El tratamiento completo se realiza en solo 4 a 6 días (3 citas clínicas).',
      },
      {
        q: '¿Qué es un puente sobre implantes?',
        a: 'En ausencias de 3 o 4 dientes seguidos, 2 implantes sostienen un puente de zirconio completo, reduciendo costes.',
      },
      {
        q: '¿Se puede despegar un puente dental?',
        a: 'Los cementos de resina actuales proporcionan una adhesión permanente, respaldada por 5 años de garantía clínica.',
      },
      {
        q: '¿Cómo se limpia debajo de un puente dental?',
        a: 'Se utiliza seda dental especial con enhebrador (Superfloss) o irrigador bucal.',
      },
      {
        q: '¿Qué materiales se emplean en los puentes?',
        a: 'Zirconio alemán puro (1200+ MPa) y cerámica Ivoclar 100% libres de metales oscuros.',
      },
      {
        q: '¿Qué es un puente Maryland (adhesivo)?',
        a: 'Un puente fijado mediante aletas a la cara interna de los dientes vecinos sin necesidad de tallarlos.',
      },
      {
        q: '¿El color del puente coincidirá con mis propios dientes?',
        a: 'Sí, la selección cromática digital asegura una perfecta mimetización con sus piezas naturales.',
      },
      {
        q: '¿Me quedaré sin dientes durante el tratamiento?',
        a: 'No, colocamos puentes provisionales estéticos desde la primera cita.',
      },
      {
        q: '¿El puente soluciona problemas al masticar y hablar?',
        a: 'Sí, restablece el 100% de la fuerza de mordida y la claridad fonética al hablar.',
      },
      {
        q: '¿Qué garantía tienen los puentes dentales?',
        a: 'Entregamos Certificado de Garantía Oficial de 5 Años en todos los puentes de zirconio.',
      },
      {
        q: '¿Qué formas de pago aceptan?',
        a: 'Aceptamos tarjetas de crédito (Visa, MasterCard), transferencias bancarias y efectivo en EUR, USD y GBP.',
      },
      {
        q: '¿Se pueden combinar puentes con carillas o blanqueamiento?',
        a: 'Sí, realizamos transformaciones completas integrando puentes, carillas y blanqueamiento dental.',
      },
    ],
  },
  ru: {
    title: 'Часто задаваемые вопросы о зубных мостах и цирконии',
    subText:
      'Все о несъемных мостовидных протезах из циркония, мостах на имплантах и восстановлении прикуса в Анталье.',
    items: [
      {
        q: 'Что такое зубной мост и как он устроен?',
        a: 'Зубной мост — это несъемная ортопедическая конструкция, замещающая один или несколько отсутствующих зубов с опорой на соседние зубы или имплантаты.',
      },
      {
        q: 'В чем разница между зубным мостом и одиночным имплантом?',
        a: 'Имплант заменяет корень без обточки соседей. Мост опирается на соседние зубы, что идеально, если они уже требуют коронок.',
      },
      {
        q: 'Сколько служат циркониевые зубные мосты?',
        a: 'Мосты из немецкого диоксида циркония служат от 15 до более 25 лет при правильном уходе.',
      },
      {
        q: 'Болезненна ли установка зубного моста?',
        a: 'Процедура абсолютно безболезненна благодаря качественной местной анестезии. Временный мост ставится в первый же день.',
      },
      {
        q: 'Сколько дней занимает изготовление моста в Анталье?',
        a: 'Полный курс занимает от 4 до 6 дней (всего 3 визита в клинику).',
      },
      {
        q: 'Что такое мостовидный протез на имплантах?',
        a: 'При отсутствии 3–4 зубов подряд устанавливаются 2 импланта, на которые фиксируется цельный мост из 3–4 коронок.',
      },
      {
        q: 'Может ли зубной мост расшататься или выпасть?',
        a: 'Современные полимерные цементы обеспечивают монолитную фиксацию. Предоставляется 5 лет гарантии.',
      },
      {
        q: 'Как правильно чистить пространство под мостом?',
        a: 'Используется специальная нить Superfloss с жестким концом или ирригатор для полости рта.',
      },
      {
        q: 'Какие материалы используются для мостов?',
        a: 'Немецкий цирконий 1200+ МПа и швейцарская керамика Ivoclar без содержания металла.',
      },
      {
        q: 'Что такое мэрилендский (адгезивный) мост?',
        a: 'Мост с боковыми микрокрыльями, фиксируемый к соседним зубам без их обточки.',
      },
      {
        q: 'Будет ли цвет моста совпадать с моими зубами?',
        a: 'Да, цифровой спектрофотометр подбирает оттенок с абсолютной точностью.',
      },
      {
        q: 'Будут ли установлены временные зубы?',
        a: 'Да, временный мост фиксируется сразу после обработки опорных зубов.',
      },
      {
        q: 'Восстанавливает ли мост жевание и дикцию?',
        a: 'Да, мост восстанавливает 100% жевательной функции и устраняет дефекты речи.',
      },
      {
        q: 'Какая гарантия предоставляется на зубные мосты?',
        a: 'Официальный Сертификат с гарантией 5 лет на все циркониевые мостовидные протезы.',
      },
      {
        q: 'Какие способы оплаты принимаются?',
        a: 'Банковские карты (Visa, MasterCard), безналичные переводы и наличные в EUR, USD, GBP и RUB.',
      },
      {
        q: 'Можно ли совместить мост с винирами или отбеливанием?',
        a: 'Да, мы часто объединяем установку мостов с винирами и отбеливанием для идеальной улыбки.',
      },
    ],
  },
};

export default function TreatmentBridgeFAQSection() {
  const locale = useLocale();
  const dict = BRIDGE_FAQ_DATA[locale] || BRIDGE_FAQ_DATA.en;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section aria-labelledby="bridge-faq-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Head */}
        <div className={styles.head}>
          <div>
            <h2 id="bridge-faq-heading" className={styles.title}>
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
                  aria-controls={`bridge-faq-answer-${idx}`}
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
                    id={`bridge-faq-answer-${idx}`}
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
