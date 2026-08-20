'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import styles from './TreatmentReviewsSection.module.css';

interface ReviewItem {
  id: string;
  author: string;
  country: Record<string, string>;
  treatment: Record<string, string>;
  platform: 'google' | 'trustpilot';
  platformImg: string;
  text: Record<string, string>;
}

const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rafael Rodriguez',
    country: {
      en: '🇪🇸 Spain',
      tr: '🇪🇸 İspanya',
      de: '🇪🇸 Spanien',
      pl: '🇪🇸 Hiszpania',
      pt: '🇪🇸 Espanha',
      es: '🇪🇸 España',
      ru: '🇪🇸 Испания',
    },
    treatment: {
      en: 'All-on-6 Dental Implants',
      tr: 'All-on-6 Diş İmplantı',
      de: 'All-on-6 Zahnimplantate',
      pl: 'Implanty All-on-6',
      pt: 'Implantes All-on-6',
      es: 'Implantes All-on-6',
      ru: 'Имплантация All-on-6',
    },
    platform: 'trustpilot',
    platformImg: '/reviews/trustpilot.webp',
    text: {
      en: 'I came to Antalya to assist my father in law to do an all on 6 upper jaw. We had booked in another clinic but when we saw the mass production system decided to look into Master Smile Studio. Their contact team could not be better. The owner doctors complement each other as though they were one. Tomorrow he is getting his temporary fix denture and soon the final one. The preciseness and skill of the surgeon were mind boggling. I was so impressed with their work that I did a deep cleaning for myself and I’m totally satisfied. The clinic is modern, well equipped and beautiful.',
      tr: 'Kayınpederimin All-on-6 üst çene implant tedavisi için Antalya’ya geldik. Başka bir kliniğe randevu almıştık ancak seri üretim mantığını görünce Master Smile Studio’yu tercih ettik. İletişim ekibi harikaydı. Hekimlerin uyumu ve cerrahın uzmanlığı tek kelimeyle mükemmeldi. Kendim için de diş temizliği yaptırdım ve çok memnun kaldım. Klinik modern, son derece donanımlı ve güzel.',
      de: 'Ich kam nach Antalya, um meinem Schwiegervater bei einer All-on-6-Behandlung zu helfen. Wir haben uns für Master Smile Studio entschieden. Das Betreuungsteam war fantastisch. Die Präzision des Chirurgen war überwältigend. Ich habe selbst eine Zahnreinigung machen lassen und bin vollkommen zufrieden. Die Klinik ist hochmodern und erstklassig.',
      pl: 'Przyjechałem do Antalyi z teściem na zabieg All-on-6. Zrezygnowaliśmy z innej kliniki i wybraliśmy Master Smile Studio. Zespół koordynatorów był niezrównany. Precyzja chirurga wprawiła nas w zachwyt. Sam zdecydowałem się na higienizację. Klinika jest ultranowoczesna i piękna.',
      pt: 'Vim a Antalya acompanhar o meu sogro para um tratamento All-on-6 superior. Ficámos impressionados com o atendimento do Master Smile Studio. A precisão do cirurgião foi incrível. A clínica é moderna e muito acolhedora.',
      es: 'Vine a Antalya para acompañar a mi suegro en su tratamiento All-on-6. Decidimos elegir Master Smile Studio por su atención personalizada. La precisión del cirujano fue impresionante. Una clínica moderna y de primer nivel.',
      ru: 'Прилетел в Анталью сопровождать тестя на операцию All-on-6 верхней челюсти. Выбрали Master Smile Studio за индивидуальный подход. Мастерство хирурга на высшем уровне. Клиника современная и очень комфортная.',
    },
  },
  {
    id: 'rev-2',
    author: 'Jason Allen Wear',
    country: {
      en: '🇺🇸 USA',
      tr: '🇺🇸 ABD',
      de: '🇺🇸 USA',
      pl: '🇺🇸 USA',
      pt: '🇺🇸 EUA',
      es: '🇺🇸 EE. UU.',
      ru: '🇺🇸 США',
    },
    treatment: {
      en: 'Full Jaw Dental Implants',
      tr: 'Tam Çene Diş İmplantı',
      de: 'Vollkiefer-Zahnimplantate',
      pl: 'Implanty Całej Szczęki',
      pt: 'Implantes de Arcada Total',
      es: 'Implantes de Arcada Completa',
      ru: 'Имплантация всей челюсти',
    },
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
    country: {
      en: '🇬🇧 United Kingdom',
      tr: '🇬🇧 İngiltere',
      de: '🇬🇧 Großbritannien',
      pl: '🇬🇧 Wielka Brytania',
      pt: '🇬🇧 Reino Unido',
      es: '🇬🇧 Reino Unido',
      ru: '🇬🇧 Великобритания',
    },
    treatment: {
      en: 'Painless Extractions & Scaling',
      tr: 'Ağrısız Çekim & Diş Temizliği',
      de: 'Schmerzfreie Extraktion & Prophylaxe',
      pl: 'Bezbolesna Ekstrakcja i Scaling',
      pt: 'Extrações e Limpeza Sem Dor',
      es: 'Extracciones y Limpieza sin Dolor',
      ru: 'Безболезненное удаление и чистка',
    },
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
    country: {
      en: '🇲🇹 Malta',
      tr: '🇲🇹 Malta',
      de: '🇲🇹 Malta',
      pl: '🇲🇹 Malta',
      pt: '🇲🇹 Malta',
      es: '🇲🇹 Malta',
      ru: '🇲🇹 Мальта',
    },
    treatment: {
      en: 'Laser Teeth Whitening',
      tr: 'Lazerle Diş Beyazlatma',
      de: 'Laser-Zahnaufhellung',
      pl: 'Laserowe Wybielanie Zębów',
      pt: 'Branqueamento Dentário a Laser',
      es: 'Blanqueamiento Dental con Láser',
      ru: 'Лазерное отбеливание зубов',
    },
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
    country: {
      en: '🇺🇦 Ukraine',
      tr: '🇺🇦 Ukrayna',
      de: '🇺🇦 Ukraine',
      pl: '🇺🇦 Ukraina',
      pt: '🇺🇦 Ucrânia',
      es: '🇺🇦 Ucrania',
      ru: '🇺🇦 Украина',
    },
    treatment: {
      en: 'Aesthetic Fillings & Scaling',
      tr: 'Estetik Dolgu & Diş Bakımı',
      de: 'Ästhetische Füllungen & Prophylaxe',
      pl: 'Wypełnienia Estetyczne i Scaling',
      pt: 'Restaurações Estéticas e Limpeza',
      es: 'Empastes Estéticos y Limpieza',
      ru: 'Эстетическое пломбирование и чистка',
    },
    platform: 'google',
    platformImg: '/reviews/google.webp',
    text: {
      en: 'I did teeth cleaning and dental filling. The doctors are true professionals and very polite. The clinic is very clean and bright. I am satisfied with the results and will definitely return again when I visit Antalya.',
      tr: 'Diş taşı temizliği ve estetik dolgu yaptırdım. Doktorlar gerçek profesyoneller ve son derece nazikler. Klinik tertemiz ve ferah. Sonuçlardan çok memnun kaldım, Antalya’ya tekrar geldiğimde kesinlikle uğrayacağım.',
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
    country: {
      en: '🇩🇪 Germany',
      tr: '🇩🇪 Almanya',
      de: '🇩🇪 Deutschland',
      pl: '🇩🇪 Niemcy',
      pt: '🇩🇪 Alemanha',
      es: '🇩🇪 Alemania',
      ru: '🇩🇪 Германия',
    },
    treatment: {
      en: 'Implant Restorations',
      tr: 'İmplant Restorasyonları',
      de: 'Implantat-Restaurationen',
      pl: 'Odbudowa na Implantach',
      pt: 'Restaurações sobre Implantes',
      es: 'Restauraciones sobre Implantes',
      ru: 'Протезирование на имплантах',
    },
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
    country: {
      en: '🇨🇦 Canada',
      tr: '🇨🇦 Kanada',
      de: '🇨🇦 Kanada',
      pl: '🇨🇦 Kanada',
      pt: '🇨🇦 Canadá',
      es: '🇨🇦 Canadá',
      ru: '🇨🇦 Канада',
    },
    treatment: {
      en: 'Deep Dental Hygiene & Care',
      tr: 'Derinlemesine Diş Bakımı',
      de: 'Tiefenhygiene & Prophylaxe',
      pl: 'Głęboka Higienizacja i Kontrola',
      pt: 'Higiene e Profilaxia Profunda',
      es: 'Higiene Profunda y Revisión',
      ru: 'Глубокая гигиена и осмотр',
    },
    platform: 'google',
    platformImg: '/reviews/google.webp',
    text: {
      en: 'Had my teeth cleaned and checked up. The hygienist and dentist were very gentle and thorough. Best dental clinic in Antalya for international patients!',
      tr: 'Diş temizliği ve genel kontrol yaptırdım. Hekimler çok nazik ve titizdi. Uluslararası hastalar için Antalya’daki en iyi diş kliniği!',
      de: 'Ich habe eine Zahnreinigung und Kontrolle durchführen lassen. Das Team war äußerst sanft und gründlich. Die beste Zahnklinik in Antalya für internationale Patienten!',
      pl: 'Miałem wykonaną higienizację i przegląd. Zespół był niezwykle delikatny i dokładny. Najlepsza klinika w Antalyi!',
      pt: 'Fiz limpeza dentária e check-up geral. A equipa foi super atenciosa e cuidadosa. A melhor clínica de Antalya!',
      es: 'Me hice una limpieza y revisión. El equipo fue muy delicado y minucioso. ¡La mejor clínica dental de Antalya!',
      ru: 'Делал профессиональную гигиену и осмотр. Врачи работали очень аккуратно и качественно. Лучшая стоматология в Анталье!',
    },
  },
  {
    id: 'rev-8',
    author: 'N RS',
    country: {
      en: '🇳🇱 Netherlands',
      tr: '🇳🇱 Hollanda',
      de: '🇳🇱 Niederlande',
      pl: '🇳🇱 Holandia',
      pt: '🇳🇱 Países Baixos',
      es: '🇳🇱 Países Bajos',
      ru: '🇳🇱 Нидерланды',
    },
    treatment: {
      en: 'Comprehensive Oral Care',
      tr: 'Kapsamlı Ağız & Diş Bakımı',
      de: 'Umfassende Zahnbehandlung',
      pl: 'Kompleksowa Opieka Stomatologiczna',
      pt: 'Tratamento Oral Completo',
      es: 'Cuidado Bucodental Integral',
      ru: 'Комплексный уход за полостью рта',
    },
    platform: 'google',
    platformImg: '/reviews/google.webp',
    text: {
      en: 'Very professional staff, friendly environment and top notch results. Cleanings and checkups are done with high care. Would recommend to anyone visiting Antalya.',
      tr: 'Çok profesyonel kadro, samimi bir ortam ve birinci sınıf sonuçlar. Temizlik ve kontroller büyük bir özenle yapılıyor. Antalya’ya gelen herkese tavsiye ederim.',
      de: 'Sehr professionelles Personal, freundliche Atmosphäre und erstklassige Ergebnisse. Sehr empfehlenswert für jeden Antalya-Besucher.',
      pl: 'Bardzo profesjonalny personel, przyjazna atmosfera i doskonałe rezultaty. Gorąco polecam wszystkim odwiedzającym Antalya.',
      pt: 'Equipa muito profissional, ambiente acolhedor e resultados de excelência. Recomendo vivamente a quem visita Antalya.',
      es: 'Personal muy profesional, ambiente agradable y resultados de primer nivel. Lo recomiendo a cualquiera que visite Antalya.',
      ru: 'Очень профессиональный персонал, приятная атмосфера и превосходный результат. Рекомендую всем, кто посещает Анталья.',
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
          {/* Desktop Grid */}
          <div className={styles.track}>
            {visibleReviews.map((review) => {
              const quote = getLocalized(review.text);
              const treatment = getLocalized(review.treatment);
              const country = getLocalized(review.country);
              const isTrustpilot = review.platform === 'trustpilot';

              return (
                <div key={review.id} className={styles.card}>
                  <div>
                    {/* Top Header: 5 Rating Stars on Left & Verified Review Platform Logo on Right */}
                    <div className={styles.cardHeaderRow}>
                      <div className={styles.starsGroup}>
                        {[1, 2, 3, 4, 5].map((starIdx) => (
                          <Image
                            key={starIdx}
                            src="/star.png"
                            alt="★"
                            width={17}
                            height={17}
                            className={styles.starImg}
                          />
                        ))}
                      </div>

                      <div className={styles.platformLogoWrap}>
                        {isTrustpilot ? (
                          <Image
                            src="/reviews/trustpilot.webp"
                            alt="Trustpilot"
                            width={68}
                            height={16}
                            className={styles.platformLogo}
                          />
                        ) : (
                          <Image
                            src="/reviews/google.webp"
                            alt="Google"
                            width={20}
                            height={20}
                            className={styles.platformLogo}
                          />
                        )}
                      </div>
                    </div>

                    {/* Patient Quote */}
                    <p className={styles.quoteText}>
                      &ldquo;{quote}&rdquo;
                    </p>
                  </div>

                  {/* Card Footer: Treatment Badge + Patient Name & Country */}
                  <div className={styles.cardFooter}>
                    <div className={styles.treatmentBadge}>
                      {treatment}
                    </div>

                    <div className={styles.patientInfoCol}>
                      <span className={styles.patientName}>{review.author}</span>
                      <span className={styles.patientCountry}>{country}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Horizontal Swipe Track */}
          <div className={styles.mobileTrack}>
            {REVIEWS_DATA.map((review) => {
              const quote = getLocalized(review.text);
              const treatment = getLocalized(review.treatment);
              const country = getLocalized(review.country);
              const isTrustpilot = review.platform === 'trustpilot';

              return (
                <div key={review.id} className={styles.card}>
                  <div>
                    {/* Top Header: 5 Rating Stars on Left & Verified Review Platform Logo on Right */}
                    <div className={styles.cardHeaderRow}>
                      <div className={styles.starsGroup}>
                        {[1, 2, 3, 4, 5].map((starIdx) => (
                          <Image
                            key={starIdx}
                            src="/star.png"
                            alt="★"
                            width={17}
                            height={17}
                            className={styles.starImg}
                          />
                        ))}
                      </div>

                      <div className={styles.platformLogoWrap}>
                        {isTrustpilot ? (
                          <Image
                            src="/reviews/trustpilot.webp"
                            alt="Trustpilot"
                            width={68}
                            height={16}
                            className={styles.platformLogo}
                          />
                        ) : (
                          <Image
                            src="/reviews/google.webp"
                            alt="Google"
                            width={20}
                            height={20}
                            className={styles.platformLogo}
                          />
                        )}
                      </div>
                    </div>

                    {/* Patient Quote */}
                    <p className={styles.quoteText}>
                      &ldquo;{quote}&rdquo;
                    </p>
                  </div>

                  {/* Card Footer: Treatment Badge + Patient Name & Country */}
                  <div className={styles.cardFooter}>
                    <div className={styles.treatmentBadge}>
                      {treatment}
                    </div>

                    <div className={styles.patientInfoCol}>
                      <span className={styles.patientName}>{review.author}</span>
                      <span className={styles.patientCountry}>{country}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Navigation Controls */}
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
