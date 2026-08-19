'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import styles from './GeneralDentistryFaqSection.module.css';

interface FaqItem {
  id: string;
  q: string;
  a: string[];
}

interface FaqDictionary {
  title: string;
  subtitle: string;
  items: FaqItem[];
}

const COSMETIC_FAQ_I18N: Record<string, FaqDictionary> = {
  en: {
    title: 'Frequently Asked Questions About Cosmetic Dentistry',
    subtitle:
      'Have questions about your smile makeover? From treatment timelines to costs and results, we’re here to guide you with clear answers, expert advice, and personalized support at every step.',
    items: [
      {
        id: 'faq-1',
        q: 'What is a Hollywood Smile Makeover and what does it include?',
        a: [
          'A Hollywood Smile is a total aesthetic smile transformation designed using Golden Ratio facial mathematical proportions.',
          'Depending on your oral anatomy, it typically combines 16 to 20 ultra-thin Ivoclar E-Max laminates or zirconia crowns, diode laser gum contouring (gingivoplasty), and bite alignment to create a symmetrically bright, natural-looking smile.',
        ],
      },
      {
        id: 'faq-2',
        q: 'How does 3D Digital Smile Design (DSD) work and can I preview my new smile?',
        a: [
          'Yes! Using facial intraoral 3D scanning and dynamic smile video analysis, we design your ideal teeth on digital CAD software.',
          'Before any treatment begins, we place a physical 3D "Mock-Up" over your natural teeth so you can evaluate the shape, length, shade, and lip harmony directly in the mirror with zero commitment.',
        ],
      },
      {
        id: 'faq-3',
        q: 'What is Gummy Smile treatment and how is laser gum contouring performed?',
        a: [
          'A Gummy Smile occurs when excessive gum tissue is displayed when smiling.',
          'Using pain-free diode laser gingivoplasty, we gently sculpt and reshape the gum margins in minutes with zero bleeding or stitches, lengthening the visible tooth surface and creating a balanced pink-to-white aesthetic ratio.',
        ],
      },
      {
        id: 'faq-4',
        q: 'Can I choose super bright Hollywood shades like BL1 or BL2?',
        a: [
          'Yes! We offer the full Bleach spectrum (BL1, BL2, BL3, BL4) as well as natural Vita shades (A1, B1, etc.).',
          'Our cosmetic master ceramists guide you to ensure the shade compliments your skin tone, lip volume, and eye color without appearing artificial.',
        ],
      },
      {
        id: 'faq-5',
        q: 'How long does a Hollywood Smile transformation last?',
        a: [
          'With good oral hygiene, routine dental checkups, and wearing a night guard if you clench your teeth, custom Ivoclar E-Max and porcelain smile makeovers typically last 15 to 20+ years without losing their luster or color.',
        ],
      },
      {
        id: 'faq-6',
        q: 'Is the Hollywood Smile procedure painful?',
        a: [
          'Not at all. Every step is performed under gentle computer-guided local anesthesia.',
          'Temporary teeth are placed immediately on day one to prevent sensitivity while your permanent teeth are crafted in our lab.',
        ],
      },
      {
        id: 'faq-7',
        q: 'How many days do I need to stay in Antalya for a Hollywood Smile?',
        a: [
          'A complete Hollywood Smile transformation takes only 5 to 7 days in Antalya (typically 3 visits: 1. Consultation, DSD scan & mock-up; 2. Enamel preparation & digital impression; 3. Try-in, final aesthetic check & bonding).',
        ],
      },
      {
        id: 'faq-8',
        q: 'Can cosmetic dentistry fix gaps between my teeth (Diastema)?',
        a: [
          'Yes! Porcelain laminates and composite bonding are the premier solutions to close midline diastemas and gaps permanently without needing orthodontic braces.',
        ],
      },
      {
        id: 'faq-9',
        q: 'What is the difference between In-Office Laser Whitening and Home Whitening?',
        a: [
          'In-office Philips Zoom laser whitening delivers up to 6–8 shades of brightness in a single 45-minute clinical session.',
          'Home whitening trays are provided to maintain and enhance your brightness over time.',
        ],
      },
      {
        id: 'faq-10',
        q: 'Will my porcelain veneers stain over time from coffee or smoking?',
        a: [
          'No. Swiss Ivoclar E-Max porcelain is a non-porous, glazed glass-ceramic material that is 100% resistant to stains from coffee, tea, red wine, and tobacco.',
        ],
      },
    ],
  },
  tr: {
    title: 'Estetik Diş Hekimliği Hakkında Sıkça Sorulan Sorular',
    subtitle:
      'Gülüş tasarımınızla ilgili sorularınız mı var? Tedavi sürelerinden maliyetlere ve sonuçlara kadar her adımda net cevaplar ve uzman desteğiyle yanınızdayız.',
    items: [
      {
        id: 'faq-1',
        q: 'Hollywood Smile Gülüş Tasarımı nedir ve neleri kapsar?',
        a: [
          'Hollywood Smile, yüzün altın oranına göre matematiksel olarak planlanan tam estetik bir gülüş dönüşümüdür.',
          'Ağız yapınıza bağlı olarak genellikle 16-20 adet Ivoclar E-Max yaprak porselen veya zirkonyum kaplama, diyot lazerle diş eti şekillendirme ve kapanış hizalamasını içerir.',
        ],
      },
      {
        id: 'faq-2',
        q: '3D Dijital Gülüş Tasarımı (DSD) nasıl çalışır ve sonucumu önceden görebilir miyim?',
        a: [
          'Evet! 3D ağız içi tarama ve dinamik gülüş video analiziyle ideal dişleriniz dijital yazılımda tasarlanır.',
          'Tedaviye başlamadan önce dişlerinize uygulanan 3D Mock-Up provasıyla yeni gülüşünüzü aynada canlı olarak görüp onaylayabilirsiniz.',
        ],
      },
      {
        id: 'faq-3',
        q: 'Gummy smile (diş eti gülüşü) nedir ve lazerle nasıl tedavi edilir?',
        a: [
          'Güldüğünüzde diş etlerinin fazla görünmesi durumudur.',
          'Ağrısız diyot lazerle birkaç dakikada kanamasız ve dikişsiz olarak diş eti sınırları hizalanır ve diş boyları uzatılır.',
        ],
      },
      {
        id: 'faq-4',
        q: 'BL1 veya BL2 gibi ekstra beyaz Hollywood tonlarını seçebilir miyim?',
        a: [
          'Evet! Tüm Bleach tonları (BL1, BL2, BL3, BL4) ve doğal Vita tonları (A1, B1) mevcuttur.',
          'Uzman hekimlerimiz ten renginiz ve dudak yapınızla en uyumlu tonu seçmeniz için size rehberlik eder.',
        ],
      },
      {
        id: 'faq-5',
        q: 'Hollywood Smile gülüş tasarımı ne kadar süre dayanır?',
        a: [
          'İyi bir ağız bakımı ve düzenli kontrollerle Ivoclar E-Max ve porselen gülüş tasarımları 15 ila 20+ yıl boyunca parlaklığını ve rengini korur.',
        ],
      },
      {
        id: 'faq-6',
        q: 'İşlem sırasında herhangi bir ağrı hissedilir mi?',
        a: [
          'Kesinlikle hayır. Tüm aşamalar konforlu lokal anestezi altında gerçekleştirilir. İlk gün takılan geçici dişlerle hassasiyet tamamen önlenir.',
        ],
      },
      {
        id: 'faq-7',
        q: 'Hollywood Smile için Antalya’da kaç gün kalmalıyım?',
        a: [
          'Komple bir Hollywood Smile dönüşümü Antalya’da yalnızca 5 ila 7 gün sürer (genellikle 3 klinik randevusu).',
        ],
      },
      {
        id: 'faq-8',
        q: 'Estetik diş tedavisiyle ayrık dişler (diastema) kapatılabilir mi?',
        a: [
          'Evet! Yaprak porselen veya estetik kompozit bonding ile ön dişler arasındaki boşluklar tel tedavisine gerek kalmadan kalıcı olarak kapatılır.',
        ],
      },
      {
        id: 'faq-9',
        q: 'Klinik tipi lazer beyazlatma ile ev tipi beyazlatma arasındaki fark nedir?',
        a: [
          'Klinikte uygulanan Philips Zoom lazer beyazlatma tek bir 45 dakikalık seansta dişleri 6-8 tona kadar açar. Ev tipi plaklar ise beyazlığın pekiştirilmesini sağlar.',
        ],
      },
      {
        id: 'faq-10',
        q: 'Porselen laminalar kahve veya sigaradan lekelenir mi?',
        a: [
          'Hayır. İsviçre Ivoclar E-Max porselen gözeneksiz cam seramik yapısıyla kahve, çay, şarap ve sigara lekelerine karşı %100 dirençlidir.',
        ],
      },
    ],
  },
  de: {
    title: 'Häufig gestellte Fragen zur ästhetischen Zahnheilkunde',
    subtitle:
      'Haben Sie Fragen zu Ihrem neuen Lächeln? Wir bieten transparente Antworten und fachliche Begleitung bei jedem Schritt.',
    items: [
      {
        id: 'faq-1',
        q: 'Was ist ein Hollywood Smile und was beinhaltet es?',
        a: [
          'Ein Hollywood Smile ist eine vollständige ästhetische Zahnverwandlung nach dem Goldenen Schnitt des Gesichts.',
          'Es umfasst 16–20 Ivoclar E-Max Veneers oder Zirkonkronen, Laser-Zahnfleischkorrektur und harmonische Bissanpassung.',
        ],
      },
      {
        id: 'faq-2',
        q: 'Kann ich mein neues Lächeln vor Behandlungsbeginn sehen?',
        a: [
          'Ja! Mittels 3D Digital Smile Design und einem Mock-Up probieren Sie Ihr neues Lächeln vorab direkt im Mund an.',
        ],
      },
      {
        id: 'faq-3',
        q: 'Wie funktioniert die schmerzfreie Gummy Smile Behandlung?',
        a: [
          'Mit einem Diodenlaser wird der Zahnfleischsaum in wenigen Minuten sanft und blutfrei modelliert.',
        ],
      },
      {
        id: 'faq-4',
        q: 'Welche Zahnfarben stehen zur Auswahl?',
        a: [
          'Alle Bleachtöne (BL1 bis BL4) sowie natürliche Vita-Farben (A1, B1) stehen zur Verfügung.',
        ],
      },
      {
        id: 'faq-5',
        q: 'Wie lange hält ein Hollywood Smile?',
        a: [
          'Bei guter Pflege halten E-Max Veneers und Zirkonkronen 15 bis über 20 Jahre.',
        ],
      },
      {
        id: 'faq-6',
        q: 'Ist die Behandlung schmerzhaft?',
        a: [
          'Nein, alle Schritte erfolgen unter schonender Lokalanästhesie. Provisorische Zähne schützen vor Empfindlichkeiten.',
        ],
      },
      {
        id: 'faq-7',
        q: 'Wie viele Tage dauert der Aufenthalt in Antalya?',
        a: [
          'Ein Hollywood Smile erfordert lediglich 5 bis 7 Tage Aufenthalt in Antalya.',
        ],
      },
      {
        id: 'faq-8',
        q: 'Können Zahnlücken (Diastema) geschlossen werden?',
        a: [
          'Ja, Veneers und Composite Bonding schließen Zahnlücken dauerhaft ohne Zahnspange.',
        ],
      },
      {
        id: 'faq-9',
        q: 'Was bewirkt das Philips Zoom Laser-Bleaching?',
        a: [
          'Es hellt natürliche Zähne in nur 45 Minuten um 6 bis 8 Farbstufen sicher auf.',
        ],
      },
      {
        id: 'faq-10',
        q: 'Können sich Keramik-Veneers verfärben?',
        a: [
          'Nein, E-Max Glaskeramik ist absolut fleckenresistent gegen Kaffee, Tee und Tabak.',
        ],
      },
    ],
  },
  pl: {
    title: 'Najczęściej zadawane pytania o stomatologię estetyczną',
    subtitle:
      'Masz pytania dotyczące metamorfozy uśmiechu w Antalyi? Poznaj odpowiedzi ekspertów Master Smile Studio.',
    items: [
      {
        id: 'faq-1',
        q: 'Czym jest Hollywood Smile i co zawiera zabieg?',
        a: [
          'To kompleksowa metamorfoza uśmiechu oparta na złotych proporcjach twarzy, łącząca 16–20 licówek E-Max lub koron cyrkonowych z plastyką dziąseł.',
        ],
      },
      {
        id: 'faq-2',
        q: 'Czy mogę zobaczyć efekt przed rozpoczęciem szlifowania?',
        a: [
          'Tak! Wykonujemy cyfrowy projekt 3D i przymiarkę próbną (mock-up) bezpośrednio w Twoich ustach.',
        ],
      },
      {
        id: 'faq-3',
        q: 'Jak wygląda leczenie uśmiechu dziąsłowego?',
        a: [
          'Laser diodowy pozwala na bezbolesne i bezkrwawe wymodelowanie linii dziąseł w kilka minut.',
        ],
      },
      {
        id: 'faq-4',
        q: 'Czy mogę wybrać odcień ekstra biały (Bleach)?',
        a: [
          'Tak, dostępne są wszystkie odcienie od naturalnych po olśniewająco białe BL1-BL4.',
        ],
      },
      {
        id: 'faq-5',
        q: 'Jaka jest trwałość licówek E-Max?',
        a: [
          'Średnia trwałość licówek porcelanowych wynosi od 15 do ponad 20 lat.',
        ],
      },
      {
        id: 'faq-6',
        q: 'Czy zabieg jest bolesny?',
        a: [
          'Nie, zabiegi wykonywane są w znieczuleniu miejscowym, a zęby tymczasowe chronią przed nadwrażliwością.',
        ],
      },
      {
        id: 'faq-7',
        q: 'Ile dni trwa pobyt w Antalyi?',
        a: [
          'Pełna metamorfoza wymaga pobytu trwającego od 5 do 7 dni.',
        ],
      },
      {
        id: 'faq-8',
        q: 'Czy można zamknąć przerwę między zębami (diastemę)?',
        a: [
          'Tak, licówki i bonding trwale eliminują przerwy między zębami.',
        ],
      },
      {
        id: 'faq-9',
        q: 'Jak działa wybielanie laserowe Philips Zoom?',
        a: [
          'Rozjaśnia zęby o 6–8 odcieni w zaledwie 45 minut bez uszkadzania szkliwa.',
        ],
      },
      {
        id: 'faq-10',
        q: 'Czy licówki porcelanowe ulegają przebarwieniom?',
        a: [
          'Nie, ceramika E-Max jest w 100% odporna na plamy z kawy, herbaty i dymu tytoniowego.',
        ],
      },
    ],
  },
  pt: {
    title: 'Perguntas Frequentes Sobre Dentisteria Estética',
    subtitle:
      'Tire as suas dúvidas sobre a transformação do seu sorriso em Antalya com a equipa do Master Smile Studio.',
    items: [
      {
        id: 'faq-1',
        q: 'O que é o Hollywood Smile e o que inclui?',
        a: [
          'É um design integral do sorriso com base na proporção áurea facial, combinando 16 a 20 facetas E-Max ou coroas de zircónia e contorno gengival.',
        ],
      },
      {
        id: 'faq-2',
        q: 'Posso ver o resultado antes de iniciar o tratamento?',
        a: [
          'Sim! Através do 3D Digital Smile Design e da prova de mock-up na boca avalia o resultado com total segurança.',
        ],
      },
      {
        id: 'faq-3',
        q: 'Como é corrigido o sorriso gengival?',
        a: [
          'Com laser de díodo, remodelamos o contorno gengival de forma indolor e sem pontos em poucos minutos.',
        ],
      },
      {
        id: 'faq-4',
        q: 'Posso escolher tonalidades ultra brancas?',
        a: [
          'Sim, dispomos de toda a escala Bleach (BL1 a BL4) e tons naturais Vita.',
        ],
      },
      {
        id: 'faq-5',
        q: 'Qual a durabilidade das facetas E-Max?',
        a: [
          'Com bons cuidados, as facetas de porcelana duram 15 a mais de 20 anos.',
        ],
      },
      {
        id: 'faq-6',
        q: 'O procedimento causa dor?',
        a: [
          'Não, todo o tratamento é realizado sob anestesia local suave e com dentes provisórios imediatos.',
        ],
      },
      {
        id: 'faq-7',
        q: 'Quantos dias são necessários em Antalya?',
        a: [
          'Apenas 5 a 7 dias são suficientes para concluir o seu novo sorriso.',
        ],
      },
      {
        id: 'faq-8',
        q: 'É possível fechar o espaço entre os dentes (diastema)?',
        a: [
          'Sim, as facetas e o bonding fecham diastemas de forma permanente.',
        ],
      },
      {
        id: 'faq-9',
        q: 'Qual a eficácia do branqueamento Philips Zoom?',
        a: [
          'Clareia os dentes de 6 a 8 tons numa única sessão clínica de 45 minutos.',
        ],
      },
      {
        id: 'faq-10',
        q: 'As facetas ganham manchas com café ou tabaco?',
        a: [
          'Não, a cerâmica vítrea E-Max é totalmente impermeável a manchas.',
        ],
      },
    ],
  },
  es: {
    title: 'Preguntas Frecuentes Sobre Odontología Estética',
    subtitle:
      'Respuestas claras y asesoramiento experto para el diseño de su nueva sonrisa en Antalya.',
    items: [
      {
        id: 'faq-1',
        q: '¿Qué es el Hollywood Smile y qué incluye?',
        a: [
          'Es un diseño estético integral según la proporción áurea facial, con 16 a 20 carillas E-Max o coronas de zirconio y remodelado gingival.',
        ],
      },
      {
        id: 'faq-2',
        q: '¿Puedo probar mi sonrisa antes de empezar?',
        a: [
          '¡Sí! Diseñamos digitalmente en 3D y realizamos una prueba en boca (mock-up) para su aprobación.',
        ],
      },
      {
        id: 'faq-3',
        q: '¿Cómo se trata la sonrisa gingival?',
        a: [
          'Con láser de diodo estético, perfilamos las encías en minutos sin dolor ni puntos.',
        ],
      },
      {
        id: 'faq-4',
        q: '¿Se pueden elegir tonos ultrablancos?',
        a: [
          'Sí, disponemos de toda la gama Bleach (BL1-BL4) y tonos naturales Vita.',
        ],
      },
      {
        id: 'faq-5',
        q: '¿Cuánto duran las carillas E-Max?',
        a: [
          'Con higiene adecuada, tienen una vida útil de 15 a más de 20 años.',
        ],
      },
      {
        id: 'faq-6',
        q: '¿El procedimiento es doloroso?',
        a: [
          'No, se utiliza anestesia local indolora y coronas provisionales protectoras.',
        ],
      },
      {
        id: 'faq-7',
        q: '¿Cuántos días de estancia se requieren en Antalya?',
        a: [
          'Solo 5 a 7 días en Antalya para completar su transformación.',
        ],
      },
      {
        id: 'faq-8',
        q: '¿Se pueden cerrar espacios dentales (diastemas)?',
        a: [
          'Sí, las carillas y el bonding corrigen diastemas sin ortodoncia.',
        ],
      },
      {
        id: 'faq-9',
        q: '¿Cómo funciona el blanqueamiento Philips Zoom?',
        a: [
          'Aclara de 6 a 8 tonos en una sola sesión clínica de 45 minutos.',
        ],
      },
      {
        id: 'faq-10',
        q: '¿Las carillas se manchan con café o tabaco?',
        a: [
          'No, la porcelana vítrea E-Max es 100% resistente a las manchas.',
        ],
      },
    ],
  },
  ru: {
    title: 'Часто задаваемые вопросы об эстетической стоматологии',
    subtitle:
      'Все, что нужно знать о создании вашей идеальной голливудской улыбки в Master Smile Studio в Анталье.',
    items: [
      {
        id: 'faq-1',
        q: 'Что такое Hollywood Smile и что входит в комплекс?',
        a: [
          'Это полное преображение улыбки по золотому сечению лица, включающее 16–20 виниров E-Max или циркониевых коронок и пластику десен.',
        ],
      },
      {
        id: 'faq-2',
        q: 'Можно ли примерить новую улыбку до начала процедур?',
        a: [
          'Да! С помощью 3D Digital Smile Design и физического mock-up вы оцениваете результат прямо в зеркале.',
        ],
      },
      {
        id: 'faq-3',
        q: 'Как лечится десневая улыбка (gummy smile)?',
        a: [
          'Диодным лазером десневой контур выравнивается за несколько минут без боли и швов.',
        ],
      },
      {
        id: 'faq-4',
        q: 'Можно ли выбрать белоснежный оттенок (Bleach)?',
        a: [
          'Да, доступны оттенки BL1–BL4 и натуральная палитра Vita.',
        ],
      },
      {
        id: 'faq-5',
        q: 'Каков срок службы виниров E-Max?',
        a: [
          'При правильном уходе керамические виниры служат от 15 до 20+ лет.',
        ],
      },
      {
        id: 'faq-6',
        q: 'Болезненна ли процедура установки?',
        a: [
          'Нет, всё проходит под бережной местной анестезией с защитными временными коронками.',
        ],
      },
      {
        id: 'faq-7',
        q: 'Сколько дней нужно провести в Анталье?',
        a: [
          'Полный курс занимает всего 5–7 дней (3 комфортных визита).',
        ],
      },
      {
        id: 'faq-8',
        q: 'Можно ли закрыть щели между зубами (диастему)?',
        a: [
          'Да, виниры и художественный бондинг навсегда устраняют промежутки.',
        ],
      },
      {
        id: 'faq-9',
        q: 'Как работает лазерное отбеливание Philips Zoom?',
        a: [
          'Осветляет эмаль на 6–8 тонов за 1 сеанс (45 минут) без вреда для зубов.',
        ],
      },
      {
        id: 'faq-10',
        q: 'Окрашиваются ли виниры от кофе или курения?',
        a: [
          'Нет, стеклокерамика E-Max абсолютно непористая и не впитывает красители.',
        ],
      },
    ],
  },
};

export default function CosmeticDentistryFaqSection() {
  const locale = useLocale();
  const d = COSMETIC_FAQ_I18N[locale] || COSMETIC_FAQ_I18N.en;
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

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
          <div className={styles.accordion}>
            {d.items.map(item => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`${styles.item} ${isOpen ? styles.active : ''}`}
                >
                  <div
                    className={styles.title}
                    onClick={() => toggle(item.id)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.text}>{item.q}</span>
                    <span className={styles.icon} aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                      </svg>
                    </span>
                  </div>

                  {isOpen && (
                    <div className={styles.content}>
                      {item.a.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
