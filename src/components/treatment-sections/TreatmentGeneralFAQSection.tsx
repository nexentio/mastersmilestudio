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

const GENERAL_FAQ_DATA: Record<string, FAQDictionary> = {
  en: {
    title: 'Frequently Asked Questions About General Dentistry & Oral Health',
    subText:
      'Everything you need to know about microscopic root canal therapy, ultrasonic cleaning, composite fillings, tooth extractions, and periodontal health in Antalya.',
    items: [
      {
        q: 'Why is general dentistry essential before cosmetic veneers or dental implants?',
        a: 'Healthy foundation is critical for any aesthetic or surgical dental work. Treating hidden cavities, curing active gum inflammation (gingivitis), and resolving root canal infections ensure that your new veneers, crowns, or implants are placed in a 100% sterile, stable, and infection-free oral environment.',
      },
      {
        q: 'Is root canal treatment painful with modern techniques?',
        a: 'Not at all. With advanced computer-controlled local anesthesia and high-magnification dental operating microscopes, root canal therapy is completely painless. Most patients report that it feels no different than getting a standard filling.',
      },
      {
        q: 'How many visits are needed for a root canal treatment in Antalya?',
        a: 'In over 90% of cases, our specialist endodontists complete microscopic root canal therapy in a single 60-to-90-minute session. In cases of severe periapical infection, a secondary medication dressing appointment may be scheduled 48 hours later.',
      },
      {
        q: 'What is the difference between silver amalgam and composite fillings?',
        a: 'Silver amalgam fillings contain 50% elemental mercury and expand/contract with temperature, frequently causing micro-fractures in surrounding enamel. Modern nano-hybrid composite fillings are 100% biocompatible, bonded chemically to the tooth structure, and perfectly matched to your natural tooth shade.',
      },
      {
        q: 'When is a surgical wisdom tooth extraction necessary?',
        a: 'Extraction is indicated if the wisdom tooth is impacted beneath the gum, growing horizontally against adjacent molars, causing chronic pericoronitis (gum infection), or creating cystic lesions. We use 3D CBCT imaging to perform minimally invasive, atraumatic extractions.',
      },
      {
        q: 'How often should I get professional ultrasonic teeth cleaning and Air-Flow scaling?',
        a: 'Dentists globally recommend professional scaling every 6 months. Patients with a history of periodontal disease or heavy tobacco/coffee consumption benefit from maintenance cleanings every 3 to 4 months.',
      },
      {
        q: 'What are the main warning signs of periodontal gum disease (Periodontitis)?',
        a: 'Key warning signs include red or swollen gums, persistent bleeding while brushing or flossing, chronic bad breath (halitosis), receding gum lines making teeth look longer, and teeth feeling slightly loose or tender when chewing.',
      },
      {
        q: 'Can an infected tooth always be saved with root canal therapy?',
        a: 'Microscopic endodontics has a success rate of over 95%. However, if the tooth has a vertical root fracture, severe bone loss from untreatable periodontitis, or insufficient remaining crown structure, gentle extraction and implant replacement may be recommended.',
      },
      {
        q: 'How does laser periodontal curettage help bleeding gums?',
        a: 'Soft-tissue diode laser therapy selectively vaporizes diseased pocket epithelium and eliminates pathogenic anaerobic bacteria deep beneath the gum line without cutting or suturing, accelerating tissue reattachment and gum healing.',
      },
      {
        q: 'What is dental sedation and is it available for anxious patients?',
        a: 'Yes. For patients with severe dental anxiety or undergoing multiple extractions, we offer conscious intravenous (IV) sedation administered by certified anesthesiologists, allowing you to relax comfortably throughout your entire appointment.',
      },
      {
        q: 'How do ceramic inlays and onlays differ from standard composite fillings?',
        a: 'When more than 50% of a molar is decayed or damaged, standard fillings can fracture under heavy chewing loads. CAD/CAM ceramic inlays and onlays are precision-milled from solid monolithic porcelain, offering 5x higher strength and a 15–20+ year lifespan.',
      },
      {
        q: 'What should I do if I experience a sudden dental emergency while visiting Antalya?',
        a: 'Contact Master Smile Studio immediately via our 24/7 WhatsApp emergency line. We provide same-day emergency triage, 3D diagnostic imaging, pain relief, and acute restorative care.',
      },
      {
        q: 'Does professional deep teeth cleaning damage my natural enamel?',
        a: 'No. Ultrasonic scalers use microscopic acoustic vibrations and water irrigation to gently detach hard calculus (tartar) from the tooth surface without abrading or scraping the underlying enamel layer.',
      },
      {
        q: 'What causes persistent bad breath (halitosis) and how is it cured?',
        a: 'Over 85% of halitosis originates from bacterial biofilms on the tongue and inside deep periodontal pockets. Professional ultrasonic scaling, laser curettage, and eliminating untreated decay resolve bad breath at the root cause.',
      },
      {
        q: 'What hygiene and sterilization standards are practiced at Master Smile Studio?',
        a: 'Our clinic strictly complies with European ISO and CE class-B hospital autoclave sterilization standards. Every instrument is individually sealed, tracked, and opened directly in front of the patient.',
      },
      {
        q: 'Can all my general dentistry treatments be completed during a short vacation?',
        a: 'Yes. Thanks to our in-house 3D CBCT diagnostics, digital scanners, and CAD/CAM milling units, cleanings, root canals, wisdom tooth extractions, and ceramic fillings are completed within 1 to 3 days in Antalya.',
      },
    ],
  },
  tr: {
    title: 'Genel Diş Hekimliği & Ağız Sağlığı Hakkında Sıkça Sorulan Sorular',
    subText:
      'Mikroskobik kanal tedavisi, diş taşı temizliği (Air-Flow), estetik kompozit dolgular, 20’lik diş çekimleri ve diş eti sağlığı hakkında tüm klinik detaylar.',
    items: [
      {
        q: 'Estetik lamine veya implant öncesi genel diş tedavileri neden şarttır?',
        a: 'Sağlıklı bir temel olmadan yapılan hiçbir estetik veya cerrahi işlem uzun ömürlü olamaz. Gizli çürüklerin temizlenmesi, diş eti iltihabının kurutulması ve kök ucu enfeksiyonlarının giderilmesi yeni kaplamalarınızın ve implantlarınızın %100 steril bir ortamda tutunmasını sağlar.',
      },
      {
        q: 'Modern tekniklerle kanal tedavisi sırasında ağrı hissedilir mi?',
        a: 'Hayır, kesinlikle hissedilmez. Bilgisayarlı lokal anestezi sistemleri ve yüksek büyütmeli dental mikroskoplar sayesinde kanal tedavisi tamamen ağrısız ve konforlu şekilde tamamlanır.',
      },
      {
        q: 'Antalya’da bir kanal tedavisi kaç seansta tamamlanır?',
        a: 'Vakaların %90’ından fazlasında mikroskobik kanal tedavisi tek bir 60-90 dakikalık seansta bitirilir. Çok ileri derece enfeksiyonlu dişlerde 48 saat sonra ikinci bir pansuman seansı gerekebilir.',
      },
      {
        q: 'Gümüş amalgam dolgu ile estetik kompozit dolgu arasındaki fark nedir?',
        a: 'Amalgam dolgular %50 oranında cıva içerir ve sıcak-soğukta genleşerek dişte mikro çatlaklara yol açar. Modern nanokompozit dolgular ise biyouyumludur, dişe kimyasal olarak bağlanır ve doğal diş rengindedir.',
      },
      {
        q: 'Gömülü 20’lik (akıl) dişlerinin çekimi ne zaman gereklidir?',
        a: '20’lik diş kemik içinde yan duruyorsa, öndeki azı dişini sıkıştırıp çürütüyorsa, tekrarlayan diş eti iltihabına (perikoronitis) veya kiste yol açıyorsa 3D tomografi eşliğinde cerrahi olarak çekilmelidir.',
      },
      {
        q: 'Diş taşı temizliği ve Air-Flow bakımı ne sıklıkla yapılmalıdır?',
        a: 'Diş hekimliği standartlarına göre 6 ayda bir düzenli temizlik önerilir. Diş eti hastalığı geçmişi olan veya yoğun sigara/kahve tüketen bireylerde 3-4 ayda bir yapılması diş kayıplarını önler.',
      },
      {
        q: 'Diş eti hastalığının (Periodontitis) en belirgin uyarı işaretleri nelerdir?',
        a: 'Fırçalarken veya kendiliğinden kanayan kırmızı-şiş diş etleri, inatçı ağız kokusu, diş etlerinin çekilerek diş boyunun uzaması ve çiğneme sırasında dişlerde hafif sallanma en önemli belirtilerdir.',
      },
      {
        q: 'İltihaplı her diş kanal tedavisi ile kurtarılabilir mi?',
        a: 'Mikroskobik endodonti tedavilerinin başarı oranı %95’in üzerindedir. Ancak dişte dikey kök kırığı varsa veya ileri derece kemik erimesi sonucu tutuculuk kalmamışsa çekim ve implant önerilir.',
      },
      {
        q: 'Lazer destekli diş eti küretajı kanamaları nasıl durdurur?',
        a: 'Diyot lazer ışınları, diş eti cebindeki hastalıklı dokuları ve iltihap yapan zararlı bakterileri neştersiz ve dikişsiz olarak buharlaştırır; diş etinin kök yüzeyine yeniden sıkıca yapışmasını sağlar.',
      },
      {
        q: 'Diş hekimi korkusu olan hastalar için sedasyon (uyutarak tedavi) var mı?',
        a: 'Evet. Yoğun dişçi korkusu (fobi) olan veya çoklu cerrahi işlem yaptıracak hastalarımız için uzman anestezi hekimlerimiz gözetiminde güvenli bilinçli sedasyon uygulanmaktadır.',
      },
      {
        q: 'Porselen dolgular (Inlay/Onlay) standart dolgulardan neden daha üstündür?',
        a: 'Dişin yarısından fazlası çürümüşse standart dolgular çiğneme basıncıyla kırılabilir. CAD/CAM porselen dolgular (Onlay) fırında pişen yekpare seramikten üretilir; kırılmaz ve 15-20+ yıl dayanır.',
      },
      {
        q: 'Antalya seyahatim sırasında acil diş ağrısı yaşarsam ne yapmalıyım?',
        a: 'Kliniğimizin 7/24 aktif WhatsApp acil hattından bize hemen ulaşabilirsiniz. Aynı gün içinde acil randevu, 3D tomografi ve anında ağrı dindirici müdahale sağlanır.',
      },
      {
        q: 'Ultrasonik diş temizliği diş minemi çizer veya zarar verir mi?',
        a: 'Hayır. Ultrasonik cihazlar mikroskobik ses dalgası titreşimleri ve su püskürtmesiyle çalışır. Diş minesini kazımaz, sadece mine üzerindeki sertleşmiş kireç tabakasını (tartarı) uzaklaştırır.',
      },
      {
        q: 'Kronik ağız kokusu (halitozis) neden olur ve nasıl tedavi edilir?',
        a: 'Ağız kokusunun %85’i diş taşları, diş eti ceplerindeki anaerobik bakteriler ve tedavi edilmemiş çürüklerden kaynaklanır. Profesyonel derin temizlik ve lazer küretaj kokuyu kaynağında yok eder.',
      },
      {
        q: 'Master Smile Studio’da uygulanan hijyen ve sterilizasyon standartları nelerdir?',
        a: 'Kliniğimizde Avrupa standartlarında B-sınıfı hastane tipi otoklav sterilizasyonu uygulanır. Tüm el aletleri kişiye özel poşetlenir, barkodlanır ve hastanın gözü önünde açılır.',
      },
      {
        q: 'Genel diş tedavilerim kısa bir Antalya tatili sırasında biter mi?',
        a: 'Evet. Dijital görüntüleme sistemlerimiz ve kendi laboratuvarımız sayesinde diş temizliği, kanal tedavileri, 20’lik diş çekimleri ve porselen dolgular 1 ila 3 günde tamamlanır.',
      },
    ],
  },
  de: {
    title: 'Häufig gestellte Fragen zu Allgemeiner Zahnmedizin & Prophylaxe',
    subText:
      'Alles über mikroskopische Wurzelbehandlung, Air-Flow Zahnreinigung, Kompositfüllungen, Weisheitszähne und Parodontitistherapie in Antalya.',
    items: [
      {
        q: 'Warum ist die allgemeine Zahnheilkunde vor Veneers oder Implantaten so wichtig?',
        a: 'Ein gesundes Fundament ist die Voraussetzung für jeden ästhetischen Eingriff. Die Beseitigung von Karies und Zahnfleischentzündungen garantiert eine sterile und dauerhafte Basis für Ihre neuen Zähne.',
      },
      {
        q: 'Ist eine Wurzelbehandlung mit modernen Methoden schmerzhaft?',
        a: 'Nein. Dank computergesteuerter Lokalanästhesie und Dentalmikroskop verläuft die Behandlung vollkommen schmerzfrei und entspannt.',
      },
      {
        q: 'Wie viele Sitzungen sind für eine Wurzelbehandlung erforderlich?',
        a: 'In über 90% der Fälle wird die Behandlung in einer einzigen Sitzung von 60 bis 90 Minuten erfolgreich abgeschlossen.',
      },
      {
        q: 'Was ist der Unterschied zwischen Amalgam und Kompositfüllungen?',
        a: 'Amalgam enthält Quecksilber und kann Mikrorisse verursachen. Moderne Nanokomposite sind 100% biokompatibel, zahnfarben und gehen einen stabilen chemischen Verbund mit dem Zahn ein.',
      },
      {
        q: 'Wann müssen Weisheitszähne operativ entfernt werden?',
        a: 'Wenn Weisheitszähne impaktiert sind, Nachbarzähne schädigen, Entzündungen oder Zysten verursachen. Wir nutzen 3D CBCT für schonende, atraumatische Eingriffe.',
      },
      {
        q: 'Wie oft sollte eine professionelle Air-Flow Zahnreinigung durchgeführt werden?',
        a: 'Zahnärzte empfehlen eine professionelle Prophylaxe alle 6 Monate, bei Parodontitisneigung alle 3 bis 4 Monate.',
      },
      {
        q: 'Was sind typische Symptome einer Parodontitis (Zahnfleischerkrankung)?',
        a: 'Zahnfleischbluten, Schwellungen, anhaltender Mundgeruch, Zahnfleischrückgang und lockere Zähne beim Kauen.',
      },
      {
        q: 'Kann jeder entzündete Zahn durch eine Wurzelbehandlung gerettet werden?',
        a: 'Die Erfolgsquote liegt bei über 95%. Bei Längsfrakturen der Wurzel oder extremem Knochenverlust ist eine Extraktion mit Implantatversorgung ratsam.',
      },
      {
        q: 'Wie hilft Laser-Kürettage bei Zahnfleischbluten?',
        a: 'Der Diodenlaser beseitigt Bakterien und entzündetes Gewebe in den Zahnfleischtaschen ohne Skalpell und Nähte für eine schnelle Geweberegeneration.',
      },
      {
        q: 'Gibt es Behandlungen unter Sedierung für Angstpatienten?',
        a: 'Ja, wir bieten sichere Dämmerschlafnarkose (Sedierung) unter Aufsicht erfahrener Fachärzte für Anästhesiologie an.',
      },
      {
        q: 'Warum sind Keramik-Inlays besser als herkömmliche Füllungen?',
        a: 'Bei großen Defekten brechen normale Füllungen leicht. CAD/CAM Keramik-Inlays bieten höchste Stabilität, Passgenauigkeit und halten 15–20+ Jahre.',
      },
      {
        q: 'Was tun bei einem zahnärztlichen Notfall während des Antalya-Aufenthalts?',
        a: 'Über unseren 24/7 Notfall-WhatsApp-Service erhalten Sie sofortige Hilfe, Diagnostik und Schmerzlinderung am selben Tag.',
      },
      {
        q: 'Beschädigt Ultraschall-Zahnreinigung den Zahnschmelz?',
        a: 'Nein. Ultraschall arbeitet mit sanften Schwingungen und Wasserspülung und entfernt nur harten Zahnstein, ohne den Schmelz anzugreifen.',
      },
      {
        q: 'Was verursacht chronischen Mundgeruch und wie wird er behandelt?',
        a: 'Über 85% der Ursachen liegen in Zahnfleischtaschen und Belägen. Eine Tiefenreinigung und Lasertherapie beseitigen die Ursache dauerhaft.',
      },
      {
        q: 'Welche Sterilisationsstandards gelten bei Master Smile Studio?',
        a: 'Wir arbeiten nach strengsten europäischen B-Klasse Krankenhaus-Standards mit lückenlos dokumentierter Autoklaven-Sterilisation.',
      },
      {
        q: 'Können alle Behandlungen während einer kurzen Reise abgeschlossen werden?',
        a: 'Ja, dank unseres internen CAD/CAM-Labors und 3D-Röntgens dauern die meisten Behandlungen nur 1 bis 3 Tage in Antalya.',
      },
    ],
  },
  pl: {
    title: 'Często Zadawane Pytania o Stomatologię Ogólną i Zdrowie Jamy Ustnej',
    subText:
      'Wszystko o leczeniu kanałowym pod mikroskopem, higienizacji Air-Flow, wypełnieniach kompozytowych, usuwaniu ósemek i leczeniu dziąseł w Antalyi.',
    items: [
      {
        q: 'Dlaczego stomatologia zachowawcza jest kluczowa przed licówkami lub implantami?',
        a: 'Zdrowe podłoże to podstawa każdego zabiegu estetycznego. Wyleczenie próchnicy, likwidacja stanów zapalnych dziąseł i infekcji okołowierzchołkowych gwarantuje sterylne warunki dla nowych licówek i implantów.',
      },
      {
        q: 'Czy leczenie kanałowe boli przy użyciu nowoczesnych technik?',
        a: 'Zupełnie nie. Dzięki komputerowemu znieczuleniu miejscowemu i pracy pod mikroskopem zabieg jest w 100% bezbolesny i komfortowy.',
      },
      {
        q: 'Ile wizyt wymaga leczenie kanałowe w Antalyi?',
        a: 'W ponad 90% przypadków mikroskopowe leczenie endodontyczne kończymy podczas jednej 60–90 minutowej wizyty.',
      },
      {
        q: 'Jaka jest różnica między plombą amalgamatową a kompozytową?',
        a: 'Amalgamat zawiera rtęć i powoduje mikropęknięcia zęba. Nowoczesne nanokompozyty są w 100% biokompatybilne, estetyczne i łączą się chemicznie ze szkliwem.',
      },
      {
        q: 'Kiedy konieczne jest chirurgiczne usunięcie zęba mądrości (ósemki)?',
        a: 'Gdy ząb jest zatrzymany w kości, uciska sąsiednie zęby, powoduje nawracające stany zapalne lub torbiele. Zabieg wykonujemy atraumatycznie pod kontrolą tomografii 3D CBCT.',
      },
      {
        q: 'Jak często należy wykonywać profesjonalny skaling i piaskowanie Air-Flow?',
        a: 'Zaleca się higienizację co 6 miesięcy, a u pacjentów ze skłonnością do paradontozy co 3–4 miesiące.',
      },
      {
        q: 'Jakie są główne objawy paradontozy (chorób przyzębia)?',
        a: 'Krwawienie dziąseł podczas szczotkowania, obrzęk, nieświeży oddech, cofanie się dziąseł i ruchomość zębów.',
      },
      {
        q: 'Czy każdy zakażony ząb można uratować leczeniem kanałowym?',
        a: 'Skuteczność endodoncji mikroskopowej wynosi ponad 95%. Jedynie przy pionowych pęknięciach korzenia konieczna bywa ekstrakcja i implantacja.',
      },
      {
        q: 'Jak laserowy kiretaż dziąseł pomaga przy krwawieniu?',
        a: 'Laser diodowy sterylizuje kieszonki dziąsłowe, eliminuje bakterie beztlenowe bez nacinania i szwów, przyspieszając gojenie.',
      },
      {
        q: 'Czy oferujecie sedację dla pacjentów odczuwających lęk przed dentystą?',
        a: 'Tak, oferujemy bezpieczną sedację wziewną i dożylną pod nadzorem lekarza anestezjologa.',
      },
      {
        q: 'Dlaczego nakłady ceramiczne (Inlay/Onlay) są lepsze od zwykłych plomb?',
        a: 'Przy dużych ubytkach tradycyjna plomba pęka. Ceramiczne Inlay/Onlay frezowane w technologii CAD/CAM są 5x mocniejsze i służą 15–20+ lat.',
      },
      {
        q: 'Co zrobić w przypadku nagłego bólu zęba podczas pobytu w Antalyi?',
        a: 'Należy natychmiast skontaktować się z naszą całodobową infolinią WhatsApp. Zapewniamy pomoc doraźną i diagnostykę w tym samym dniu.',
      },
      {
        q: 'Czy ultradźwiękowe usuwanie kamienia niszczy szkliwo?',
        a: 'Nie. Ultradźwięki delikatnie kruszą złogi kamienia za pomocą drgań i wody, nie rysując powierzchni szkliwa.',
      },
      {
        q: 'Co powoduje przewlekły nieświeży oddech (halitozę)?',
        a: 'W 85% przypadków źródłem są bakterie w kieszonkach dziąsłowych i ubytki próchnicowe. Profesjonalne czyszczenie likwiduje przyczynę.',
      },
      {
        q: 'Jakie standardy sterylizacji obowiązują w Master Smile Studio?',
        a: 'Stosujemy rygorystyczne europejskie procedury autoklawów klasy B; każdy pakiet narzędzi otwierany jest bezpośrednio przy pacjencie.',
      },
      {
        q: 'Czy zabiegi stomatologii ogólnej można zrealizować podczas krótkiego wyjazdu?',
        a: 'Tak, większość procedur (czyszczenie, leczenie kanałowe, plomby, ekstrakcje) realizujemy w ciągu 1–3 dni w Antalyi.',
      },
    ],
  },
  pt: {
    title: 'Perguntas Frequentes Sobre Clínica Geral e Saúde Bucal',
    subText:
      'Tudo sobre tratamento de canal microscópico, limpeza Air-Flow, restaurações em resina, extração de sisos e saúde periodontal em Antalya.',
    items: [
      {
        q: 'Por que a odontologia preventiva é essencial antes de facetas ou implantes?',
        a: 'Uma base biológica saudável é essencial para o sucesso a longo prazo. Tratar cáries, gengivites e infecções de canal garante um ambiente 100% estéril para novos dentes e implantes.',
      },
      {
        q: 'O tratamento de canal dói com técnicas modernas?',
        a: 'Não. Com anestesia computadorizada e microscópio operatório, o procedimento é completamente indolor e seguro.',
      },
      {
        q: 'Quantas consultas são necessárias para um canal em Antalya?',
        a: 'Em mais de 90% dos casos, realizamos o canal microscópico em sessão única de 60 a 90 minutos.',
      },
      {
        q: 'Qual a diferença entre amálgama de prata e resina composta?',
        a: 'O amálgama contém mercúrio e causa microtrincas no dente. As resinas compostas são biocompatíveis, estéticas e coladas quimicamente ao esmalte.',
      },
      {
        q: 'Quando a extração de dente do siso é indicada?',
        a: 'Quando os sisos estão inclusos, comprimem raízes vizinhas, causam infecções recorrentes ou cistos. Realizamos cirurgias guiadas por tomografia 3D.',
      },
      {
        q: 'Com que frequência devo fazer profilaxia ultrassônica e Air-Flow?',
        a: 'Recomenda-se a limpeza profissional a cada 6 meses, ou a cada 3 a 4 meses para pacientes com histórico de problemas gengivais.',
      },
      {
        q: 'Quais os sinais de alerta de doença periodontal (periodontite)?',
        a: 'Sangramento ao escovar, gengivas inchadas, mau hálito persistente, retração gengival e dentes com leve mobilidade.',
      },
      {
        q: 'Todo dente inflamado pode ser salvo com canal?',
        a: 'A endodontia microscópica tem mais de 95% de sucesso. Apenas dentes com fratura vertical da raiz requerem extração e implante.',
      },
      {
        q: 'Como a curetagem a laser trata o sangramento gengival?',
        a: 'O laser de diodo esteriliza as bolsas periodontais e elimina bactérias sem cortes nem pontos, promovendo rápida regeneração.',
      },
      {
        q: 'Existe sedação para pacientes com fobia de dentista?',
        a: 'Sim, realizamos sedação consciente com médico anestesiologista para garantir total tranquilidade durante os procedimentos.',
      },
      {
        q: 'Por que restaurações cerâmicas (Inlays/Onlays) são superiores?',
        a: 'Para cavidades extensas, as resinas comuns podem fraturar. Inlays cerâmicos em CAD/CAM oferecem alta resistência e duram de 15 a mais de 20 anos.',
      },
      {
        q: 'O que fazer em caso de dor de dente súbita em Antalya?',
        a: 'Entre em contato com nossa linha de emergência 24/7 no WhatsApp para atendimento e alívio imediato no mesmo dia.',
      },
      {
        q: 'A limpeza ultrassônica desgasta o esmalte dos dentes?',
        a: 'Não. O ultrassom atua apenas sobre o tártaro endurecido por meio de vibrações suaves e água, sem danificar o esmalte.',
      },
      {
        q: 'O que causa o mau hálito crônico e como eliminá-lo?',
        a: 'Mais de 85% dos casos se originam em bolsas periodontais e cáries. A profilaxia profunda e o laser resolvem o problema na raiz.',
      },
      {
        q: 'Quais os padrões de esterilização na Master Smile Studio?',
        a: 'Seguimos rigorosamente os padrões hospitalares europeus com autoclaves classe B e embalagens estéreis abertas na presença do paciente.',
      },
      {
        q: 'É possível concluir os tratamentos clínicos em uma viagem curta?',
        a: 'Sim, graças à tecnologia digital CAD/CAM e tomografia 3D, a maioria dos tratamentos é realizada em 1 a 3 dias em Antalya.',
      },
    ],
  },
  es: {
    title: 'Preguntas Frecuentes Sobre Odontología General y Salud Bucal',
    subText:
      'Todo lo que necesita saber sobre endodoncia microscópica, limpieza Air-Flow, empastes de composite, muelas del juicio y periodoncia en Antalya.',
    items: [
      {
        q: '¿Por qué la odontología general es fundamental antes de carillas o implantes?',
        a: 'Una base biológica sana es imprescindible para el éxito de cualquier tratamiento estético. Tratar caries e inflamaciones gingivales asegura un entorno estéril para carillas e implantes.',
      },
      {
        q: '¿Duele una endodoncia (tratamiento de conductos) con tecnología moderna?',
        a: 'No. Con anestesia local computarizada y microscopio dental, la endodoncia es 100% indolora y cómoda.',
      },
      {
        q: '¿Cuántas sesiones se necesitan para una endodoncia en Antalya?',
        a: 'En más del 90% de los casos, la endodoncia microscópica se realiza en una sola cita de 60 a 90 minutos.',
      },
      {
        q: '¿Qué diferencia hay entre empastes de amalgama de plata y composite?',
        a: 'La amalgama contiene mercurio y causa microfracturas. Los nanocomposites actuales son biocompatibles, estéticos y se adhieren químicamente al diente.',
      },
      {
        q: '¿Cuándo es necesaria la extracción quirúrgica de las muelas del juicio?',
        a: 'Cuando están impactadas, dañan piezas adyacentes o provocan infecciones recurrentes. Realizamos cirugías atraumáticas guiadas por TAC 3D CBCT.',
      },
      {
        q: '¿Con qué frecuencia se debe realizar una limpieza por ultrasonidos y Air-Flow?',
        a: 'Se recomienda una limpieza profesional cada 6 meses, o cada 3 a 4 meses en pacientes con antecedentes periodontales.',
      },
      {
        q: '¿Cuáles son los signos de alarma de la periodontitis?',
        a: 'Sangrado gingival al cepillarse, encías inflamadas, mal aliento persistente, retracción de encías y dientes con movilidad.',
      },
      {
        q: '¿Se puede salvar siempre un diente infectado con una endodoncia?',
        a: 'La tasa de éxito de la endodoncia microscópica supera el 95%. Solo fracturas verticales de raíz hacen necesaria la extracción y el implante.',
      },
      {
        q: '¿Cómo ayuda el curetaje con láser a detener el sangrado de encías?',
        a: 'El láser de diodo esteriliza las bolsas periodontales y elimina bacterias sin bisturí ni puntos, acelerando la regeneración tisular.',
      },
      {
        q: '¿Existe sedación para pacientes con fobia al dentista?',
        a: 'Sí, disponemos de sedación consciente administrada por médicos anestesistas para una experiencia relajada y sin estrés.',
      },
      {
        q: '¿Por qué los inlays/onlays cerámicos son mejores que los empastes grandes?',
        a: 'En caries extensas, el composite normal puede fracturarse. Las incrustaciones cerámicas en CAD/CAM son 5 veces más resistentes y duran 15–20+ años.',
      },
      {
        q: '¿Qué hacer ante una urgencia dental durante la estancia en Antalya?',
        a: 'Contacte con nuestra línea de urgencias WhatsApp 24/7 para atención, diagnóstico y alivio inmediato en el mismo día.',
      },
      {
        q: '¿La limpieza por ultrasonidos daña el esmalte dental?',
        a: 'No. El ultrasonido actúa exclusivamente desprendiendo el sarro con vibraciones suaves y agua sin desgastar el esmalte.',
      },
      {
        q: '¿Qué causa el mal aliento crónico (halitosis) y cómo se soluciona?',
        a: 'En más del 85% de los casos se origina en bacterias de las bolsas periodontales. La limpieza profunda y el láser lo eliminan de raíz.',
      },
      {
        q: '¿Qué estándares de higiene y esterilización se aplican en Master Smile Studio?',
        a: 'Cumplimos rigurosamente los estándares hospitalarios europeos con autoclaves de clase B e instrumental embolsado individualmente.',
      },
      {
        q: '¿Se pueden realizar todos los tratamientos en una estancia corta?',
        a: 'Sí, gracias a nuestra tecnología digital CAD/CAM y TAC 3D, la mayoría de los tratamientos se completan en 1 a 3 días en Antalya.',
      },
    ],
  },
  ru: {
    title: 'Часто задаваемые вопросы об общей стоматологии и здоровье зубов',
    subText:
      'Все о лечении каналов под микроскопом, чистке Air-Flow, эстетических пломбах, удалении зубов мудрости и лечении десен в Анталье.',
    items: [
      {
        q: 'Почему общая терапия обязательна перед установкой виниров или имплантов?',
        a: 'Здоровый фундамент — залог долговечности любой конструкции. Устранение скрытого кариеса и воспаления десен обеспечивает 100% стерильную среду для приживления имплантов и фиксации виниров.',
      },
      {
        q: 'Больно ли лечить каналы зуба с современным оборудованием?',
        a: 'Совершенно нет. Компьютерная анестезия и лечение под дентальным микроскопом делают процедуру полностью безболезненной и комфортной.',
      },
      {
        q: 'Сколько визитов требуется для лечения каналов в Анталье?',
        a: 'В более чем 90% случаев микроскопическое эндодонтическое лечение завершается за 1 сеанс длительностью 60–90 минут.',
      },
      {
        q: 'В чем разница между серебряной амальгамой и композитными пломбами?',
        a: 'Амальгама содержит ртуть и вызывает микротрещины зуба. Современные нанокомпозиты биосовместимы, эстетичны и химически связываются с тканями зуба.',
      },
      {
        q: 'Когда необходимо хирургическое удаление зубов мудрости?',
        a: 'При ретенции (залегании в кости), давлении на соседние зубы, частых воспалениях или кистах. Мы проводим атравматичное удаление под контролем 3D CBCT.',
      },
      {
        q: 'Как часто нужно делать ультразвуковую чистку и Air-Flow?',
        a: 'Профессиональная гигиена рекомендована каждые 6 месяцев, а при склонности к пародонтиту — каждые 3–4 месяца.',
      },
      {
        q: 'Каковы главные признаки заболеваний десен (пародонтита)?',
        a: 'Кровоточивость при чистке зубов, отечность, неприятный запах изо рта, оголение шеек зубов и подвижность зубов.',
      },
      {
        q: 'Всегда ли можно спасти воспаленный зуб лечением каналов?',
        a: 'Эффективность эндодонтии под микроскопом превышает 95%. Удаление с последующей имплантацией требуется лишь при продольных трещинах корня.',
      },
      {
        q: 'Как лазерный кюретаж помогает при кровоточивости десен?',
        a: 'Диодный лазер стерилизует пародонтальные карманы и уничтожает бактерии без разрезов и швов, стимулируя быстрое прикрепление десны.',
      },
      {
        q: 'Есть ли седация для пациентов со страхом перед стоматологом?',
        a: 'Да, мы проводим лечение в состоянии медикаментозного сна (седации) под контролем опытных врачей-анестезиологов.',
      },
      {
        q: 'Почему керамические вкладки Inlay/Onlay лучше обычных пломб?',
        a: 'При разрушении более 50% зуба обычная пломба скалывается. Керамические вкладки CAD/CAM в 5 раз прочнее и служат 15–20+ лет.',
      },
      {
        q: 'Что делать при острой зубной боли во время визита в Анталью?',
        a: 'Свяжитесь с нашей круглосуточной службой WhatsApp 24/7 для экстренного приема, 3D диагностики и снятия боли в день обращения.',
      },
      {
        q: 'Повреждает ли ультразвуковая чистка зубную эмаль?',
        a: 'Нет. Ультразвук воздействует исключительно на затвердевший налет и зубной камень с помощью колебаний и воды, не травмируя эмаль.',
      },
      {
        q: 'Что вызывает хронический неприятный запах изо рта (галитоз)?',
        a: 'В 85% случаев причина кроется в пародонтальных карманах и кариозных полостях. Глубокая гигиена и лазер устраняют причину.',
      },
      {
        q: 'Какие стандарты стерилизации соблюдаются в Master Smile Studio?',
        a: 'Мы работаем по европейским больничным стандартам с автоклавами класса B. Все инструменты вскрываются строго при пациенте.',
      },
      {
        q: 'Можно ли пройти все терапевтические процедуры за короткую поездку?',
        a: 'Да, благодаря 3D томографии и собственному CAD/CAM оборудованию большинство процедур занимает от 1 до 3 дней в Анталье.',
      },
    ],
  },
};

export default function TreatmentGeneralFAQSection() {
  const locale = useLocale();
  const dict = GENERAL_FAQ_DATA[locale] || GENERAL_FAQ_DATA.en;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section aria-labelledby="general-faq-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Head */}
        <div className={styles.head}>
          <div>
            <h2 id="general-faq-heading" className={styles.title}>
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
                  aria-controls={`general-faq-answer-${idx}`}
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
                    id={`general-faq-answer-${idx}`}
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
