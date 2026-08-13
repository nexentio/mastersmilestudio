# 💎 Master Smile Studio — Ultra-Luxury Dental Clinic Web Platform

Master Smile Studio polikliniğinin uluslararası standartlarda, 7 dilli (`tr`, `en`, `de`, `ru`, `es`, `pt`, `pl`), yüksek performanslı ve modern Next.js 15 web platformudur.

---

## 🏗️ 1. Teknoloji Yığını (Tech Stack)

* **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack, React 19)
* **Uluslararasılaşma (i18n)**: [next-intl](https://next-intl-docs.vercel.app/) (Modüler JSON namespaces)
* **Dil Desteği (7 Dil)**: 🇹🇷 Türkçe, 🇬🇧 İngilizce, 🇩🇪 Almanca, 🇷🇺 Rusça, 🇪🇸 İspanyolca, 🇵🇹 Portekizce, 🇵🇱 Polonyaca
* **Tip Güvenliği**: TypeScript (Merkezi arayüzler: `src/types/`)
* **Stil & Tasarım**: Vanilla CSS & Dynamic React Style Tokens (`src/config/theme.ts`)
* **SEO & Performans**: Dinamik Metadata (`generateMetadata`), `robots.ts`, `sitemap.ts`, Next/Image optimizasyonu

---

## 📂 2. Proje Mimarisi & Dizin Haritası

```
mastersmilestudio/
├── messages/                  # 🌐 Modüler Çoklu Dil JSON Dosyaları
│   ├── tr/                    # Türkçe Modüller (home, about, services, gallery, contact...)
│   ├── en/                    # İngilizce Modüller
│   ├── de/                    # Almanca Modüller
│   ├── ru/                    # Rusça Modüller
│   ├── es/                    # İspanyolca Modüller
│   ├── pt/                    # Portekizce Modüller
│   └── pl/                    # Polonyaca Modüller
│
├── public/                    # 🖼️ Statik Dosyalar (SVG/WebP Bayraklar, Görseller, Videolar)
│   ├── flags/                 # Yüksek çözünürlüklü SVG bayraklar (tr, en, de, ru, es, pt, pl)
│   ├── patients/              # Hasta portre fotoğrafları
│   └── transformations/       # Öncesi / Sonrası klinik vaka fotoğrafları
│
├── src/
│   ├── app/
│   │   └── [locale]/          # 🧭 Dinamik Dil Rotaları
│   │       ├── page.tsx       # Anasayfa
│   │       ├── about/         # Hakkımızda Sayfası
│   │       ├── treatments/    # 12 Klinik Tedavinin Listelendiği Sayfa
│   │       ├── gallery/       # Öncesi/Sonrası Gülüş Galerisi
│   │       └── layout.tsx     # Kök Dil Şablonu (Header, Meta, Fontlar)
│   │
│   ├── components/            # 🧩 Bağımsız & Yeniden Kullanılabilir Bileşenler
│   │   ├── Header.tsx         # Bağımsız Top Header + Scroll ile Küçülen Sticky Navbar
│   │   ├── Footer.tsx         # Lüks Studio Footer
│   │   ├── LanguageSwitcher.tsx # Bayraklı Dinamik Dil Değiştirici
│   │   ├── HeroVideo.tsx      # Video Hero & Hızlı Randevu Formu
│   │   ├── TreatmentsSectionView.tsx # Tedaviler Sayfası Görünümü
│   │   ├── GalleryGrid.tsx    # Filtrelenebilir Gülüş Galerisi & Modal
│   │   ├── ContactSection.tsx # İnteraktif Ülke Kodlu İletişim Formu
│   │   └── ...
│   │
│   ├── config/                # ⚙️ Merkezi Konfigürasyon (Single Source of Truth)
│   │   ├── site.ts            # WhatsApp şablonları, klinik telefonları, sosyal linkler
│   │   └── theme.ts           # Renk paleti, gölgeler, geçişler ve tasarım tokenları
│   │
│   ├── i18n/                  # 🌐 next-intl Konfigürasyonu
│   │   ├── routing.ts         # Desteklenen diller & yönlendirme tanımları
│   │   └── request.ts         # Modüler JSON yükleyici (Zero-collision builder)
│   │
│   └── types/                 # 🏷️ Merkezi TypeScript Tanımları
│       ├── index.ts           # Barrel export
│       ├── common.ts          # Locale, Nav, Ülke Kodu tipleri
│       ├── treatments.ts      # Tedavi, Hekim, Vaka tipleri
│       ├── gallery.ts         # Galeri vaka tipleri
│       └── contact.ts         # Form veri tipleri
```

---

## 🛠️ 3. "Nasıl Yapılır?" Geliştirici Kılavuzu (How-To Guides)

### 📌 A. Yeni Bir Dil Nasıl Eklenir? (Örn: Fransızca `fr`)
1. **Dili Tanımlayın**: `src/i18n/routing.ts` dosyasındaki `locales` dizisine `'fr'` ekleyin.
2. **Bayrağı Ekleyin**: `public/flags/fr.webp` olarak ilgili bayrağı yükleyin.
3. **Tercüme Dosyalarını Oluşturun**: `messages/en/` klasörünü kopyalayıp `messages/fr/` yapın ve JSON içeriklerini Fransızcaya çevirin.
4. **Bitti!** Sistem otomatik olarak `/fr`, `/fr/about`, `/fr/treatments`, `/fr/gallery` rotalarını ve dil seçicide Fransızca seçeneğini oluşturacaktır.

---

### 📌 B. Klinik İletişim Bilgileri veya WhatsApp Nasıl Güncellenir?
* `src/config/site.ts` dosyasını açın.
* `SITE_CONFIG.contact.phone` veya `SITE_CONFIG.whatsapp.numbers` altındaki numaraları güncelleyin.
* `getWhatsAppLink(locale, customMessage)` fonksiyonu tüm diller için doğru ülke formatında ve özel mesajla WhatsApp bağlantısını otomatik üretir.

---

### 📌 C. Yeni Bir Tedavi / Hizmet Nasıl Eklenir?
1. `messages/{locale}/services.json` dosyalarına yeni tedavinizin `title`, `desc`, `timeframe`, `sessions`, `guarantee` bilgilerini ekleyin.
2. `src/components/TreatmentsSectionView.tsx` içerisindeki `treatmentDetailList` dizisine yeni tedavinizin `id`sini tanımlayın.

---

### 📌 D. Gülüş Galerisine Yeni Bir Hasta Vakası Nasıl Eklenir?
1. Görselleri `public/transformations/` ve `public/patients/` dizinine yerleştirin.
2. `src/components/GalleryGrid.tsx` içerisindeki `rawGalleryData` dizisine yeni vakayı ekleyin:
   ```ts
   {
     id: 'case7',
     category: 'makeover',
     name: 'Hasta İsmi',
     shade: 'BL1',
     hasQuote: true, // veya icons: ['Crowns', 'Veneers']
     beforeImage: '/transformations/t7.jpg',
     afterImage: '/transformations/t7.jpg',
     portraitImage: '/patients/patient-7.jpeg',
   }
   ```
3. `messages/{locale}/gallery.json` dosyalarındaki `items` objesine `case7` tedavisini ekleyin.

---

## 🚀 4. Kurulum ve Çalıştırma

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın (Turbopack ile ultra hızlı)
npm run dev

# Canlı (Production) derlemesi alın
npm run build

# Canlı sunucuyu başlatın
npm run start
```

---

## 🎯 5. Kod Standartları & En İyi Uygulamalar

1. **i18n Modülerliği**: Yeni bir metin eklerken asla tek bir dev dosyaya yazmayın; `messages/{dil}/[ilgili_modul].json` altına ekleyin.
2. **Hardcoded Değerlerden Kaçının**: Telefon numarası, e-posta veya klinik adreslerini doğrudan bileşen koduna yazmayın; `SITE_CONFIG` (`src/config/site.ts`) kullanın.
3. **Görsel Performansı**: Yeni görseller eklerken `<Image />` bileşenini kullanın, sayfa üstü (above-the-fold) kritik resimlere `priority` verin.
