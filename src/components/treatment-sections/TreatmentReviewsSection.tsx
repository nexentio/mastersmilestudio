'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import styles from './TreatmentReviewsSection.module.css';

interface ReviewItem {
  id: string;
  author: string;
  platform: 'google' | 'trustpilot';
  platformImg: string;
  text: Record<string, string>;
}

const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rafael Rodriguez',
    platform: 'trustpilot',
    platformImg: '/reviews/trustpilot.webp',
    text: {
      en: 'I came to Istanbul to assist my father in law to do an all on 6 upper jaw. We had booked in another clinic but when we saw the mass production system decided to look into Master Smile Studio. Their contact team could not be better. The owner doctors complement each other as though they were one. Tomorrow he is getting his temporary fix denture and soon the final one. The preciseness and skill of the surgeon were mind boggling. I was so impressed with their work that I did a deep cleaning for myself and I’m totally satisfied. The clinic is modern, well equipped and beautiful.',
      tr: 'Kayınpederimin All-on-6 üst çene implant tedavisi için İstanbul’a geldik. Başka bir kliniğe randevu almıştık ancak seri üretim mantığını görünce Master Smile Studio’yu tercih ettik. İletişim ekibi harikaydı. Hekimlerin uyumu ve cerrahın uzmanlığı tek kelimeyle mükemmeldi. Kendim için de diş temizliği yaptırdım ve çok memnun kaldım. Klinik modern, son derece donanımlı ve güzel.',
      de: 'Ich kam nach Istanbul, um meinem Schwiegervater bei einer All-on-6-Behandlung zu helfen. Wir haben uns für Master Smile Studio entschieden. Das Betreuungsteam war fantastisch. Die Präzision des Chirurgen war überwältigend. Ich habe selbst eine Zahnreinigung machen lassen und bin vollkommen zufrieden. Die Klinik ist hochmodern und erstklassig.',
      pl: 'Przyjechałem do Stambułu z teściem na zabieg All-on-6. Zrezygnowaliśmy z innej kliniki i wybraliśmy Master Smile Studio. Zespół koordynatorów był niezrównany. Precyzja chirurga wprawiła nas w zachwyt. Sam zdecydowałem się na higienizację. Klinika jest ultranowoczesna i piękna.',
      pt: 'Vim a Istambul acompanhar o meu sogro para um tratamento All-on-6 superior. Ficámos impressionados com o atendimento do Master Smile Studio. A precisão do cirurgião foi incrível. A clínica é moderna e muito acolhedora.',
      es: 'Vine a Estambul para acompañar a mi suegro en su tratamiento All-on-6. Decidimos elegir Master Smile Studio por su atención personalizada. La precisión del cirujano fue impresionante. Una clínica moderna y de primer nivel.',
      ru: 'Прилетел в Стамбул сопровождать тестя на операцию All-on-6 верхней челюсти. Выбрали Master Smile Studio за индивидуальный подход. Мастерство хирурга на высшем уровне. Клиника современная и очень комфортная.',
    },
  },
  {
    id: 'rev-2',
    author: 'Jason Allen Wear',
    platform: 'google',
    platformImg: '/reviews/google.webp',
    text: {
      en: 'If you’re looking to get dental implants or any other dental procedures done, this is the place to be! From Day 1 the communication was top-tier. I’m super happy with my results and new smile. My expectations were exceeded by far! I’d refer Master Smile Studio to everyone anytime anywhere. Super affordable as well!',
      tr: 'İmplant veya başka bir diş tedavisi yaptırmak istiyorsanız kesinlikle doğru adres burası! İlk günden itibaren iletişim üst düzeydi. Sonuçlardan ve yeni gülüşümden inanılmaz mutluyum. Beklentilerimin çok üzerine çıktılar! Herkese gönül rahatlığıyla tavsiye ederim.',
      de: 'Wenn Sie Zahnimplantate oder andere zahnärztliche Eingriffe planen, ist dies der perfekte Ort! Von Tag 1 an war die Kommunikation erstklassig. Ich bin überglücklich mit meinen Ergebnissen und meinem neuen Lächeln. Meine Erwartungen wurden bei weitem übertroffen!',
      pl: 'Jeśli planujesz implanty lub inne zabiegi stomatologiczne, to najlepsze miejsce! Komunikacja od pierwszego dnia na najwyższym poziomie. Jestem zachwycony nowym uśmiechem!',
      pt: 'Se procura fazer implantes dentários, este é o lugar ideal! Comunicação de excelência desde o primeiro dia. Muito feliz com os meus resultados e novo sorriso.',
      es: '¡Si buscas hacerte implantes dentales, este es el lugar indicado! Comunicación de primer nivel desde el día uno. ¡Mis expectativas fueron superadas con creces!',
      ru: 'Если вы планируете имплантацию или любое другое лечение, это лучшее место! Коммуникация с первого дня на высшем уровне. Результаты превзошли все ожидания!',
    },
  },
  {
    id: 'rev-3',
    author: 'Amina Abdelwarth',
    platform: 'google',
    platformImg: '/reviews/google.webp',
    text: {
      en: 'I had a nice positive experience with Master Smile Studio. They treated me very well and professionally. I was quite nervous about having the extractions and cleanings but everything was fully explained which gave me peace of mind and the procedure was completely pain free. I also received good aftercare.',
      tr: 'Master Smile Studio ile son derece olumlu bir deneyim yaşadım. Bana çok profesyonel ve özenli yaklaştılar. Diş çekimleri ve temizlik konusunda oldukça gergindim ancak her şey detaylıca açıklandı, bu da içimi rahatlattı ve işlem tamamen ağrısız geçti.',
      de: 'Ich hatte eine sehr positive Erfahrung bei Master Smile Studio. Ich war sehr nervös wegen der Behandlungen, aber alles wurde ausführlich erklärt, was mir Sicherheit gab. Der Eingriff war völlig schmerzfrei.',
      pl: 'Świetne, pozytywne doświadczenie z Master Smile Studio. Bałam się zabiegów, ale lekarze wszystko dokładnie wyjaśnili, a zabieg był całkowicie bezbolesny.',
      pt: 'Tive uma excelente experiência no Master Smile Studio. Estava nervosa com os procedimentos, mas tudo foi explicado ao detalhe e correu sem qualquer dor.',
      es: 'Tuve una experiencia muy positiva en Master Smile Studio. Estaba nerviosa por los tratamientos, pero todo fue explicado con claridad y sin ningún dolor.',
      ru: 'Очень позитивный опыт лечения в Master Smile Studio. Я переживала перед процедурами, но врачи всё подробно объяснили, и всё прошло совершенно безболезненно.',
    },
  },
  {
    id: 'rev-4',
    author: 'Malcolm Mallia',
    platform: 'google',
    platformImg: '/reviews/google.webp',
    text: {
      en: 'Great communication. Met all expectations. Did whatever they could to make you feel as comfortable as possible. Was fully satisfied with the teeth whitening and general dental care. I would definitely recommend them.',
      tr: 'Harika iletişim. Tüm beklentilerimi karşıladılar. Sizi olabildiğince rahat hissettirmek için ellerinden gelen her şeyi yaptılar. Diş beyazlatma ve genel diş bakımından tamamen memnun kaldım. Kesinlikle tavsiye ederim.',
      de: 'Hervorragende Kommunikation. Alle Erwartungen wurden erfüllt. Sie taten alles, damit man sich wohlfühlt. Vollkommen zufrieden mit dem Bleaching und der allgemeinen Zahnbehandlung.',
      pl: 'Świetna komunikacja. Spełnili wszystkie oczekiwania. Zrobili wszystko, aby wizyta przebiegła bezstresowo. Pełna satysfakcja z wybielania i opieki stomatologicznej.',
      pt: 'Excelente comunicação. Superaram as expectativas. Fizeram tudo para que me sentisse confortável. Recomendo vivamente os seus serviços.',
      es: 'Excelente comunicación. Cumplieron con todas mis expectativas. Hicieron todo lo posible para que me sintiera cómodo. Los recomiendo totalmente.',
      ru: 'Отличная коммуникация. Оправдали все ожидания. Сделали всё возможное для максимального комфорта. Очень доволен лечением и чисткой.',
    },
  },
  {
    id: 'rev-5',
    author: 'Olha Hubych',
    platform: 'google',
    platformImg: '/reviews/google.webp',
    text: {
      en: 'I did teeth cleaning and dental filling. The doctors are true professionals and very polite. The clinic is very clean and bright. I am satisfied with the results and will definitely return again when I visit Istanbul.',
      tr: 'Diş taşı temizliği ve estetik dolgu yaptırdım. Doktorlar gerçek profesyoneller ve son derece nazikler. Klinik tertemiz ve ferah. Sonuçlardan çok memnun kaldım, İstanbul’a tekrar geldiğimde kesinlikle uğrayacağım.',
      de: 'Ich habe eine Zahnreinigung und Füllung machen lassen. Die Ärzte sind echte Profis und sehr zuvorkommend. Die Klinik ist makellos sauber und modern.',
      pl: 'Wykonałam higienizację i plomby. Lekarze to prawdziwi profesjonaliści, bardzo uprzejmi. Klinika jest sterylnie czysta i jasna.',
      pt: 'Fiz limpeza dentária e restaurações. Os médicos são excelentes profissionais e muito simpáticos. Recomendo a 100%.',
      es: 'Me hice una limpieza dental y empastes. Los dentistas son auténticos profesionales y muy amables. La clínica es impecable.',
      ru: 'Делала чистку зубов и пломбирование. Врачи — настоящие профессионалы своего дела. Клиника очень чистая, современная и светлая.',
    },
  },
  {
    id: 'rev-6',
    author: 'Iceman Mike',
    platform: 'google',
    platformImg: '/reviews/google.webp',
    text: {
      en: 'The doctors made the whole process easy and stress-free. Very clean clinic, modern equipment, painless treatment. I am completely satisfied with my teeth treatment. Highly recommend!',
      tr: 'Doktorlar tüm süreci çok kolay ve stressiz hale getirdi. Çok temiz bir klinik, modern ekipmanlar, ağrısız tedavi. Diş tedavimden tamamen memnunum. Şiddetle tavsiye ederim!',
      de: 'Die Ärzte machten den gesamten Ablauf einfach und stressfrei. Sehr saubere Klinik, moderne Ausstattung, schmerzfreie Behandlung. Absolut empfehlenswert!',
      pl: 'Lekarze sprawili, że cały proces przebiegł łatwo i bezstresowo. Bardzo czysta klinika, nowoczesny sprzęt, bezbolesne leczenie.',
      pt: 'Os médicos tornaram todo o processo fácil e tranquilo. Clínica muito limpa, equipamentos modernos e tratamento sem dor.',
      es: 'Los médicos hicieron que todo el proceso fuera sencillo y sin estrés. Clínica muy limpia, equipos modernos y tratamiento indoloro.',
      ru: 'Врачи сделали весь процесс легким и безболезненным. Очень чистая клиника, современное оборудование. Очень рекомендую!',
    },
  },
  {
    id: 'rev-7',
    author: 'Shahab',
    platform: 'google',
    platformImg: '/reviews/google.webp',
    text: {
      en: 'Had my teeth cleaned and checked up. The hygienist and dentist were very gentle and thorough. Best dental clinic in Istanbul for international patients!',
      tr: 'Diş temizliği ve genel kontrol yaptırdım. Hekimler çok nazik ve titizdi. Uluslararası hastalar için İstanbul’daki en iyi diş kliniği!',
      de: 'Ich habe eine Zahnreinigung und Kontrolle durchführen lassen. Das Team war äußerst sanft und gründlich. Die beste Zahnklinik in Istanbul für internationale Patienten!',
      pl: 'Miałem wykonaną higienizację i przegląd. Zespół był niezwykle delikatny i dokładny. Najlepsza klinika w Stambule!',
      pt: 'Fiz limpeza dentária e check-up geral. A equipa foi super atenciosa e cuidadosa. A melhor clínica de Istambul!',
      es: 'Me hice una limpieza y revisión. El equipo fue muy delicado y minucioso. ¡La mejor clínica dental de Estambul!',
      ru: 'Делал профессиональную гигиену и осмотр. Врачи работали очень аккуратно и качественно. Лучшая стоматология в Стамбуле!',
    },
  },
  {
    id: 'rev-8',
    author: 'N RS',
    platform: 'google',
    platformImg: '/reviews/google.webp',
    text: {
      en: 'Very professional staff, friendly environment and top notch results. Cleanings and checkups are done with high care. Would recommend to anyone visiting Istanbul.',
      tr: 'Çok profesyonel kadro, samimi bir ortam ve birinci sınıf sonuçlar. Temizlik ve kontroller büyük bir özenle yapılıyor. İstanbul’a gelen herkese tavsiye ederim.',
      de: 'Sehr professionelles Personal, freundliche Atmosphäre und erstklassige Ergebnisse. Sehr empfehlenswert für jeden Istanbul-Besucher.',
      pl: 'Bardzo profesjonalny personel, przyjazna atmosfera i doskonałe rezultaty. Gorąco polecam wszystkim odwiedzającym Stambuł.',
      pt: 'Equipa muito profissional, ambiente acolhedor e resultados de excelência. Recomendo vivamente a quem visita Istambul.',
      es: 'Personal muy profesional, ambiente agradable y resultados de primer nivel. Lo recomiendo a cualquiera que visite Estambul.',
      ru: 'Очень профессиональный персонал, приятная атмосфера и превосходный результат. Рекомендую всем, кто посещает Стамбул.',
    },
  },
];

