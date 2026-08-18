'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './TreatmentRightTreatmentAccordion.module.css';

interface TreatmentItem {
  title: string;
  target: string;
  desc: string;
  img: string;
  href: string;
}

const COSMETIC_ACCORDION_DATA: Record<
  string,
  {
    heading: string;
    subtitle: string;
    readMore: string;
    items: TreatmentItem[];
  }
> = {
  en: {
    heading: 'Find the Right Treatment for You',
    subtitle:
      'Not sure which dental treatment suits your needs? Browse through our treatment options to see who each procedure is for and what it offers so you can make informed decisions about your dental care.',
    readMore: 'READ MORE',
    items: [
      {
        title: 'Teeth Whitening',
        target: 'Patients with darkened, stained teeth who desire a whiter smile',
        desc: 'A few shades of whitening are achieved using a special gel and light system.',
        img: '/treatments/accordion/teeth-whitening.webp',
        href: '/treatments/cosmetic-dentistry/teeth-whitening',
      },
      {
        title: 'Gummy Smile Treatment',
        target: 'Patients whose gums are excessively visible when they smile',
        desc: 'The visibility of the gums is reduced with laser or botox, providing a more balanced smile.',
        img: '/treatments/accordion/gummy-smile-treatment.webp',
        href: '/treatments/cosmetic-dentistry/gummy-smile-treatment',
      },
      {
        title: 'Tooth Contouring & Shaping',
        target: 'Patients with minor shape irregularities on their teeth who desire symmetry',
        desc: 'Minor rough spots on the tooth surface are smoothed to achieve a more aesthetic form.',
        img: '/treatments/accordion/tooth-contouring-shaping.webp',
        href: '/treatments/cosmetic-dentistry/tooth-contouring-shaping',
      },
      {
        title: 'Diastema Closure',
        target: 'Patients with gaps (diastema) between their front teeth',
        desc: 'Gaps between teeth are closed using bonding, laminates, or orthodontics.',
        img: '/treatments/accordion/diastema-closure.webp',
        href: '/treatments/cosmetic-dentistry/diastema-closure',
      },
      {
        title: 'Hollywood Smile',
        target: 'Patients who desire a brilliant, symmetrical, and aesthetically perfect smile',
        desc: 'The ideal smile is achieved through procedures like whitening, porcelain veneers, and gum shaping.',
        img: '/treatments/accordion/hollywood-smile.webp',
        href: '/treatments/cosmetic-dentistry/hollywood-smile',
      },
      {
        title: 'Smile Makeover',
        target: 'Patients who want a generally aesthetic smile and wish to solve multiple issues at once',
        desc: 'It is a comprehensive treatment where procedures like teeth whitening, veneers, and gum aesthetics are planned together.',
        img: '/treatments/accordion/smile-makeover.webp',
        href: '/treatments/cosmetic-dentistry/smile-makeover',
      },
    ],
  },
  tr: {
    heading: 'Sizin İçin En Doğru Tedaviyi Bulun',
    subtitle:
      'Hangi diş tedavisinin ihtiyaçlarınıza uygun olduğundan emin değil misiniz? Ağız ve diş sağlığınız konusunda bilinçli kararlar verebilmeniz için tedavi seçeneklerimizi inceleyin.',
    readMore: 'DETAYLI BİLGİ',
    items: [
      {
        title: 'Diş Beyazlatma (Teeth Whitening)',
        target: 'Daha beyaz bir gülüş arzulayan, sararmış ve lekelenmiş dişlere sahip hastalar',
        desc: 'Özel beyazlatıcı jel ve ışık aktivasyon sistemi ile diş rengi tek seansta birkaç ton güvenle açılır.',
        img: '/treatments/accordion/teeth-whitening.webp',
        href: '/treatments/cosmetic-dentistry/teeth-whitening',
      },
      {
        title: 'Gummy Smile Tedavisi (Diş Eti Estetiği)',
        target: 'Gülerken diş etleri aşırı derecede görünen veya seviye farkı olan hastalar',
        desc: 'Lazer veya botoks uygulamaları ile diş etlerinin aşırı görünürlüğü azaltılarak dengeli ve estetik bir gülüş sağlanır.',
        img: '/treatments/accordion/gummy-smile-treatment.webp',
        href: '/treatments/cosmetic-dentistry/gummy-smile-treatment',
      },
      {
        title: 'Diş Şekillendirme ve Konturlama',
        target: 'Dişlerinde hafif şekil bozuklukları olan ve simetri isteyen hastalar',
        desc: 'Daha estetik bir form elde etmek için diş yüzeyindeki küçük pürüzler ve asimetriler mikroskobik olarak düzeltilir.',
        img: '/treatments/accordion/tooth-contouring-shaping.webp',
        href: '/treatments/cosmetic-dentistry/tooth-contouring-shaping',
      },
      {
        title: 'Ayrık Diş (Diastema) Kapatma',
        target: 'Ön dişleri arasında boşluk (diastema) bulunan hastalar',
        desc: 'Dişler arasındaki boşluklar kompozit bonding, porselen yaprak laminalar veya ortodonti ile kesimsiz kapatılır.',
        img: '/treatments/accordion/diastema-closure.webp',
        href: '/treatments/cosmetic-dentistry/diastema-closure',
      },
      {
        title: 'Hollywood Smile',
        target: 'Işıltılı, kusursuz simetrik ve estetik açıdan mükemmel bir gülüş isteyenler',
        desc: 'İdeal gülüş; diş beyazlatma, porselen lamina ve diş eti şekillendirme gibi işlemlerin kombinasyonu ile elde edilir.',
        img: '/treatments/accordion/hollywood-smile.webp',
        href: '/treatments/cosmetic-dentistry/hollywood-smile',
      },
      {
        title: 'Gülüş Tasarımı (Smile Makeover)',
        target: 'Genel olarak estetik bir gülüş arzulayan ve birden fazla sorunu aynı anda çözmek isteyenler',
        desc: 'Diş beyazlatma, porselen kaplama ve diş eti estetiği gibi işlemlerin bir arada planlandığı kapsamlı bir tedavidir.',
        img: '/treatments/accordion/smile-makeover.webp',
        href: '/treatments/cosmetic-dentistry/smile-makeover',
      },
    ],
  },
  de: {
    heading: 'Finden Sie die richtige Behandlung für sich',
    subtitle:
      'Sie sind sich nicht sicher, welche Zahnbehandlung am besten zu Ihnen passt? Entdecken Sie unsere Optionen, um fundierte Entscheidungen für Ihre Zahngesundheit zu treffen.',
    readMore: 'MEHR ERFAHREN',
    items: [
      {
        title: 'Zahnaufhellung (Bleaching)',
        target: 'Patienten mit verfärbten Zähnen, die sich ein weißeres Lächeln wünschen',
        desc: 'Mit einem speziellen Gel und Lichtsystem werden die Zähne um mehrere Nuancen schonend aufgehellt.',
        img: '/treatments/accordion/teeth-whitening.webp',
        href: '/treatments/cosmetic-dentistry/teeth-whitening',
      },
      {
        title: 'Gummy Smile Behandlung',
        target: 'Patienten, bei denen beim Lächeln zu viel Zahnfleisch sichtbar ist',
        desc: 'Die Sichtbarkeit des Zahnfleisches wird mit Laser oder Botox harmonisiert für ein ausgewogenes Lächeln.',
        img: '/treatments/accordion/gummy-smile-treatment.webp',
        href: '/treatments/cosmetic-dentistry/gummy-smile-treatment',
      },
      {
        title: 'Zahnumformung & Konturierung',
        target: 'Patienten mit leichten Formunregelmäßigkeiten, die Symmetrie wünschen',
        desc: 'Kleine Unebenheiten auf der Zahnoberfläche werden geglättet, um eine harmonische Form zu erreichen.',
        img: '/treatments/accordion/tooth-contouring-shaping.webp',
        href: '/treatments/cosmetic-dentistry/tooth-contouring-shaping',
      },
      {
        title: 'Diastema-Schluss (Zahnlücken)',
        target: 'Patienten mit sichtbaren Lücken zwischen den Frontzähnen',
        desc: 'Zahnlücken werden minimalinvasiv durch Bonding, Veneers oder Kieferorthopädie geschlossen.',
        img: '/treatments/accordion/diastema-closure.webp',
        href: '/treatments/cosmetic-dentistry/diastema-closure',
      },
      {
        title: 'Hollywood Smile',
        target: 'Patienten, die ein strahlendes, symmetrisches und perfektes Lächeln anstreben',
        desc: 'Das ideale Lächeln wird durch Verfahren wie Bleaching, Keramik-Veneers und Zahnfleischkorrektur erreicht.',
        img: '/treatments/accordion/hollywood-smile.webp',
        href: '/treatments/cosmetic-dentistry/hollywood-smile',
      },
      {
        title: 'Smile Makeover',
        target: 'Patienten, die ein ästhetisches Gesamtbild wünschen und mehrere Probleme lösen möchten',
        desc: 'Eine ganzheitliche Behandlung, bei der Aufhellung, Veneers und Zahnfleischästhetik kombiniert werden.',
        img: '/treatments/accordion/smile-makeover.webp',
        href: '/treatments/cosmetic-dentistry/smile-makeover',
      },
    ],
  },
  pl: {
    heading: 'Znajdź odpowiednie leczenie dla siebie',
    subtitle:
      'Nie jesteś pewien, który zabieg stomatologiczny odpowiada Twoim potrzebom? Przejrzyj nasze opcje leczenia, aby podjąć świadomą decyzję.',
    readMore: 'WIĘCEJ INFORMACJI',
    items: [
      {
        title: 'Wybielanie Zębów (Teeth Whitening)',
        target: 'Pacjenci z ciemnymi, przebarwionymi zębami pragnący bielszych zębów',
        desc: 'Rozjaśnienie zębów o kilka odcieni za pomocą specjalnego żelu i systemu aktywacji światłem.',
        img: '/treatments/accordion/teeth-whitening.webp',
        href: '/treatments/cosmetic-dentistry/teeth-whitening',
      },
      {
        title: 'Leczenie Uśmiechu Dziąsłowego (Gummy Smile)',
        target: 'Pacjenci, których dziąsła są nadmiernie widoczne podczas uśmiechu',
        desc: 'Widoczność dziąseł jest redukowana laserem lub botoksem, zapewniając harmonijny uśmiech.',
        img: '/treatments/accordion/gummy-smile-treatment.webp',
        href: '/treatments/cosmetic-dentistry/gummy-smile-treatment',
      },
      {
        title: 'Konturowanie i Modelowanie Zębów',
        target: 'Pacjenci z drobnymi asymetriami kształtu poszukujący idealnej harmonii',
        desc: 'Drobne nierówności powierzchni zębów są wygładzane w celu uzyskania estetycznego kształtu.',
        img: '/treatments/accordion/tooth-contouring-shaping.webp',
        href: '/treatments/cosmetic-dentistry/tooth-contouring-shaping',
      },
      {
        title: 'Zamykanie Diastemy (Przerw Między Zębami)',
        target: 'Pacjenci z przerwami (diastemą) między przednimi zębami',
        desc: 'Przerwy między zębami są zamykane za pomocą bondingu, licówek lub ortodoncji bez szlifowania.',
        img: '/treatments/accordion/diastema-closure.webp',
        href: '/treatments/cosmetic-dentistry/diastema-closure',
      },
      {
        title: 'Hollywood Smile',
        target: 'Pacjenci pragnący olśniewającego, symetrycznego i perfekcyjnego uśmiechu',
        desc: 'Idealny uśmiech osiąga się poprzez wybielanie, licówki porcelanowe i plastykę dziąseł.',
        img: '/treatments/accordion/hollywood-smile.webp',
        href: '/treatments/cosmetic-dentistry/hollywood-smile',
      },
      {
        title: 'Metamorfoza Uśmiechu (Smile Makeover)',
        target: 'Pacjenci pragnący kompleksowej estetyki i rozwiązania wielu problemów naraz',
        desc: 'Kompleksowe leczenie, w którym planowane są wspólnie wybielanie, licówki i estetyka dziąseł.',
        img: '/treatments/accordion/smile-makeover.webp',
        href: '/treatments/cosmetic-dentistry/smile-makeover',
      },
    ],
  },
  pt: {
    heading: 'Encontre o Tratamento Ideal para Você',
    subtitle:
      'Não tem certeza de qual tratamento dentário atende às suas necessidades? Conheça nossas opções para tomar decisões informadas sobre seus cuidados dentários.',
    readMore: 'SAIBA MAIS',
    items: [
      {
        title: 'Branqueamento Dentário (Teeth Whitening)',
        target: 'Pacientes com dentes escurecidos ou manchados que desejam um sorriso mais branco',
        desc: 'Vários tons de clareamento são alcançados com gel especial e ativação por luz.',
        img: '/treatments/accordion/teeth-whitening.webp',
        href: '/treatments/cosmetic-dentistry/teeth-whitening',
      },
      {
        title: 'Tratamento de Sorriso Gengival (Gummy Smile)',
        target: 'Pacientes cujas gengivas ficam excessivamente visíveis ao sorrir',
        desc: 'A visibilidade da gengiva é reduzida com laser ou toxina botulínica para um sorriso equilibrado.',
        img: '/treatments/accordion/gummy-smile-treatment.webp',
        href: '/treatments/cosmetic-dentistry/gummy-smile-treatment',
      },
      {
        title: 'Contorno e Remodelação Dentária',
        target: 'Pacientes com pequenas irregularidades de formato que desejam simetria',
        desc: 'Pequenas asperezas e desníveis são suavizados para obter uma forma mais estética.',
        img: '/treatments/accordion/tooth-contouring-shaping.webp',
        href: '/treatments/cosmetic-dentistry/tooth-contouring-shaping',
      },
      {
        title: 'Fechamento de Diastema',
        target: 'Pacientes com espaços (diastema) entre os dentes frontais',
        desc: 'Os espaços entre os dentes são fechados com resina composta, facetas ou ortodontia.',
        img: '/treatments/accordion/diastema-closure.webp',
        href: '/treatments/cosmetic-dentistry/diastema-closure',
      },
      {
        title: 'Sorriso Hollywood (Hollywood Smile)',
        target: 'Pacientes que desejam um sorriso brilhante, simétrico e perfeito',
        desc: 'O sorriso ideal é obtido através de branqueamento, facetas de porcelana e plástica gengival.',
        img: '/treatments/accordion/hollywood-smile.webp',
        href: '/treatments/cosmetic-dentistry/hollywood-smile',
      },
      {
        title: 'Transformação do Sorriso (Smile Makeover)',
        target: 'Pacientes que querem um sorriso estético resolvendo múltiplos problemas de uma vez',
        desc: 'Tratamento abrangente no qual clareamento, facetas e estética gengival são planejados em conjunto.',
        img: '/treatments/accordion/smile-makeover.webp',
        href: '/treatments/cosmetic-dentistry/smile-makeover',
      },
    ],
  },
  es: {
    heading: 'Encuentre el Tratamiento Adecuado para Usted',
    subtitle:
      '¿No está seguro de qué tratamiento dental se adapta a sus necesidades? Explore nuestras opciones para tomar decisiones informadas sobre su salud dental.',
    readMore: 'MÁS INFORMACIÓN',
    items: [
      {
        title: 'Blanqueamiento Dental (Teeth Whitening)',
        target: 'Pacientes con dientes oscurecidos o manchados que desean una sonrisa más blanca',
        desc: 'Se logran varios tonos de aclaramiento mediante un gel especial y un sistema de luz.',
        img: '/treatments/accordion/teeth-whitening.webp',
        href: '/treatments/cosmetic-dentistry/teeth-whitening',
      },
      {
        title: 'Tratamiento de Sonrisa Gingival (Gummy Smile)',
        target: 'Pacientes cuyas encías son excesivamente visibles al sonreír',
        desc: 'Se reduce la visibilidad de las encías con láser o botox, logrando una sonrisa más equilibrada.',
        img: '/treatments/accordion/gummy-smile-treatment.webp',
        href: '/treatments/cosmetic-dentistry/gummy-smile-treatment',
      },
      {
        title: 'Contorneado y Modelado Dental',
        target: 'Pacientes con pequeñas irregularidades de forma que desean simetría',
        desc: 'Se suavizan pequeñas irregularidades en la superficie dental para lograr una forma estética.',
        img: '/treatments/accordion/tooth-contouring-shaping.webp',
        href: '/treatments/cosmetic-dentistry/tooth-contouring-shaping',
      },
      {
        title: 'Cierre de Diastema',
        target: 'Pacientes con espacios (diastemas) entre los dientes frontales',
        desc: 'Los espacios entre dientes se cierran mediante composite, carillas u ortodoncia sin tallado.',
        img: '/treatments/accordion/diastema-closure.webp',
        href: '/treatments/cosmetic-dentistry/diastema-closure',
      },
      {
        title: 'Sonrisa Hollywood (Hollywood Smile)',
        target: 'Pacientes que desean una sonrisa brillante, simétrica y estéticamente perfecta',
        desc: 'La sonrisa ideal se logra mediante blanqueamiento, carillas de porcelana y diseño gingival.',
        img: '/treatments/accordion/hollywood-smile.webp',
        href: '/treatments/cosmetic-dentistry/hollywood-smile',
      },
      {
        title: 'Diseño de Sonrisa (Smile Makeover)',
        target: 'Pacientes que buscan una sonrisa estética completa y resolver varios problemas a la vez',
        desc: 'Tratamiento integral donde se planifican conjuntamente blanqueamiento, carillas y estética gingival.',
        img: '/treatments/accordion/smile-makeover.webp',
        href: '/treatments/cosmetic-dentistry/smile-makeover',
      },
    ],
  },
  ru: {
    heading: 'Найдите подходящее лечение для себя',
    subtitle:
      'Не уверены, какое стоматологическое лечение вам подходит? Ознакомьтесь с нашими процедурами, чтобы принять взвешенное решение о здоровье зубов.',
    readMore: 'ПОДРОБНЕЕ',
    items: [
      {
        title: 'Отбеливание зубов (Teeth Whitening)',
        target: 'Пациенты с потемневшими зубами, желающие получить белоснежную улыбку',
        desc: 'Осветление на несколько тонов достигается с помощью специального геля и световой системы.',
        img: '/treatments/accordion/teeth-whitening.webp',
        href: '/treatments/cosmetic-dentistry/teeth-whitening',
      },
      {
        title: 'Лечение десневой улыбки (Gummy Smile)',
        target: 'Пациенты, у которых при улыбке чрезмерно видна десна',
        desc: 'Заметность десны уменьшается с помощью лазера или ботулотоксина для баланса улыбки.',
        img: '/treatments/accordion/gummy-smile-treatment.webp',
        href: '/treatments/cosmetic-dentistry/gummy-smile-treatment',
      },
      {
        title: 'Контурирование и моделирование зубов',
        target: 'Пациенты с небольшими неровностями формы зубов, стремящиеся к симметрии',
        desc: 'Небольшие неровности эмали сглаживаются для достижения гармоничной формы.',
        img: '/treatments/accordion/tooth-contouring-shaping.webp',
        href: '/treatments/cosmetic-dentistry/tooth-contouring-shaping',
      },
      {
        title: 'Закрытие диастемы (щелей между зубами)',
        target: 'Пациенты с промежутками (диастемами) между передними зубами',
        desc: 'Щели между зубами закрываются с помощью бондинга, виниров или ортодонтии без обточки.',
        img: '/treatments/accordion/diastema-closure.webp',
        href: '/treatments/cosmetic-dentistry/diastema-closure',
      },
      {
        title: 'Голливудская улыбка (Hollywood Smile)',
        target: 'Пациенты, желающие ослепительную, симметричную и безупречную улыбку',
        desc: 'Идеальная улыбка достигается отбеливанием, керамическими винирами и пластикой десны.',
        img: '/treatments/accordion/hollywood-smile.webp',
        href: '/treatments/cosmetic-dentistry/hollywood-smile',
      },
      {
        title: 'Преображение улыбки (Smile Makeover)',
        target: 'Пациенты, желающие решить несколько эстетических задач одновременно',
        desc: 'Комплексное лечение, в котором совместно планируются отбеливание, виниры и эстетика десен.',
        img: '/treatments/accordion/smile-makeover.webp',
        href: '/treatments/cosmetic-dentistry/smile-makeover',
      },
    ],
  },
};

