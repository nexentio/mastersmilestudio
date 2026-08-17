'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { SITE_CONFIG } from '@/config/site';
import styles from './TreatmentInteractiveQuoteForm.module.css';

interface Props {
  defaultTreatment?: string;
}

interface FormDictionary {
  headTitle1: string;
  headTitle2: string;
  headSub: string;
  step1Side: string;
  step2Side: string;
  step3Side: string;
  step4Side: string;
  formTitle: string;
  lookingForLabel: string;
  treatments: string[];
  howOldLabel: string;
  ageGroups: string[];
  spokenDentistLabel: string;
  yesText: string;
  noText: string;
  timelineLabel: string;
  timelines: string[];
  fullNameLabel: string;
  countryLabel: string;
  phoneLabel: string;
  emailLabel: string;
  commChannelLabel: string;
  commChannels: string[];
  notesLabel: string;
  notesPlaceholder: string;
  backBtn: string;
  nextBtn: string;
  submitBtn: string;
  successTitle: string;
  successDesc: string;
  whatsappBtn: string;
  restartBtn: string;
}

const DICTIONARIES: Record<string, FormDictionary> = {
  en: {
    headTitle1: 'Let’s Create Your Perfect',
    headTitle2: 'Smile Plan',
    headSub:
      'Begin your transformation with a free, no-obligation consultation. Fill out the form in just a minute, and our international patient consultant will get in touch with you personally to prepare your tailored treatment plan, estimated quote, and travel guidance — all at no cost. We’re here to make your journey smooth, safe, and unforgettable.',
    step1Side: "Great! Let's get a bit more specific…",
    step2Side: 'Almost there! Just a few details to personalize your experience.',
    step3Side: 'Final step! Let us know how we can contact you.',
    step4Side: 'Get Your Free Quote Now!',
    formTitle: 'Get a Free Consultation',
    lookingForLabel: "I'm looking for;*",
    treatments: ['Crowns', 'Implants', 'Veneers', 'All-on-4', 'All-on-6', 'Other'],
    howOldLabel: 'How old are you?*',
    ageGroups: ['18 - 25', '26 - 35', '36 - 45', '46 - 55', '56+'],
    spokenDentistLabel: 'Have you already spoken to a dentist about your treatment?*',
    yesText: 'Yes',
    noText: 'No',
    timelineLabel: 'When are you looking to start your treatment?*',
    timelines: [
      'As soon as possible',
      'Within the next few weeks',
      'Within the next few months',
      "I haven't decided yet",
    ],
    fullNameLabel: 'Full Name *',
    countryLabel: 'Country *',
    phoneLabel: 'Phone (WhatsApp) *',
    emailLabel: 'Email Address *',
    commChannelLabel: 'Preferred Communication Channel',
    commChannels: ['WhatsApp', 'Phone Call', 'Email'],
    notesLabel: 'Your Dental History or Notes (Optional)',
    notesPlaceholder: 'Tell us about your dental goals, missing teeth, or medical details...',
    backBtn: '← Back',
    nextBtn: 'Next ›',
    submitBtn: 'Get Your Free Quote Now! ›',
    successTitle: 'Thank You',
    successDesc:
      'Your consultation request has been received. Our senior dental specialist and patient coordinator are preparing your custom treatment plan and will get in touch with you shortly.',
    whatsappBtn: 'Send Directly to WhatsApp',
    restartBtn: 'Submit Another Request',
  },
  tr: {
    headTitle1: 'Kusursuz Gülüş Planınızı',
    headTitle2: 'Birlikte Oluşturalım',
    headSub:
      'Dönüşümünüze ücretsiz ve bağlayıcılığı olmayan bir konsültasyonla başlayın. Formu sadece 1 dakikada doldurun; uluslararası hasta danışmanımız size özel tedavi planınızı, tahmini fiyat teklifinizi ve seyahat rehberinizi tamamen ücretsiz olarak hazırlamak için sizinle bizzat iletişime geçsin. Yolculuğunuzu sorunsuz, güvenli ve unutulmaz kılmak için buradayız.',
    step1Side: 'Harika! Biraz daha detaylandıralım…',
    step2Side: 'Neredeyse bitti! Deneyiminizi kişiselleştirmek için birkaç detay.',
    step3Side: 'Son adım! Size nasıl ulaşabileceğimizi belirtin.',
    step4Side: 'Ücretsiz Teklifinizi Hemen Alın!',
    formTitle: 'Ücretsiz Konsültasyon Alın',
    lookingForLabel: 'İlgilendiğiniz tedavi;*',
    treatments: ['Kuron / Kaplama', 'İmplant', 'Lamine / Veneer', 'All-on-4', 'All-on-6', 'Diğer'],
    howOldLabel: 'Yaş aralığınız?*',
    ageGroups: ['18 - 25', '26 - 35', '36 - 45', '46 - 55', '56+'],
    spokenDentistLabel: 'Daha önce tedaviniz için bir diş hekimiyle görüştünüz mü?*',
    yesText: 'Evet',
    noText: 'Hayır',
    timelineLabel: 'Tedavinize ne zaman başlamayı planlıyorsunuz?*',
    timelines: [
      'En kısa sürede',
      'Birkaç hafta içinde',
      'Önümüzdeki birkaç ay içinde',
      'Henüz karar vermedim',
    ],
    fullNameLabel: 'Adınız Soyadınız *',
    countryLabel: 'Ülke *',
    phoneLabel: 'Telefon (WhatsApp) *',
    emailLabel: 'E-posta Adresi *',
    commChannelLabel: 'Tercih Ettiğiniz İletişim Kanalı',
    commChannels: ['WhatsApp', 'Telefon Araması', 'E-posta'],
    notesLabel: 'Diş Geçmişiniz veya Notlarınız (İsteğe Bağlı)',
    notesPlaceholder: 'Eksik dişleriniz, şikayetleriniz veya estetik hedeflerinizden bahsedin...',
    backBtn: '← Geri',
    nextBtn: 'İleri ›',
    submitBtn: 'Ücretsiz Fiyat Teklifimi Al ›',
    successTitle: 'Teşekkür Ederiz',
    successDesc:
      'Konsültasyon talebiniz başarıyla alındı. Uzman hekimimiz ve hasta danışmanımız tedavi planınızı hazırlayıp en kısa sürede sizinle iletişime geçecektir.',
    whatsappBtn: 'Doğrudan WhatsApp’tan Yazın',
    restartBtn: 'Yeni Bir Talep Gönder',
  },
  de: {
    headTitle1: 'Lassen Sie uns Ihren perfekten',
    headTitle2: 'Lächeln-Plan erstellen',
    headSub:
      'Beginnen Sie Ihre Verwandlung mit einer kostenlosen, unverbindlichen Beratung. Füllen Sie das Formular in nur einer Minute aus, und unser internationaler Patientenberater erstellt für Sie maßgeschneidert Behandlungsplan, Kostenvoranschlag und Reisehinweise.',
    step1Side: 'Großartig! Gehen wir etwas genauer darauf ein…',
    step2Side: 'Fast geschafft! Nur noch wenige Angaben.',
    step3Side: 'Letzter Schritt! Wie dürfen wir Sie kontaktieren?',
    step4Side: 'Holen Sie sich Ihr kostenloses Angebot!',
    formTitle: 'Kostenlose Beratung anfordern',
    lookingForLabel: 'Ich interessiere mich für;*',
    treatments: ['Kronen', 'Implantate', 'Veneers', 'All-on-4', 'All-on-6', 'Sonstiges'],
    howOldLabel: 'Wie alt sind Sie?*',
    ageGroups: ['18 - 25', '26 - 35', '36 - 45', '46 - 55', '56+'],
    spokenDentistLabel: 'Haben Sie bereits mit einem Zahnarzt gesprochen?*',
    yesText: 'Ja',
    noText: 'Nein',
    timelineLabel: 'Wann möchten Sie mit der Behandlung beginnen?*',
    timelines: [
      'So bald wie möglich',
      'In den nächsten Wochen',
      'In den nächsten Monaten',
      'Noch nicht entschieden',
    ],
    fullNameLabel: 'Vollständiger Name *',
    countryLabel: 'Land *',
    phoneLabel: 'Telefon (WhatsApp) *',
    emailLabel: 'E-Mail-Adresse *',
    commChannelLabel: 'Bevorzugter Kontaktkanal',
    commChannels: ['WhatsApp', 'Telefonanruf', 'E-Mail'],
    notesLabel: 'Ihre Anmerkungen (Optional)',
    notesPlaceholder: 'Beschreiben Sie Ihre Wünsche oder bestehende Zahnprobleme...',
    backBtn: '← Zurück',
    nextBtn: 'Weiter ›',
    submitBtn: 'Kostenloses Angebot anfordern ›',
    successTitle: 'Vielen Dank',
    successDesc:
      'Ihre Anfrage ist eingegangen. Unser zahnärztliches Fachteam prüft Ihre Angaben und wird Sie in Kürze kontaktieren.',
    whatsappBtn: 'Direkt per WhatsApp senden',
    restartBtn: 'Weitere Anfrage senden',
  },
  pl: {
    headTitle1: 'Stwórzmy Twój idealny',
    headTitle2: 'Plan Uśmiechu',
    headSub:
      'Rozpocznij swoją metamorfozę od bezpłatnej konsultacji. Wypełnij formularz w minutę, a nasz doradca pacjenta przygotuje dla Ciebie spersonalizowany plan leczenia i wycenę.',
    step1Side: 'Świetnie! Poznajmy szczegóły…',
    step2Side: 'Już prawie! Kilka szczegółów, aby spersonalizować ofertę.',
    step3Side: 'Ostatni krok! Jak możemy się z Tobą skontaktować?',
    step4Side: 'Odbierz darmową wycenę!',
    formTitle: 'Uzyskaj Bezpłatną Konsultację',
    lookingForLabel: 'Interesuje mnie;*',
    treatments: ['Korony', 'Implanty', 'Licówki', 'All-on-4', 'All-on-6', 'Inne'],
    howOldLabel: 'Ile masz lat?*',
    ageGroups: ['18 - 25', '26 - 35', '36 - 45', '46 - 55', '56+'],
    spokenDentistLabel: 'Czy konsultowałeś już to leczenie ze stomatologiem?*',
    yesText: 'Tak',
    noText: 'Nie',
    timelineLabel: 'Kiedy planujesz rozpocząć leczenie?*',
    timelines: [
      'Jak najszybciej',
      'W ciągu kilku tygodni',
      'W ciągu kilku miesięcy',
      'Jeszcze nie zdecydowałem',
    ],
    fullNameLabel: 'Imię i Nazwisko *',
    countryLabel: 'Kraj *',
    phoneLabel: 'Telefon (WhatsApp) *',
    emailLabel: 'Adres E-mail *',
    commChannelLabel: 'Preferowany kanał kontaktu',
    commChannels: ['WhatsApp', 'Telefon', 'E-mail'],
    notesLabel: 'Uwagi lub historia leczenia (opcjonalnie)',
    notesPlaceholder: 'Opisz stan swoich zębów lub oczekiwania estetyczne...',
    backBtn: '← Wstecz',
    nextBtn: 'Dalej ›',
    submitBtn: 'Odbierz darmową wycenę ›',
    successTitle: 'Dziękujemy',
    successDesc:
      'Twoje zgłoszenie zostało przyjęte. Nasz zespół przygotowuje plan leczenia i wkrótce się z Tobą skontaktuje.',
    whatsappBtn: 'Wyślij przez WhatsApp',
    restartBtn: 'Wyślij kolejne zgłoszenie',
  },
  pt: {
    headTitle1: 'Vamos Criar o Seu',
    headTitle2: 'Plano de Sorriso Perfeito',
    headSub:
      'Comece a sua transformação com uma consulta gratuita e sem compromisso. Preencha o formulário e nossa equipe internacional preparará seu plano personalizado e orçamento estimado.',
    step1Side: 'Ótimo! Vamos especificar um pouco mais…',
    step2Side: 'Quase lá! Alguns detalhes para personalizar sua experiência.',
    step3Side: 'Última etapa! Como podemos entrar em contato?',
    step4Side: 'Receba seu orçamento gratuito!',
    formTitle: 'Obtenha uma Consulta Gratuita',
    lookingForLabel: 'Estou procurando por;*',
    treatments: ['Coroas', 'Implantes', 'Facetas', 'All-on-4', 'All-on-6', 'Outro'],
    howOldLabel: 'Qual é a sua idade?*',
    ageGroups: ['18 - 25', '26 - 35', '36 - 45', '46 - 55', '56+'],
    spokenDentistLabel: 'Você já conversou com um dentista sobre seu tratamento?*',
    yesText: 'Sim',
    noText: 'Não',
    timelineLabel: 'Quando você pretende iniciar o tratamento?*',
    timelines: [
      'O mais breve possível',
      'Nas próximas semanas',
      'Nos próximos meses',
      'Ainda não decidi',
    ],
    fullNameLabel: 'Nome Completo *',
    countryLabel: 'País *',
    phoneLabel: 'Telefone (WhatsApp) *',
    emailLabel: 'E-mail *',
    commChannelLabel: 'Canal de Comunicação Preferido',
    commChannels: ['WhatsApp', 'Ligação', 'E-mail'],
    notesLabel: 'Histórico Dental ou Observações (Opcional)',
    notesPlaceholder: 'Conte-nos sobre seus objetivos ou dentes ausentes...',
    backBtn: '← Voltar',
    nextBtn: 'Avançar ›',
    submitBtn: 'Receber Meu Orçamento Gratuito ›',
    successTitle: 'Obrigado',
    successDesc:
      'Sua solicitação foi recebida. Nossos especialistas estão preparando seu plano personalizado e entrarão em contato em breve.',
    whatsappBtn: 'Enviar pelo WhatsApp',
    restartBtn: 'Enviar Nova Solicitação',
  },
  es: {
    headTitle1: 'Creemos Su Plan de',
    headTitle2: 'Sonrisa Perfecto',
    headSub:
      'Comience su transformación con una consulta gratuita y sin compromiso. Complete el formulario en un minuto y nuestro asesor internacional preparará su plan de tratamiento y presupuesto.',
    step1Side: '¡Genial! Vamos a especificar un poco más…',
    step2Side: '¡Casi listo! Solo unos detalles para personalizar su experiencia.',
    step3Side: '¡Último paso! Indíquenos cómo podemos contactarle.',
    step4Side: '¡Obtenga su presupuesto gratuito ahora!',
    formTitle: 'Obtenga una Consulta Gratuita',
    lookingForLabel: 'Estoy buscando;*',
    treatments: ['Coronas', 'Implantes', 'Carillas', 'All-on-4', 'All-on-6', 'Otro'],
    howOldLabel: '¿Cuál es su edad?*',
    ageGroups: ['18 - 25', '26 - 35', '36 - 45', '46 - 55', '56+'],
    spokenDentistLabel: '¿Ha consultado ya con un dentista sobre su tratamiento?*',
    yesText: 'Sí',
    noText: 'No',
    timelineLabel: '¿Cuándo le gustaría iniciar su tratamiento?*',
    timelines: [
      'Lo antes posible',
      'En las próximas semanas',
      'En los próximos meses',
      'Aún no he decidido',
    ],
    fullNameLabel: 'Nombre Completo *',
    countryLabel: 'País *',
    phoneLabel: 'Teléfono (WhatsApp) *',
    emailLabel: 'Correo Electrónico *',
    commChannelLabel: 'Canal de Comunicación Preferido',
    commChannels: ['WhatsApp', 'Llamada Telefónica', 'Correo Electrónico'],
    notesLabel: 'Historial Dental o Notas (Opcional)',
    notesPlaceholder: 'Cuéntenos sobre sus objetivos o piezas faltantes...',
    backBtn: '← Atrás',
    nextBtn: 'Siguiente ›',
    submitBtn: 'Obtener Mi Presupuesto Gratis ›',
    successTitle: 'Muchas Gracias',
    successDesc:
      'Hemos recibido su solicitud. Nuestro equipo médico está preparando su plan y se comunicará con usted en breve.',
    whatsappBtn: 'Enviar por WhatsApp',
    restartBtn: 'Enviar Otra Solicitud',
  },
  ru: {
    headTitle1: 'Создадим Ваш Идеальный',
    headTitle2: 'План Улыбки',
    headSub:
      'Начните преображение с бесплатной консультации. Заполните форму за 1 минуту, и наш международный координатор подготовит для вас персональный план лечения, смету и программу поездки.',
    step1Side: 'Отлично! Уточним детали…',
    step2Side: 'Почти готово! Несколько деталей для точного расчёта.',
    step3Side: 'Финальный шаг! Укажите удобный способ связи.',
    step4Side: 'Получите бесплатный расчёт!',
    formTitle: 'Получить Бесплатную Консультацию',
    lookingForLabel: 'Меня интересует;*',
    treatments: ['Коронки', 'Импланты', 'Виниры', 'All-on-4', 'All-on-6', 'Другое'],
    howOldLabel: 'Ваш возраст?*',
    ageGroups: ['18 - 25', '26 - 35', '36 - 45', '46 - 55', '56+'],
    spokenDentistLabel: 'Вы уже консультировались со стоматологом по поводу лечения?*',
    yesText: 'Да',
    noText: 'Нет',
    timelineLabel: 'Когда вы планируете начать лечение?*',
    timelines: [
      'Как можно скорее',
      'В течение нескольких недель',
      'В течение следующих месяцев',
      'Ещё не определился',
    ],
    fullNameLabel: 'Имя и Фамилия *',
    countryLabel: 'Страна *',
    phoneLabel: 'Телефон (WhatsApp) *',
    emailLabel: 'Электронная почта *',
    commChannelLabel: 'Предпочтительный способ связи',
    commChannels: ['WhatsApp', 'Телефонный звонок', 'Email'],
    notesLabel: 'Пожелания или история лечения (необязательно)',
    notesPlaceholder: 'Опишите ваши цели, отсутствующие зубы или пожелания...',
    backBtn: '← Назад',
    nextBtn: 'Далее ›',
    submitBtn: 'Получить Бесплатный Расчёт ›',
    successTitle: 'Спасибо',
    successDesc:
      'Ваша заявка принята. Наш главный врач и координатор подготовят план лечения и свяжутся с вами в ближайшее время.',
    whatsappBtn: 'Отправить в WhatsApp',
    restartBtn: 'Отправить ещё одну заявку',
  },
};

