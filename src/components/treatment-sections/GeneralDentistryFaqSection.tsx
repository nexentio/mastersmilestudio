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

const FAQ_I18N: Record<string, FaqDictionary> = {
  en: {
    title: 'Frequently Asked Questions About This Treatment',
    subtitle:
      'Have questions about this treatment? You’re not alone. From treatment timelines to costs and recovery, we’re here to guide you with clear answers, expert advice, and personalized support at every step.',
    items: [
      {
        id: 'faq-1',
        q: 'Will my treatment plan or the price you gave me change when I arrive?',
        a: [
          'Good question. Unfortunately, many patients who travel for their treatment face unethical practices in clinics they prefer such as getting bullied about surprise charges by clinics.',
          'The plan and price we share with you are carefully prepared based on the photos, X-rays, or details and your expectations that you send us before your trip. When you arrive, we simply confirm everything in person with an examination before beginning your treatment.',
          'Sometimes, however, a small detail that could not be seen in the photos or x-rays may show up during the clinic examination. For example, this might be the need to reinforce your bone tissue with grafting and sinus lifting procedure. Unlike most clinics that deal with international patients, the pricing and the possibility of these details are transparently shared with you in your treatment plan.',
          'If that happens, we will explain it clearly, show you the issue, and discuss all the options with you before making any changes. Nothing is ever done without your agreement.',
          'Your treatment plan and price will stay the same unless we discover something new during your check-up. Even then, we’ll decide together with you about your options before moving forward with any treatments.',
        ],
      },
      {
        id: 'faq-2',
        q: 'Will you help me with accommodation?',
        a: [
          'Yes, of course. Our patients regularly travel from abroad, so we make sure you feel supported not only with your dental treatment but also with your stay in Antalya. We can recommend trusted hotels close to our clinic, and if you prefer, we can also help arrange your booking.',
          'Our goal is to make your trip as smooth and stress-free as possible, so you can focus on your treatment and enjoy your time in the city. We’ll gladly assist you with accommodation and make sure you have comfortable options during your visit.',
        ],
      },
      {
        id: 'faq-3',
        q: 'Is it safe to travel to Turkey?',
        a: [
          'Yes! Turkey is a very popular destination for international visitors and millions of tourists travel here safely every year. Cities like Antalya are not only cultural and historical centers but also well-prepared to welcome patients from abroad with modern clinics, hotels, and transport services and many world-renowned touristic attractions.',
          'Like in any big city, it’s always wise to take normal travel precautions — such as keeping your valuables safe and being aware of your surroundings. Our clinic also helps arrange trusted transportation and accommodation options to make sure you feel comfortable and secure during your stay. With the extra support we provide, your dental trip can also be a smooth and worry-free experience.',
        ],
      },
      {
        id: 'faq-4',
        q: 'I have bad breath. Can gum disease cause bad breath?',
        a: [
          'Unfortunately yes, it can. Gum problems often mean there is a build-up of bacteria and tartar under the gums. These bacteria release odors when they feed on the food particles left inside your mouth, which can lead to persistent bad breath. Infections or gum disease can make this even stronger.',
          'The good news is that with proper treatment and good oral care, it will improve quickly. Regular dental cleanings, brushing, flossing, and treating any gum issues are the key to keeping your breath fresh.',
        ],
      },
      {
        id: 'faq-5',
        q: 'Do you support online payments?',
        a: [
          'Our clinic offers a variety of payment options designed to meet the needs of our patients.',
          'For more detailed information, please feel free to contact us.',
        ],
      },
      {
        id: 'faq-6',
        q: 'Does your packages include hotels and transfers?',
        a: [
          'The contents of our packages may vary depending on the selected treatment.',
          'To find out the most suitable option for you, please feel free to contact us.',
        ],
      },
      {
        id: 'faq-7',
        q: 'Can I pay my treatment/package fees in installments?',
        a: [
          'In our clinic, we offer various payment options for treatment and package fees.',
          'For detailed information about installment plans, please contact us.',
        ],
      },
      {
        id: 'faq-8',
        q: 'Do you offer warranty or insurance?',
        a: [
          'All treatments in our clinic are covered by a guarantee within the specified periods and conditions.',
          'For more detailed information, please feel free to contact us.',
        ],
      },
      {
        id: 'faq-9',
        q: 'What is gummy smile and how is it treated?',
        a: [
          'A gummy smile is when too much of the gums show when you smile. There are several ways to treat it depending on the case.',
          'The good news is that there are safe and effective treatments. Sometimes a reshaping of the gums (gingivectomy) is enough to make the teeth look longer and the smile more balanced. In other cases, treatments like crown lengthening, Botox, or orthodontic adjustments may be recommended.',
        ],
      },
      {
        id: 'faq-10',
        q: 'What is the difference between deep cleaning (scaling) and curettage?',
        a: [
          'A deep cleaning (also called scaling) removes tartar and plaque from above and just below the gumline. It’s usually enough when gum problems are mild and there isn’t too much damage yet.',
          'Curettage, on the other hand, is needed when gum disease has reached an advanced stage. In this treatment, the dentist cleans much deeper under the gums, removing infected tissue and bacteria from the pockets that have formed around the teeth. This helps the gums heal and reattach more firmly to the teeth.',
          'Both treatments are used to clean the teeth and gums, but they are chosen for different stages of gum disease. If the patient has gum disease, these procedures need to be completed before further treatments can take place.',
        ],
      },
      {
        id: 'faq-11',
        q: 'What is flap surgery? Why and when is it preferred?',
        a: [
          'A flap operation is a type of gum treatment used when regular cleaning is no longer enough. In this procedure, your periodontologist gently lifts the gum tissue to clean deep areas around the tooth roots, removing bacteria and tartar that can’t be reached otherwise. After cleaning, the gum is placed back so it can heal in a healthier position.',
          'This treatment is usually needed in advanced gum disease, especially when deep “pockets” have formed between the teeth and gums. If left untreated, these pockets can cause ongoing infection, loose teeth that swing in your mouth, and even tooth loss.',
        ],
      },
      {
        id: 'faq-12',
        q: 'Can patients with gum recession have teeth whitening?',
        a: [
          'Before teeth whitening, your dentist will check the condition of your gums and teeth to make sure it’s safe for you. It is not recommended to receive whitening treatment on receding gums. If whitening isn’t the best option for you according to your case, we’ll discuss alternative options for a brighter smile.',
        ],
      },
      {
        id: 'faq-13',
        q: 'Does teeth whitening damage my teeth?',
        a: [
          'When whitening is done professionally and under a dentist’s supervision, it does not harm your teeth. The whitening products we use are designed to clean stains from the enamel without weakening or removing it.',
          'Some patients may feel a little temporary sensitivity after whitening, but this usually goes away within a few days and does not cause any permanent damage. Using special toothpaste for sensitivity and avoiding very hot or cold foods during this time can help.',
          'Professional whitening is safe for your teeth, and any sensitivity afterwards is temporary.',
        ],
      },
      {
        id: 'faq-14',
        q: 'After teeth whitening (dental bleaching), how long do I need to be careful with what I eat and drink?',
        a: [
          'Right after whitening, your teeth are more sensitive to staining. For the first 48 hours, it’s very important to avoid foods and drinks that can leave color — like coffee, tea, red wine, dark sauces, berries, or smoking. Think of it as a “white diet”: water, milk, rice, chicken, yogurt, and light-colored foods are the safest choices during this time.',
          'After those first 2 days, you can slowly return to your normal diet. But the more you limit strong-colored foods and drinks in general, the longer your whitening results will last.',
          'Be extra careful for the first 48 hours, then enjoy your smile while keeping an eye on coloring foods and drinks.',
        ],
      },
      {
        id: 'faq-15',
        q: 'How long does teeth whitening (dental bleaching) last?',
        a: [
          'The effects of whitening are not permanent, but with good care they can last quite a while. On average, most patients enjoy their brighter smile for 1 to 2 years. How long it lasts also heavily depends on your habits. For example, drinking coffee, tea, red wine, or smoking can make the teeth darken again more quickly.',
          'Regular brushing, routine dental cleanings, and avoiding too many staining foods or drinks will help keep the results for longer. Some patients also choose a small “touch-up” session once in a while to maintain their ideal shade.',
        ],
      },
      {
        id: 'faq-16',
        q: 'Can an infected tooth cause bone loss?',
        a: [
          'The short answer is yes. If a tooth infection is left untreated for a long time, it can spread to the surrounding bone. The infection slowly damages the bone tissue that supports your tooth, and over time this may lead to bone loss. This is one of the reasons why infected teeth can eventually become loose or need to be removed and replaced with an implant.',
          'The good news is that if the infection is treated early — with procedures like a root canal, proper cleaning, or sometimes antibiotics — bone loss can usually be prevented. That’s why it’s very important not to ignore pain, swelling, or sensitivity in your teeth.',
          'An untreated infection can cause bone loss, but if your treatment is done in a timely manner, your bone and teeth can be protected.',
        ],
      },
      {
        id: 'faq-17',
        q: 'Can I cover my tooth with gold or another type of jewelry?',
        a: [
          'Yes, it is possible to cover a tooth with gold or add a decorative piece, but it’s not something we recommend for long-term use. While gold is strong and safe, jewelry-style caps are usually chosen for looks rather than health. They don’t always fit as securely as regular crowns, which means food and bacteria can get trapped, leading to problems like cavities or gum issues.',
          'If you’re interested in this type of design, it can be arranged as a special request.',
          'While teeth can be covered with gold or jewelry, regular crowns are healthier and safer for everyday use, so protecting your oral health will always be our top priority.',
        ],
      },
      {
        id: 'faq-18',
        q: 'Does a tooth that already has a filling also need a root canal treatment?',
        a: [
          'Not always. A filling is enough when the decay is only on the surface or “middle” part of the tooth. But if the decay has gone very deep and reached the nerve of the tooth, a root canal is needed to clean out the infection and save the tooth.',
          'In other words, a filling repairs the “outside damage,” while a root canal is only required if the “inside nerve” is affected. We will take an X-ray and check carefully to decide which treatment is best.',
          'A tooth with a filling only needs a root canal if the decay has reached the nerve. Otherwise, the filling alone is enough.',
        ],
      },
      {
        id: 'faq-19',
        q: 'If I’ve already had a root canal, why do I still need a filling? Isn’t the tooth already covered up during the treatment?',
        a: [
          'After a root canal, the inside of your tooth is cleaned and sealed, but the outside still needs to be protected. The procedure leaves the tooth weaker and more fragile than its original state. A filling or crown is placed on top to close the opening and give the tooth strength again, so it doesn’t break or get reinfected.',
          'Think of the root canal as fixing the “inside” of the tooth, while the filling or crown protects the “outside” so you can chew and smile normally. So yes, a filling (or sometimes a crown) is still needed after a root canal to keep the tooth strong and healthy.',
        ],
      },
      {
        id: 'faq-20',
        q: 'Why does my wisdom tooth need to be removed? If it’s an extra tooth, couldn’t I just keep it and use it?',
        a: [
          'Wisdom teeth are the very last teeth to come in, usually in your late teens or early twenties. By that time, most people’s jaws don’t have enough space left for them to grow in properly. Because of this, wisdom teeth often come in at the wrong angle, stay partly under the gum, or push against the other teeth. This can cause pain, swelling, infection, or even damage to nearby teeth.',
          'It’s not that wisdom teeth are “useless” — if they grow in straight and healthy, they can work just like your other teeth. But in most cases, they don’t have the space they need, so keeping them can lead to problems later on. That’s why dentists often recommend removing them before they cause bigger issues.',
          'Wisdom teeth are usually taken out not because they are extra, but because there’s rarely enough room for them to grow and stay in the mouth safely.',
        ],
      },
      {
        id: 'faq-21',
        q: 'Can I safely postpone my dental treatments?',
        a: [
          'Postponing dental treatment is possible, but it is not the safest choice. Dental health issues tend to present themselves without major symptoms and are progressive. Small problems like cavities or gum issues often start out painless. But over time, they can grow and lead to bigger issues such as infections, tooth loss, then bone loss, or the need for more complex treatments.',
          'If your situation isn’t urgent, a short delay may not cause harm. However, the longer you wait, the higher the risk that the problem becomes more serious and costly to fix. More delay means more chances for your oral and dental health to get worse.',
          'It’s best not to delay dental treatment. If you have concerns about timing, consult your dentist. Together you can make a plan that fits your needs.',
        ],
      },
      {
        id: 'faq-22',
        q: 'Why are zirconia crowns recommended for back teeth instead of veneers?',
        a: [
          'Back teeth literally do most of the heavy lifting when you chew, so they need a much stronger material to handle the pressure. Zirconia is very strong, which makes it much less likely to crack or break in the chewing area.',
          'Veneers, on the other hand, are very thin and only cover the front surface of the tooth. While they look beautiful, they are not designed to handle strong bite forces. So if they were to be placed on back teeth, they could easily break after just a few bites.',
          'That’s why veneers are used mainly for front teeth, where the focus is on aesthetics, while zirconia is preferred for the back teeth, where strength and durability are most important.',
        ],
      },
      {
        id: 'faq-23',
        q: 'I didn’t like my teeth color, can I change it after getting them?',
        a: [
          'Yes, you will have a chance to choose your tooth color before the treatment is finalized. We usually tell patients to stay for 7–10 days to take care of this process and decide without rushing, during which you’ll be shown a color chart to help you pick the shade that best matches your skin tone and personal preference.',
          'One important thing to know is this: if the chosen color feels too white or too bright after placement, we can send it back to the lab to make it a little darker later. But if you choose a shade that isn’t white enough, it cannot be lightened further afterwards — that is unfortunately not possible.',
          'That’s why it’s very important to discuss openly with your dentist during the process, so together we can choose the color that will make you happiest and satisfy your expectations.',
        ],
      },
    ],
  },
  tr: {
    title: 'Bu Tedavi Hakkında Sıkça Sorulan Sorular',
    subtitle:
      'Bu tedaviyle ilgili sorularınız mı var? Yalnız değilsiniz. Tedavi sürelerinden maliyetlere ve iyileşme sürecine kadar, her adımda net cevaplar ve uzman desteğiyle yanınızdayız.',
    items: [
      {
        id: 'faq-1',
        q: 'Antalya’ya geldiğimde bana verilen tedavi planı veya fiyat değişir mi?',
        a: [
          'Harika bir soru. Ne yazık ki, sağlık turizmi için seyahat eden birçok hasta, sonradan çıkarılan sürpriz ücretlerle karşılaşmaktadır.',
          'Sizinle paylaştığımız plan ve fiyat; seyahatiniz öncesinde bize ilettiğiniz fotoğraflar, panoramik röntgenler ve beklentileriniz doğrultusunda titizlikle hazırlanır. Geldiğinizde, tedaviye başlamadan önce klinik muayeneyle tüm detayları teyit ederiz.',
          'Ancak bazen röntgende görünmeyen gizli bir kök enfeksiyonu veya kemik grefti/sinüs lifting gereksinimi gibi detaylar klinik muayenede tespit edilebilir. Bu olasılıklar ve fiyatlandırması tedavi planınızda önceden şeffafça paylaşılır.',
          'Böyle bir durum oluşursa, işlem yapılmadan önce size açıkça gösterilir, tüm alternatifler konuşulur ve onayınız olmadan asla ek işlem yapılmaz.',
          'Muayenede öngörülemeyen yeni bir bulgu çıkmadığı sürece tedavi planınız ve fiyatınız %100 sabit kalır.',
        ],
      },
      {
        id: 'faq-2',
        q: 'Konaklama konusunda yardımcı oluyor musunuz?',
        a: [
          'Evet, elbette. Uluslararası hastalarımızın büyük bir kısmı yurt dışından geldiği için sadece diş tedavinizde değil, Antalya’daki konaklamanızda da tam destek sağlıyoruz. Kliniğimize yakın anlaşmalı 4 ve 5 yıldızlı otelleri rezerve edebiliyoruz.',
          'Amacımız seyahatinizi tamamen konforlu ve stressiz hale getirmektir.',
        ],
      },
      {
        id: 'faq-3',
        q: 'Türkiye’ye seyahat etmek güvenli mi?',
        a: [
          'Evet! Türkiye her yıl milyonlarca turistin güvenle ziyaret ettiği dünyanın en popüler destinasyonlarından biridir. Antalya, modern klinikleri, lüks otelleri ve gelişmiş ulaşım ağıyla sağlık turistlerini en yüksek standartlarda ağırlar.',
          'Kliniğimiz ayrıca özel VIP transfer ve konaklama hizmetleri organize ederek tüm seyahatinizi güvenli ve konforlu kılar.',
        ],
      },
      {
        id: 'faq-4',
        q: 'Ağız kokum var. Diş eti hastalığı ağız kokusuna neden olur mu?',
        a: [
          'Maalesef evet. Diş eti problemleri, diş etlerinin altında biriken bakteri ve diş taşlarının koku üretmesinden kaynaklanır.',
          'İyi haber şu ki, profesyonel diş taşı temizliği (detertraj & Air-Flow) ve diş eti tedavisiyle ağız kokusu çok hızlı bir şekilde tamamen ortadan kalkar.',
        ],
      },
      {
        id: 'faq-5',
        q: 'Online ödeme ve kredi kartı destekliyor musunuz?',
        a: [
          'Kliniğimizde hastalarımızın kolaylığı için kredi kartı, banka havalesi ve nakit dahil olmak üzere çeşitli ödeme seçenekleri sunulmaktadır.',
          'Detaylı bilgi için hasta temsilcimizle iletişime geçebilirsiniz.',
        ],
      },
      {
        id: 'faq-6',
        q: 'Paketlerinize otel ve transfer dahil mi?',
        a: [
          'Paket içeriklerimiz seçilen tedaviye göre değişmektedir. Geniş kapsamlı tedavilerde 4-5 yıldızlı otel konaklaması ve VIP havalimanı transferleri paketlerimize dahil olarak sunulmaktadır.',
        ],
      },
      {
        id: 'faq-7',
        q: 'Tedavi ücretlerini taksitle ödeyebilir miyim?',
        a: [
          'Kliniğimizde tedavi aşamalarına göre esnek ödeme planları sunulmaktadır. Detaylı bilgi için lütfen bizimle iletişime geçin.',
        ],
      },
      {
        id: 'faq-8',
        q: 'Garanti veya sigorta sunuyor musunuz?',
        a: [
          'Kliniğimizdeki tüm implant ve protetik tedaviler, uluslararası sertifikalı malzemelerle yapılmakta olup resmi garanti kapsamındadır.',
        ],
      },
      {
        id: 'faq-9',
        q: 'Gummy smile (diş eti gülüşü) nedir ve nasıl tedavi edilir?',
        a: [
          'Gummy smile, güldüğünüzde diş etlerinin gereğinden fazla görünmesidir. Gingivektomi (lazerle diş eti şekillendirme), kron boyu uzatma veya botoks enjeksiyonlarıyla diş etleri dakikalar içinde dengeli bir görünüme kavuşturulur.',
        ],
      },
      {
        id: 'faq-10',
        q: 'Diş taşı temizliği (detertraj) ile küretaj arasındaki fark nedir?',
        a: [
          'Diş taşı temizliği diş eti çizgisinin üzerindeki ve hemen altındaki tartarları temizler. Küretaj ise derin diş eti ceplerindeki iltihaplı dokuların ve bakterilerin mikroskop altında derinlemesine temizlenmesidir.',
        ],
      },
      {
        id: 'faq-11',
        q: 'Flep operasyonu nedir? Neden ve ne zaman tercih edilir?',
        a: [
          'İleri derece diş eti çekilmesi ve kemik kaybı olan durumlarda diş eti cerrahi olarak aralanıp kök yüzeyleri tamamen temizlenir ve kemik tozu ile desteklenir.',
        ],
      },
      {
        id: 'faq-12',
        q: 'Diş eti çekilmesi olan hastalara diş beyazlatma yapılabilir mi?',
        a: [
          'Diş eti çekilmesi olan bölgelerde açığa çıkan kök yüzeyleri beyazlatma jeline karşı hassas olabilir. Hekimimiz öncelikle diş eti hassasiyetini tedavi eder veya alternatif estetik çözümler sunar.',
        ],
      },
      {
        id: 'faq-13',
        q: 'Diş beyazlatma dişlerime zarar verir mi?',
        a: [
          'Profesyonel klinik tipi beyazlatma diş minesine kesinlikle zarar vermez. Uygulanan jeller mineyi aşındırmadan yalnızca gözeneklerdeki renk pigmentlerini parçalar.',
        ],
      },
      {
        id: 'faq-14',
        q: 'Beyazlatma sonrası nelere dikkat etmeliyim?',
        a: [
          'İlk 48 saat boyunca kahve, çay, kırmızı şarap, salçalı yemekler ve sigara gibi renklendirici maddelerden uzak durulmalı; "beyaz diyet" uygulanmalıdır.',
        ],
      },
      {
        id: 'faq-15',
        q: 'Diş beyazlatmanın etkisi ne kadar sürer?',
        a: [
          'Ortalama olarak beyazlık 1 ila 2 yıl boyunca kalıcılığını korur. Düzenli bakım ve yılda bir yapılacak kısa bir pekiştirme seansıyla bu süre çok daha uzatılabilir.',
        ],
      },
      {
        id: 'faq-16',
        q: 'İltihaplı bir diş kemik kaybına yol açar mı?',
        a: [
          'Evet. Tedavi edilmeyen kök ucu enfeksiyonları çene kemiğine yayılarak kemik erimesine sebep olabilir. Kanal tedavisi ile enfeksiyon kurutulduğunda kemik dokusu kendini onarır.',
        ],
      },
      {
        id: 'faq-17',
        q: 'Dişime altın kaplama veya pırlanta/takı yaptırabilir miyim?',
        a: [
          'Özel estetik istekler doğrultusunda altın kaplama veya diş pırlantası uygulanabilmektedir. Ancak diş sağlığının korunması her zaman önceliğimizdir.',
        ],
      },
      {
        id: 'faq-18',
        q: 'Dolgulu bir dişe de kanal tedavisi gerekir mi?',
        a: [
          'Dolgu dişin dış kısmını onarır. Ancak çürük zamanla dişin içindeki canlı sinir dokusuna (pulpaya) ulaşmışsa kanal tedavisi zorunlu hale gelir.',
        ],
      },
      {
        id: 'faq-19',
        q: 'Kanal tedavisi yapıldıktan sonra neden tekrar dolgu gerekir?',
        a: [
          'Kanal tedavisi dişin içindeki enfeksiyonu temizler ve kanalları doldurur. Dişin çiğneme fonksiyonunu kazanması ve kırılmaması için üst yapısına estetik dolgu veya porselen onley uygulanır.',
        ],
      },
      {
        id: 'faq-20',
        q: '20\'lik yaş dişim neden çekilmeli?',
        a: [
          'Çoğu insanda çene kemiğinde 20\'lik dişler için yeterli yer bulunmaz. Yan yatan veya gömülü kalan 20\'lik dişler komşu dişleri çürütebilir veya çene kistlerine yol açabilir.',
        ],
      },
      {
        id: 'faq-21',
        q: 'Diş tedavilerimi ertelemek güvenli midir?',
        a: [
          'Diş problemleri kendiliğinden geçmez ve ilerleyicidir. Küçük bir dolguyla kurtarılabilecek diş, ertelendiğinde kanal tedavisi veya çekim gerektirebilir.',
        ],
      },
      {
        id: 'faq-22',
        q: 'Arka dişlerde neden lamine yerine zirkonyum kaplama önerilir?',
        a: [
          'Arka azı dişleri çiğneme sırasında tonlarca basınca maruz kalır. Zirkonyum kırılmaya karşı olağanüstü dayanıklıdır, lamine yaprak porselen ise ön diş estetiği için uygundur.',
        ],
      },
      {
        id: 'faq-23',
        q: 'Dişlerimin rengini beğenmezsem sonradan değiştirebilir miyim?',
        a: [
          'Kalıcı yapıştırma öncesinde prova seansında renk ve form onayınız alınır. Renk tonu beğenilmezse laboratuvarda fırınlama ile koyulaştırılabilir.',
        ],
      },
    ],
  },
  de: {
    title: 'Häufig gestellte Fragen zu dieser Behandlung',
    subtitle:
      'Haben Sie Fragen zu Ihrer Zahnbehandlung in Antalya? Wir bieten Ihnen klare, transparente und fachlich fundierte Antworten für jeden Schritt.',
    items: [
      {
        id: 'faq-1',
        q: 'Ändert sich mein Behandlungsplan oder der Preis bei meiner Ankunft?',
        a: [
          'Gute Frage. Der vorab erstellte Kostenvoranschlag basiert auf Ihren Röntgenbildern und Fotos und bleibt zu 100 % verbindlich.',
          'Sollte bei der klinischen Untersuchung vor Ort ein unvorhergesehenes Detail auffallen, besprechen wir alle Optionen transparent mit Ihnen vor Behandlungsbeginn.',
        ],
      },
      {
        id: 'faq-2',
        q: 'Unterstützen Sie mich bei der Unterkunft?',
        a: [
          'Ja, selbstverständlich. Wir unterstützen Sie bei der Buchung von Partnerhotels in direkter Kliniknähe und organisieren VIP-Transfers.',
        ],
      },
      {
        id: 'faq-3',
        q: 'Ist es sicher, für eine Zahnbehandlung in die Türkei zu reisen?',
        a: [
          'Ja! Antalya ist ein weltweites Zentrum des Medizintourismus mit modernsten Kliniken, höchsten Hygienestandards und internationaler Betreuung.',
        ],
      },
      {
        id: 'faq-4',
        q: 'Kann Zahnfleischerkrankung Mundgeruch verursachen?',
        a: [
          'Ja. Bakterien in Zahnfleischtaschen sind die Hauptursache. Professionelle Zahnreinigung beseitigt Mundgeruch dauerhaft.',
        ],
      },
      {
        id: 'faq-5',
        q: 'Werden Online- und Kartenzahlungen unterstützt?',
        a: [
          'Ja, wir akzeptieren gängige Kreditkarten, Banküberweisungen und Barzahlungen vor Ort.',
        ],
      },
      {
        id: 'faq-6',
        q: 'Beinhalten Ihre Pakete Hotel und Transfers?',
        a: [
          'Je nach Umfang des Behandlungsplans sind 4- bis 5-Sterne-Hotels und private VIP-Flughafentransfers komplett inklusive.',
        ],
      },
      {
        id: 'faq-7',
        q: 'Sind Ratenzahlungen möglich?',
        a: [
          'Wir bieten flexible Zahlungsmöglichkeiten je nach Behandlungsphase an. Kontaktieren Sie uns für Details.',
        ],
      },
      {
        id: 'faq-8',
        q: 'Gibt es Garantien auf Behandlungen?',
        a: [
          'Ja, alle Implantate und prothetischen Versorgungen verfügen über offizielle internationale Zertifikate und Garantien.',
        ],
      },
      {
        id: 'faq-9',
        q: 'Was ist ein Gummy Smile und wie wird es behandelt?',
        a: [
          'Ein Zahnfleischlächeln kann durch sanfte Laserkorrektur (Gingivektomie) oder Kronenverlängerung harmonisiert werden.',
        ],
      },
      {
        id: 'faq-10',
        q: 'Was ist der Unterschied zwischen Zahnreinigung und Kürettage?',
        a: [
          'Die Zahnreinigung säubert oberflächlichen Zahnstein; die Kürettage reinigt tiefe entzündete Zahnfleischtaschen.',
        ],
      },
      {
        id: 'faq-11',
        q: 'Was ist eine Parodontal-Lappenoperation?',
        a: [
          'Bei fortgeschrittenem Knochenabbau wird das Zahnfleisch schonend geöffnet, um die Zahnwurzeln tiefgreifend zu reinigen.',
        ],
      },
      {
        id: 'faq-12',
        q: 'Ist Bleaching bei Zahnfleischrückgang möglich?',
        a: [
          'Freiliegende Zahnhälse erfordern eine Vorbehandlung, um Empfindlichkeiten beim Bleaching auszuschließen.',
        ],
      },
      {
        id: 'faq-13',
        q: 'Schadet professionelles Bleaching den Zähnen?',
        a: [
          'Nein. Das medizinische Gel greift den Zahnschmelz nicht an, sondern löst nur Farbpartikel auf.',
        ],
      },
      {
        id: 'faq-14',
        q: 'Worauf muss nach dem Bleaching geachtet werden?',
        a: [
          'In den ersten 48 Stunden sollte auf färbende Lebensmittel (Kaffee, Tee, Rotwein) verzichtet werden.',
        ],
      },
      {
        id: 'faq-15',
        q: 'Wie lange hält das Bleaching-Ergebnis?',
        a: [
          'In der Regel 1 bis 2 Jahre, abhängig von Mundhygiene und Konsumgewohnheiten.',
        ],
      },
      {
        id: 'faq-16',
        q: 'Kann ein entzündeter Zahn zu Knochenverlust führen?',
        a: [
          'Ja, unbehandelte Wurzelinfektionen können den Kieferknochen schädigen. Eine Wurzelbehandlung stoppt dies.',
        ],
      },
      {
        id: 'faq-17',
        q: 'Können Zähne mit Goldschmuck verziert werden?',
        a: [
          'Ja, individuelle Wünsche wie Zahnschmuck oder Goldkronen sind auf Anfrage möglich.',
        ],
      },
      {
        id: 'faq-18',
        q: 'Braucht ein gefüllter Zahn irgendwann eine Wurzelbehandlung?',
        a: [
          'Nur wenn Karies bis zum Zahnnerv vorgedrungen ist. Ansonsten genügt eine Erneuerung der Füllung.',
        ],
      },
      {
        id: 'faq-19',
        q: 'Warum benötigt ein Zahn nach der Wurzelbehandlung eine Füllung?',
        a: [
          'Um den Zahn hermetisch zu versiegeln und die Kaukraft dauerhaft wiederherzustellen.',
        ],
      },
      {
        id: 'faq-20',
        q: 'Warum müssen Weisheitszähne oft entfernt werden?',
        a: [
          'Häufig fehlt im Kiefer der Platz, was zu Entzündungen, Engstand oder Nachbarzahnschäden führt.',
        ],
      },
      {
        id: 'faq-21',
        q: 'Kann ich Zahnbehandlungen sicher aufschieben?',
        a: [
          'Karies und Zahnfleischerkrankungen schreiten fort. Eine frühe Behandlung spart Kosten und erhält die Zahnsubstanz.',
        ],
      },
      {
        id: 'faq-22',
        q: 'Warum Zirkonkronen statt Veneers für Backenzähne?',
        a: [
          'Backenzähne tragen immense Kaukraft. Zirkonium bietet die notwendige Bruchfestigkeit.',
        ],
      },
      {
        id: 'faq-23',
        q: 'Kann die Zahnfarbe nach der Anfertigung geändert werden?',
        a: [
          'Vor dem finalen Einsetzen erfolgt eine Anprobe. Eine Nuancen-Anpassung im Labor ist vor dem Einkleben möglich.',
        ],
      },
    ],
  },
  pl: {
    title: 'Najczęściej zadawane pytania dotyczące tego leczenia',
    subtitle:
      'Masz pytania dotyczące leczenia stomatologicznego w Antalyi? Odpowiadamy na wszystkie kwestie dotyczące kosztów, przebiegu i rekonwalescencji.',
    items: [
      {
        id: 'faq-1',
        q: 'Czy plan leczenia lub cena ulegną zmianie po moim przyjeździe?',
        a: [
          'Nasz kosztorys przygotowany na podstawie zdjęć RTG jest stały i przejrzysty. Ewentualne dodatkowe potrzeby są omawiane przed rozpoczęciem zabiegu.',
        ],
      },
      {
        id: 'faq-2',
        q: 'Czy pomagacie w organizacji zakwaterowania?',
        a: [
          'Tak, pomagamy w rezerwacji sprawdzonych hoteli blisko kliniki oraz zapewniamy transfery VIP.',
        ],
      },
      {
        id: 'faq-3',
        q: 'Czy podróż do Turcji na leczenie jest bezpieczna?',
        a: [
          'Tak, Antalya to renomowane europejskie centrum turystyki medycznej o najwyższych standardach bezpieczeństwa.',
        ],
      },
      {
        id: 'faq-4',
        q: 'Czy choroby dziąseł mogą powodować nieświeży oddech?',
        a: [
          'Tak. Profesjonalne usunięcie kamienia nazębnego i leczenie dziąseł całkowicie eliminuje ten problem.',
        ],
      },
      {
        id: 'faq-5',
        q: 'Jakie formy płatności są akceptowane?',
        a: [
          'Akceptujemy karty płatnicze, przelewy bankowe oraz płatności gotówkowe.',
        ],
      },
      {
        id: 'faq-6',
        q: 'Czy pakiety zawierają hotel i transfery?',
        a: [
          'Większość kompleksowych pakietów obejmuje pobyt w hotelu 4-5* i transfery z lotniska.',
        ],
      },
      {
        id: 'faq-7',
        q: 'Czy dostępne są płatności ratalne?',
        a: [
          'Oferujemy elastyczne plany płatności etapowych. Skontaktuj się z nami, aby poznać szczegóły.',
        ],
      },
      {
        id: 'faq-8',
        q: 'Czy leczenie objęte jest gwarancją?',
        a: [
          'Tak, wszystkie implanty i korony posiadają międzynarodowe certyfikaty i gwarancję pisemną.',
        ],
      },
      {
        id: 'faq-9',
        q: 'Co to jest uśmiech dziąsłowy (gummy smile)?',
        a: [
          'To nadmierna widoczność dziąseł podczas uśmiechu, korygowana laserową plastyką dziąseł.',
        ],
      },
      {
        id: 'faq-10',
        q: 'Czym różni się skaling od kiretażu?',
        a: [
          'Skaling usuwa kamień naddziąsłowy, kiretaż oczyszcza głębokie kieszonki przyzębne.',
        ],
      },
      {
        id: 'faq-11',
        q: 'Co to jest operacja płatowa?',
        a: [
          'To mikrochirurgiczne oczyszczenie korzeni zębów przy zaawansowanej paradontozie.',
        ],
      },
      {
        id: 'faq-12',
        q: 'Czy można wybielać zęby przy recesji dziąseł?',
        a: [
          'Wymaga to uprzedniej konsultacji i zabezpieczenia wrażliwych szyjek zębowych.',
        ],
      },
      {
        id: 'faq-13',
        q: 'Czy wybielanie niszczy szkliwo?',
        a: [
          'Profesjonalne wybielanie pod okiem stomatologa jest w 100% bezpieczne dla szkliwa.',
        ],
      },
      {
        id: 'faq-14',
        q: 'Czego unikać po wybielaniu zębów?',
        a: [
          'Przez 48 godzin zalecana jest tzw. biała dieta (bez kawy, herbaty, czerwonego wina).',
        ],
      },
      {
        id: 'faq-15',
        q: 'Jak długo utrzymuje się efekt wybielania?',
        a: [
          'Średnio od 1 do 2 lat, w zależności od nawyków higienicznych i diety.',
        ],
      },
      {
        id: 'faq-16',
        q: 'Czy infekcja zęba może niszczyć kość?',
        a: [
          'Tak, nieleczona infekcja prowadzi do zaniku kości. Leczenie kanałowe ratuje ząb i kość.',
        ],
      },
      {
        id: 'faq-17',
        q: 'Czy wykonujecie korony złote lub biżuterię nazębną?',
        a: [
          'Tak, realizujemy indywidualne projekty estetyczne na życzenie pacjenta.',
        ],
      },
      {
        id: 'faq-18',
        q: 'Kiedy ząb z plombą wymaga leczenia kanałowego?',
        a: [
          'Gdy próchnica dotrze do miazgi i nerwu zęba.',
        ],
      },
      {
        id: 'faq-19',
        q: 'Dlaczego po leczeniu kanałowym potrzebna jest odbudowa?',
        a: [
          'Aby przywrócić zębowi wytrzymałość mechaniczną i zapobiec jego złamaniu.',
        ],
      },
      {
        id: 'faq-20',
        q: 'Dlaczego zęby mądrości wymagają ekstrakcji?',
        a: [
          'Z powodu braku miejsca w łuku, stłoczeń i ryzyka uszkodzenia sąsiednich zębów.',
        ],
      },
      {
        id: 'faq-21',
        q: 'Czy bezpiecznie jest odkładać leczenie stomatologiczne?',
        a: [
          'Nieleczona próchnica postępuje i może wymagać bardziej skomplikowanych zabiegów.',
        ],
      },
      {
        id: 'faq-22',
        q: 'Dlaczego na zęby boczne zaleca się cyrkon, a nie licówki?',
        a: [
          'Cyrkon wytrzymuje potężne siły żucia, licówki przeznaczone są do strefy estetycznej.',
        ],
      },
      {
        id: 'faq-23',
        q: 'Czy można zmienić kolor zębów po ich przymiarce?',
        a: [
          'Tak, przed ostatecznym zacementowaniem kolor jest weryfikowany z pacjentem.',
        ],
      },
    ],
  },
  pt: {
    title: 'Perguntas Frequentes Sobre Este Tratamento',
    subtitle:
      'Tem dúvidas sobre o seu tratamento dentário em Antalya? Respondemos de forma clara e transparente a todas as suas questões.',
    items: [
      {
        id: 'faq-1',
        q: 'O meu plano de tratamento ou orçamento mudará à chegada?',
        a: [
          'O plano e preço enviados baseiam-se nos seus exames e são mantidos com total transparência sem custos surpresa.',
        ],
      },
      {
        id: 'faq-2',
        q: 'Ajudam com a reserva de alojamento?',
        a: [
          'Sim, temos parceria com hotéis de 4 e 5 estrelas próximos da clínica e organizamos transfers VIP.',
        ],
      },
      {
        id: 'faq-3',
        q: 'É seguro viajar para a Turquia para tratamento dentário?',
        a: [
          'Sim, Antalya é um dos principais destinos mundiais com infraestruturas hospitalares de topo.',
        ],
      },
      {
        id: 'faq-4',
        q: 'Problemas nas gengivas causam mau hálito?',
        a: [
          'Sim, a acumulação bacteriana nas gengivas é a causa principal. A destartarização profissional resolve o problema.',
        ],
      },
      {
        id: 'faq-5',
        q: 'Aceitam pagamentos online e cartões?',
        a: [
          'Sim, aceitamos cartões de crédito, transferências e pagamentos no local.',
        ],
      },
      {
        id: 'faq-6',
        q: 'Os pacotes incluem hotel e transporte?',
        a: [
          'Sim, a maioria dos nossos pacotes inclui alojamento e transporte exclusivo.',
        ],
      },
      {
        id: 'faq-7',
        q: 'Posso pagar em fases?',
        a: [
          'Oferecemos planos de pagamento faseados de acordo com o progresso clínico.',
        ],
      },
      {
        id: 'faq-8',
        q: 'Oferecem garantia nos tratamentos?',
        a: [
          'Sim, todos os implantes e próteses têm garantia oficial por escrito.',
        ],
      },
      {
        id: 'faq-9',
        q: 'O que é o sorriso gengival e como se trata?',
        a: [
          'É o excesso de gengiva ao sorrir, corrigido com gengivoplastia a laser ou toxina botulínica.',
        ],
      },
      {
        id: 'faq-10',
        q: 'Qual a diferença entre destartarização e curetagem?',
        a: [
          'A destartarização limpa a superfície; a curetagem trata bolsas periodontais profundas.',
        ],
      },
      {
        id: 'faq-11',
        q: 'O que é cirurgia de retalho gengival?',
        a: [
          'Procedimento cirúrgico para limpar raízes e regenerar osso em periodontite avançada.',
        ],
      },
      {
        id: 'faq-12',
        q: 'Posso branquear dentes com recessão gengival?',
        a: [
          'Requer avaliação prévia para proteger as raízes expostas de sensibilidade.',
        ],
      },
      {
        id: 'faq-13',
        q: 'O branqueamento dentário danifica o esmalte?',
        a: [
          'Não, o branqueamento clínico profissional é 100% seguro para a estrutura dentária.',
        ],
      },
      {
        id: 'faq-14',
        q: 'Cuidados após o branqueamento dentário?',
        a: [
          'Evitar café, chá e alimentos com corantes fortes durante as primeiras 48 horas.',
        ],
      },
      {
        id: 'faq-15',
        q: 'Quanto tempo dura o branqueamento?',
        a: [
          'Normalmente entre 1 e 2 anos, dependendo da higiene e hábitos alimentares.',
        ],
      },
      {
        id: 'faq-16',
        q: 'Uma infeção dentária pode causar perda de osso?',
        a: [
          'Sim, mas a desvitalização atempada elimina a infeção e protege o osso alveolar.',
        ],
      },
      {
        id: 'faq-17',
        q: 'Posso colocar joias dentárias ou coroas de ouro?',
        a: [
          'Sim, realizamos personalizações estéticas a pedido do paciente.',
        ],
      },
      {
        id: 'faq-18',
        q: 'Um dente restaurado pode precisar de desvitalização?',
        a: [
          'Apenas se a cárie tiver atingido o nervo do dente.',
        ],
      },
      {
        id: 'faq-19',
        q: 'Porque é necessária uma restauração após desvitalização?',
        a: [
          'Para selar o dente e devolver-lhe a resistência mastigatória.',
        ],
      },
      {
        id: 'faq-20',
        q: 'Porque devem ser extraídos os dentes do siso?',
        a: [
          'Por falta de espaço na mandíbula, infeções recorrentes ou desalinhamento dentário.',
        ],
      },
      {
        id: 'faq-21',
        q: 'Posso adiar os meus tratamentos dentários?',
        a: [
          'Problemas dentários são progressivos; tratar cedo preserva o dente e reduz custos.',
        ],
      },
      {
        id: 'faq-22',
        q: 'Porquê coroas de zircónia nos molares em vez de facetas?',
        a: [
          'A zircónia suporta as elevadas cargas de mastigação dos dentes posteriores.',
        ],
      },
      {
        id: 'faq-23',
        q: 'Posso ajustar a cor dos dentes antes da cimentação?',
        a: [
          'Sim, a cor e a forma são validadas consigo na sessão de prova clínica.',
        ],
      },
    ],
  },
  es: {
    title: 'Preguntas Frecuentes Sobre Este Tratamiento',
    subtitle:
      '¿Tiene dudas sobre su tratamiento dental en Antalya? Le ofrecemos respuestas claras y asesoramiento experto en cada paso.',
    items: [
      {
        id: 'faq-1',
        q: '¿Cambiará mi plan de tratamiento o el presupuesto al llegar?',
        a: [
          'Su presupuesto inicial se basa en radiografías y se mantiene sin costes sorpresa ni modificaciones imprevistas.',
        ],
      },
      {
        id: 'faq-2',
        q: '¿Me ayudarán con el alojamiento?',
        a: [
          'Sí, gestionamos hoteles asociados de 4 y 5 estrellas y traslados privados VIP.',
        ],
      },
      {
        id: 'faq-3',
        q: '¿Es seguro viajar a Turquía para un tratamiento dental?',
        a: [
          'Totalmente. Antalya es un referente mundial de turismo médico con estándares de primer nivel.',
        ],
      },
      {
        id: 'faq-4',
        q: '¿La enfermedad periodontal causa mal aliento?',
        a: [
          'Sí. La limpieza profunda y el tratamiento periodontal eliminan la causa de raíz.',
        ],
      },
      {
        id: 'faq-5',
        q: '¿Aceptan pagos con tarjeta y transferencias?',
        a: [
          'Sí, ofrecemos múltiples métodos de pago para su comodidad.',
        ],
      },
      {
        id: 'faq-6',
        q: '¿Sus paquetes incluyen hotel y traslados?',
        a: [
          'La mayoría de nuestros paquetes incluyen estancia en hotel y transporte VIP.',
        ],
      },
      {
        id: 'faq-7',
        q: '¿Se puede pagar a plazos?',
        a: [
          'Disponemos de opciones de pago flexibles según las fases del tratamiento.',
        ],
      },
      {
        id: 'faq-8',
        q: '¿Ofrecen garantía en los tratamientos?',
        a: [
          'Todos nuestros implantes y prótesis cuentan con garantía oficial certificada.',
        ],
      },
      {
        id: 'faq-9',
        q: '¿Qué es la sonrisa gingival y cómo se trata?',
        a: [
          'Es el exceso de encía al sonreír, corregible con gingivectomía láser o toxina botulínica.',
        ],
      },
      {
        id: 'faq-10',
        q: '¿Diferencia entre limpieza dental y curetaje?',
        a: [
          'La limpieza elimina el sarro superficial; el curetaje limpia bolsas periodontales profundas.',
        ],
      },
      {
        id: 'faq-11',
        q: '¿Qué es la cirugía a colgajo periodontal?',
        a: [
          'Intervención para desinfectar raíces y regenerar hueso en periodontitis severa.',
        ],
      },
      {
        id: 'faq-12',
        q: '¿Se puede blanquear con encías retraídas?',
        a: [
          'Requiere aislamiento previo para evitar sensibilidad en las raíces descubiertas.',
        ],
      },
      {
        id: 'faq-13',
        q: '¿El blanqueamiento daña los dientes?',
        a: [
          'No, el blanqueamiento clínico supervisado es 100% inocuo para el esmalte.',
        ],
      },
      {
        id: 'faq-14',
        q: '¿Cuidados tras el blanqueamiento?',
        a: [
          'Evitar bebidas y alimentos con colorantes oscuros durante las primeras 48 horas.',
        ],
      },
      {
        id: 'faq-15',
        q: '¿Cuánto dura el blanqueamiento?',
        a: [
          'Entre 1 y 2 años según los hábitos higiénicos y alimentarios.',
        ],
      },
      {
        id: 'faq-16',
        q: '¿Una infección dental provoca pérdida ósea?',
        a: [
          'Sí, pero la endodoncia a tiempo erradica la infección y preserva el hueso.',
        ],
      },
      {
        id: 'faq-17',
        q: '¿Se pueden colocar joyas dentales o coronas de oro?',
        a: [
          'Sí, previa solicitud personalizada y garantizando la salud bucodental.',
        ],
      },
      {
        id: 'faq-18',
        q: '¿Un diente con empaste puede necesitar endodoncia?',
        a: [
          'Solo si la caries ha alcanzado el nervio dental.',
        ],
      },
      {
        id: 'faq-19',
        q: '¿Por qué se necesita empaste tras una endodoncia?',
        a: [
          'Para sellar la cavidad y restaurar la resistencia masticatoria.',
        ],
      },
      {
        id: 'faq-20',
        q: '¿Por qué se extraen las muelas del juicio?',
        a: [
          'Por falta de espacio, inflamación recurrente o riesgo para las piezas contiguas.',
        ],
      },
      {
        id: 'faq-21',
        q: '¿Se puede posponer el tratamiento dental?',
        a: [
          'Las patologías dentales avanzan; tratarlas pronto evita tratamientos complejos.',
        ],
      },
      {
        id: 'faq-22',
        q: '¿Por qué coronas de circonio en molares en lugar de carillas?',
        a: [
          'El circonio ofrece la máxima resistencia frente a las fuerzas masticatorias.',
        ],
      },
      {
        id: 'faq-23',
        q: '¿Se puede cambiar el color de los dientes en la prueba?',
        a: [
          'Sí, el tono se valida con usted antes de la colocación definitiva.',
        ],
      },
    ],
  },
  ru: {
    title: 'Часто задаваемые вопросы о процедуре',
    subtitle:
      'У вас есть вопросы о стоматологическом лечении в Анталье? Мы предоставим исчерпывающие ответы и профессиональную поддержку на каждом этапе.',
    items: [
      {
        id: 'faq-1',
        q: 'Изменится ли мой план лечения или цена по прибытии в Анталью?',
        a: [
          'План и стоимость, составленные по вашим снимкам, остаются неизменными и прозрачными без скрытых платежей.',
        ],
      },
      {
        id: 'faq-2',
        q: 'Помогаете ли вы с проживанием?',
        a: [
          'Да, мы бронируем проверенные отели 4-5 звезд рядом с клиникой и организуем VIP-трансфер.',
        ],
      },
      {
        id: 'faq-3',
        q: 'Безопасно ли приезжать в Турцию на лечение?',
        a: [
          'Да, Анталья — мировой центр медицинского туризма с высочайшими международными стандартами.',
        ],
      },
      {
        id: 'faq-4',
        q: 'Может ли заболевание десен вызывать неприятный запах изо рта?',
        a: [
          'Да. Профессиональная чистка и лечение десен устраняют причину запаха.',
        ],
      },
      {
        id: 'faq-5',
        q: 'Принимаете ли вы оплату картами и онлайн?',
        a: [
          'Да, доступны банковские карты, безналичный расчет и наличные.',
        ],
      },
      {
        id: 'faq-6',
        q: 'Включены ли в пакеты отель и трансфер?',
        a: [
          'Большинство комплексных планов лечения включают проживание и трансфер.',
        ],
      },
      {
        id: 'faq-7',
        q: 'Возможна ли поэтапная оплата?',
        a: [
          'Да, мы предлагаем удобные поэтапные варианты оплаты.',
        ],
      },
      {
        id: 'faq-8',
        q: 'Предоставляется ли гарантия на лечение?',
        a: [
          'Все имплантаты и коронки сопровождаются официальным гарантийным сертификатом.',
        ],
      },
      {
        id: 'faq-9',
        q: 'Что такое десневая улыбка (gummy smile)?',
        a: [
          'Это избыточное обнажение десны, которое легко корректируется лазером.',
        ],
      },
      {
        id: 'faq-10',
        q: 'В чем разница между чисткой и кюретажем?',
        a: [
          'Чистка удаляет наддесневой камень, а кюретаж очищает глубокие пародонтальные карманы.',
        ],
      },
      {
        id: 'faq-11',
        q: 'Что такое лоскутная операция?',
        a: [
          'Микрохирургическая очистка корней и подсадка кости при пародонтите.',
        ],
      },
      {
        id: 'faq-12',
        q: 'Можно ли отбеливать зубы при рецессии десен?',
        a: [
          'Требуется предварительная изоляция оголенных шеек зубов.',
        ],
      },
      {
        id: 'faq-13',
        q: 'Вредит ли профессиональное отбеливание эмали?',
        a: [
          'Нет, клиническое отбеливание абсолютно безопасно для структуры зуба.',
        ],
      },
      {
        id: 'faq-14',
        q: 'Что нельзя делать после отбеливания?',
        a: [
          'Первые 48 часов необходимо соблюдать «белую диету» без чая, кофе и вина.',
        ],
      },
      {
        id: 'faq-15',
        q: 'Как долго держится результат отбеливания?',
        a: [
          'В среднем от 1 до 2 лет при правильном уходе.',
        ],
      },
      {
        id: 'faq-16',
        q: 'Может ли воспаленный зуб вызвать потерю костной ткани?',
        a: [
          'Да, но своевременное лечение каналов останавливает инфекцию и защищает кость.',
        ],
      },
      {
        id: 'faq-17',
        q: 'Устанавливаете ли вы золотые коронки или украшения на зубы?',
        a: [
          'Да, по индивидуальному запросу пациента.',
        ],
      },
      {
        id: 'faq-18',
        q: 'Когда зубу с пломбой требуется лечение каналов?',
        a: [
          'Только если кариес дошел до пульпы и нерва зуба.',
        ],
      },
      {
        id: 'faq-19',
        q: 'Зачем нужна пломба после лечения каналов?',
        a: [
          'Чтобы герметично закрыть зуб и восстановить жевательную прочность.',
        ],
      },
      {
        id: 'faq-20',
        q: 'Почему нужно удалять зубы мудрости?',
        a: [
          'Из-за нехватки места в челюсти, смещения других зубов и воспалений.',
        ],
      },
      {
        id: 'faq-21',
        q: 'Безопасно ли откладывать лечение зубов?',
        a: [
          'Кариес прогрессирует; раннее лечение сохраняет зуб и экономит средства.',
        ],
      },
      {
        id: 'faq-22',
        q: 'Почему для жевательных зубов выбирают цирконий, а не виниры?',
        a: [
          'Цирконий выдерживает колоссальные жевательные нагрузки.',
        ],
      },
      {
        id: 'faq-23',
        q: 'Можно ли скорректировать цвет зубов на примерке?',
        a: [
          'Да, цвет согласуется с вами до окончательной фиксации.',
        ],
      },
    ],
  },
};

export default function GeneralDentistryFaqSection() {
  const locale = useLocale();
  const d = FAQ_I18N[locale] || FAQ_I18N.en;
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
