'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import styles from './GeneralDentistryIntroSection.module.css';

interface IntroContent {
  heading: string;
  lead: string;
  p1: string;
  p2: string;
  callout: string;
}

const DICTIONARIES: Record<string, IntroContent> = {
  en: {
    heading: 'Comprehensive General Dentistry & Preventative Care in Antalya',
    lead: 'The foundation of lifelong oral health — combining advanced 3D digital diagnostics, painless micro-invasive techniques, and preventative precision.',
    p1: 'General dentistry serves as the essential bedrock for protecting your natural teeth and maintaining healthy gums throughout every stage of life. At Master Smile Studio, our general dentistry suite encompasses comprehensive clinical examinations, ultrasonic scaling and Air-Flow polishing, aesthetic composite bonding fillings, computer-assisted root canal therapy, and gentle surgical extractions.',
    p2: 'Led by our senior oral surgeons and dental specialists, every procedure is executed under strict hospital-grade sterilization protocols using premier German and Swiss restorative materials. We prioritize conservative preservation of your natural tooth structure, diagnosing micro-cavities and structural fractures before they escalate into complex dental emergencies.',
    callout: 'Whether you require regular oral maintenance, deep periodontal hygiene, or urgent tooth relief, our clinical team delivers personalized, transparent, and completely pain-free care tailored to international patient standards.',
  },
  tr: {
    heading: 'Antalya’da Kapsamlı Genel Diş Hekimliği ve Koruyucu Bakım',
    lead: 'Ömür boyu sağlıklı dişlerin temeli: İleri 3D dijital tanı, ağrısız mikro-invaziv teknikler ve koruyucu hekimlik hassasiyeti.',
    p1: 'Genel diş hekimliği, doğal dişlerinizi korumak ve her yaşta sağlıklı diş etlerine sahip olmak için ağız sağlığının en temel yapı taşıdır. Master Smile Studio kliniğimizde genel diş hekimliği uygulamalarımız; detaylı klinik ve radyolojik muayeneleri, ultrasonik diş taşı temizliği ve Air-Flow parlatmayı, estetik nano-kompozit dolguları, döner aletli kanal tedavilerini ve hassas cerrahi diş çekimlerini kapsar.',
    p2: 'Alanında uzman hekimlerimiz tarafından yürütülen tüm tedaviler, üstün Alman ve İsviçre biyomateryalleri kullanılarak uluslararası hastane hijyen standartlarında gerçekleştirilir. Amacımız her zaman doğal diş dokunuzu korumak, mikroskobik çürükleri ve gizli kırıkları erken teşhis ederek karmaşık cerrahi müdahalelere gerek kalmadan tedavi etmektir.',
    callout: 'İster rutin 6 aylık kontrol ve derinlemesine hijyen, ister acil diş tedavisi ihtiyacınız olsun; uzman kadromuz size özel, şeffaf ve tamamen ağrısız bir tedavi süreci sunar.',
  },
  de: {
    heading: 'Umfassende Allgemeine Zahnheilkunde & Prävention in Antalya',
    lead: 'Das Fundament für lebenslange Zahngesundheit: Modernste 3D-Digitaldiagnostik, schmerzfreie mikroinvasive Verfahren und kompromisslose Präzision.',
    p1: 'Die allgemeine Zahnheilkunde ist der unverzichtbare Grundpfeiler für den Erhalt Ihrer natürlichen Zähne und eines gesunden Zahnfleisches. Im Master Smile Studio umfasst unser Leistungsspektrum präzise klinische Diagnostik, professionelle Zahnreinigung mit Ultraschall und Air-Flow, zahnfarbene Nanokomposit-Füllungen, computergestützte Endodontie (Wurzelbehandlung) sowie schonende Zahnextraktionen.',
    p2: 'Unter Verwendung erstklassiger deutscher und schweizerischer Restaurationsmaterialien führen unsere Fachzahnärzte jeden Eingriff nach strengsten klinischen Sterilitätsstandards durch. Unser oberstes Ziel ist stets der maximale Substanzerhalt Ihrer eigenen Zähne.',
    callout: 'Ob regelmäßige Prophylaxe, tiefenwirksame Parodontalhygiene oder akute Schmerzbehandlung – wir garantieren Ihnen eine transparente, hochmoderne und vollkommen schmerzfreie zahnärztliche Versorgung.',
  },
  pl: {
    heading: 'Kompleksowa Stomatologia Ogólna i Profilaktyka w Antalyi',
    lead: 'Fundament zdrowego uśmiechu na całe życie: Zaawansowana diagnostyka 3D, bezbolesne techniki mikroinwazyjne i precyzja leczenia.',
    p1: 'Stomatologia ogólna stanowi absolutną podstawę dbałości o naturalne uzębienie i zdrowe dziąsła na każdym etapie życia. W Master Smile Studio zapewniamy pełen zakres opieki stomatologicznej — od szczegółowych badań diagnostycznych, profesjonalnej higienizacji Air-Flow i skalingu, przez estetyczne wypełnienia kompozytowe, aż po nowoczesną endodoncję mikroskopową i bezbolesną chirurgię.',
    p2: 'Wszystkie procedury realizowane są przez doświadczonych lekarzy stomatologów przy użyciu certyfikowanych materiałów niemieckich i szwajcarskich. Skupiamy się na maksymalnym zachowaniu naturalnych tkanek zęba oraz wczesnym wykrywaniu mikroubytków.',
    callout: 'Niezależnie od tego, czy potrzebujesz okresowej kontroli, głębokiego oczyszczania, czy natychmiastowej pomocy w bólu zęba, nasz zespół zapewnia bezstresowe i w 100% bezbolesne leczenie.',
  },
  pt: {
    heading: 'Medicina Dentária Geral e Cuidados Preventivos em Antália',
    lead: 'A base para uma saúde oral duradoura: Diagnósticos digitais 3D avançados, técnicas indolores e preservação da estrutura natural.',
    p1: 'A medicina dentária geral é o pilar fundamental para manter os dentes naturais e gengivas saudáveis em todas as fases da vida. Na Master Smile Studio, os nossos serviços abrangem exames clínicos completos, destartarização ultrassónica com polimento Air-Flow, restaurações estéticas em compósito, endodontia computorizada e extrações cirúrgicas simples e complexas.',
    p2: 'Todos os procedimentos são efetuados segundo rigorosos protocolos hospitalares internacionais, utilizando materiais restauradores de topo alemães e suíços para garantir longevidade e excelência estética.',
    callout: 'Quer necessite de uma consulta de rotina preventiva ou de tratamento dentário urgente, oferecemos um atendimento personalizado, transparente e totalmente isento de dor.',
  },
  es: {
    heading: 'Odontología General Integral y Prevención en Antalya',
    lead: 'La base de una salud bucodental duradera: Diagnóstico digital 3D avanzado, técnicas microinvasivas indoloras y máxima precisión clínica.',
    p1: 'La odontología general es el pilar esencial para preservar la dentición natural y garantizar la salud de las encías a lo largo del tiempo. En Master Smile Studio, nuestros tratamientos incluyen revisiones clínicas exhaustivas, limpieza y profilaxis avanzada con ultrasonidos y Air-Flow, obturaciones estéticas de composite, endodoncia de alta precisión y extracciones dentales seguras.',
    p2: 'Nuestro equipo de especialistas trabaja bajo estrictos protocolos de bioseguridad y emplea biomateriales de primera calidad suiza y alemana, priorizando siempre la conservación del diente natural.',
    callout: 'Tanto si busca una revisión periódica como si precisa atención dental inmediata, le garantizamos una experiencia cómoda, transparente y 100% libre de dolor.',
  },
  ru: {
    heading: 'Комплексная терапевтическая стоматология и профилактика в Анталье',
    lead: 'Фундамент здоровой улыбки на всю жизнь: Передовая 3D-диагностика, безболезненные методики и сохранение здоровья собственных зубов.',
    p1: 'Общая терапевтическая стоматология — это основа сохранения естественных зубов и здоровья десен на долгие годы. В клинике Master Smile Studio мы предлагаем полный спектр процедур: детальные диагностические обследования, ультразвуковую чистку и полировку Air-Flow, эстетические нанокомпозитные реставрации, высокоточное эндодонтическое лечение каналов и деликатное хирургическое удаление.',
    p2: 'Все манипуляции выполняются опытными врачами-стоматологами в условиях строжайшей стерильности с применением премиальных немецких и швейцарских материалов.',
    callout: 'Будь то плановый профилактический осмотр, профессиональная гигиена или неотложная стоматологическая помощь, наша команда гарантирует индивидуальный подход, абсолютную прозрачность и максимальный комфорт без боли.',
  },
};

export default function GeneralDentistryIntroSection() {
  const locale = useLocale();
  const d = DICTIONARIES[locale] || DICTIONARIES.en;

  return (
    <section aria-labelledby="general-intro-heading" className={styles.section}>
      <div className={styles.container}>
        <h2 id="general-intro-heading" className={styles.heading}>
          {d.heading}
        </h2>
        <p className={styles.lead}>{d.lead}</p>

        <div className={styles.contentGrid}>
          <p className={styles.paragraph}>{d.p1}</p>
          <p className={styles.paragraph}>{d.p2}</p>
        </div>

        <div className={styles.highlightBox}>
          <strong>{d.callout}</strong>
        </div>
      </div>
    </section>
  );
}