const UI_TEXT = {
  headS1: {
    en: 'Every Smile Has a Story.',
    tr: 'Her Gülüşün Bir Hikayesi Var.',
    de: 'Jedes Lächeln hat eine Geschichte.',
    pl: 'Każdy Uśmiech Ma Swoją Historię.',
    pt: 'Cada Sorriso Tem Uma História.',
    es: 'Cada Sonrisa Tiene Una Historia.',
    ru: 'У каждой улыбки своя история.',
  },
  headS2: {
    en: 'Read Master Smile Studio Reviews on Google and Trustpilot to hear from those we’ve proudly treated.',
    tr: 'Gururla tedavi ettiğimiz hastalarımızın deneyimlerini Google ve Trustpilot üzerindeki Master Smile Studio yorumlarından okuyun.',
    de: 'Lesen Sie Master Smile Studio Bewertungen auf Google und Trustpilot von Patienten, die wir mit Stolz behandelt haben.',
    pl: 'Przeczytaj opinie o Master Smile Studio na Google i Trustpilot od pacjentów, których z dumą leczyliśmy.',
    pt: 'Leia as avaliações do Master Smile Studio no Google e Trustpilot de quem tratámos com orgulho.',
    es: 'Lea las reseñas de Master Smile Studio en Google y Trustpilot de quienes hemos tratado con orgullo.',
    ru: 'Читайте отзывы о Master Smile Studio на Google и Trustpilot от пациентов, которым мы подарили новые улыбки.',
  },
};

