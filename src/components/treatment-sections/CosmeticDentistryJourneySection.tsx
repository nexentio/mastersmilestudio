'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { SITE_CONFIG, getWhatsAppLink } from '@/config/site';
import styles from './CosmeticDentistryJourneySection.module.css';

interface JourneyItem {
  icon: string;
  title: string;
  desc: string;
}

interface JourneyDictionary {
  headTitle: string;
  headSub: string;
  items: JourneyItem[];
  btnWhatsapp: string;
  btnPhone: string;
  btnForm: string;
  btnEmail: string;
  consultationLabel: string;
  quickFormLabel: string;
  emailLabel: string;
  phoneLabel: string;
}

const JOURNEY_DATA: Record<string, JourneyDictionary> = {
  en: {
    headTitle: 'Your Cosmetic Smile Journey Made Simple',
    headSub:
      'From your initial digital consultation to your final Hollywood Smile reveal, we ensure a seamless and luxurious aesthetic dental journey in Antalya. Experience world-class artistry, transparent pricing, and personalized VIP care every step of the way.',
    items: [
      {
        icon: '/icons/journey-01.webp',
        title: 'Stay Duration',
        desc: 'Complete aesthetic transformations in just 5 to 7 days in Antalya.',
      },
      {
        icon: '/icons/journey-02.webp',
        title: 'Clinic Visits',
        desc: '3 comfortable appointments: 3D Digital Scan & Mock-Up, Ceramic Try-in, and Final Bonding.',
      },
      {
        icon: '/icons/journey-03.webp',
        title: 'Recovery Time',
        desc: 'Immediate recovery with zero downtime; enjoy your new radiant smile right away.',
      },
      {
        icon: '/icons/journey-04.webp',
        title: 'Pricing & Transparent Packages',
        desc: 'Save up to 70% compared to UK/EU clinics with all-inclusive hotel and VIP transfer packages.',
      },
    ],
    btnWhatsapp: 'WhatsApp Consultation',
    btnPhone: 'Call Our Clinic',
    btnForm: 'Quick Smile Plan Form',
    btnEmail: 'Send an E-mail',
    consultationLabel: '24/7 Fast Response',
    quickFormLabel: 'Get Free Aesthetic Quote',
    emailLabel: 'Direct Doctor Consultation',
    phoneLabel: 'International Line',
  },
  tr: {
    headTitle: 'Estetik Gülüş Yolculuğunuz Artık Çok Kolay',
    headSub:
      'İlk dijital danışmanlığınızdan yeni Hollywood gülüşünüze kadar, Antalya’da pürüzsüz, şeffaf ve konforlu bir estetik tedavi süreci sunuyoruz. Uzman hekimlerimiz ve VIP transfer ayrıcalıklarıyla sadece gülüşünüze odaklanın.',
    items: [
      {
        icon: '/icons/journey-01.webp',
        title: 'Antalya’da Kalış Süresi',
        desc: 'Komple estetik gülüş tasarımları için sadece 5 - 7 gün.',
      },
      {
        icon: '/icons/journey-02.webp',
        title: 'Klinik Randevu Sayısı',
        desc: '3 konforlu seans: 3D Tarama & Mock-Up provası, Estetik prova ve Kalıcı simantasyon.',
      },
      {
        icon: '/icons/journey-03.webp',
        title: 'İyileşme Süresi',
        desc: 'Hemen sosyal hayata dönüş; sıfır bekleme süresiyle yeni gülüşünüzün keyfini çıkarın.',
      },
      {
        icon: '/icons/journey-04.webp',
        title: 'Şeffaf Paket Fiyatları',
        desc: 'Avrupa ve İngiltere’ye kıyasla %70’e varan maliyet avantajı ve 4-5 yıldızlı otel/transfer paketleri.',
      },
    ],
    btnWhatsapp: 'WhatsApp Danışma Hattı',
    btnPhone: 'Kliniğimizi Arayın',
    btnForm: 'Hızlı Fiyat Teklifi Al',
    btnEmail: 'E-posta Gönderin',
    consultationLabel: '7/24 Anında Yanıt',
    quickFormLabel: 'Ücretsiz Gülüş Planı',
    emailLabel: 'Uzman Hekim İncelemesi',
    phoneLabel: 'Doğrudan İletişim',
  },
  de: {
    headTitle: 'Ihre ästhetische Zahnbehandlung leicht gemacht',
    headSub:
      'Von der ersten Online-Beratung bis zu Ihrem perfekten Hollywood-Lächeln begleiten wir Sie transparent und komfortabel in Antalya.',
    items: [
      {
        icon: '/icons/journey-01.webp',
        title: 'Aufenthaltsdauer',
        desc: 'Nur 5 bis 7 Tage für Ihre vollständige Lächeln-Transformation in Antalya.',
      },
      {
        icon: '/icons/journey-02.webp',
        title: 'Kliniktermine',
        desc: '3 entspannte Sitzungen: 3D-Scan & Mock-Up, Keramik-Einprobe und finale Befestigung.',
      },
      {
        icon: '/icons/journey-03.webp',
        title: 'Erholungszeit',
        desc: 'Sofortige Gesellschaftsfähigkeit ohne Ausfallzeiten.',
      },
      {
        icon: '/icons/journey-04.webp',
        title: 'Transparente Paketpreise',
        desc: 'Bis zu 70 % Ersparnis inklusive 4/5-Sterne-Hotel und VIP-Transfers.',
      },
    ],
    btnWhatsapp: 'WhatsApp Beratung',
    btnPhone: 'Klinik anrufen',
    btnForm: 'Kostenloses Angebot',
    btnEmail: 'E-Mail senden',
    consultationLabel: '24/7 Schnelle Antwort',
    quickFormLabel: 'Lächeln-Plan Formular',
    emailLabel: 'Ärztliche Beratung',
    phoneLabel: 'Internationale Hotline',
  },
  pl: {
    headTitle: 'Twoja podróż po nowy uśmiech w prostych krokach',
    headSub:
      'Od pierwszej konsultacji online po ostateczny zachwycający efekt Hollywood Smile w Antalyi. Zapewniamy pełne wsparcie i opiekę VIP.',
    items: [
      {
        icon: '/icons/journey-01.webp',
        title: 'Czas pobytu',
        desc: 'Jedynie 5–7 dni w Antalyi dla pełnej metamorfozy uśmiechu.',
      },
      {
        icon: '/icons/journey-02.webp',
        title: 'Wizyty w klinice',
        desc: '3 komfortowe wizyty: skan 3D i mock-up, przymiarka estetyczna oraz cementowanie.',
      },
      {
        icon: '/icons/journey-03.webp',
        title: 'Rekonwalescencja',
        desc: 'Natychmiastowy powrót do codziennych aktywności.',
      },
      {
        icon: '/icons/journey-04.webp',
        title: 'Przejrzyste pakiety',
        desc: 'Oszczędność do 70% w porównaniu z Europą Zachodnią wraz z hotelem i transferami VIP.',
      },
    ],
    btnWhatsapp: 'Konsultacja WhatsApp',
    btnPhone: 'Zadzwoń do kliniki',
    btnForm: 'Szybki formularz wyceny',
    btnEmail: 'Wyślij e-mail',
    consultationLabel: 'Szybki kontakt 24/7',
    quickFormLabel: 'Bezpłatny plan uśmiechu',
    emailLabel: 'Ocena lekarza',
    phoneLabel: 'Infolinia międzynarodowa',
  },
  pt: {
    headTitle: 'A Sua Transformação de Sorriso Simplificada',
    headSub:
      'Desde a avaliação digital inicial até ao seu novo Hollywood Smile em Antalya. Garantimos uma experiência clínica de excelência com total apoio.',
    items: [
      {
        icon: '/icons/journey-01.webp',
        title: 'Duração da Estadia',
        desc: 'Apenas 5 a 7 dias em Antalya para o seu novo sorriso.',
      },
      {
        icon: '/icons/journey-02.webp',
        title: 'Consultas Clínicas',
        desc: '3 consultas confortáveis: scan 3D e mock-up, prova estética e cimentação final.',
      },
      {
        icon: '/icons/journey-03.webp',
        title: 'Recuperação',
        desc: 'Recuperação imediata e sem tempo de paragem.',
      },
      {
        icon: '/icons/journey-04.webp',
        title: 'Preços Transparentes',
        desc: 'Poupança até 70% com pacotes tudo incluído com hotel e transfers VIP.',
      },
    ],
    btnWhatsapp: 'Consulta por WhatsApp',
    btnPhone: 'Ligue para a Clínica',
    btnForm: 'Pedir Orçamento Grátis',
    btnEmail: 'Enviar E-mail',
    consultationLabel: 'Resposta Rápida 24/7',
    quickFormLabel: 'Plano de Sorriso Gratuito',
    emailLabel: 'Avaliação Médica Direta',
    phoneLabel: 'Linha Internacional',
  },
  es: {
    headTitle: 'El Viaje Hacia Su Nueva Sonrisa, Fácil y Seguro',
    headSub:
      'Desde su primera valoración digital hasta su radiante Hollywood Smile en Antalya. Le acompañamos con atención personalizada y máxima transparencia.',
    items: [
      {
        icon: '/icons/journey-01.webp',
        title: 'Estancia en Antalya',
        desc: 'Solo 5 a 7 días para completar el diseño integral de su sonrisa.',
      },
      {
        icon: '/icons/journey-02.webp',
        title: 'Citas en Clínica',
        desc: '3 sesiones: escaneo 3D y mock-up en vivo, prueba estética y cementado definitivo.',
      },
      {
        icon: '/icons/journey-03.webp',
        title: 'Recuperación',
        desc: 'Recuperación inmediata sin molestias ni bajas.',
      },
      {
        icon: '/icons/journey-04.webp',
        title: 'Paquetes Todo Incluido',
        desc: 'Ahorro de hasta el 70% con hotel de 4-5 estrellas y traslados privados VIP.',
      },
    ],
    btnWhatsapp: 'Consulta por WhatsApp',
    btnPhone: 'Llamar a la Clínica',
    btnForm: 'Solicitar Presupuesto',
    btnEmail: 'Enviar Correo',
    consultationLabel: 'Atención 24/7 Inmediata',
    quickFormLabel: 'Plan de Sonrisa Gratuito',
    emailLabel: 'Valoración Profesional',
    phoneLabel: 'Línea Directa',
  },
  ru: {
    headTitle: 'Ваш путь к идеальной улыбке в Анталье',
    headSub:
      'От первой онлайн-консультации до вашей новой голливудской улыбки. Мы обеспечиваем комфорт, прозрачные цены и заботу на каждом этапе.',
    items: [
      {
        icon: '/icons/journey-01.webp',
        title: 'Срок пребывания',
        desc: 'Всего 5–7 дней в Анталье для полного преображения улыбки.',
      },
      {
        icon: '/icons/journey-02.webp',
        title: 'Визиты в клинику',
        desc: '3 комфортных визита: 3D-сканирование и mock-up, эстетическая примерка и фиксация.',
      },
      {
        icon: '/icons/journey-03.webp',
        title: 'Восстановление',
        desc: 'Мгновенное возвращение к привычной жизни без боли и ограничений.',
      },
      {
        icon: '/icons/journey-04.webp',
        title: 'Пакеты «Все включено»',
        desc: 'Экономия до 70% с проживанием в отеле 4-5* и персональным VIP-трансфером.',
      },
    ],
    btnWhatsapp: 'Консультация в WhatsApp',
    btnPhone: 'Позвонить в клинику',
    btnForm: 'Получить расчет стоимости',
    btnEmail: 'Написать на E-mail',
    consultationLabel: 'Ответ 24/7 за минуты',
    quickFormLabel: 'Бесплатный план лечения',
    emailLabel: 'Оценка главного врача',
    phoneLabel: 'Международная линия',
  },
};

