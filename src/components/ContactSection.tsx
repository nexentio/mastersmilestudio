'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import styles from './ContactSection.module.css';

export const COUNTRIES_LIST = [
  'Afghanistan (+93)',
  'Albania (+355)',
  'Algeria (+213)',
  'Andorra (+376)',
  'Angola (+244)',
  'Argentina (+54)',
  'Armenia (+374)',
  'Australia (+61)',
  'Austria (+43)',
  'Azerbaijan (+994)',
  'Bahrain (+973)',
  'Bangladesh (+880)',
  'Belarus (+375)',
  'Belgium (+32)',
  'Bolivia (+591)',
  'Brazil (+55)',
  'Bulgaria (+359)',
  'Canada (+1)',
  'Chile (+56)',
  'China (+86)',
  'Colombia (+57)',
  'Croatia (+385)',
  'Czech Republic (+420)',
  'Denmark (+45)',
  'Egypt (+20)',
  'Estonia (+372)',
  'Finland (+358)',
  'France (+33)',
  'Germany (+49)',
  'Greece (+30)',
  'Hungary (+36)',
  'Iceland (+354)',
  'India (+91)',
  'Indonesia (+62)',
  'Iran (+98)',
  'Iraq (+964)',
  'Ireland (+353)',
  'Israel (+972)',
  'Italy (+39)',
  'Japan (+81)',
  'Kazakhstan (+7)',
  'Kuwait (+965)',
  'Latvia (+371)',
  'Lebanon (+961)',
  'Malaysia (+60)',
  'Mexico (+52)',
  'Netherlands (+31)',
  'New Zealand (+64)',
  'Nigeria (+234)',
  'Norway (+47)',
  'Pakistan (+92)',
  'Peru (+51)',
  'Philippines (+63)',
  'Poland (+48)',
  'Portugal (+351)',
  'Qatar (+974)',
  'Romania (+40)',
  'Russia (+7)',
  'Saudi Arabia (+966)',
  'Serbia (+381)',
  'Singapore (+65)',
  'South Africa (+27)',
  'South Korea (+82)',
  'Spain (+34)',
  'Sweden (+46)',
  'Switzerland (+41)',
  'Thailand (+66)',
  'Turkey (+90)',
  'Ukraine (+380)',
  'United Arab Emirates (+971)',
  'United Kingdom (+44)',
  'United States (+1)',
  'Vietnam (+84)',
];

