'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { SITE_CONFIG } from '@/config/site';
import styles from './TreatmentInteractiveQuoteForm.module.css';

interface Props {
  defaultTreatment?: string;
}

export default function TreatmentInteractiveQuoteForm({ defaultTreatment = 'Implants' }: Props) {
  const locale = useLocale();

  const [step, setStep] = useState<number>(1);
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([defaultTreatment]);
  const [ageGroup, setAgeGroup] = useState<string>('26 - 35');
  const [spokenToDentist, setSpokenToDentist] = useState<string>('Yes');
  const [timeline, setTimeline] = useState<string>('As soon as possible');
  const [commChannel, setCommChannel] = useState<string>('WhatsApp');
  const [fullName, setFullName] = useState<string>('');
  const [country, setCountry] = useState<string>('United Kingdom (+44)');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const treatmentList = ['Crowns', 'Implants', 'Veneers', 'All-on-4', 'All-on-6', 'Other'];
  const ageList = ['18 - 25', '26 - 35', '36 - 45', '46 - 55', '56+'];
  const timelineList = [
    'As soon as possible',
    'Within the next few weeks',
    'Within the next few months',
    "I haven't decided yet",
  ];
  const commList = ['Phone', 'E-mail', 'WhatsApp', 'No preference'];

  const countries = [
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
    'Turkey (+90)',
    'United Arab Emirates (+971)',
    'Saudi Arabia (+966)',
    'Kuwait (+965)',
    'Qatar (+974)',
    'Other (+00)',
  ];

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
      `Hello Master Smile Studio! 👋\n\nI would like to get my Free Dental Consultation.\n\n• Name: ${fullName || 'Guest'}\n• Country: ${country}\n• Phone: ${phone}\n• Treatments: ${selectedTreatments.join(', ')}\n• Age: ${ageGroup}\n• Spoken to Dentist: ${spokenToDentist}\n• Timeline: ${timeline}\n• Preferred Contact: ${commChannel}\n• Message: ${message || 'None'}\n\nPlease prepare my custom treatment plan and price quote.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div id="js_target1" className="treatment-container py-20 px-6">
      {/* Head */}
      <div className="head mb-10">
        <div className="grid1 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="s s1">
            <h2 className="treatment-heading-navy">
              {locale === 'tr' ? 'Kusursuz Gülüş Planınızı Oluşturalım' : 'Let’s Create Your Perfect Smile Plan'}
            </h2>
          </div>
          <div className="s s2">
            <p className="treatment-text-p m-0">
              {locale === 'tr'
                ? 'Dönüşümünüze ücretsiz ve bağlayıcılığı olmayan bir konsültasyonla başlayın. Formu sadece 1 dakikada doldurun; uluslararası hasta danışmanımız size özel tedavi planınızı, tahmini fiyat teklifinizi ve seyahat rehberinizi tamamen ücretsiz olarak hazırlamak için sizinle bizzat iletişime geçsin.'
                : 'Begin your transformation with a free, no-obligation consultation. Fill out the form in just a minute, and our international patient consultant will get in touch with you personally to prepare your tailored treatment plan, estimated quote, and travel guidance — all at no cost. We’re here to make your journey smooth, safe, and unforgettable.'}
            </p>
          </div>
        </div>
      </div>

      {/* Outer Dual-Pane Container with Stable Fixed Height */}
      <div className={styles.dualPane}>
        {/* Left Column Stepper */}
        <div className={styles.paneLeft}>
          <div className="table">
            <div className="flex flex-col">
              {/* Step 1 */}
              <div className={styles.stepRow}>
                <div className={`${styles.stepCircle} ${step >= 1 ? styles.stepCircleActive : ''}`}>
                  {step > 1 && <div className={styles.stepDot} />}
                </div>
                <div className={styles.stepText}>
                  Great! Let&apos;s get a bit more specific…
                </div>
              </div>

              {/* Line 1 */}
              <div className={styles.stepLine} />

              {/* Step 2 */}
              <div className={styles.stepRow}>
                <div className={`${styles.stepCircle} ${step >= 2 ? styles.stepCircleActive : ''}`}>
                  {step > 2 && <div className={styles.stepDot} />}
                </div>
                <div className={styles.stepText}>
                  Almost there! Just a few details to personalize your experience.
                </div>
              </div>

              {/* Line 2 */}
              <div className={styles.stepLine} />

              {/* Step 3 */}
              <div className={styles.stepRow}>
                <div className={`${styles.stepCircle} ${step >= 3 ? styles.stepCircleActive : ''}`}>
                  {step > 3 && <div className={styles.stepDot} />}
                </div>
                <div className={styles.stepText}>
                  Final step! Let us know how we can contact you.
                </div>
              </div>

              {/* Line 3 */}
              <div className={styles.stepLine} />

              {/* Step 4 */}
              <div className={styles.stepRow}>
                <div className={`${styles.stepCircle} ${step >= 4 ? styles.stepCircleActive : ''}`}>
                  {step >= 4 && <div className={styles.stepDot} />}
                </div>
                <div className={styles.stepText}>
                  All done! We are preparing your smile plan.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Step Form Area */}
        <div className={styles.paneRight}>
          {/* STEP 1: Treatments & Age */}
          {step === 1 && (
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className={styles.stepBadge}>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Step 1 of 3</span>
                  <span className="text-xs font-bold text-slate-400">Treatment Details</span>
                </div>

                <div className="mb-7">
                  <label className="block text-sm font-bold text-slate-900 mb-3">
                    1. Which treatments are you interested in? (You can select multiple)
                  </label>
                  <div className={styles.optionsGrid}>
                    {treatmentList.map((t) => {
                      const isSelected = selectedTreatments.includes(t);
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => handleToggleTreatment(t)}
                          className={`${styles.optionBtn} ${isSelected ? styles.optionBtnSelected : ''}`}
                        >
                          <span>{t}</span>
                          {isSelected && <span>✓</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-3">
                    2. What is your age group?
                  </label>
                  <div className={styles.optionsGrid}>
                    {ageList.map((age) => (
                      <button
                        key={age}
                        type="button"
                        onClick={() => setAgeGroup(age)}
                        className={`${styles.optionBtn} ${ageGroup === age ? styles.optionBtnSelected : ''}`}
                      >
                        <span>{age}</span>
                        {ageGroup === age && <span>✓</span>}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`${styles.navRow} justify-end`}>
                <button
                  type="button"
                  onClick={handleNext}
                  className={styles.navNext}
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Previous dentist & Timeline */}
          {step === 2 && (
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className={styles.stepBadge}>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Step 2 of 3</span>
                  <span className="text-xs font-bold text-slate-400">Timeline & Background</span>
                </div>

                <div className="mb-7">
                  <label className="block text-sm font-bold text-slate-900 mb-3">
                    1. Have you already spoken to a dentist about your treatment?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {['Yes', 'No'].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSpokenToDentist(opt)}
                        className={`${styles.optionBtn} justify-center ${spokenToDentist === opt ? styles.optionBtnSelected : ''}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-3">
                    2. When are you looking to start your treatment?
                  </label>
                  <div className={styles.optionsGrid}>
                    {timelineList.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setTimeline(time)}
                        className={`${styles.optionBtn} ${timeline === time ? styles.optionBtnSelected : ''}`}
                      >
                        <span>{time}</span>
                        {timeline === time && <span>✓</span>}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.navRow}>
                <button
                  type="button"
                  onClick={handlePrev}
                  className={styles.navPrev}
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className={styles.navNext}
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Contact details & Submission */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
              <div>
                <div className={styles.stepBadge}>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Step 3 of 3</span>
                  <span className="text-xs font-bold text-slate-400">Personal Details</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Country *
                    </label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className={styles.input}
                    >
                      {countries.map((c, i) => (
                        <option key={i} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+44 7123 456789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Communication Channel
                  </label>
                  <div className={styles.optionsGrid}>
                    {commList.map((ch) => (
                      <button
                        key={ch}
                        type="button"
                        onClick={() => setCommChannel(ch)}
                        className={`${styles.optionBtn} ${commChannel === ch ? styles.optionBtnSelected : ''}`}
                      >
                        <span>{ch}</span>
                        {commChannel === ch && <span>✓</span>}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Dental History or Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your teeth condition, missing teeth, or specific aesthetic goals..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.navRow}>
                <button
                  type="button"
                  onClick={handlePrev}
                  className={styles.navPrev}
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className={styles.navNext}
                >
                  Get My Free Treatment Plan & Price →
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Success Screen */}
          {step === 4 && (
            <div className="flex flex-col items-center justify-center text-center py-10 my-auto">
              <div className={styles.successBadge}>
                ✓
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
                Thank You, {fullName || 'Valued Guest'}!
              </h3>
              <p className="text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                Your consultation request has been received. Our senior dentist and patient coordinator are reviewing your preferences ({selectedTreatments.join(', ')}) and will contact you via {commChannel} shortly.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppInstantSend}
                  className="treatment-btn-whatsapp"
                >
                  <span>💬 Send Directly to WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 rounded-full bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-all text-sm"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