export default function TreatmentCosmeticRightTreatmentAccordion() {
  const locale = useLocale();
  const currentData =
    COSMETIC_ACCORDION_DATA[locale] || COSMETIC_ACCORDION_DATA.en;

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index);
  };

  const activeItem = currentData.items[activeIndex] || currentData.items[0];

  return (
    <section
      aria-labelledby="cosmetic-right-treatment-heading"
      className={styles.section}
    >
      <div className={styles.container}>
        {/* Header Row: Left Big Title, Right Subtitle */}
        <div className={styles.headerRow}>
          <div>
            <h2
              id="cosmetic-right-treatment-heading"
              className={styles.heading}
            >
              {currentData.heading}
            </h2>
          </div>
          <div>
            <p className={styles.subText}>{currentData.subtitle}</p>
          </div>
        </div>

        <div className={styles.surfaceCard}>
          <div className={styles.grid}>
            {/* Left Column: Accordion List */}
            <div className={styles.accordionList}>
              {currentData.items.map((item, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`${styles.item} ${
                      isActive ? styles.itemActive : ''
                    }`}
                  >
                    <div
                      className={styles.titleRow}
                      onClick={() => toggleAccordion(idx)}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isActive}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleAccordion(idx);
                        }
                      }}
                    >
                      <div className={styles.textGroup}>
                        <span className={styles.titleText}>{item.title}</span>
                        <span className={styles.targetText}>{item.target}</span>
                      </div>
                      <span
                        className={`${styles.chevron} ${
                          isActive ? styles.chevronActive : ''
                        }`}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                        >
                          <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                        </svg>
                      </span>
                    </div>

                    {isActive && (
                      <div className={styles.contentBox}>
                        <p className={styles.descText}>{item.desc}</p>
                        <div className={styles.mobileImgWrap}>
                          <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            width={600}
                            height={369}
                          />
                        </div>
                        <div className={styles.btnWrap}>
                          <Link
                            href={item.href}
                            className={styles.btn}
                            aria-label={`Read more about ${item.title}`}
                          >
                            {currentData.readMore}
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Sticky Preview Image Card */}
            <div className={styles.stickyPreview}>
              <Link
                href={activeItem.href}
                className={styles.previewCard}
                aria-label={`Explore ${activeItem.title}`}
              >
                <img
                  src={activeItem.img}
                  alt={activeItem.title}
                  loading="lazy"
                  width={600}
                  height={369}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