const FORM_I18N = {
  en: {
    heading: 'Let’s Create Your Perfect Smile Plan',
    extraTitle: 'Begin your transformation with a free, no-obligation consultation.',
    description:
      'Fill out the form in just a minute, and our international patient consultant will get in touch with you personally to prepare your tailored treatment plan, estimated quote, and travel guidance — all at no cost. We’re here to make your journey smooth, safe, and unforgettable.',
    nameLabel: 'Your Name *',
    namePlaceholder: 'John Doe',
    countryLabel: 'Your Country *',
    countrySelectDefault: 'Not selected',
    phoneLabel: 'Your Phone Number *',
    phonePlaceholder: '+44 7123 456789',
    emailLabel: 'E-mail Address *',
    emailPlaceholder: 'example@domain.com',
    messageLabel: 'Your Message',
    messagePlaceholder: 'Describe your dental goals, previous treatments, or questions...',
    submitBtn: 'Submit',
    successTitle: 'Thank you!',
    successMessage: 'Your message has been received. We will get back to you as soon as possible.',
  },
  tr: {
    heading: 'Mükemmel Gülüş Planınızı Birlikte Oluşturalım',
    extraTitle: 'Ücretsiz ve bağlayıcılığı olmayan konsültasyon ile değişiminizi başlatın.',
    description:
      'Formu sadece bir dakika içinde doldurun; uluslararası hasta danışmanımız kişiye özel tedavi planınızı, tahmini fiyat teklifinizi ve seyahat rehberliğinizi tamamen ücretsiz olarak hazırlamak üzere sizinle bizzat iletişime geçsin. Yolculuğunuzu konforlu, güvenli ve unutulmaz kılmak için buradayız.',
    nameLabel: 'Adınız Soyadınız *',
    namePlaceholder: 'Ahmet Yılmaz',
    countryLabel: 'Ülkeniz *',
    countrySelectDefault: 'Seçiniz',
    phoneLabel: 'Telefon Numaranız *',
    phonePlaceholder: '+90 543 123 45 67',
    emailLabel: 'E-posta Adresiniz *',
    emailPlaceholder: 'ornek@alanadi.com',
    messageLabel: 'Mesajınız',
    messagePlaceholder: 'Tedavi hedeflerinizi, şikayetlerinizi veya sormak istediklerinizi yazın...',
    submitBtn: 'Gönder',
    successTitle: 'Teşekkür Ederiz!',
    successMessage: 'Mesajınız başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğiz.',
  },
  de: {
    heading: 'Lassen Sie uns Ihren perfekten Behandlungsplan erstellen',
    extraTitle: 'Beginnen Sie Ihre Verwandlung mit einer kostenlosen, unverbindlichen Beratung.',
    description:
      'Füllen Sie das Formular in nur einer Minute aus, und unser internationaler Patientenberater wird sich persönlich mit Ihnen in Verbindung setzen, um Ihren individuellen Behandlungsplan, einen Kostenvoranschlag und Reisehinweise kostenlos zu erstellen. Wir machen Ihre Reise reibungslos, sicher und unvergesslich.',
    nameLabel: 'Ihr Name *',
    namePlaceholder: 'Max Mustermann',
    countryLabel: 'Ihr Land *',
    countrySelectDefault: 'Nicht ausgewählt',
    phoneLabel: 'Ihre Telefonnummer *',
    phonePlaceholder: '+49 151 23456789',
    emailLabel: 'E-Mail-Adresse *',
    emailPlaceholder: 'beispiel@domain.de',
    messageLabel: 'Ihre Nachricht',
    messagePlaceholder: 'Beschreiben Sie Ihre Wünsche, bisherige Behandlungen oder Fragen...',
    submitBtn: 'Absenden',
    successTitle: 'Vielen Dank!',
    successMessage: 'Ihre Nachricht ist eingegangen. Wir werden uns so schnell wie möglich bei Ihnen melden.',
  },
  pl: {
    heading: 'Stwórzmy Twój Idealny Plan Nowego Uśmiechu',
    extraTitle: 'Rozpocznij swoją metamorfozę od bezpłatnej, niezobowiązującej konsultacji.',
    description:
      'Wypełnij formularz w zaledwie minutę, a nasz międzynarodowy doradca pacjenta skontaktuje się z Tobą osobiście, aby bezpłatnie przygotować spersonalizowany plan leczenia, wstępny kosztorys i wskazówki dotyczące podróży. Jesteśmy tutaj, aby Twoja podróż była bezpieczna, komfortowa i niezapomniana.',
    nameLabel: 'Imię i Nazwisko *',
    namePlaceholder: 'Jan Kowalski',
    countryLabel: 'Twój Kraj *',
    countrySelectDefault: 'Nie wybrano',
    phoneLabel: 'Numer Telefonu *',
    phonePlaceholder: '+48 512 345 678',
    emailLabel: 'Adres E-mail *',
    emailPlaceholder: 'przyklad@domena.pl',
    messageLabel: 'Twoja Wiadomość',
    messagePlaceholder: 'Opisz swoje oczekiwania, dotychczasowe leczenie lub zadaj pytania...',
    submitBtn: 'Wyślij',
    successTitle: 'Dziękujemy!',
    successMessage: 'Twoja wiadomość została odebrana. Skontaktujemy się z Tobą najszybciej, jak to możliwe.',
  },
  pt: {
    heading: 'Vamos Criar o Seu Plano de Sorriso Perfeito',
    extraTitle: 'Comece a sua transformação com uma consulta gratuita e sem compromisso.',
    description:
      'Preencha o formulário em apenas um minuto e o nosso consultor de pacientes internacionais entrará em contacto pessoalmente para preparar o seu plano de tratamento personalizado, orçamento estimado e orientação de viagem — tudo sem custos. Estamos aqui para tornar a sua viagem segura, confortável e inesquecível.',
    nameLabel: 'O Seu Nome *',
    namePlaceholder: 'João Silva',
    countryLabel: 'O Seu País *',
    countrySelectDefault: 'Não selecionado',
    phoneLabel: 'Número de Telefone *',
    phonePlaceholder: '+351 912 345 678',
    emailLabel: 'Endereço de E-mail *',
    emailPlaceholder: 'exemplo@dominio.pt',
    messageLabel: 'A Sua Mensagem',
    messagePlaceholder: 'Descreva os seus objetivos dentários, tratamentos anteriores ou dúvidas...',
    submitBtn: 'Enviar',
    successTitle: 'Obrigado!',
    successMessage: 'A sua mensagem foi recebida. Entraremos em contacto consigo o mais brevemente possível.',
  },
  es: {
    heading: 'Diseñemos su Plan de Tratamiento Dental Personalizado',
    extraTitle: 'Comience su transformación con una consulta gratuita y sin compromiso.',
    description:
      'Complete el formulario en solo un minuto y nuestro asesor internacional de pacientes se pondrá en contacto con usted personalmente para preparar su plan de tratamiento a medida, presupuesto estimado y guía de viaje, todo sin costo alguno. Estamos aquí para que su viaje sea cómodo, seguro e inolvidable.',
    nameLabel: 'Su Nombre *',
    namePlaceholder: 'Carlos García',
    countryLabel: 'Su País *',
    countrySelectDefault: 'No seleccionado',
    phoneLabel: 'Su Número de Teléfono *',
    phonePlaceholder: '+34 612 345 678',
    emailLabel: 'Correo Electrónico *',
    emailPlaceholder: 'ejemplo@dominio.es',
    messageLabel: 'Su Mensaje',
    messagePlaceholder: 'Describa sus objetivos dentales, tratamientos previos o preguntas...',
    submitBtn: 'Enviar',
    successTitle: '¡Muchas Gracias!',
    successMessage: 'Su mensaje ha sido recibido. Nos pondremos en contacto con usted lo antes posible.',
  },
  ru: {
    heading: 'Создадим ваш идеальный план лечения и преображения улыбки',
    extraTitle: 'Начните преображение с бесплатной консультации без каких-либо обязательств.',
    description:
      'Заполните форму всего за одну минуту, и наш международный координатор лично свяжется с вами, чтобы бесплатно подготовить индивидуальный план лечения, расчет стоимости и план поездки. Мы сделаем вашу поездку в Анталью максимально комфортной, безопасной и результативной.',
    nameLabel: 'Ваше Имя *',
    namePlaceholder: 'Иван Иванов',
    countryLabel: 'Ваша Страна *',
    countrySelectDefault: 'Не выбрано',
    phoneLabel: 'Номер Телефона *',
    phonePlaceholder: '+7 912 345-67-89',
    emailLabel: 'Адрес Эл. Почты *',
    emailPlaceholder: 'example@domain.ru',
    messageLabel: 'Ваше Сообщение',
    messagePlaceholder: 'Опишите ваши пожелания, предыдущее лечение или интересующие вопросы...',
    submitBtn: 'Отправить',
    successTitle: 'Спасибо!',
    successMessage: 'Ваше сообщение получено. Мы свяжемся с вами в самое ближайшее время.',
  },
};

