'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './GeneralDentistryAccordionSection.module.css';

interface TreatmentAccordionItem {
  id: string;
  href: string;
  img: string;
  title: string;
  forWho: string;
  desc: string;
  readMore: string;
}

interface SectionDictionary {
  title: string;
  subtitle: string;
  items: TreatmentAccordionItem[];
}

const SECTION_I18N: Record<string, SectionDictionary> = {
  en: {
    title: 'Find the Right Treatment for You',
    subtitle: 'Not sure which dental treatment suits your needs? Browse through our treatment options to see who each procedure is for and what it offers so you can make informed decisions about your dental care.',
    items: [
      {
        id: 'cleaning',
        href: '/treatments/general-dentistry/dental-cleaning',
        img: '/treatments/dental-cleaning-scaling.jpg',
        title: 'Dental Cleaning (Scaling & Polishing)',
        forWho: 'Patients with gum bleeding, bad breath, or tartar buildup',
        desc: 'Gum health is preserved and enamel protected by cleaning hardened tartar, bacterial plaque, and surface stains with ultrasonic scaling and Swiss Air-Flow polishing.',
        readMore: 'READ MORE',
      },
      {
        id: 'fillings',
        href: '/treatments/general-dentistry/tooth-fillings',
        img: '/treatments/tooth-fillings-amalgam-composite.jpg',
        title: 'Tooth Fillings (Amalgam/Composite)',
        forWho: 'Patients with decayed, chipped, or broken teeth',
        desc: 'The decayed portion of the tooth is gently cleaned and rebuilt using high-strength, tooth-colored aesthetic nanocomposite material.',
        readMore: 'READ MORE',
      },
      {
        id: 'root-canal',
        href: '/treatments/general-dentistry/root-canal',
        img: '/treatments/root-canal-treatment-endodontics.jpg',
        title: 'Root Canal Treatment',
        forWho: 'Patients with an inflamed tooth nerve due to deep decay and severe pain',
        desc: 'The infected dental pulp is meticulously cleaned and disinfected under a dental microscope, sealing the canals to save your natural tooth.',
        readMore: 'READ MORE',
      },
      {
        id: 'extraction',
        href: '/treatments/general-dentistry/tooth-extraction',
        img: '/treatments/tooth-extraction-surgical.jpg',
        title: 'Tooth Extraction',
        forWho: 'Patients with a tooth that is too decayed to be saved, problematic, or impacted',
        desc: 'The tooth is painlessly removed under local anesthesia; advanced minimally invasive surgical techniques are applied for complex or wisdom teeth.',
        readMore: 'READ MORE',
      },
      {
        id: 'inlay-onlay',
        href: '/treatments/general-dentistry/inlay-onlay',
        img: '/treatments/inlay-onlay-comparison.jpg',
        title: 'Inlay & Onlay',
        forWho: 'Patients with a large cavity looking for a more durable solution than a classic filling',
        desc: 'Custom-milled porcelain or composite restorations fabricated via digital CAD/CAM technology to restore massive chewing tooth surface loss.',
        readMore: 'READ MORE',
      },
      {
        id: 'sealants',
        href: '/treatments/general-dentistry/dental-sealants',
        img: '/treatments/dental-sealants-fissure.jpg',
        title: 'Dental Sealants',
        forWho: 'Patients, especially children, who want to protect their high-risk back teeth from decay',
        desc: 'A transparent protective resin barrier applied directly over deep molar grooves, preventing bacterial food impaction and blocking up to 90% of cavities.',
        readMore: 'READ MORE',
      },
      {
        id: 'fluoride',
        href: '/treatments/general-dentistry/fluoride-treatment',
        img: '/treatments/general/fluoride-treatment.jpeg',
        title: 'Fluoride Treatment',
        forWho: 'Children with high cavity risk and adults suffering from tooth sensitivity or weak enamel',
        desc: 'A quick clinical fluoride application that deeply remineralizes dental enamel, significantly reduces tooth sensitivity, and builds strong acid resistance.',
        readMore: 'READ MORE',
      },
      {
        id: 'bruxism',
        href: '/treatments/general-dentistry/bruxism-treatment',
        img: '/treatments/general/bruxism.jpeg',
        title: 'Bruxism Treatment (Night Guard)',
        forWho: 'Patients suffering from nocturnal teeth grinding, clenching, or jaw joint pain',
        desc: 'Custom-crafted 3D night guards and masseter therapies that absorb destructive grinding forces, protect enamel from attrition, and relax jaw muscles.',
        readMore: 'READ MORE',
      },
    ],
  },
  tr: {
    title: 'Sizin İçin Doğru Tedaviyi Bulun',
    subtitle: 'Hangi diş tedavisinin ihtiyaçlarınıza uygun olduğundan emin değil misiniz? Her bir işlemin kimler için uygun olduğunu ve neler sunduğunu görmek için seçeneklerimize göz atarak bilinçli kararlar verin.',
    items: [
      {
        id: 'cleaning',
        href: '/treatments/general-dentistry/dental-cleaning',
        img: '/treatments/dental-cleaning-scaling.jpg',
        title: 'Diş Taşı Temizliği (Detertraj & Polisaj)',
        forWho: 'Diş eti kanaması, ağız kokusu veya diş taşı birikimi yaşayan hastalar',
        desc: 'Ultrasonik kavitron ve İsviçre Air-Flow hava akımıyla diş taşları, bakteri plağı ve yüzey lekeleri temizlenerek diş eti sağlığı korunur.',
        readMore: 'DETAYLI BİLGİ',
      },
      {
        id: 'fillings',
        href: '/treatments/general-dentistry/tooth-fillings',
        img: '/treatments/tooth-fillings-amalgam-composite.jpg',
        title: 'Estetik Kompozit Diş Dolgusu',
        forWho: 'Çürük, kırık veya aşınmış dişi olan hastalar',
        desc: 'Dişteki çürük veya hasarlı doku hassasça temizlenir ve doğal diş renginde yüksek dayanımlı nanokompozit dolgu ile restore edilir.',
        readMore: 'DETAYLI BİLGİ',
      },
      {
        id: 'root-canal',
        href: '/treatments/general-dentistry/root-canal',
        img: '/treatments/root-canal-treatment-endodontics.jpg',
        title: 'Kanal Tedavisi (Endodonti)',
        forWho: 'Derin çürük nedeniyle diş siniri iltihaplanmış ve şiddetli ağrısı olan hastalar',
        desc: 'Dişin içindeki enfekte pulpa dokusu mikroskop altında temizlenir, kanallar dezenfekte edilip sızdırmaz şekilde doldurularak diş kurtarılır.',
        readMore: 'DETAYLI BİLGİ',
      },
      {
        id: 'extraction',
        href: '/treatments/general-dentistry/tooth-extraction',
        img: '/treatments/tooth-extraction-surgical.jpg',
        title: 'Diş & 20’lik Yaş Dişi Çekimi',
        forWho: 'Kurtarılamayacak kadar çürümüş, kırık, problemli veya gömülü dişi olan hastalar',
        desc: 'Lokal anestezi altında tamamen ağrısız şekilde diş çekimi gerçekleştirilir; gömülü 20 yaş dişlerinde minimal invaziv cerrahi uygulanır.',
        readMore: 'DETAYLI BİLGİ',
      },
      {
        id: 'inlay-onlay',
        href: '/treatments/general-dentistry/inlay-onlay',
        img: '/treatments/inlay-onlay-comparison.jpg',
        title: 'İnley & Onley Porselen Dolgu',
        forWho: 'Geniş madde kaybı olan ve klasik dolgudan daha dayanıklı estetik çözüm arayan hastalar',
        desc: 'Laboratuvarda 3D CAD/CAM ile mikron hassasiyetinde üretilen porselen restorasyonlarla dişin sağlam dokusu korunarak çiğneme kuvveti artırılır.',
        readMore: 'DETAYLI BİLGİ',
      },
      {
        id: 'sealants',
        href: '/treatments/general-dentistry/dental-sealants',
        img: '/treatments/dental-sealants-fissure.jpg',
        title: 'Fissür Örtücü (Koruyucu Dolgu)',
        forWho: 'Özellikle çocuklar ve azı dişlerinde derin girinti olup çürük riski yüksek olan hastalar',
        desc: 'Azı dişlerinin çiğneyici yüzeylerindeki derin çukurcuklara uygulanan koruyucu tabaka ile bakteri birikimi engellenir ve çürük oluşumu önlenir.',
        readMore: 'DETAYLI BİLGİ',
      },
      {
        id: 'fluoride',
        href: '/treatments/general-dentistry/fluoride-treatment',
        img: '/treatments/general/fluoride-treatment.jpeg',
        title: 'Profesyonel Florür Uygulaması',
        forWho: 'Çürük riski yüksek olan çocuklar ve hassas diş yapısına sahip yetişkinler',
        desc: 'Diş minesini mineral bakımından zenginleştirerek güçlendiren, sıcak-soğuk hassasiyetini gideren ve çürüklere karşı kalkan oluşturan hızlı tedavi.',
        readMore: 'DETAYLI BİLGİ',
      },
      {
        id: 'bruxism',
        href: '/treatments/general-dentistry/bruxism-treatment',
        img: '/treatments/general/bruxism.jpeg',
        title: 'Gece Plağı (Bruksizm & Diş Sıkma Tedavisi)',
        forWho: 'Gece diş sıkan, gıcırdatan veya çene ekleminde ağrı yaşayan hastalar',
        desc: 'Kişiye özel 3D ölçüyle üretilen şeffaf gece koruyucu plakları diş aşınmalarını önler, çene eklemini rahatlatır ve baş-boyun ağrılarını azaltır.',
        readMore: 'DETAYLI BİLGİ',
      },
    ],
  },
  de: {
    title: 'Finden Sie die richtige Behandlung für sich',
    subtitle: 'Sie sind sich nicht sicher, welche Zahnbehandlung am besten zu Ihren Bedürfnissen passt? Entdecken Sie unsere Optionen, um fundierte Entscheidungen für Ihre Zahngesundheit zu treffen.',
    items: [
      {
        id: 'cleaning',
        href: '/treatments/general-dentistry/dental-cleaning',
        img: '/treatments/dental-cleaning-scaling.jpg',
        title: 'Professionelle Zahnreinigung (PZR)',
        forWho: 'Patienten mit Zahnfleischbluten, Mundgeruch oder Zahnsteinbildung',
        desc: 'Zahnfleischgesundheit wird durch schmerzfreie Ultraschall-Zahnsteinentfernung, Plaque-Beseitigung und Air-Flow-Politur optimal geschützt.',
        readMore: 'MEHR ERFAHREN',
      },
      {
        id: 'fillings',
        href: '/treatments/general-dentistry/tooth-fillings',
        img: '/treatments/tooth-fillings-amalgam-composite.jpg',
        title: 'Zahnfüllungen (Komposit / Ästhetisch)',
        forWho: 'Patienten mit Karies, abgebrochenen oder abgenutzten Zähnen',
        desc: 'Der beschädigte Zahnanteil wird sorgfältig gereinigt und mit hochwertigem zahnfarbenem Nanokomposit stabil und unsichtbar versorgt.',
        readMore: 'MEHR ERFAHREN',
      },
      {
        id: 'root-canal',
        href: '/treatments/general-dentistry/root-canal',
        img: '/treatments/root-canal-treatment-endodontics.jpg',
        title: 'Wurzelkanalbehandlung (Endodontie)',
        forWho: 'Patienten mit entzündetem Zahnnerv durch tiefe Karies und Zahnschmerzen',
        desc: 'Das infizierte Nervengewebe wird unter dem Mikroskop vollständig entfernt, desinfiziert und biokompatibel versiegelt.',
        readMore: 'MEHR ERFAHREN',
      },
      {
        id: 'extraction',
        href: '/treatments/general-dentistry/tooth-extraction',
        img: '/treatments/tooth-extraction-surgical.jpg',
        title: 'Zahnextraktion & Weisheitszahn-OP',
        forWho: 'Patienten mit nicht erhaltungswürdigen, zerstörten oder retinierten Zähnen',
        desc: 'Der Zahn wird unter lokaler Betäubung schonend und schmerzfrei entfernt; bei verlagerten Weisheitszähnen erfolgt ein mikrochirurgischer Eingriff.',
        readMore: 'MEHR ERFAHREN',
      },
      {
        id: 'inlay-onlay',
        href: '/treatments/general-dentistry/inlay-onlay',
        img: '/treatments/inlay-onlay-comparison.jpg',
        title: 'Inlays & Onlays (Keramikeinlage)',
        forWho: 'Patienten mit großem Zahnhartsubstanzverlust für langlebige Versorgung',
        desc: 'Präzise im Meisterlabor gefertigte vollkeramische Passkörper, die exakt eingefügt werden und maximale Kaukraft garantieren.',
        readMore: 'MEHR ERFAHREN',
      },
      {
        id: 'sealants',
        href: '/treatments/general-dentistry/dental-sealants',
        img: '/treatments/dental-sealants-fissure.jpg',
        title: 'Fissurenversiegelung',
        forWho: 'Kinder und Erwachsene zur Kariesprävention an Backenzähnen',
        desc: 'Tiefe Grübchen und Furchen der Backenzähne werden mit einem Schutzlack versiegelt, um Kariesbildung dauerhaft zu verhindern.',
        readMore: 'MEHR ERFAHREN',
      },
      {
        id: 'fluoride',
        href: '/treatments/general-dentistry/fluoride-treatment',
        img: '/treatments/general/fluoride-treatment.jpeg',
        title: 'Fluoridierung (Zahnschmelzhärtung)',
        forWho: 'Kinder mit Kariesrisiko und Erwachsene mit empfindlichen Zähnen',
        desc: 'Eine gezielte Fluoridlack-Behandlung, die den Zahnschmelz remineralisiert, Empfindlichkeiten stoppt und vor Säureangriffen schützt.',
        readMore: 'MEHR ERFAHREN',
      },
      {
        id: 'bruxism',
        href: '/treatments/general-dentistry/bruxism-treatment',
        img: '/treatments/general/bruxism.jpeg',
        title: 'Bruxismus-Behandlung (Aufbissschiene)',
        forWho: 'Patienten mit Zähneknirschen, Kieferpressen oder Kieferschmerzen',
        desc: 'Individuell angepasste transparente Aufbissschienen schützen vor Zahnabrieb, entlasten das Kiefergelenk und lindern Verspannungen.',
        readMore: 'MEHR ERFAHREN',
      },
    ],
  },
  pl: {
    title: 'Znajdź odpowiednie leczenie dla siebie',
    subtitle: 'Nie wiesz, które leczenie najlepiej odpowiada Twoim potrzebom? Zapoznaj się z naszymi opcjami, aby dowiedzieć się, dla kogo jest każdy zabieg i podjąć świadomą decyzję.',
    items: [
      {
        id: 'cleaning',
        href: '/treatments/general-dentistry/dental-cleaning',
        img: '/treatments/dental-cleaning-scaling.jpg',
        title: 'Higienizacja i Skaling Zębów',
        forWho: 'Pacjenci z krwawieniem dziąseł, nieświeżym oddechem lub kamieniem nazębnym',
        desc: 'Zdrowie dziąseł zostaje zachowane dzięki bezbolesnemu usuwaniu kamienia ultradźwiękami, piaskowaniu Air-Flow i polerowaniu zębów.',
        readMore: 'WIĘCEJ INFORMACJI',
      },
      {
        id: 'fillings',
        href: '/treatments/general-dentistry/tooth-fillings',
        img: '/treatments/tooth-fillings-amalgam-composite.jpg',
        title: 'Wypełnienia Zębowe (Kompozytowe)',
        forWho: 'Pacjenci z próchnicą, pękniętymi lub ukruszonymi zębami',
        desc: 'Uszkodzona część zęba zostaje dokładnie oczyszczona i odbudowana wysoce estetycznym nanokompozytem w naturalnym odcieniu.',
        readMore: 'WIĘCEJ INFORMACJI',
      },
      {
        id: 'root-canal',
        href: '/treatments/general-dentistry/root-canal',
        img: '/treatments/root-canal-treatment-endodontics.jpg',
        title: 'Leczenie Kanałowe (Endodoncja)',
        forWho: 'Pacjenci ze stanem zapalnym miazgi i silnym bólem zęba',
        desc: 'Zainfekowana miazga zostaje usunięta pod mikroskopem, a kanały zdezynfekowane i szczelnie wypełnione, ratując naturalny ząb.',
        readMore: 'WIĘCEJ INFORMACJI',
      },
      {
        id: 'extraction',
        href: '/treatments/general-dentistry/tooth-extraction',
        img: '/treatments/tooth-extraction-surgical.jpg',
        title: 'Ekstrakcja Zęba i Zębów Mądrości',
        forWho: 'Pacjenci ze zniszczonymi zębami lub zatrzymanymi ósemkami',
        desc: 'Ząb jest bezboleśnie usuwany w znieczuleniu miejscowym z zachowaniem kości otaczającej i tkanek miękkich.',
        readMore: 'WIĘCEJ INFORMACJI',
      },
      {
        id: 'inlay-onlay',
        href: '/treatments/general-dentistry/inlay-onlay',
        img: '/treatments/inlay-onlay-comparison.jpg',
        title: 'Wkłady i Nakłady Inlay / Onlay',
        forWho: 'Pacjenci z dużymi ubytkami poszukujący trwałych rekonstrukcji',
        desc: 'Indywidualnie projektowane ceramiczne wypełnienia CAD/CAM odbudowujące anatomiczny kształt i wytrzymałość zęba.',
        readMore: 'WIĘCEJ INFORMACJI',
      },
      {
        id: 'sealants',
        href: '/treatments/general-dentistry/dental-sealants',
        img: '/treatments/dental-sealants-fissure.jpg',
        title: 'Lakowanie Zębów (Fissure Sealants)',
        forWho: 'Dzieci i dorośli chcący zabezpieczyć zęby trzonowe przed próchnicą',
        desc: 'Głębokie bruzdy zębów bocznych zostają uszczelnione warstwą ochronną laku, co zapobiega odkładaniu się płytki i rozwojowi próchnicy.',
        readMore: 'WIĘCEJ INFORMACJI',
      },
      {
        id: 'fluoride',
        href: '/treatments/general-dentistry/fluoride-treatment',
        img: '/treatments/general/fluoride-treatment.jpeg',
        title: 'Fluoryzacja Zębów',
        forWho: 'Dzieci z ryzykiem próchnicy oraz dorośli z nadwrażliwością zębów',
        desc: 'Szybka aplikacja medycznego fluoru remineralizująca szkliwo, eliminująca nadwrażliwość i wzmacniająca naturalną barierę zęba.',
        readMore: 'WIĘCEJ INFORMACJI',
      },
      {
        id: 'bruxism',
        href: '/treatments/general-dentistry/bruxism-treatment',
        img: '/treatments/general/bruxism.jpeg',
        title: 'Leczenie Bruksizmu (Szyna Nocna)',
        forWho: 'Pacjenci zgrzytający zębami i cierpiący na bóle stawu skroniowo-żuchwowego',
        desc: 'Indywidualna szyna relaksacyjna 3D chroni szkliwo przed starciem, odciąża stawy skroniowo-żuchwowe i eliminuje napięcia mięśniowe.',
        readMore: 'WIĘCEJ INFORMACJI',
      },
    ],
  },
  pt: {
    title: 'Encontre o Tratamento Ideal para Si',
    subtitle: 'Não tem a certeza de qual o tratamento dentário mais adequado? Explore as nossas opções para saber a quem se destina cada procedimento e tome decisões informadas.',
    items: [
      {
        id: 'cleaning',
        href: '/treatments/general-dentistry/dental-cleaning',
        img: '/treatments/dental-cleaning-scaling.jpg',
        title: 'Destartarização e Polimento Dentário',
        forWho: 'Pacientes com sangramento gengival, mau hálito ou tártaro acumulado',
        desc: 'A saúde das gengivas é preservada através da remoção ultrassónica de tártaro, placa bacteriana e polimento Air-Flow de alto brilho.',
        readMore: 'SABER MAIS',
      },
      {
        id: 'fillings',
        href: '/treatments/general-dentistry/tooth-fillings',
        img: '/treatments/tooth-fillings-amalgam-composite.jpg',
        title: 'Restaurações Dentárias (Compósito)',
        forWho: 'Pacientes com cáries, dentes fraturados ou desgastados',
        desc: 'A parte danificada do dente é limpa e restaurada com resina composta estética de alta resistência e tonalidade natural.',
        readMore: 'SABER MAIS',
      },
      {
        id: 'root-canal',
        href: '/treatments/general-dentistry/root-canal',
        img: '/treatments/root-canal-treatment-endodontics.jpg',
        title: 'Desvitalização Dentária (Endodontia)',
        forWho: 'Pacientes com inflamação do nervo dentário por cárie profunda e dor aguda',
        desc: 'A polpa infetada é removida sob microscópio clínico e os canais são selados hermeticamente, preservando o dente natural.',
        readMore: 'SABER MAIS',
      },
      {
        id: 'extraction',
        href: '/treatments/general-dentistry/tooth-extraction',
        img: '/treatments/tooth-extraction-surgical.jpg',
        title: 'Extração Dentária & Dentes do Siso',
        forWho: 'Pacientes com dentes irrecuperáveis, fraturados ou sisos inclusos',
        desc: 'O dente é extraído sem qualquer dor sob anestesia local, utilizando técnicas cirúrgicas minimamente invasivas.',
        readMore: 'SABER MAIS',
      },
      {
        id: 'inlay-onlay',
        href: '/treatments/general-dentistry/inlay-onlay',
        img: '/treatments/inlay-onlay-comparison.jpg',
        title: 'Inlays & Onlays Cerâmicos',
        forWho: 'Pacientes com perda dentária extensa que procuram durabilidade superior',
        desc: 'Restaurações indiretas de cerâmica personalizadas produzidas por CAD/CAM para recuperar perfeitamente a oclusão e estética.',
        readMore: 'SABER MAIS',
      },
      {
        id: 'sealants',
        href: '/treatments/general-dentistry/dental-sealants',
        img: '/treatments/dental-sealants-fissure.jpg',
        title: 'Selantes Dentários (Fissuras)',
        forWho: 'Crianças e adultos que desejam proteger os dentes molares contra cáries',
        desc: 'Aplicação de uma camada protetora nas fissuras dos dentes mastigatórios para impedir a acumulação bacteriana e evitar cáries.',
        readMore: 'SABER MAIS',
      },
      {
        id: 'fluoride',
        href: '/treatments/general-dentistry/fluoride-treatment',
        img: '/treatments/general/fluoride-treatment.jpeg',
        title: 'Fluoretação Profissional',
        forWho: 'Crianças com risco de cáries e adultos com sensibilidade dentária',
        desc: 'Aplicação clínica rápida que remineraliza o esmalte dentário, elimina a sensibilidade e cria uma barreira protetora contra ácidos.',
        readMore: 'SABER MAIS',
      },
      {
        id: 'bruxism',
        href: '/treatments/general-dentistry/bruxism-treatment',
        img: '/treatments/general/bruxism.jpeg',
        title: 'Tratamento de Bruxismo (Goteira Noturna)',
        forWho: 'Pacientes com ranger de dentes, apertamento ou dores na mandíbula',
        desc: 'Goteira oclusal personalizada em 3D que previne o desgaste dos dentes, protege as articulações da mandíbula e relaxa os músculos.',
        readMore: 'SABER MAIS',
      },
    ],
  },
  es: {
    title: 'Encuentre el Tratamiento Adecuado para Usted',
    subtitle: '¿No está seguro de qué tratamiento dental se adapta mejor a sus necesidades? Explore nuestras opciones para ver a quién va dirigido cada procedimiento y tomar decisiones informadas.',
    items: [
      {
        id: 'cleaning',
        href: '/treatments/general-dentistry/dental-cleaning',
        img: '/treatments/dental-cleaning-scaling.jpg',
        title: 'Limpieza Dental Profesional (Tartrectomía)',
        forWho: 'Pacientes con sangrado de encías, mal aliento o sarro acumulado',
        desc: 'La salud de las encías se preserva eliminando sarro, placa bacteriana y manchas con ultrasonidos y aeropulidor Swiss Air-Flow.',
        readMore: 'MÁS INFORMACIÓN',
      },
      {
        id: 'fillings',
        href: '/treatments/general-dentistry/tooth-fillings',
        img: '/treatments/tooth-fillings-amalgam-composite.jpg',
        title: 'Empastes Dentales (Composite Estético)',
        forWho: 'Pacientes con caries, dientes fracturados o desgastados',
        desc: 'La parte dañada del diente se limpia y se reconstruye con composite estético de alta resistencia que imita el diente natural.',
        readMore: 'MÁS INFORMACIÓN',
      },
      {
        id: 'root-canal',
        href: '/treatments/general-dentistry/root-canal',
        img: '/treatments/root-canal-treatment-endodontics.jpg',
        title: 'Endodoncia (Tratamiento de Conductos)',
        forWho: 'Pacientes con el nervio dental infectado por caries profunda y dolor agudo',
        desc: 'El tejido pulpar infectado se elimina bajo magnificación microscópica y los conductos se sellan de forma hermética para salvar el diente.',
        readMore: 'MÁS INFORMACIÓN',
      },
      {
        id: 'extraction',
        href: '/treatments/general-dentistry/tooth-extraction',
        img: '/treatments/tooth-extraction-surgical.jpg',
        title: 'Extracción Dental y Muelas del Juicio',
        forWho: 'Pacientes con dientes irrecuperables, problemáticos o muelas incluidas',
        desc: 'El diente se extrae de forma indolora con anestesia local; se aplican técnicas quirúrgicas mínimamente invasivas para muelas del juicio.',
        readMore: 'MÁS INFORMACIÓN',
      },
      {
        id: 'inlay-onlay',
        href: '/treatments/general-dentistry/inlay-onlay',
        img: '/treatments/inlay-onlay-comparison.jpg',
        title: 'Incrustaciones Inlay & Onlay',
        forWho: 'Pacientes con gran pérdida de estructura dental que buscan máxima durabilidad',
        desc: 'Restauraciones cerámicas a medida fabricadas con tecnología CAD/CAM que devuelven la fuerza masticatoria y estética natural.',
        readMore: 'MÁS INFORMACIÓN',
      },
      {
        id: 'sealants',
        href: '/treatments/general-dentistry/dental-sealants',
        img: '/treatments/dental-sealants-fissure.jpg',
        title: 'Selladores Dentales (Fisuras)',
        forWho: 'Niños y adultos con riesgo de caries en las muelas posteriores',
        desc: 'Se aplica una película protectora en las fisuras de los molares que bloquea las bacterias y previene la aparición de caries.',
        readMore: 'MÁS INFORMACIÓN',
      },
      {
        id: 'fluoride',
        href: '/treatments/general-dentistry/fluoride-treatment',
        img: '/treatments/general/fluoride-treatment.jpeg',
        title: 'Tratamiento con Flúor',
        forWho: 'Niños con propensión a caries y adultos con esmalte sensible',
        desc: 'Aplicación médica que remineraliza profundamente el esmalte, reduce la sensibilidad dental y fortalece los dientes frente a bacterias.',
        readMore: 'MÁS INFORMACIÓN',
      },
      {
        id: 'bruxism',
        href: '/treatments/general-dentistry/bruxism-treatment',
        img: '/treatments/general/bruxism.jpeg',
        title: 'Tratamiento de Bruxismo (Férula de Descarga)',
        forWho: 'Pacientes que rechinan o aprietan los dientes durante la noche',
        desc: 'Férula de descarga transparente a medida 3D que previene el desgaste dental, protege la articulación temporomandibular y relaja los músculos.',
        readMore: 'MÁS INFORMACIÓN',
      },
    ],
  },
  ru: {
    title: 'Подберите подходящее лечение',
    subtitle: 'Не уверены, какая процедура вам подходит? Ознакомьтесь с вариантами терапии, чтобы узнать показания и преимущества каждого метода и принять верное решение.',
    items: [
      {
        id: 'cleaning',
        href: '/treatments/general-dentistry/dental-cleaning',
        img: '/treatments/dental-cleaning-scaling.jpg',
        title: 'Профессиональная чистка зубов (Air-Flow и УЗ)',
        forWho: 'Пациенты с кровоточивостью десен, налетом или зубным камнем',
        desc: 'Здоровье десен и эмали сохраняется за счет бережного ультразвукового удаления зубного камня и швейцарской чистки Air-Flow.',
        readMore: 'ПОДРОБНЕЕ',
      },
      {
        id: 'fillings',
        href: '/treatments/general-dentistry/tooth-fillings',
        img: '/treatments/tooth-fillings-amalgam-composite.jpg',
        title: 'Эстетические пломбы (Фотополимерные)',
        forWho: 'Пациенты с кариесом, сколами или разрушением зубов',
        desc: 'Пораженные кариесом ткани аккуратно удаляются, а форма и цвет зуба восстанавливаются прочным светоотверждаемым нанокомпозитом.',
        readMore: 'ПОДРОБНЕЕ',
      },
      {
        id: 'root-canal',
        href: '/treatments/general-dentistry/root-canal',
        img: '/treatments/root-canal-treatment-endodontics.jpg',
        title: 'Лечение каналов (Эндодонтия)',
        forWho: 'Пациенты с воспалением зубного нерва из-за глубокого кариеса и острой болью',
        desc: 'Инфицированная пульпа аккуратно удаляется под микроскопом, корневые каналы дезинфицируются и герметично пломбируются.',
        readMore: 'ПОДРОБНЕЕ',
      },
      {
        id: 'extraction',
        href: '/treatments/general-dentistry/tooth-extraction',
        img: '/treatments/tooth-extraction-surgical.jpg',
        title: 'Удаление зубов и зубов мудрости',
        forWho: 'Пациенты с сильно разрушенными, воспаленными или ретинированными зубами',
        desc: 'Безболезненное удаление зуба под местной анестезией с сохранением костной ткани; малотравматичные хирургические методики.',
        readMore: 'ПОДРОБНЕЕ',
      },
      {
        id: 'inlay-onlay',
        href: '/treatments/general-dentistry/inlay-onlay',
        img: '/treatments/inlay-onlay-comparison.jpg',
        title: 'Вкладки Inlay & Onlay (Керамические)',
        forWho: 'Пациенты с обширными разрушениями зуба для долговечной реставрации',
        desc: 'Индивидуальные керамические микропротезы CAD/CAM, идеально восстанавливающие анатомию и выдерживающие жевательную нагрузку.',
        readMore: 'ПОДРОБНЕЕ',
      },
      {
        id: 'sealants',
        href: '/treatments/general-dentistry/dental-sealants',
        img: '/treatments/dental-sealants-fissure.jpg',
        title: 'Герметизация фиссур',
        forWho: 'Дети и взрослые с глубокими бороздками на жевательных зубах',
        desc: 'Нанесение защитного полимерного слоя на жевательную поверхность зубов для 100% защиты от скопления налета и кариеса.',
        readMore: 'ПОДРОБНЕЕ',
      },
      {
        id: 'fluoride',
        href: '/treatments/general-dentistry/fluoride-treatment',
        img: '/treatments/general/fluoride-treatment.jpeg',
        title: 'Фторирование зубов',
        forWho: 'Дети с риском кариеса и взрослые с повышенной чувствительностью зубов',
        desc: 'Быстрое и эффективное нанесение фторлака для реминерализации эмали, снижения чувствительности и защиты от кислотных атак.',
        readMore: 'ПОДРОБНЕЕ',
      },
      {
        id: 'bruxism',
        href: '/treatments/general-dentistry/bruxism-treatment',
        img: '/treatments/general/bruxism.jpeg',
        title: 'Лечение бруксизма (Ночные капы)',
        forWho: 'Пациенты со скрежетанием, сжатием зубов и болями в челюстном суставе',
        desc: 'Индивидуальные прозрачные капы 3D защищают эмаль от истирания, разгружают височно-нижнечелюстной сустав и снимают мышечное напряжение.',
        readMore: 'ПОДРОБНЕЕ',
      },
    ],
  },
};