export default function CosmeticDentistryJourneySection() {
  const locale = useLocale();
  const d = JOURNEY_DATA[locale] || JOURNEY_DATA.en;
  const whatsappLink = getWhatsAppLink(locale);

  return (
    <section className={styles.sectionWrap} aria-label={d.headTitle}>
      <div className={styles.standard_center4}>
        <div className={styles.head}>
          <div className={styles.grid1}>
            <div className={styles.headS1}>{d.headTitle}</div>
            <div className={styles.headS2}>{d.headSub}</div>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.grid}>
            {/* Left Column: 4 Journey Items */}
            <div className={styles.s1}>
              <div className={styles.journeyList}>
                {d.items.map((item, idx) => (
                  <div key={idx} className={styles.journeyItem}>
                    <div className={styles.iconWrap}>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        sizes="52px"
                        className={styles.iconImg}
                      />
                    </div>
                    <div className={styles.textContent}>
                      <span className={styles.itemTitle}>{item.title}</span>
                      <span className={styles.itemDesc}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: 4 Contact Buttons */}
            <div className={styles.s2}>
              {/* WhatsApp Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactBtn}
              >
                <div className={styles.contactIconWrap}>
                  <Image
                    src="/icons/contact-whatsapp.webp"
                    alt="WhatsApp"
                    fill
                    sizes="36px"
                    className={styles.contactIconImg}
                  />
                </div>
                <div className={styles.contactBtnText}>
                  <span className={styles.contactBtnLabel}>{d.consultationLabel}</span>
                  <span className={styles.contactBtnValue}>{d.btnWhatsapp}</span>
                </div>
              </a>

              {/* Phone Button */}
              <a href={`tel:${SITE_CONFIG.phone}`} className={styles.contactBtn}>
                <div className={styles.contactIconWrap}>
                  <Image
                    src="/icons/contact-phone.webp"
                    alt="Phone"
                    fill
                    sizes="36px"
                    className={styles.contactIconImg}
                  />
                </div>
                <div className={styles.contactBtnText}>
                  <span className={styles.contactBtnLabel}>{d.phoneLabel}</span>
                  <span className={styles.contactBtnValue}>{d.btnPhone}</span>
                </div>
              </a>

              {/* Quick Form Button */}
              <a href="#contact" className={styles.contactBtn}>
                <div className={styles.contactIconWrap}>
                  <Image
                    src="/icons/contact-form.webp"
                    alt="Quick Form"
                    fill
                    sizes="36px"
                    className={styles.contactIconImg}
                  />
                </div>
                <div className={styles.contactBtnText}>
                  <span className={styles.contactBtnLabel}>{d.quickFormLabel}</span>
                  <span className={styles.contactBtnValue}>{d.btnForm}</span>
                </div>
              </a>

              {/* Email Button */}
              <a href={`mailto:${SITE_CONFIG.email}`} className={styles.contactBtn}>
                <div className={styles.contactIconWrap}>
                  <Image
                    src="/icons/contact-email.webp"
                    alt="Email"
                    fill
                    sizes="36px"
                    className={styles.contactIconImg}
                  />
                </div>
                <div className={styles.contactBtnText}>
                  <span className={styles.contactBtnLabel}>{d.emailLabel}</span>
                  <span className={styles.contactBtnValue}>{d.btnEmail}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
