'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import styles from './GeneralDentistryIntroSection.module.css';

interface IntroDictionary {
  strong: string;
  p1: string;
  p2: string;
  p3: string;
}

const DICTIONARIES: Record<string, IntroDictionary> = {
  en: {
    strong: 'General dentistry',
    p1: ' is the foundation of lifelong oral health, offering preventive and restorative care to keep your teeth and gums healthy at every stage. At our modern dental clinic, we provide a wide range of general treatments—from regular check-ups and cleanings to fillings, root canals, and wisdom tooth extractions—delivered with precision and care.',
    p2: 'Our experienced team uses the latest digital diagnostics and pain-free techniques to detect issues early and treat them effectively. Whether you need routine maintenance or urgent dental care, we focus on long-term results and your overall comfort.',
    p3: 'Invest in your smile and protect your oral health with personalized general dentistry services that put your well-being first.',
  },
  tr: {
    strong: 'Genel diş hekimliği',
    p1: ', her yaşta diş ve diş etlerinizi sağlıklı tutmak için koruyucu ve onarıcı tedaviler sunan, ömür boyu sürecek ağız sağlığının temelidir. Modern diş kliniğimizde, düzenli kontrollerden diş taşı temizliğine, estetik dolgulardan kanal tedavisine ve 20\'lik diş çekimlerine kadar geniş bir genel tedavi yelpazesini yüksek hassasiyet ve özenle sunuyoruz.',
    p2: 'Deneyimli hekim kadromuz, sorunları erken aşamada tespit etmek ve ağrısız bir şekilde tedavi etmek için en son dijital tanı yöntemlerini ve konforlu teknikleri kullanır. İster rutin bakım ister acil diş tedavisi ihtiyacınız olsun, odak noktamız uzun ömürlü klinik sonuçlar ve maksimum hasta konforudur.',
    p3: 'Sağlığınızı ve konforunuzu ön planda tutan kişiselleştirilmiş genel diş hekimliği hizmetlerimizle gülüşünüze yatırım yapın ve ağız sağlığınızı koruyun.',
  },
  de: {
    strong: 'Die allgemeine Zahnheilkunde',
    p1: ' bildet das Fundament für lebenslange Mundgesundheit und bietet präventive sowie restaurative Behandlungen, um Zähne und Zahnfleisch in jeder Lebensphase gesund zu halten. In unserer modernen Zahnklinik bieten wir ein umfassendes Spektrum an allgemeinen Behandlungen – von routinemäßigen Kontrolluntersuchungen und professioneller Zahnreinigung bis hin zu Füllungen, Wurzelkanalbehandlungen und Weisheitszahnextraktionen.',
    p2: 'Unser erfahrenes Ärzteteam nutzt modernste digitale Diagnostik und schmerzfreie Verfahren, um Probleme frühzeitig zu erkennen und gezielt zu behandeln. Ob regelmäßige Vorsorge oder dringende zahnärztliche Versorgung – unser Fokus liegt stets auf langlebigen Ergebnissen und Ihrem persönlichen Komfort.',
    p3: 'Investieren Sie in Ihr Lächeln und schützen Sie Ihre Zahngesundheit mit maßgeschneiderter Zahnmedizin, die Ihr Wohlbefinden an die erste Stelle setzt.',
  },
  pl: {
    strong: 'Stomatologia ogólna',
    p1: ' to fundament zdrowia jamy ustnej na całe życie, oferujący profilaktykę i leczenie zachowawcze na każdym etapie. W naszej nowoczesnej klinice stomatologicznej zapewniamy pełen zakres zabiegów ogólnych — od rutynowych kontroli i higienizacji, po wypełnienia kompozytowe, leczenie kanałowe i ekstrakcje zębów mądrości.',
    p2: 'Nasz doświadczony zespół stosuje najnowocześniejszą diagnostykę cyfrową i bezbolesne metody leczenia, aby wcześnie wykrywać problemy i skutecznie je eliminować. Niezależnie od tego, czy potrzebujesz regularnej profilaktyki, czy pilnego leczenia, skupiamy się na długotrwałych rezultatach i Twoim pełnym komforcie.',
    p3: 'Zainwestuj w swój uśmiech i chroń zdrowie jamy ustnej dzięki spersonalizowanej opiece stomatologicznej najwyższej jakości.',
  },
  pt: {
    strong: 'A medicina dentária geral',
    p1: ' é a base de uma saúde oral para toda a vida, oferecendo cuidados preventivos e restauradores para manter dentes e gengivas saudáveis em todas as fases. Na nossa clínica dentária moderna, disponibilizamos uma ampla gama de tratamentos gerais — desde consultas de rotina e destartarização a restaurações, desvitalizações e extrações de dentes do siso.',
    p2: 'A nossa experiente equipa médica utiliza diagnósticos digitais de última geração e técnicas indolores para detetar problemas precocemente e tratá-los com máxima eficácia. Quer necessite de manutenção preventiva ou de cuidados dentários urgentes, focamo-nos em resultados duradouros e no seu conforto absoluto.',
    p3: 'Invista no seu sorriso e proteja a sua saúde oral com serviços personalizados de medicina dentária geral focados no seu bem-estar.',
  },
  es: {
    strong: 'La odontología general',
    p1: ' es la base de una salud bucodental duradera, ofreciendo atención preventiva y restauradora para mantener dientes y encías sanos en cada etapa de la vida. En nuestra moderna clínica dental, ofrecemos una amplia gama de tratamientos generales, desde revisiones periódicas y limpiezas hasta empastes, endodoncias y extracción de muelas del juicio.',
    p2: 'Nuestro experimentado equipo utiliza diagnósticos digitales avanzados y técnicas indoloras para detectar problemas a tiempo y tratarlos con total eficacia. Ya sea que necesite un mantenimiento preventivo o atención dental urgente, nos enfocamos en resultados a largo plazo y en su total bienestar.',
    p3: 'Invierta en su sonrisa y proteja su salud oral con servicios personalizados de odontología general que priorizan su bienestar.',
  },
  ru: {
    strong: 'Общая стоматология',
    p1: ' — это фундамент здоровья полости рта на всю жизнь, обеспечивающий профилактику и лечение зубов и десен на каждом этапе. В нашей современной клинике мы предоставляем полный спектр терапевтических процедур — от регулярных осмотров и гигиены до пломбирования, лечения корневых каналов и удаления зубов мудрости.',
    p2: 'Наша опытная команда врачей использует новейшую цифровую 3D-диагностику и безболезненные методики для раннего выявления и эффективного устранения любых проблем. Будь то плановая профилактика или неотложная стоматологическая помощь, наш главный приоритет — долговечный результат и ваш максимальный комфорт.',
    p3: 'Инвестируйте в свою улыбку и защитите здоровье зубов с помощью персонализированных стоматологических услуг мирового уровня.',
  },
};

export default function GeneralDentistryIntroSection() {
  const locale = useLocale();
  const d = DICTIONARIES[locale] || DICTIONARIES.en;

  return (
    <div className={styles.ekcontent}>
      <div className={styles.standard_center4}>
        <p className={styles.paragraph}>
          <strong className={styles.strongText}>{d.strong}</strong>
          {d.p1}
          <br />
          <br />
          {d.p2}
          <br />
          <br />
          {d.p3}
        </p>
      </div>
    </div>
  );
}
