'use client';

import React, { useState, FormEvent } from 'react';
import { useLocale } from 'next-intl';
import { LOCALES, LOCALE_LABELS, type Locale } from '@/i18n/routing';
import { getWhatsAppLink } from '@/config/site';
import styles from './MobileHeroConsultationForm.module.css';

interface MobileFormI18n {
  badge: string;
  title: string;
  subtitle: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  treatmentLabel: string;
  treatmentSelect: string;
  treatmentOptions: { value: string; label: string }[];
  languageLabel: string;
  submitBtn: string;
  submitting: string;
  successTitle: string;
  successDesc: string;
  whatsappBtn: string;
  trustPoints: string[];
}

const LOCALE_FLAGS: Record<Locale, string> = {
  en: '🇬🇧',
  tr: '🇹🇷',
  de: '🇩🇪',
  pl: '🇵🇱',
  pt: '🇵🇹',
  es: '🇪🇸',
  ru: '🇷🇺',
};

const MOBILE_FORM_I18N: Record<string, MobileFormI18n> = {
  en: {
    badge: '✦ Free Consultation & Cost Estimate',
    title: 'Get Your Personalized Smile Plan',
    subtitle: 'Fill out the quick form below for an instant preliminary quote from our doctors in Antalya.',
    fullNameLabel: 'Full Name',
    fullNamePlaceholder: 'e.g. Sarah Jenkins',
    phoneLabel: 'WhatsApp / Phone Number',
    phonePlaceholder: '+44 7123 456789',
    treatmentLabel: 'Select Treatment',
    treatmentSelect: 'Choose your desired dental procedure...',
    treatmentOptions: [
      { value: 'dental-implants', label: 'Dental Implants (All-on-4 / All-on-6)' },
      { value: 'hollywood-smile', label: 'Hollywood Smile Makeover' },
      { value: 'zirconium-crowns', label: 'Zirconium Porcelain Crowns' },
      { value: 'emax-veneers', label: 'E-Max Laminate Veneers' },
      { value: 'teeth-whitening', label: 'Laser Teeth Whitening' },
      { value: 'dentures', label: 'Implant-Supported Dentures' },
      { value: 'general', label: 'General & Cosmetic Dentistry' },
    ],
    languageLabel: 'Preferred Language',
    submitBtn: 'Get Free Quote Now',
    submitting: 'Processing...',
    successTitle: 'Thank You! We Received Your Request',
    successDesc: 'Our patient coordinators are preparing your personalized plan. You can also message us directly on WhatsApp.',
    whatsappBtn: 'Chat on WhatsApp Now',
    trustPoints: [
      '✓ Free Panoramic X-Ray Evaluation',
      '✓ 5-Star Hotel Accommodations & VIP Transfers',
      '✓ Transparent Pricing with No Hidden Costs',
    ],
  },
  tr: {
    badge: '✦ Ücretsiz Danışmanlık & Fiyat Teklifi',
    title: 'Kişiselleştirilmiş Gülüş Planınızı Alın',
    subtitle: 'Antalya’daki uzman hekimlerimizden anında tedavi planı ve şeffaf fiyat teklifi almak için formu doldurun.',
    fullNameLabel: 'Ad Soyad',
    fullNamePlaceholder: 'Örn: Ahmet Yılmaz',
    phoneLabel: 'WhatsApp / Telefon Numarası',
    phonePlaceholder: '+90 555 123 4567',
    treatmentLabel: 'İlgilendiğiniz Tedavi',
    treatmentSelect: 'Uygulatmak istediğiniz tedaviyi seçin...',
    treatmentOptions: [
      { value: 'dental-implants', label: 'İmplant Tedavisi (All-on-4 / All-on-6)' },
      { value: 'hollywood-smile', label: 'Hollywood Smile Gülüş Tasarımı' },
      { value: 'zirconium-crowns', label: 'Zirkonyum Kaplama / Kron' },
      { value: 'emax-veneers', label: 'E-Max Yaprak Porselen Lamina' },
      { value: 'teeth-whitening', label: 'Lazerle Diş Beyazlatma' },
      { value: 'dentures', label: 'İmplant Üstü Protez Diş' },
      { value: 'general', label: 'Genel & Estetik Diş Hekimliği' },
    ],
    languageLabel: 'İletişim Dili',
    submitBtn: 'Ücretsiz Teklif Al',
    submitting: 'Gönderiliyor...',
    successTitle: 'Talebiniz Başarıyla Alındı!',
    successDesc: 'Uzman koordinatörlerimiz kişiye özel tedavi planınızı hazırlıyor. Dilerseniz hemen WhatsApp üzerinden de yazabilirsiniz.',
    whatsappBtn: 'WhatsApp’tan Hemen Yazın',
    trustPoints: [
      '✓ Ücretsiz Dijital Panoramik Röntgen',
      '✓ 5 Yıldızlı Otel Konaklaması & VIP Transfer',
      '✓ Sürprizsiz, Şeffaf ve Yazılı Fiyat Garantisi',
    ],
  },
  de: {
    badge: '✦ Kostenlose Beratung & Kostenvoranschlag',
    title: 'Erhalten Sie Ihren persönlichen Behandlungsplan',
    subtitle: 'Füllen Sie das Kurzformular aus, um ein unverbindliches Angebot unserer Zahnärzte in Antalya zu erhalten.',
    fullNameLabel: 'Vollständiger Name',
    fullNamePlaceholder: 'z. B. Markus Weber',
    phoneLabel: 'WhatsApp / Telefonnummer',
    phonePlaceholder: '+49 170 1234567',
    treatmentLabel: 'Gewünschte Behandlung',
    treatmentSelect: 'Wählen Sie Ihre gewünschte Behandlung...',
    treatmentOptions: [
      { value: 'dental-implants', label: 'Zahnimplantate (All-on-4 / All-on-6)' },
      { value: 'hollywood-smile', label: 'Hollywood Smile Makeover' },
      { value: 'zirconium-crowns', label: 'Zirkonkronen & Brücken' },
      { value: 'emax-veneers', label: 'E-Max Keramik Veneers' },
      { value: 'teeth-whitening', label: 'Laser-Zahnaufhellung' },
      { value: 'dentures', label: 'Implantatgetragene Prothesen' },
      { value: 'general', label: 'Allgemeine & Ästhetische Zahnheilkunde' },
    ],
    languageLabel: 'Bevorzugte Sprache',
    submitBtn: 'Kostenloses Angebot anfordern',
    submitting: 'Wird gesendet...',
    successTitle: 'Vielen Dank! Ihre Anfrage ist eingegangen',
    successDesc: 'Unsere Patientenkoordinatoren erstellen Ihren Behandlungsplan. Sie können uns auch direkt per WhatsApp kontaktieren.',
    whatsappBtn: 'Direkt per WhatsApp schreiben',
    trustPoints: [
      '✓ Kostenlose Röntgenanalyse & Erstberatung',
      '✓ 5-Sterne-Hotelunterkunft & VIP-Transfer',
      '✓ Bis zu 70% Ersparnis bei deutscher Qualität',
    ],
  },
  pl: {
    badge: '✦ Bezpłatna Konsultacja i Wycena',
    title: 'Otrzymaj Spersonalizowany Plan Leczenia',
    subtitle: 'Wypełnij krótki formularz, aby otrzymać bezpłatny kosztorys od naszych lekarzy w Antalyi.',
    fullNameLabel: 'Imię i Nazwisko',
    fullNamePlaceholder: 'np. Anna Kowalska',
    phoneLabel: 'Numer WhatsApp / Telefon',
    phonePlaceholder: '+48 500 123 456',
    treatmentLabel: 'Wybierz Zabieg',
    treatmentSelect: 'Wybierz interesujący Cię zabieg...',
    treatmentOptions: [
      { value: 'dental-implants', label: 'Implanty Zębowe (All-on-4 / All-on-6)' },
      { value: 'hollywood-smile', label: 'Hollywood Smile Makeover' },
      { value: 'zirconium-crowns', label: 'Korony Cyrkonowe' },
      { value: 'emax-veneers', label: 'Licówki E-Max' },
      { value: 'teeth-whitening', label: 'Wybielanie Zębów' },
      { value: 'dentures', label: 'Protezy na Implantach' },
      { value: 'general', label: 'Stomatologia Estetyczna i Ogólna' },
    ],
    languageLabel: 'Język Kontaktu',
    submitBtn: 'Odbierz Bezpłatną Wycenę',
    submitting: 'Wysyłanie...',
    successTitle: 'Dziękujemy! Otrzymaliśmy Twoje zgłoszenie',
    successDesc: 'Nasi koordynatorzy przygotowują Twój plan leczenia. Możesz również skontaktować się bezpośrednio przez WhatsApp.',
    whatsappBtn: 'Napisz na WhatsApp',
    trustPoints: [
      '✓ Bezpłatna analiza panoramicznego RTG',
      '✓ 5-gwiazdkowy hotel i transfery VIP',
      '✓ Gwarancja przejrzystych cen bez ukrytych kosztów',
    ],
  },
  pt: {
    badge: '✦ Consulta & Orçamento Gratuito',
    title: 'Receba o Seu Plano de Sorriso Personalizado',
    subtitle: 'Preencha o formulário rápido para receber uma estimativa clínica dos nossos médicos em Antalya.',
    fullNameLabel: 'Nome Completo',
    fullNamePlaceholder: 'ex.: João Silva',
    phoneLabel: 'WhatsApp / Telemóvel',
    phonePlaceholder: '+351 912 345 678',
    treatmentLabel: 'Tratamento Desejado',
    treatmentSelect: 'Escolha o seu procedimento dentário...',
    treatmentOptions: [
      { value: 'dental-implants', label: 'Implantes Dentários (All-on-4 / All-on-6)' },
      { value: 'hollywood-smile', label: 'Design de Sorriso Hollywood' },
      { value: 'zirconium-crowns', label: 'Coroas de Zircónio' },
      { value: 'emax-veneers', label: 'Facetas E-Max' },
      { value: 'teeth-whitening', label: 'Branqueamento Dentário' },
      { value: 'dentures', label: 'Próteses sobre Implantes' },
      { value: 'general', label: 'Dentisterie Estética & Geral' },
    ],
    languageLabel: 'Idioma de Preferência',
    submitBtn: 'Pedir Orçamento Gratuito',
    submitting: 'A enviar...',
    successTitle: 'Obrigado! Pedido Recebido com Sucesso',
    successDesc: 'Os nossos coordenadores estão a preparar a sua proposta personalizada. Pode também enviar mensagem no WhatsApp.',
    whatsappBtn: 'Falar no WhatsApp Agora',
    trustPoints: [
      '✓ Avaliação Radiográfica Gratuita',
      '✓ Hotel 5 Estrelas e Transferes VIP',
      '✓ Preços Claros e Garantia Clínica',
    ],
  },
  es: {
    badge: '✦ Consulta y Presupuesto Gratuito',
    title: 'Obtenga su Plan de Sonrisa Personalizado',
    subtitle: 'Complete el formulario para recibir un presupuesto estimado y valoración de nuestros doctores en Antalya.',
    fullNameLabel: 'Nombre y Apellidos',
    fullNamePlaceholder: 'ej.: Carlos García',
    phoneLabel: 'WhatsApp / Teléfono',
    phonePlaceholder: '+34 612 345 678',
    treatmentLabel: 'Tratamiento Solicitado',
    treatmentSelect: 'Seleccione el tratamiento deseado...',
    treatmentOptions: [
      { value: 'dental-implants', label: 'Implantes Dentales (All-on-4 / All-on-6)' },
      { value: 'hollywood-smile', label: 'Diseño Sonrisa Hollywood' },
      { value: 'zirconium-crowns', label: 'Coronas de Zirconio' },
      { value: 'emax-veneers', label: 'Carillas E-Max' },
      { value: 'teeth-whitening', label: 'Blanqueamiento Dental' },
      { value: 'dentures', label: 'Prótesis sobre Implantes' },
      { value: 'general', label: 'Odontología Estética y General' },
    ],
    languageLabel: 'Idioma de Contacto',
    submitBtn: 'Obtener Presupuesto Gratis',
    submitting: 'Enviando...',
    successTitle: '¡Muchas Gracias! Solicitud Recibida',
    successDesc: 'Nuestros coordinadores están preparando su plan personalizado. También puede escribirnos directamente por WhatsApp.',
    whatsappBtn: 'Chatear por WhatsApp',
    trustPoints: [
      '✓ Evaluación Radiográfica Gratuita',
      '✓ Alojamiento en Hotel 5★ y Traslados VIP',
      '✓ Precios Transparentes y Garantía Oficial',
    ],
  },
  ru: {
    badge: '✦ Бесплатная Консультация и Расчет',
    title: 'Получите Ваш Персональный План Лечения',
    subtitle: 'Заполните короткую форму для получения предварительного расчета стоимости от наших врачей в Анталье.',
    fullNameLabel: 'Имя и Фамилия',
    fullNamePlaceholder: 'напр. Елена Ростова',
    phoneLabel: 'Номер WhatsApp / Телефон',
    phonePlaceholder: '+7 999 123 45 67',
    treatmentLabel: 'Необходимое Лечение',
    treatmentSelect: 'Выберите интересующую вас процедуру...',
    treatmentOptions: [
      { value: 'dental-implants', label: 'Зубные Импланты (All-on-4 / All-on-6)' },
      { value: 'hollywood-smile', label: 'Голливудская Улыбка (Hollywood Smile)' },
      { value: 'zirconium-crowns', label: 'Циркониевые Коронки' },
      { value: 'emax-veneers', label: 'Виниры E-Max' },
      { value: 'teeth-whitening', label: 'Отбеливание Зубов' },
      { value: 'dentures', label: 'Протезы на Имплантах' },
      { value: 'general', label: 'Эстетическая и Общая Стоматология' },
    ],
    languageLabel: 'Язык Общения',
    submitBtn: 'Получить Бесплатный Расчет',
    submitting: 'Отправка...',
    successTitle: 'Спасибо! Ваша заявка успешно принята',
    successDesc: 'Наши медицинские координаторы готовят персональный расчет. Вы также можете написать нам напрямую в WhatsApp.',
    whatsappBtn: 'Написать в WhatsApp',
    trustPoints: [
      '✓ Бесплатный 3D анализ снимков',
      '✓ 5★ отель и персональный VIP трансфер',
      '✓ Экономия до 70% и официальная гарантия клиники',
    ],
  },
};