const COUNTRIES = [
  'United Kingdom (+44)',
  'United States (+1)',
  'Canada (+1)',
  'Germany (+49)',
  'Ireland (+353)',
  'Australia (+61)',
  'France (+33)',
  'Netherlands (+31)',
  'Sweden (+46)',
  'Norway (+47)',
  'Denmark (+45)',
  'Switzerland (+41)',
  'Austria (+43)',
  'Belgium (+32)',
  'Italy (+39)',
  'Spain (+34)',
  'Poland (+48)',
  'Portugal (+351)',
  'Russia (+7)',
  'Turkey (+90)',
  'United Arab Emirates (+971)',
  'Saudi Arabia (+966)',
  'Kuwait (+965)',
  'Qatar (+974)',
  'Other (+00)',
];

export default function TreatmentInteractiveQuoteForm({ defaultTreatment = 'Implants' }: Props) {
  const locale = useLocale();
  const dict = DICTIONARIES[locale] || DICTIONARIES.en;

  const [step, setStep] = useState<number>(1);
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([
    dict.treatments[1] || 'Implants',
  ]);
  const [ageGroup, setAgeGroup] = useState<string>(dict.ageGroups[1] || '26 - 35');
  const [spokenToDentist, setSpokenToDentist] = useState<string>(dict.yesText || 'Yes');
  const [timeline, setTimeline] = useState<string>(dict.timelines[0] || 'As soon as possible');
  const [commChannel, setCommChannel] = useState<string>('WhatsApp');
  const [fullName, setFullName] = useState<string>('');
  const [country, setCountry] = useState<string>('United Kingdom (+44)');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleToggleTreatment = (t: string) => {
    if (selectedTreatments.includes(t)) {
      if (selectedTreatments.length > 1) {
        setSelectedTreatments(selectedTreatments.filter((item) => item !== t));
      }
    } else {
      setSelectedTreatments([...selectedTreatments, t]);
    }
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  const handleWhatsAppInstantSend = () => {
    const text = encodeURIComponent(
      `Hello Master Smile Studio!\n\nI would like to get my Free Dental Consultation.\n\n• Name: ${fullName || 'Guest'}\n• Country: ${country}\n• Phone: ${phone}\n• Treatments: ${selectedTreatments.join(', ')}\n• Age: ${ageGroup}\n• Spoken to Dentist: ${spokenToDentist}\n• Timeline: ${timeline}\n• Preferred Contact: ${commChannel}\n• Message: ${message || 'None'}\n\nPlease prepare my custom treatment plan and price quote.`
    );
    window.open(
      `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`,
      '_blank'
    );
  };

  return (
    <section aria-labelledby="interactive-quote-form-heading" id="js_target1" className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Header Grid */}
        <div className={styles.headerGrid}>
          <div>
            <h2 id="interactive-quote-form-heading" className={styles.headerTitle}>
              {dict.headTitle1} <br />
              {dict.headTitle2}
            </h2>
          </div>
          <div>
            <p className={styles.headerSub}>{dict.headSub}</p>
          </div>
        </div>

        {/* Dual-Pane Card */}
        <div className={styles.cardWrapper}>
          {/* Left Pane (Sidebar Stepper) */}
          <div className={styles.sidebarPane}>
            <div className={styles.stepperList}>
              {/* Step 1 */}
              <div className={styles.stepItem}>
                <div className={styles.stepIndicatorWrap}>
                  <div
                    className={`${styles.stepCircle} ${
                      step === 1 ? styles.stepCircleActive : step > 1 ? styles.stepCirclePassed : ''
                    }`}
                  >
                    {step > 1 && <div className={styles.stepInnerDot} />}
                  </div>
                  <div className={`${styles.stepLine} ${step > 1 ? styles.stepLineActive : ''}`} />
                </div>
                <div className={`${styles.stepText} ${step === 1 ? '' : styles.stepTextMuted}`}>
                  {dict.step1Side}
                </div>
              </div>

              {/* Step 2 */}
              <div className={styles.stepItem}>
                <div className={styles.stepIndicatorWrap}>
                  <div
                    className={`${styles.stepCircle} ${
                      step === 2 ? styles.stepCircleActive : step > 2 ? styles.stepCirclePassed : ''
                    }`}
                  >
                    {step > 2 && <div className={styles.stepInnerDot} />}
                  </div>
                  <div className={`${styles.stepLine} ${step > 2 ? styles.stepLineActive : ''}`} />
                </div>
                <div className={`${styles.stepText} ${step === 2 ? '' : styles.stepTextMuted}`}>
                  {dict.step2Side}
                </div>
              </div>

              {/* Step 3 */}
              <div className={styles.stepItem}>
                <div className={styles.stepIndicatorWrap}>
                  <div
                    className={`${styles.stepCircle} ${
                      step === 3 ? styles.stepCircleActive : step > 3 ? styles.stepCirclePassed : ''
                    }`}
                  >
                    {step > 3 && <div className={styles.stepInnerDot} />}
                  </div>
                  <div className={`${styles.stepLine} ${step > 3 ? styles.stepLineActive : ''}`} />
                </div>
                <div className={`${styles.stepText} ${step === 3 ? '' : styles.stepTextMuted}`}>
                  {dict.step3Side}
                </div>
              </div>

              {/* Step 4 */}
              <div className={styles.stepItem}>
                <div className={styles.stepIndicatorWrap}>
                  <div
                    className={`${styles.stepCircle} ${
                      step === 4 ? styles.stepCircleActive : ''
                    }`}
                  >
                    {step === 4 && <div className={styles.stepInnerDot} />}
                  </div>
                </div>
                <div className={`${styles.stepText} ${step === 4 ? '' : styles.stepTextMuted}`}>
                  {dict.step4Side}
                </div>
              </div>
            </div>
          </div>

          {/* Right Pane (Interactive Form) */}
          <div className={styles.formPane}>
            {/* STEP 1: Treatments & Age */}
            {step === 1 && (
              <div className={styles.formContent}>
                <h3 className={styles.formTitle}>{dict.formTitle}</h3>

                <div className={styles.stepBody}>
                  {/* Question 1: Treatments */}
                  <div className={styles.questionBlock}>
                    <label className={styles.questionLabel}>{dict.lookingForLabel}</label>
                    <div className={styles.pillGridBox}>
                      {/* Row 1: 4 pills */}
                      <div className={`${styles.pillRow} ${styles.pillRow4}`}>
                        {dict.treatments.slice(0, 4).map((t) => {
                          const isSelected = selectedTreatments.includes(t);
                          return (
                            <button
                              key={t}
                              type="button"
                              onClick={() => handleToggleTreatment(t)}
                              className={`${styles.pillBtn} ${
                                isSelected ? styles.pillBtnActive : ''
                              }`}
                            >
                              {t}
                            </button>
                          );
                        })}
                      </div>
                      {/* Row 2: 2 pills */}
                      <div className={`${styles.pillRow} ${styles.pillRow2}`}>
                        {dict.treatments.slice(4).map((t) => {
                          const isSelected = selectedTreatments.includes(t);
                          return (
                            <button
                              key={t}
                              type="button"
                              onClick={() => handleToggleTreatment(t)}
                              className={`${styles.pillBtn} ${
                                isSelected ? styles.pillBtnActive : ''
                              }`}
                            >
                              {t}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Question 2: Age */}
                  <div className={styles.questionBlock}>
                    <label className={styles.questionLabel}>{dict.howOldLabel}</label>
                    <div className={styles.pillGridBox}>
                      {/* Row 1: 4 pills */}
                      <div className={`${styles.pillRow} ${styles.pillRow4}`}>
                        {dict.ageGroups.slice(0, 4).map((age) => (
                          <button
                            key={age}
                            type="button"
                            onClick={() => setAgeGroup(age)}
                            className={`${styles.pillBtn} ${
                              ageGroup === age ? styles.pillBtnActive : ''
                            }`}
                          >
                            {age}
                          </button>
                        ))}
                      </div>
                      {/* Row 2: 1 pill */}
                      <div className={`${styles.pillRow} ${styles.pillRow1}`}>
                        {dict.ageGroups.slice(4).map((age) => (
                          <button
                            key={age}
                            type="button"
                            onClick={() => setAgeGroup(age)}
                            className={`${styles.pillBtn} ${
                              ageGroup === age ? styles.pillBtnActive : ''
                            }`}
                          >
                            {age}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nav */}
                <div className={styles.navRow}>
                  <button
                    type="button"
                    onClick={handleNext}
                    className={styles.nextBtn}
                  >
                    {dict.nextBtn}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Previous Dentist & Timeline */}
            {step === 2 && (
              <div className={styles.formContent}>
                <h3 className={styles.formTitle}>{dict.formTitle}</h3>

                <div className={styles.stepBody}>
                  {/* Question 1: Spoken to dentist */}
                  <div className={styles.questionBlock}>
                    <label className={styles.questionLabel}>{dict.spokenDentistLabel}</label>
                    <div className={styles.pillGridBox}>
                      <div className={`${styles.pillRow} ${styles.pillRow2}`}>
                        {[dict.yesText, dict.noText].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setSpokenToDentist(opt)}
                            className={`${styles.pillBtn} ${
                              spokenToDentist === opt ? styles.pillBtnActive : ''
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Question 2: Timeline */}
                  <div className={styles.questionBlock}>
                    <label className={styles.questionLabel}>{dict.timelineLabel}</label>
                    <div className={styles.pillGridBox}>
                      <div className={`${styles.pillRow} ${styles.pillRow2}`}>
                        {dict.timelines.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setTimeline(time)}
                            className={`${styles.pillBtn} ${
                              timeline === time ? styles.pillBtnActive : ''
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nav */}
                <div className={`${styles.navRow} ${styles.navRowBetween}`}>
                  <button
                    type="button"
                    onClick={handlePrev}
                    className={styles.backBtn}
                  >
                    {dict.backBtn}
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className={styles.nextBtn}
                  >
                    {dict.nextBtn}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Contact Info & Submission */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className={styles.formContent}>
                <h3 className={styles.formTitle}>{dict.formTitle}</h3>

                <div className={styles.stepBody}>
                  <div className={styles.inputGrid2}>
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>{dict.fullNameLabel}</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={styles.textInput}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>{dict.countryLabel}</label>
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className={styles.selectInput}
                      >
                        {COUNTRIES.map((c, i) => (
                          <option key={i} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.inputGrid2}>
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>{dict.phoneLabel}</label>
                      <input
                        type="tel"
                        required
                        placeholder="+44 7123 456789"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={styles.textInput}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>{dict.emailLabel}</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.textInput}
                      />
                    </div>
                  </div>

                  <div className={styles.questionBlock}>
                    <label className={styles.inputLabel}>{dict.commChannelLabel}</label>
                    <div className={styles.pillGridBox}>
                      <div className={`${styles.pillRow} ${styles.pillRow4}`}>
                        {dict.commChannels.map((ch) => (
                          <button
                            key={ch}
                            type="button"
                            onClick={() => setCommChannel(ch)}
                            className={`${styles.pillBtn} ${
                              commChannel === ch ? styles.pillBtnActive : ''
                            }`}
                          >
                            {ch}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={styles.questionBlock}>
                    <label className={styles.inputLabel}>{dict.notesLabel}</label>
                    <textarea
                      rows={2}
                      placeholder={dict.notesPlaceholder}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={styles.textareaInput}
                    />
                  </div>
                </div>

                <div className={`${styles.navRow} ${styles.navRowBetween}`}>
                  <button
                    type="button"
                    onClick={handlePrev}
                    className={styles.backBtn}
                  >
                    {dict.backBtn}
                  </button>
                  <button
                    type="submit"
                    className={styles.nextBtn}
                  >
                    {dict.submitBtn}
                  </button>
                </div>
              </form>
            )}

            {/* STEP 4: Success View */}
            {step === 4 && (
              <div className={styles.successContainer}>
                <div className={styles.successCheckBadge}>✓</div>
                <h3 className={styles.successHeading}>
                  {dict.successTitle}, {fullName || 'Guest'}!
                </h3>
                <p className={styles.successMessage}>{dict.successDesc}</p>

                <div className={styles.successActions}>
                  <button
                    type="button"
                    onClick={handleWhatsAppInstantSend}
                    className={styles.whatsappActionBtn}
                  >
                    <span>{dict.whatsappBtn}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className={styles.restartBtn}
                  >
                    {dict.restartBtn}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