export default function GeneralDentistryAccordionSection() {
  const locale = useLocale();
  const d = SECTION_I18N[locale] || SECTION_I18N.en;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleItem = (index: number) => {
    setActiveIndex(prev => (prev === index ? -1 : index));
  };

  const activeItem = activeIndex >= 0 ? d.items[activeIndex] : d.items[0];

  return (
    <section className={styles.sectionWrap} aria-label={d.title}>
      <div className={styles.standard_center4}>
        <div className={styles.head}>
          <div className={styles.grid1}>
            <div className={styles.headS1}>{d.title}</div>
            <div className={styles.headS2}>{d.subtitle}</div>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.grid}>
            {/* Left Accordion Column */}
            <div className={styles.s1}>
              <div className={styles.accordion}>
                {d.items.map((item, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <div
                      key={item.id}
                      className={`${styles.item} ${isActive ? styles.active : ''}`}
                    >
                      <div
                        className={styles.title}
                        onClick={() => toggleItem(index)}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isActive}
                      >
                        <span className={styles.text}>
                          <span className={styles.text1}>{item.title}</span>
                          <span className={styles.text2}>{item.forWho}</span>
                        </span>
                        <span className={styles.icon} aria-hidden="true">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                          </svg>
                        </span>
                      </div>

                      {isActive && (
                        <div className={styles.content}>
                          <p className={styles.descP}>{item.desc}</p>
                          <div className={styles.im1}>
                            <Image
                              src={item.img}
                              alt={item.title}
                              width={600}
                              height={369}
                              sizes="(max-width: 992px) 100vw, 600px"
                            />
                          </div>
                          <div className={styles.buton}>
                            <Link href={item.href} className={styles.btnLink}>
                              {item.readMore}
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Desktop Image Preview */}
            <div className={styles.s2}>
              {activeItem && (
                <Link href={activeItem.href} className={styles.previewLink}>
                  <Image
                    src={activeItem.img}
                    alt={activeItem.title}
                    width={600}
                    height={369}
                    priority
                    className={styles.previewImg}
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