export default function MobileHeroConsultationForm() {
  const currentLocale = useLocale();
  const d = MOBILE_FORM_I18N[currentLocale] || MOBILE_FORM_I18N.en;
  const whatsappUrl = getWhatsAppLink(currentLocale);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState('');
  const [selectedLang, setSelectedLang] = useState<Locale>(currentLocale as Locale);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !treatment) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className={styles.mobileFormSection} id="mobile-consultation-form" aria-label={d.title}>
      <div className={styles.formCard}>
        <div className={styles.cardTopAccent} />

        {submitted ? (
          <div className={styles.successCard}>
            <div className={styles.successIcon}>✓</div>
            <h3 className={styles.successTitle}>{d.successTitle}</h3>
            <p className={styles.successDesc}>{d.successDesc}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappSuccessBtn}
            >
              <span>{d.whatsappBtn}</span>
            </a>
          </div>
        ) : (
          <>
            {/* Form Inputs continuing directly from hero header */}
            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Full Name */}
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  {d.fullNameLabel} <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={d.fullNamePlaceholder}
                  className={styles.input}
                  autoComplete="name"
                />
              </div>

              {/* Phone */}
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  {d.phoneLabel} <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={d.phonePlaceholder}
                  className={styles.input}
                  autoComplete="tel"
                />
              </div>

              {/* Treatment */}
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  {d.treatmentLabel} <span className={styles.requiredStar}>*</span>
                </label>
                <div className={styles.selectWrap}>
                  <select
                    required
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    className={styles.select}
                  >
                    <option value="" disabled>
                      {d.treatmentSelect}
                    </option>
                    {d.treatmentOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <span className={styles.selectArrow}>▼</span>
                </div>
              </div>

              {/* Language Selection */}
              <div className={styles.inputGroup}>
                <label className={styles.label}>{d.languageLabel}</label>
                <div className={styles.langGrid}>
                  {LOCALES.map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => setSelectedLang(loc)}
                      className={`${styles.langBtn} ${selectedLang === loc ? styles.langBtnActive : ''}`}
                      aria-label={LOCALE_LABELS[loc].nativeName}
                      title={LOCALE_LABELS[loc].nativeName}
                    >
                      <span className={styles.flagEmoji}>{LOCALE_FLAGS[loc]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitBtn}
              >
                <span>{isSubmitting ? d.submitting : d.submitBtn}</span>
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