export default function TreatmentReviewsSection() {
  const locale = useLocale();
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const title = UI_TEXT.headS1[locale as keyof typeof UI_TEXT.headS1] || UI_TEXT.headS1.en;
  const subtitle = UI_TEXT.headS2[locale as keyof typeof UI_TEXT.headS2] || UI_TEXT.headS2.en;

  const handlePrev = () => {
    setStartIndex(prev => Math.max(0, prev - itemsPerPage));
  };

  const handleNext = () => {
    setStartIndex(prev =>
      prev + itemsPerPage < REVIEWS_DATA.length ? prev + itemsPerPage : prev
    );
  };

  const visibleReviews = REVIEWS_DATA.slice(startIndex, startIndex + itemsPerPage);

  const getLocalized = (textMap: Record<string, string>) => {
    return textMap[locale] || textMap.en || textMap.tr || '';
  };

  return (
    <section className={styles.wrapper} aria-label={title}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.headS1}>{title}</div>
          <div className={styles.headS2}>{subtitle}</div>
        </div>

        <div className={styles.sliderOuter}>
          <div className={styles.track}>
            {visibleReviews.map(review => (
              <div key={review.id} className={styles.card}>
                {/* Top: User Icon + Author Name (Centered) */}
                <div className={styles.cardTop}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className={styles.userIcon}
                    aria-hidden="true"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                  <span className={styles.authorName}>{review.author}</span>
                </div>

                {/* Middle: Review text (Centered) */}
                <p className={styles.commentText}>{getLocalized(review.text)}</p>

                {/* Bottom: Platform Logo + 5 Stars (Centered) */}
                <div className={styles.cardFooter}>
                  <div className={styles.platformWrap}>
                    <Image
                      src={review.platformImg}
                      alt={review.platform === 'trustpilot' ? 'Trustpilot' : 'Google'}
                      fill
                      sizes="90px"
                      className={styles.platformImg}
                    />
                  </div>
                  <div className={styles.starsWrap}>
                    <Image
                      src="/reviews/5star.webp"
                      alt="5 Stars"
                      fill
                      sizes="80px"
                      className={styles.starsImg}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.navControls}>
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={styles.navBtn}
              aria-label="Previous Reviews"
            >
              &#8249;
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + itemsPerPage >= REVIEWS_DATA.length}
              className={styles.navBtn}
              aria-label="Next Reviews"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
