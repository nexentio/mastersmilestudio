'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import styles from './CosmeticDentistryIntroSection.module.css';

interface IntroDictionary {
  strong: string;
  p1: string;
  p2: string;
  p3: string;
}

const DICTIONARIES: Record<string, IntroDictionary> = {
  en: {
    strong: 'Cosmetic dentistry',
    p1: ' is the art and science of enhancing your natural smile, blending aesthetics and function to boost your confidence. At our state-of-the-art clinic in Istanbul, we offer comprehensive aesthetic treatments—from bespoke porcelain veneers and Hollywood Smile makeovers to laser teeth whitening and composite bonding—crafted with artistic precision.',
    p2: 'Our expert prosthodontists use 3D Digital Smile Design (DSD) and minimally invasive techniques to design smiles that harmonize perfectly with your facial contours, lips, and skin tone. Every transformation is planned around your unique aesthetic goals.',
    p3: 'Discover the power of a radiant, natural-looking smile with personalized cosmetic dental solutions tailored just for you.',
  },
  tr: {
    strong: 'Estetik diş hekimliği',
    p1: ', özgüveninizi yükseltmek için estetik ve fonksiyonu kusursuz bir uyumla birleştiren, doğal gülüşünüzü mükemmelleştirme sanatıdır. İstanbul’daki modern kliniğimizde, kişiye özel porselen lamine kaplamalardan Hollywood Gülüşü tasarımına, lazerle diş beyazlatmadan kompozit bonding uygulamalarına kadar geniş bir estetik tedavi yelpazesi sunuyoruz.',
    p2: 'Uzman estetik diş hekimlerimiz, 3D Dijital Gülüş Tasarımı (DSD) ve minimal invaziv teknikler kullanarak yüz hatlarınız, dudak yapınız ve ten renginizle tam uyumlu gülüşler tasarlar. Her tedavi, sizin kişisel estetik beklentileriniz doğrultusunda şekillendirilir.',
    p3: 'Size özel hazırlanan kozmetik diş çözümleriyle ışıltılı, doğal ve kusursuz bir gülüşün ayrıcalığını yaşayın.',
  },
  de: {
    strong: 'Die ästhetische Zahnheilkunde',
    p1: ' verbindet zahnmedizinische Präzision mit modernster Ästhetik, um Ihr natürliches Lächeln zu perfektionieren und Ihr Selbstvertrauen zu stärken. In unserer Fachklinik in Istanbul bieten wir maßgeschneiderte E-Max Veneers, Hollywood Smile Makeovers, Laser-Bleaching und minimalinvasive Korrekturen.',
    p2: 'Unser Ärzteteam nutzt 3D Digital Smile Design (DSD), um Zahnform, -länge und -farbe perfekt auf Ihre Gesichtszüge und Lippendynamik abzustimmen.',
    p3: 'Investieren Sie in ein strahlendes, harmonisches Lächeln mit individuellen ästhetischen Zahnbehandlungen auf höchstem Niveau.',
  },
  pl: {
    strong: 'Stomatologia estetyczna',
    p1: ' to połączenie sztuki i nowoczesnej technologii, mające na celu wydobycie pełnego piękna Twojego uśmiechu. W naszej klinice w Stambule oferujemy licówki E-Max, metamorfozy Hollywood Smile, laserowe wybielanie i bonding kompozytowy.',
    p2: 'Dzięki technologii 3D Digital Smile Design (DSD) projektujemy uśmiech idealnie dopasowany do rysów Twojej twarzy, gwarantując naturalny i trwały efekt.',
    p3: 'Odkryj pewność siebie i zachwycający uśmiech dzięki spersonalizowanym zabiegom stomatologii estetycznej.',
  },
  pt: {
    strong: 'A dentisteria estética',
    p1: ' é a arte de transformar o seu sorriso, aliando beleza, harmonia e funcionalidade. Na nossa clínica em Istambul, realizamos tratamentos de excelência como facetas de porcelana E-Max, Hollywood Smile, branqueamento a laser e bonding.',
    p2: 'Utilizamos o Digital Smile Design 3D para criar um sorriso perfeitamente integrado na sua fisionomia e proporções faciais.',
    p3: 'Sorria com confiança com soluções estéticas avançadas e desenhadas à sua medida.',
  },
  es: {
    strong: 'La odontología estética',
    p1: ' es el arte de realzar su sonrisa natural, combinando estética y armonía para potenciar su seguridad y bienestar. En nuestra clínica de Estambul ofrecemos carillas de porcelana E-Max, diseño Hollywood Smile, blanqueamiento láser y microestética dental.',
    p2: 'Con la tecnología 3D Digital Smile Design, analizamos sus facciones y proporciones para lograr un resultado deslumbrante y 100% natural.',
    p3: 'Transforme su imagen con tratamientos cosméticos exclusivos diseñados a su medida.',
  },
  ru: {
    strong: 'Эстетическая стоматология',
    p1: ' — это искусство создания идеальной улыбки, сочетающее передовые технологии, гармонию и безупречную функцию. В нашей клинике в Стамбуле мы создаем виниры E-Max, голливудские улыбки под ключ, лазерное отбеливание и художественную реставрацию.',
    p2: 'С помощью 3D Digital Smile Design мы моделируем будущую улыбку с учетом анатомии лица, формы губ и ваших личных пожеланий.',
    p3: 'Подарите себе ослепительную и естественную улыбку с помощью индивидуальных эстетических решений мирового уровня.',
  },
};

export default function CosmeticDentistryIntroSection() {
  const locale = useLocale();
  const d = DICTIONARIES[locale] || DICTIONARIES.en;

  return (
    <div className={styles.ekcontent}>
      <div className={styles.standard_center4}>
        <p className={styles.paragraph}>
          <strong className={styles.strongText}>{d.strong}</strong>
          {d.p1}
          <br />
          {d.p2}
          <br />
          {d.p3}
        </p>
      </div>
    </div>
  );
}
