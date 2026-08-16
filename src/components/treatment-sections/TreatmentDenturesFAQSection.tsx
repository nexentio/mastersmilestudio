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

const DENTURES_FAQ_DATA: Record<string, FAQDictionary> = {
  en: {
    title: 'Frequently Asked Questions About Dentures & Overdentures',
    subText:
      'Everything you need to know about Snap-On implant dentures, complete dentures, palate-free comfort, and stability in Istanbul.',
    items: [
      {
        q: 'What is a Snap-On Overdenture and how does it prevent slipping?',
        a: 'A Snap-On Overdenture is a removable prosthetic that locks firmly onto 2, 3, or 4 dental implants using specialized locator attachments. It clicks securely into place, completely eliminating sliding, rubbing, or falling out while eating or speaking.',
      },
      {
        q: 'What is the main difference between Snap-On Overdentures and All-on-4/6 fixed teeth?',
        a: 'Snap-On overdentures are removable by the patient for easy hygiene and cost significantly less than fixed restorations. All-on-4 or All-on-6 restorations are permanently screwed onto implants and can only be removed by a dentist.',
      },
      {
        q: 'Can I get an upper denture without covering the roof of my mouth (Palate-Free)?',
        a: 'Yes! By anchoring your upper overdenture onto 4 titanium dental implants, we can completely remove the bulky acrylic roof of the mouth, restoring full taste sensation and natural speech.',
      },
      {
        q: 'How long do high-impact acrylic dentures and overdentures last?',
        a: 'The titanium implants last a lifetime. The denture prosthesis typically lasts 7 to 12+ years. The rubber locator caps inside the denture can be replaced in minutes during routine checkups.',
      },
      {
        q: 'Will having dentures made in Istanbul be painful?',
        a: 'Not at all. Digital impressions and implant placements are performed under gentle computer-guided local anesthesia with zero discomfort during the procedure.',
      },
      {
        q: 'How many days do I need to stay in Istanbul for dentures?',
        a: 'Traditional complete dentures take only 4 to 6 days. For implant-supported snap-on overdentures, treatment is performed in two visits (Visit 1: 3 days for implant placement; Visit 2: 4–5 days for final overdenture fitting).',
      },
      {
        q: 'Can I eat apples, steak, and crunchy foods with Snap-On dentures?',
        a: 'Yes! Implant-supported overdentures restore up to 85–90% of natural bite force, allowing you to chew meat, raw vegetables, and nuts without fear of shifting.',
      },
      {
        q: 'Do I still need denture glue or sticky adhesives?',
        a: 'No! With Snap-On implant overdentures, mechanical locator attachments lock the denture in place, eliminating the need for messy adhesives.',
      },
      {
        q: 'What materials are used for dentures at Master Smile Studio?',
        a: 'We use high-impact, medical-grade Lucitone acrylic with multi-layered composite teeth and Swiss Straumann or German titanium locator matrices.',
      },
      {
        q: 'What happens if a denture tooth chips or a locator loosens?',
        a: 'All our prostheses are covered by an official warranty. Our clinic provides prompt, cost-free repairs or locator replacements.',
      },
      {
        q: 'Will my new dentures look like real, natural teeth?',
        a: 'Yes! We customize tooth shape, gum shading, and translucency to create an authentic, age-appropriate smile that enhances your facial contours.',
      },
      {
        q: 'Can dentures help reverse sunken facial profiles and wrinkles?',
        a: 'Yes. By rebuilding proper vertical bite height and lip support, dentures smooth out facial wrinkles and restore youthful cheek volume.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept Visa, MasterCard, secure bank wire transfers, and cash in GBP (£), EUR (€), and USD ($).',
      },
      {
        q: 'Can I pay for my denture package in installments?',
        a: 'Yes! An initial deposit secures your booking, and the balance is split across your clinic visits in Istanbul.',
      },
      {
        q: 'What guarantees do you offer for dentures and overdentures?',
        a: 'We provide lifetime guarantees on titanium implants and a comprehensive 5-Year Studio Quality Certificate on the prosthesis.',
      },
      {
        q: 'Can I switch from my old loose denture to a Snap-On system?',
        a: 'Yes! In many cases, we can place 2 to 4 implants and either retrofit your existing denture or create a brand new precision Snap-On prosthesis.',
      },
    ],
  },
  tr: {
    title: 'Protez Diş & Çıt Çıtlı Damak Hakkında Sıkça Sorulan Sorular',
    subText:
      'İmplant destekli çıtçıtlı overdenture protezler, tam damak protezleri, damaksız konfor ve çiğneme stabilitesi hakkında tüm klinik detaylar.',
    items: [
      {
        q: 'Çıt Çıtlı (Overdenture) Protez nedir ve oynamayı nasıl engeller?',
        a: 'Çıt çıtlı protez, çene kemiğine yerleştirilen 2, 3 veya 4 adet titanyum implanta özel kilit mekanizmaları (locator) ile bağlanan protezdir. Çıt sesiyle kilitlenir; yemek yerken veya konuşurken kesinlikle oynamaz ve çıkmaz.',
      },
      {
        q: 'Çıt Çıtlı Protez ile All-on-4/6 Sabit Dişler arasındaki fark nedir?',
        a: 'Çıt çıtlı protezler hasta tarafından çıkarılıp kolayca temizlenebilen ve maliyeti sabit dişlere göre çok daha ekonomik olan bir çözümdür. All-on-4/6 ise sadece hekim tarafından sökülebilen tamamen sabit vidalı porselen köprülerdir.',
      },
      {
        q: 'Üst çenede damağı kapatmayan (Damaksız) protez yapılabilir mi?',
        a: 'Evet! Üst çeneye 4 adet implant uygulandığında protezin damak kısmı tamamen kesilerek damaksız hale getirilir. Böylece tat alma duyusu %100 korunur ve bulantı refleksi oluşmaz.',
      },
      {
        q: 'Protez dişlerin ve çıt çıtlı sistemlerin ömrü ne kadardır?',
        a: 'Titanyum implantlar ömür boyu garantilidir. Akrilik protezin ömrü 7 ila 12+ yıldır. Protezin içindeki küçük kauçuk tutucu parçalar (cap) ise rutin kontrollerde dakikalar içinde yenilenebilir.',
      },
      {
        q: 'Protez ve implant tedavisi sırasında ağrı çeker miyim?',
        a: 'Hayır. İmplant yerleşimi ve ölçü aşamaları gelişmiş lokal anestezi altında tamamen ağrısız gerçekleşir. Dileyen hastalarımıza sedasyon (hafif uyku) seçeneği sunulmaktadır.',
      },
      {
        q: 'Protez tedavisi için İstanbul’da kaç gün kalmam gerekir?',
        a: 'Klasik tam protezler 4 ila 6 günde tamamlanır. İmplant destekli çıt çıtlı protezlerde ise tedavi 2 seyahatte tamamlanır (1. Seyahat: 3 gün implant yerleşimi, 2. Seyahat: 4–5 gün kalıcı protez teslimi).',
      },
      {
        q: 'Çıt çıtlı protezlerle elma, et ve sert yiyecekleri rahatça yiyebilir miyim?',
        a: 'Evet! İmplant destekli overdenture protezler doğal çiğneme kuvvetinin %85-90’ını geri kazandırır; protezinizin fırlama korkusu olmadan her türlü gıdayı tüketebilirsiniz.',
      },
      {
        q: 'Protez yapıştırıcısı kullanmaya devam etmem gerekir mi?',
        a: 'Hayır! Çıtçıtlı kilit mekanizması mekanik olarak güçlü bir tutuculuk sağladığından yapıştırıcı kremlere olan ihtiyaç tamamen ortadan kalkar.',
      },
      {
        q: 'Protezlerde hangi malzemeleri kullanıyorsunuz?',
        a: 'Kırılmaya karşı güçlendirilmiş yüksek darbe dirençli Lucitone akrilik, çok katmanlı estetik kompozit dişler ve orijinal İsviçre Straumann veya Alman locator parçaları kullanılmaktadır.',
      },
      {
        q: 'Protez dişim kırılırsa veya çıtçıtı gevşerse ne yapmalıyım?',
        a: 'Tüm protezlerimiz garanti kapsamındadır. Kliniğimizde dakikalar içinde yeni çıtçıt takımı veya diş tamiri ücretsiz olarak gerçekleştirilir.',
      },
      {
        q: 'Yeni protezlerim dışarıdan bakıldığında doğal görünür mü?',
        a: 'Evet! Yüz hatlarınıza, ten renginize ve yaşınıza uygun doğal diş formları ve damarlı pembe diş eti estetiği ile dışarıdan protez olduğu asla anlaşılmaz.',
      },
      {
        q: 'Protezler yüzdeki çökmeleri ve kırışıklıkları giderir mi?',
        a: 'Evet! Doğru dikey boyut ve dudak desteği sağlanarak dudak kenarındaki kırışıklıklar ve çökük yanak görüntüsü tamamen gençleştirilir.',
      },
      {
        q: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
        a: 'Visa, MasterCard kredi kartları, banka transferi ve GBP, EUR, USD nakit ödemeler kabul edilmektedir.',
      },
      {
        q: 'Tedavi ücretini taksitle ödeyebilir miyim?',
        a: 'Evet, seyahatleriniz ve klinik seanslarınız arasında bölünmüş esnek ödeme planları sunuyoruz.',
      },
      {
        q: 'Protez ve implantlara resmi garanti veriyor musunuz?',
        a: 'İmplantlarımız için Ömür Boyu Uluslararası Garanti Sertifikası, protezlerimiz için ise 5 Yıl Klinik Kalite Garantisi verilmektedir.',
      },
      {
        q: 'Eski oynayan damak protezimi çıtçıtlı sisteme dönüştürebilir miyim?',
        a: 'Evet! Çene kemiğinize 2 ila 4 implant yerleştirilerek mevcut proteziniz uyarlanabilir veya yepyeni bir damaksız çıtçıtlı protez üretilebilir.',
      },
    ],
  },
  de: {
    title: 'Häufig gestellte Fragen zu Zahnprothesen & Overdentures',
    subText:
      'Alles über Snap-On Klick-Prothesen auf Implantaten, Vollprothesen, gaumenfreien Komfort und Halt in Istanbul.',
    items: [
      {
        q: 'Was ist eine Snap-On Klick-Prothese und wie verhindert sie Verrutschen?',
        a: 'Eine Snap-On Klick-Prothese rastet über spezielle Locator-Druckknöpfe fest auf 2 bis 4 Implantaten ein und verhindert jegliches Wackeln beim Essen oder Sprechen.',
      },
      {
        q: 'Was ist der Unterschied zwischen Klick-Prothesen und All-on-4/6 festen Zähnen?',
        a: 'Klick-Prothesen sind vom Patienten zur einfachen Reinigung herausnehmbar und wesentlich günstiger. All-on-4/6 sind fest verschraubte Zahnbrücken.',
      },
      {
        q: 'Ist im Oberkiefer eine gaumenfreie Prothese möglich?',
        a: 'Ja! Mit 4 Implantaten im Oberkiefer kann der störende Gaumenteil komplett entfernt werden, was den vollen Geschmackssinn erhält.',
      },
      {
        q: 'Wie lange halten bruchsichere Prothesen und Overdentures?',
        a: 'Die Implantate halten lebenslang. Die Prothese hält 7 bis über 12 Jahre. Die Haltegummis können in Minuten erneuert werden.',
      },
      {
        q: 'Ist die Prothesenbehandlung in Istanbul schmerzhaft?',
        a: 'Nein, alle Schritte erfolgen vollkommen schmerzfrei unter Lokalanästhesie mit Sedierungsoption.',
      },
      {
        q: 'Wie viele Tage Aufenthalt in Istanbul sind nötig?',
        a: 'Klassische Prothesen dauern 4–6 Tage. Implantat-Prothesen erfolgen in 2 kurzen Reisen (1. Reise: 3 Tage; 2. Reise: 4–5 Tage).',
      },
      {
        q: 'Kann man mit Klick-Prothesen feste Nahrung wie Äpfel und Fleisch kauen?',
        a: 'Ja! Implantatgetragene Prothesen stellen 85–90% der natürlichen Beißkraft wieder her.',
      },
      {
        q: 'Wird weiterhin Prothesenkleber benötigt?',
        a: 'Nein! Durch die mechanische Locator-Verankerung ist Prothesenkleber absolut überflüssig.',
      },
      {
        q: 'Welche Materialien werden verwendet?',
        a: 'Bruchsicheres Lucitone-Acryl, ästhetische Verbundzähne und Schweizer/Deutsche Locator-Systeme.',
      },
      {
        q: 'Was passiert bei Beschädigung oder Lockern der Druckknöpfe?',
        a: 'Unsere 5-Jahres-Garantie deckt Reparaturen und Austausch von Matrizen schnell und kostenfrei ab.',
      },
      {
        q: 'Sehen die Prothesen natürlich aus?',
        a: 'Ja, wir passen Zahnform, Farbverlauf und Zahnfleischästhetik individuell an Ihre Gesichtszüge an.',
      },
      {
        q: 'Können Prothesen eingefallene Gesichtszüge und Falten glätten?',
        a: 'Ja, durch Wiederherstellung der Wangenstütze und Bisshöhe wirken Mundpartie und Gesicht deutlich jünger.',
      },
      {
        q: 'Welche Zahlungsmethoden werden akzeptiert?',
        a: 'Kreditkarten (Visa, MasterCard), Banküberweisungen sowie Bargeld in EUR, USD und GBP.',
      },
      {
        q: 'Kann die Behandlung in Raten gezahlt werden?',
        a: 'Ja, die Zahlung kann auf die beiden Aufenthalte in Istanbul aufgeteilt werden.',
      },
      {
        q: 'Welche Garantie erhalte ich?',
        a: 'Lebenslange Garantie auf Implantate und 5 Jahre Qualitätsgarantie auf die Prothetik.',
      },
      {
        q: 'Kann meine alte Prothese auf Implantate umgerüstet werden?',
        a: 'Ja, nach Einsetzen von 2 bis 4 Implantaten kann die bestehende Prothese oft angepasst werden.',
      },
    ],
  },
  pl: {
    title: 'Często Zadawane Pytania o Protezy Zębowe i Overdentures',
    subText:
      'Wszystko o protezach na zatrzaskach, protezach całkowitych bez podniebienia i stabilności w Stambule.',
    items: [
      {
        q: 'Czym jest proteza na zatrzaskach (Overdenture) i jak zapobiega wypadaniu?',
        a: 'Proteza typu Overdenture zatrzaskuje się na 2–4 implantach za pomocą łączników Locator, całkowicie eliminując ruszanie się i wypadanie podczas jedzenia.',
      },
      {
        q: 'Czym różni się proteza na zatrzaskach od stałych zębów All-on-4/6?',
        a: 'Proteza na zatrzaskach jest wyjmowana przez pacjenta do higieny i jest znacznie tańsza. All-on-4/6 to mosty przykręcone na stałe.',
      },
      {
        q: 'Czy w górnej szczęce można wykonać protezę bez podniebienia?',
        a: 'Tak! Na 4 implantach wykonuje się protezę bez płytki podniebiennej, przywracając pełne odczuwanie smaku.',
      },
      {
        q: 'Jaka jest żywotność protez i systemów Overdenture?',
        a: 'Implanty mają dożywotnią gwarancję. Sama proteza służy 7–12+ lat. Wkładki retencyjne wymienia się w 2 minuty.',
      },
      {
        q: 'Czy zabieg wykonania protez w Stambule boli?',
        a: 'Zabieg jest w 100% bezbolesny w znieczuleniu miejscowym z opcją sedacji.',
      },
      {
        q: 'Ile dni trwa leczenie w Stambule?',
        a: 'Zwykłe protezy: 4–6 dni. Protezy na implantach: 2 wizyty (1. wizyta: 3 dni na implanty; 2. wizyta: 4–5 dni na protezę).',
      },
      {
        q: 'Czy z protezą na zatrzaskach można jeść twarde potrawy?',
        a: 'Tak! Przywraca ona 85–90% naturalnej siły żucia (jabłka, steki, orzechy).',
      },
      {
        q: 'Czy potrzebny jest klej do protez?',
        a: 'Nie! Mechaniczne zatrzaski trzymają protezę tak mocno, że kleje są całkowicie zbędne.',
      },
      {
        q: 'Jakie materiały są stosowane?',
        a: 'Wzmocniony akryl Lucitone, wielowarstwowe zęby kompozytowe i szwajcarskie zatrzaski Straumann.',
      },
      {
        q: 'Co w przypadku uszkodzenia zatrzasku lub zęba?',
        a: '5-letnia gwarancja zapewnia bezpłatną wymianę elementów retencyjnych lub naprawę.',
      },
      {
        q: 'Czy proteza wygląda naturalnie?',
        a: 'Tak, odwzorowujemy naturalny kształt zębów i estetykę dziąseł, nie do odróżnienia od własnych zębów.',
      },
      {
        q: 'Czy proteza redukuje zmarszczki wokół ust?',
        a: 'Tak, odbudowa wysokości zwarcia i podparcia warg przywraca młodzieńczy profil twarzy.',
      },
      {
        q: 'Jakie metody płatności są akceptowane?',
        a: 'Karty kredytowe (Visa, MasterCard), przelewy oraz gotówka w EUR, USD, GBP i PLN.',
      },
      {
        q: 'Czy mogę płacić w ratach?',
        a: 'Tak, płatność jest dzielona pomiędzy poszczególne etapy leczenia w Stambule.',
      },
      {
        q: 'Jaką gwarancję otrzymuję?',
        a: 'Dożywotnią gwarancję na implanty oraz 5 lat gwarancji na wykonaną protezę.',
      },
      {
        q: 'Czy mogę przerobić starą protezę na zatrzaski?',
        a: 'Tak, po wprowadzeniu 2–4 implantów często adaptujemy obecną protezę pacjenta.',
      },
    ],
  },
  pt: {
    title: 'Perguntas Frequentes Sobre Próteses Dentárias e Overdentures',
    subText:
      'Tudo sobre próteses tipo clique sobre implantes, dentaduras sem céu da boca e mastigação segura em Istambul.',
    items: [
      {
        q: 'O que é uma Overdenture tipo clique e como ela evita que a prótese solte?',
        a: 'A Overdenture é uma prótese que trava firmemente sobre 2 a 4 implantes através de encaixes tipo Locator, eliminando qualquer movimentação indesejada ao comer ou falar.',
      },
      {
        q: 'Qual a diferença entre Overdenture e prótese fixa All-on-4/6?',
        a: 'A Overdenture é removível pelo paciente para fácil higienização e tem custo mais acessível. All-on-4/6 é uma ponte parafusada fixa definitiva.',
      },
      {
        q: 'É possível fazer prótese superior sem o céu da boca (Palato Livre)?',
        a: 'Sim! Com 4 implantes na arcada superior, remove-se todo o acrílico do céu da boca, recuperando 100% do paladar.',
      },
      {
        q: 'Quanto tempo duram as próteses e implantes?',
        a: 'Os implantes têm garantia vitalícia. A prótese dura de 7 a mais de 12 anos e as borrachas de retenção são trocadas em minutos.',
      },
      {
        q: 'O tratamento de próteses em Istambul é doloroso?',
        a: 'Não, o procedimento é 100% livre de dor com anestesia local de última geração e opção de sedação.',
      },
      {
        q: 'Quantos dias são necessários em Istambul?',
        a: 'Prótese convencional: 4–6 dias. Prótese sobre implantes: 2 viagens (1ª viagem: 3 dias; 2ª viagem: 4–5 dias).',
      },
      {
        q: 'Posso mastigar alimentos consistentes como carnes e maçãs?',
        a: 'Sim! A overdenture restabelece 85–90% da força mastigatória natural.',
      },
      {
        q: 'Ainda precisarei usar cola para dentadura?',
        a: 'Não! O travamento mecânico dos implantes elimina a necessidade de fixadores e colas.',
      },
      {
        q: 'Quais materiais são utilizados?',
        a: 'Acrílico Lucitone de alta resistência mecânica, dentes estéticos multicamadas e matrizes suíças/alemãs.',
      },
      {
        q: 'O que acontece se uma peça soltar ou quebrar?',
        a: 'Nossa garantia clínica de 5 anos cobre reparos e substituição de componentes gratuitamente.',
      },
      {
        q: 'A prótese parecerá um dente natural?',
        a: 'Sim, personalizamos o alinhamento, textura e gengiva estética para um sorriso harmonioso e natural.',
      },
      {
        q: 'A prótese ajuda a suavizar rugas e rejuvenescer o rosto?',
        a: 'Sim, o restabelecimento do suporte labial e da altura da mordida rejuvenesce toda a musculatura facial.',
      },
      {
        q: 'Quais métodos de pagamento são aceitos?',
        a: 'Cartões de crédito (Visa, MasterCard), transferências bancárias e dinheiro em EUR, USD e GBP.',
      },
      {
        q: 'Posso parcelar o tratamento?',
        a: 'Sim, o pagamento é dividido de forma flexível entre as etapas de atendimento.',
      },
      {
        q: 'Qual a garantia oferecida?',
        a: 'Garantia Vitalícia nos implantes e 5 anos de garantia clínica na prótese dentária.',
      },
      {
        q: 'Posso transformar minha prótese antiga em prótese de clique?',
        a: 'Sim, instalando de 2 a 4 implantes podemos adaptar sua prótese atual com encaixes de alta pressão.',
      },
    ],
  },
  es: {
    title: 'Preguntas Frecuentes Sobre Prótesis Dentales y Sobredentaduras',
    subText:
      'Todo lo que necesita saber sobre sobredentaduras con anclaje sobre implantes, prótesis sin paladar y confort en Estambul.',
    items: [
      {
        q: '¿Qué es una Sobredentadura con anclaje y cómo evita que se mueva?',
        a: 'Es una prótesis que se acopla firmemente sobre 2 a 4 implantes mediante anclajes Locator («clic»), eliminando por completo cualquier desplazamiento al comer o hablar.',
      },
      {
        q: '¿Cuál es la diferencia entre Sobredentadura y dientes fijos All-on-4/6?',
        a: 'La sobredentadura es removible por el paciente para facilitar su higiene y es más económica. All-on-4/6 es una prótesis atornillada fija.',
      },
      {
        q: '¿Se puede hacer una prótesis superior sin cubrir el paladar?',
        a: '¡Sí! Al colocar 4 implantes superiores, se elimina la base de acrílico del paladar, recuperando el sentido del gusto.',
      },
      {
        q: '¿Cuánto duran las prótesis y los implantes?',
        a: 'Los implantes son para toda la vida. La prótesis dura de 7 a más de 12 años y los retenedores se cambian en minutos.',
      },
      {
        q: '¿Es doloroso el tratamiento en Estambul?',
        a: 'No, es 100% indoloro con anestesia local avanzada y opción de sedación consciente.',
      },
      {
        q: '¿Cuántos días de estancia en Estambul se necesitan?',
        a: 'Prótesis convencional: 4–6 días. Prótesis sobre implantes: 2 viajes cortos (1º viaje: 3 días; 2º viaje: 4–5 días).',
      },
      {
        q: '¿Puedo comer alimentos duros como carne y manzanas?',
        a: '¡Sí! Recupera entre el 85% y el 90% de la fuerza masticatoria natural sin miedo a que se desplace.',
      },
      {
        q: '¿Tendré que seguir usando pegamento para dentaduras?',
        a: '¡No! El bloqueo mecánico de los anclajes hace totalmente innecesario el uso de adhesivos.',
      },
      {
        q: '¿Qué materiales se emplean en las prótesis?',
        a: 'Acrílico Lucitone de alta resistencia al impacto, dientes compuestos multicapa y anclajes suizos/alemanes.',
      },
      {
        q: '¿Qué ocurre si se afloja un retenedor o se fractura?',
        a: 'Nuestra garantía clínica de 5 años cubre la reposición o reparación inmediata sin costes adicionales.',
      },
      {
        q: '¿Tendrán mis prótesis un aspecto natural?',
        a: 'Sí, personalizamos color, alineación y encía estética para que se integren de forma natural con su rostro.',
      },
      {
        q: '¿La prótesis rejuvenece el rostro y reduce arrugas?',
        a: 'Sí, al recuperar la altura facial y el soporte labial, se atenúan las arrugas peribucales.',
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
        q: '¿Qué garantía tienen los implantes y prótesis?',
        a: 'Garantía de por Vida en implantes de titanio y 5 Años de Garantía Oficial en la prótesis.',
      },
      {
        q: '¿Se puede adaptar mi prótesis actual a implantes?',
        a: 'Sí, tras colocar de 2 a 4 implantes podemos adaptar su prótesis con anclajes de precisión.',
      },
    ],
  },
  ru: {
    title: 'Часто задаваемые вопросы о зубных протезах и Overdentures',
    subText:
      'Все о покрывных протезах на имплантатах с замками Locator, съемных протезах без неба и фиксации в Стамбуле.',
    items: [
      {
        q: 'Что такое покрывной протез (Overdenture) на замках и почему он не выпадает?',
        a: 'Это съемная конструкция, которая прочно защелкивается на 2–4 имплантатах с помощью кнопочных замков Locator, полностью исключая смещение при еде и разговоре.',
      },
      {
        q: 'В чем разница между замковыми протезами и несъемными All-on-4/6?',
        a: 'Замковые протезы снимаются пациентом для легкой чистки и стоят значительно дешевле. All-on-4/6 — это полностью несъемные мосты на винтах.',
      },
      {
        q: 'Можно ли сделать верхний протез без искусственного неба?',
        a: 'Да! При установке 4 имплантатов верхнее пластиковое небо удаляется, возвращая 100% вкусовых ощущений.',
      },
      {
        q: 'Сколько служат протезы и замковые системы?',
        a: 'Имплантаты служат пожизненно. Протез служит 7–12+ лет. Удерживающие матрицы меняются за 2 минуты на осмотре.',
      },
      {
        q: 'Болезненно ли изготовление протезов в Стамбуле?',
        a: 'Процедура на 100% безболезненна благодаря качественной местной анестезии и возможности седации.',
      },
      {
        q: 'Сколько дней занимает лечение в Стамбуле?',
        a: 'Обычные протезы: 4–6 дней. Протезы на имплантатах: 2 поездки (1-й визит: 3 дня на имплантацию; 2-й визит: 4–5 дней на протез).',
      },
      {
        q: 'Можно ли жевать яблоки, мясо и твердую пищу?',
        a: 'Да! Замковые протезы на имплантах восстанавливают 85–90% силы естественного прикуса.',
      },
      {
        q: 'Нужен ли фиксирующий клей для протезов?',
        a: 'Нет! Механический замок надежно держит протез, делая фиксирующие кремы абсолютно ненужными.',
      },
      {
        q: 'Какие материалы используются для протезов?',
        a: 'Сверхпрочный акрил Lucitone, многослойные композитные зубы и швейцарские/немецкие замки Locator.',
      },
      {
        q: 'Что делать при ослаблении фиксации или поломке?',
        a: 'Наша 5-летняя гарантия обеспечивает бесплатную замену замков и починку протеза.',
      },
      {
        q: 'Выглядит ли протез естественно?',
        a: 'Да, форма зубов и рельеф десны моделируются индивидуально под черты вашего лица.',
      },
      {
        q: 'Устраняет ли протез возрастные складки вокруг рта?',
        a: 'Да, восстановление высоты прикуса и объема губ подтягивает овал лица и разглаживает морщины.',
      },
      {
        q: 'Какие способы оплаты принимаются?',
        a: 'Банковские карты (Visa, MasterCard), переводы и наличные в EUR, USD, GBP и RUB.',
      },
      {
        q: 'Возможна ли оплата в рассрочку?',
        a: 'Да, оплата распределяется поэтапно между визитами в клинику в Стамбуле.',
      },
      {
        q: 'Какая гарантия предоставляется?',
        a: 'Пожизненная гарантия на титановые имплантаты и 5 лет официальной гарантии на протез.',
      },
      {
        q: 'Можно ли переделать старый протез под замки на имплантах?',
        a: 'Да, установив 2–4 имплантата, мы можем модифицировать ваш существующий протез под замки.',
      },
    ],
  },
};

export default function TreatmentDenturesFAQSection() {
  const locale = useLocale();
  const dict = DENTURES_FAQ_DATA[locale] || DENTURES_FAQ_DATA.en;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section aria-labelledby="dentures-faq-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Head */}
        <div className={styles.head}>
          <div>
            <h2 id="dentures-faq-heading" className={styles.title}>
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
                  aria-controls={`dentures-faq-answer-${idx}`}
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
                    id={`dentures-faq-answer-${idx}`}
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