export default function ContactSection() {
  const locale = useLocale();
  const d = FORM_I18N[locale as keyof typeof FORM_I18N] || FORM_I18N.en;

  const [formData, setFormData] = useState({
    name: '',
    country: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          country: formData.country,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          formType: 'Contact Page VIP Consultation Form',
          locale,
        }),
      });
    } catch (err) {
      console.error('Contact form submission error:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className={styles.ortakform1} aria-label="Contact and Consultation Form">
      <div className={styles.standard_center4}>
        {/* Header Title & Subtitle */}
        <div className={styles.head}>
          <div className={styles.grid1}>
            <div className={styles.headS1}>{d.heading}</div>
            <div className={styles.headS2}>
              <div className={styles.extrabaslik}>{d.extraTitle}</div>
              <p style={{ margin: 0 }}>{d.description}</p>
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Left Image | Right Form */}
        <div className={styles.grid}>
          {/* Left Column: Clinic Image */}
          <div className={styles.imCol}>
            <div className={styles.im}>
              <Image
                src="/mss-afterpics-patients.png"
                alt="Master Smile Studio Antalya VIP Consultation"
                fill
                sizes="(max-width: 768px) 100vw, 580px"
                className={styles.formImg}
                priority={false}
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className={styles.formCol}>
            {submitted ? (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>✓</div>
                <div className={styles.successTitle}>{d.successTitle}</div>
                <p className={styles.successDesc}>{d.successMessage}</p>
              </div>
            ) : (
              <form id="form101" className={styles.form101} onSubmit={handleSubmit}>
                <div className={styles.form_grid}>
                  {/* Name Input */}
                  <div className={styles.form_grid_self}>
                    <div className={styles.group1}>
                      <div className={styles.title}>{d.nameLabel}</div>
                      <div className={styles.item}>
                        <input
                          aria-label="Name"
                          type="text"
                          name="ad"
                          required
                          placeholder={d.namePlaceholder}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Country & Phone Number */}
                  <div className={styles.form_grid_self}>
                    <div className={styles.phonegrid}>
                      <div className={styles.phonegrids}>
                        <div className={styles.group1}>
                          <div className={styles.title}>{d.countryLabel}</div>
                          <div className={styles.item}>
                            <select
                              aria-label="Country"
                              name="telefonulke"
                              required
                              value={formData.country}
                              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            >
                              <option value="">{d.countrySelectDefault}</option>
                              {COUNTRIES_LIST.map((country) => (
                                <option key={country} value={country}>
                                  {country}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className={styles.phonegrids}>
                        <div className={styles.group1}>
                          <div className={styles.title}>{d.phoneLabel}</div>
                          <div className={styles.item}>
                            <input
                              aria-label="Phone"
                              type="tel"
                              name="telefon"
                              required
                              placeholder={d.phonePlaceholder}
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className={styles.form_grid_self}>
                    <div className={styles.group1}>
                      <div className={styles.title}>{d.emailLabel}</div>
                      <div className={styles.item}>
                        <input
                          aria-label="Email"
                          type="email"
                          name="email"
                          required
                          placeholder={d.emailPlaceholder}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className={styles.form_grid_self}>
                    <div className={styles.group1}>
                      <div className={styles.title}>{d.messageLabel}</div>
                      <div className={styles.item}>
                        <textarea
                          aria-label="Message"
                          name="mesaj"
                          placeholder={d.messagePlaceholder}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className={styles.form_grid_self}>
                    <div className={styles.submit_line}>
                      <button className={styles.submit} type="submit" disabled={loading}>
                        <span>{loading ? '...' : d.submitBtn}</span>
                        <span className={styles.submitArrow}>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
