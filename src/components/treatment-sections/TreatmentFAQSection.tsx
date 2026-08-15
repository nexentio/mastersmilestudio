'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import styles from './TreatmentFAQSection.module.css';

interface FAQItem {
  q: { en: string; tr: string };
  a: { en: React.ReactNode; tr: React.ReactNode };
}

export default function TreatmentFAQSection() {
  const locale = useLocale();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      q: {
        en: 'Will my treatment plan or the price you gave me change when I arrive?',
        tr: 'İstanbul’a geldiğimde bana verilen tedavi planı veya fiyat değişir mi?',
      },
      a: {
        en: (
          <div>
            <p>Good question. Unfortunately, many patients who travel for their treatment face unethical practices in clinics they prefer such as getting bullied about surprise charges by clinics.</p>
            <p className="mt-3">The plan and price we share with you are carefully prepared based on the photos, X-rays, or details and your expectations that you send us before your trip. When you arrive, we simply confirm everything in person with an examination before beginning your treatment.</p>
            <p className="mt-3">Sometimes, however, a small detail that could not be seen in the photos or x-rays may show up during the clinic examination. For example, this might be the need to reinforce your bone tissue with grafting and sinus lifting procedure. Unlike most clinics that deal with international patients, the pricing and the possibility of these details are transparently shared with you in your treatment plan.</p>
            <p className="mt-3">If that happens, we will explain it clearly, show you the issue, and discuss all the options with you before making any changes. Nothing is ever done without your agreement.</p>
            <p className="mt-3">Your treatment plan and price will stay the same unless we discover something new during your check-up. Even then, we’ll decide together with you about your options before moving forward with any treatments.</p>
          </div>
        ),
        tr: (
          <div>
            <p>Çok haklı bir soru. Ne yazık ki yurt dışından gelen birçok hasta, bazı kliniklerde sonradan çıkarılan sürpriz ek maliyetlerle karşılaşabiliyor.</p>
            <p className="mt-3">Sizinle paylaştığımız plan ve fiyat; seyahatinizden önce bize gönderdiğiniz fotoğraflar, röntgenler ve beklentileriniz doğrultusunda titizlikle hazırlanır. Kliniğimize geldiğinizde tedaviye başlamadan önce detaylı bir yüz yüze muayene ile her şeyi teyit ederiz.</p>
            <p className="mt-3">Nadiren de olsa iki boyutlu röntgende görünmeyen anatomik detaylar (örneğin sinüs lifting veya kemik tozu gereksinimi) klinik muayenede netleşebilir. Bu olasılıklar ve fiyatları tedavi planınızda en baştan şeffaf olarak belirtilir.</p>
            <p className="mt-3">Herhangi bir değişiklik gerekirse, durum size detaylıca gösterilir ve onayınız olmadan hiçbir işlem yapılmaz.</p>
          </div>
        ),
      },
    },
    {
      q: {
        en: 'Will you help me with accommodation?',
        tr: 'Konaklama konusunda yardımcı oluyor musunuz?',
      },
      a: {
        en: (
          <div>
            <p>Yes, of course. Our patients regularly travel from abroad, so we make sure you feel supported not only with your dental treatment but also with your stay in Istanbul. We can recommend trusted hotels close to our clinic, and if you prefer, we can also help arrange your booking.</p>
            <p className="mt-3">Our goal is to make your trip as smooth and stress-free as possible, so you can focus on your treatment and enjoy your time in the city. We’ll gladly assist you with accommodation and make sure you have comfortable options during your visit.</p>
          </div>
        ),
        tr: (
          <div>
            <p>Evet, kesinlikle. Uluslararası hastalarımızın konforu için anlaşmalı 4 ve 5 yıldızlı otellerimizde konaklama organizasyonunu sağlıyoruz. Kliniğimize yakın, güvenli ve lüks otel seçenekleriyle tüm rezervasyon sürecinizi koordine ediyoruz.</p>
          </div>
        ),
      },
    },
    {
      q: {
        en: 'Is it safe to travel to Turkey?',
        tr: 'Türkiye’ye seyahat etmek güvenli mi?',
      },
      a: {
        en: (
          <div>
            <p>Yes! Turkey is a very popular destination for international visitors and millions of tourists travel here safely every year. Cities like Istanbul are not only cultural and historical centers but also well-prepared to welcome patients from abroad with modern clinics, hotels, and transport services and many world-renowned touristic attractions.</p>
            <p className="mt-3">Like in any big city, it’s always wise to take normal travel precautions. Our clinic also arranges trusted VIP transportation and accommodation options to make sure you feel comfortable and secure throughout your stay.</p>
          </div>
        ),
        tr: (
          <div>
            <p>Evet! Türkiye her yıl milyonlarca turistin güvenle ziyaret ettiği dünyanın en popüler destinasyonlarından biridir. İstanbul, modern altyapısı, dünya standartlarındaki sağlık merkezleri ve lüks otelleriyle uluslararası misafirlerini en iyi şekilde ağırlamaktadır. VIP transfer ve kişisel asistanlık hizmetlerimizle tüm seyahatiniz güvence altındadır.</p>
          </div>
        ),
      },
    },
    {
      q: {
        en: 'What materials are used for dental crowns at your clinic?',
        tr: 'Kliniğinizde diş kuronları için hangi malzemeler kullanılmaktadır?',
      },
      a: {
        en: (
          <div>
            <p>We utilize the latest technologies and treatment protocols available in dentistry.</p>
            <p className="mt-3">Regarding dental prostheses, Ivoclar (Swiss) brand is used for veneers, meanwhile Amann Girrbach (Austria/Germany) brand is preferred for All-on-4 / All-on-6 treatments over implants.</p>
          </div>
        ),
        tr: (
          <div>
            <p>Diş hekimliğinde mevcut olan en son teknolojileri ve sertifikalı malzemeleri kullanıyoruz. Kaplamalarda İsviçre menşeili Ivoclar E-Max kullanılırken; implant üstü All-on-4 / All-on-6 sabit protezlerde Avusturya/Almanya menşeili Amann Girrbach monolitik zirkonyum tercih edilmektedir.</p>
          </div>
        ),
      },
    },
    {
      q: {
        en: 'Can I see the shape and color of my teeth before they are made?',
        tr: 'Dişlerim hazırlanmadan önce şeklini ve rengini görebilir miyim?',
      },
      a: {
        en: (
          <div>
            <p>Yes, absolutely. With our digital smile design technology, we create a 3D digital preview and physical mock-up so you can see and approve the exact shape, color, and smile line before permanent fabrication.</p>
          </div>
        ),
        tr: (
          <div>
            <p>Evet, kesinlikle. Dijital Gülüş Tasarımı (DSD) teknolojimiz sayesinde, kalıcı dişler üretilmeden önce 3 boyutlu dijital önizleme ve ağız içi mock-up denemesi yaparak dişlerinizin formunu ve rengini birebir görüp onaylayabilirsiniz.</p>
          </div>
        ),
      },
    },
    {
      q: {
        en: 'How long does dental implant treatment take in Turkey?',
        tr: 'Türkiye’de diş implantı tedavisi ne kadar sürer?',
      },
      a: {
        en: (
          <div>
            <p>Implant treatment typically involves two visits. The first visit takes 3-5 days for implant surgery and fitting temporary teeth. After a 3-month healing period (osseointegration), the second visit takes 5-7 days for final permanent zirconia teeth fitting.</p>
          </div>
        ),
        tr: (
          <div>
            <p>İmplant tedavisi genellikle 2 ziyarette tamamlanır. İlk ziyaret implant yerleşimi ve geçici dişler için 3-5 gün sürer. 3 aylık kemik kaynama sürecinin ardından kalıcı zirkonyum protezler için 5-7 günlük ikinci ziyaret gerçekleştirilir.</p>
          </div>
        ),
      },
    },
    {
      q: {
        en: 'Is the dental implant procedure painful?',
        tr: 'Diş implantı işlemi ağrılı mıdır?',
      },
      a: {
        en: (
          <div>
            <p>No, the procedure is performed under advanced local anesthesia and is completely painless. Post-treatment discomfort is mild and easily managed with prescribed painkillers.</p>
          </div>
        ),
        tr: (
          <div>
            <p>Hayır, işlem gelişmiş lokal anestezi altında tamamen ağrısız olarak gerçekleştirilir. İşlem sonrasındaki hafif sızılar ise reçete edilen standart ağrı kesicilerle kolayca kontrol altına alınır.</p>
          </div>
        ),
      },
    },
    {
      q: {
        en: 'Do you offer a warranty on dental implants?',
        tr: 'Diş implantlarında garanti sunuyor musunuz?',
      },
      a: {
        en: (
          <div>
            <p>Yes. All our premium implant brands (Straumann, DXL, Nucleoss, Megagen) come with official lifetime manufacturer warranties accompanied by international warranty certificates and implant passports.</p>
          </div>
        ),
        tr: (
          <div>
            <p>Evet. Kullandığımız tüm birinci sınıf implant markaları (Straumann, DXL, Nucleoss, Megagen) uluslararası garanti sertifikası ve implant pasaportu ile birlikte ömür boyu üretici garantisine sahiptir.</p>
          </div>
        ),
      },
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className="treatment-container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="treatment-heading-title">
            {locale === 'tr' ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}
          </h2>
          <p className="treatment-text-p text-slate-500 max-w-xl mx-auto">
            {locale === 'tr'
              ? 'Tedavi süreci, konaklama ve implant garantileri hakkında merak edilen tüm detaylar.'
              : 'Clear, transparent answers about treatment timelines, packages, and materials.'}
          </p>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`${styles.item} ${isOpen ? styles.itemActive : ''}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className={styles.questionBtn}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>
                    {locale === 'tr' ? faq.q.tr : faq.q.en}
                  </span>
                  <span className={`${styles.chevron} ${isOpen ? styles.chevronActive : ''}`}>
                    <svg width="12" height="12" viewBox="0 0 448 512" fill="currentColor">
                      <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className={styles.answerBox}>
                    {locale === 'tr' ? faq.a.tr : faq.a.en}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
