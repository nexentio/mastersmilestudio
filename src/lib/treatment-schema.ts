export interface TreatmentSchemaOptions {
  locale: string;
  slug: string;
  title: string;
  description: string;
  canonicalUrl: string;
  customFaqs?: Array<{ q: string; a: string }>;
}

export function generateTreatmentJsonLd({
  locale,
  slug,
  title,
  description,
  canonicalUrl,
  customFaqs,
}: TreatmentSchemaOptions) {
  const siteUrl = 'https://mastersmilestudio.com';
  const clinicId = `${siteUrl}/#clinic`;
  const websiteId = `${siteUrl}/#website`;

  // Entity-based knowledge graph mapping covering all 7 clinical disciplines
  const entityMap: Record<
    string,
    {
      nameEn: string;
      nameTr: string;
      category: 'implants' | 'crowns' | 'veneers' | 'bridges' | 'dentures' | 'cosmetic' | 'general';
      procedureType: string;
      bodyLocation: string;
      wikidata: string[];
      wikipedia?: string[];
      risks?: string[];
      duration: string;
    }
  > = {
    // 1. DENTAL IMPLANTS
    'dental-implants': {
      nameEn: 'Dental Implant Surgery',
      nameTr: 'Diş İmplantı Cerrahisi',
      category: 'implants',
      procedureType: 'SurgicalProcedure',
      bodyLocation: 'Alveolar Bone',
      wikidata: [
        'https://www.wikidata.org/wiki/Q1413157',
        'https://www.wikidata.org/wiki/Q36384',
        'https://www.wikidata.org/wiki/Q256722',
        'https://www.wikidata.org/wiki/Q406',
      ],
      wikipedia: ['https://en.wikipedia.org/wiki/Dental_implant'],
      duration: '3+7 Working Days (2 Visits)',
    },
    'all-on-4-implants': {
      nameEn: 'All-on-4 Full Arch Dental Implant Restoration',
      nameTr: 'All-on-4 Tam Çene Diş İmplantı Tedavisi',
      category: 'implants',
      procedureType: 'SurgicalProcedure',
      bodyLocation: 'Maxilla and Mandible',
      wikidata: [
        'https://www.wikidata.org/wiki/Q4727773',
        'https://www.wikidata.org/wiki/Q1413157',
        'https://www.wikidata.org/wiki/Q749453',
      ],
      wikipedia: ['https://en.wikipedia.org/wiki/All-on-4'],
      duration: '3+7 Working Days (2 Visits)',
    },
    'all-on-6-implants': {
      nameEn: 'All-on-6 Full Arch Dental Implant Restoration',
      nameTr: 'All-on-6 Tam Çene Diş İmplantı Tedavisi',
      category: 'implants',
      procedureType: 'SurgicalProcedure',
      bodyLocation: 'Maxilla and Mandible',
      wikidata: [
        'https://www.wikidata.org/wiki/Q1413157',
        'https://www.wikidata.org/wiki/Q749453',
        'https://www.wikidata.org/wiki/Q406',
      ],
      wikipedia: ['https://en.wikipedia.org/wiki/Prosthodontics'],
      duration: '3+7 Working Days (2 Visits)',
    },
    'immediate-implant-treatment': {
      nameEn: 'Immediate Same-Day Dental Implant Placement',
      nameTr: 'Aynı Gün İmplant Tedavisi (Immediate Implant)',
      category: 'implants',
      procedureType: 'SurgicalProcedure',
      bodyLocation: 'Alveolar Bone',
      wikidata: [
        'https://www.wikidata.org/wiki/Q1413157',
        'https://www.wikidata.org/wiki/Q256722',
      ],
      wikipedia: ['https://en.wikipedia.org/wiki/Dental_implant'],
      duration: '3-5 Working Days (1-2 Visits)',
    },
    'zygomatic-implants': {
      nameEn: 'Zygomatic Cheekbone Dental Implant Surgery',
      nameTr: 'Zigoma (Elmacık Kemiği) İmplantı Cerrahisi',
      category: 'implants',
      procedureType: 'SurgicalProcedure',
      bodyLocation: 'Zygomatic Bone',
      wikidata: [
        'https://www.wikidata.org/wiki/Q163214',
        'https://www.wikidata.org/wiki/Q1413157',
      ],
      wikipedia: ['https://en.wikipedia.org/wiki/Zygomatic_implant'],
      duration: '5-7 Working Days (2 Visits)',
    },
    'zirconium-implants': {
      nameEn: 'Metal-Free Ceramic Zirconia Dental Implants',
      nameTr: '%100 Metalsiz Zirkonyum Seramik Diş İmplantı',
      category: 'implants',
      procedureType: 'SurgicalProcedure',
      bodyLocation: 'Alveolar Bone',
      wikidata: [
        'https://www.wikidata.org/wiki/Q410058',
        'https://www.wikidata.org/wiki/Q1413157',
      ],
      wikipedia: ['https://en.wikipedia.org/wiki/Zirconia_implant'],
      duration: '5 Working Days (2 Visits)',
    },
    'implant-supported-dentures': {
      nameEn: 'Implant-Supported Snap-On Overdentures',
      nameTr: 'İmplant Destekli Çıt Çıtlı Protez (Overdenture)',
      category: 'implants',
      procedureType: 'SurgicalProcedure',
      bodyLocation: 'Alveolar Ridge',
      wikidata: [
        'https://www.wikidata.org/wiki/Q731388',
        'https://www.wikidata.org/wiki/Q1413157',
      ],
      wikipedia: ['https://en.wikipedia.org/wiki/Overdenture'],
      duration: '5-7 Working Days (2 Visits)',
    },
    'sinus-lifting': {
      nameEn: 'Maxillary Sinus Floor Elevation & Bone Grafting',
      nameTr: 'Sinüs Lifting & Kemik Greftleme Cerrahisi',
      category: 'implants',
      procedureType: 'SurgicalProcedure',
      bodyLocation: 'Maxillary Sinus',
      wikidata: [
        'https://www.wikidata.org/wiki/Q3961911',
        'https://www.wikidata.org/wiki/Q892461',
      ],
      wikipedia: ['https://en.wikipedia.org/wiki/Sinus_lift'],
      duration: '3-5 Working Days (1-2 Visits)',
    },

    // 2. DENTAL CROWNS
    'dental-crowns': {
      nameEn: 'Dental Crown Restoration',
      nameTr: 'Diş Kuronu / Kaplama Tedavisi',
      category: 'crowns',
      procedureType: 'ProstheticProcedure',
      bodyLocation: 'Tooth Crown',
      wikidata: [
        'https://www.wikidata.org/wiki/Q1439974',
        'https://www.wikidata.org/wiki/Q749453',
      ],
      wikipedia: ['https://en.wikipedia.org/wiki/Crown_(dentistry)'],
      duration: '5-7 Working Days (1 Visit)',
    },
    'zirconium-crowns': {
      nameEn: 'Monolithic Multilayer Zirconia Crowns',
      nameTr: 'Monolitik Çok Katmanlı Zirkonyum Diş Kaplama',
      category: 'crowns',
      procedureType: 'ProstheticProcedure',
      bodyLocation: 'Tooth Crown',
      wikidata: [
        'https://www.wikidata.org/wiki/Q410058',
        'https://www.wikidata.org/wiki/Q1439974',
      ],
      duration: '5-6 Working Days (1 Visit)',
    },
    'emax-crowns': {
      nameEn: 'IPS e.max Lithium Disilicate All-Ceramic Crowns',
      nameTr: 'IPS e.max Lityum Disilikat Tam Seramik Kuron',
      category: 'crowns',
      procedureType: 'ProstheticProcedure',
      bodyLocation: 'Anterior Teeth',
      wikidata: [
        'https://www.wikidata.org/wiki/Q1439974',
        'https://www.wikidata.org/wiki/Q423853',
      ],
      duration: '5-6 Working Days (1 Visit)',
    },
    'pfm-crowns': {
      nameEn: 'Porcelain-Fused-to-Metal (PFM) Crowns',
      nameTr: 'Metal Destekli Porselen Diş Kaplama (PFM)',
      category: 'crowns',
      procedureType: 'ProstheticProcedure',
      bodyLocation: 'Posterior Teeth',
      wikidata: ['https://www.wikidata.org/wiki/Q1439974'],
      duration: '5 Working Days (1 Visit)',
    },
    'full-ceramic-crowns': {
      nameEn: 'Full Ceramic Cosmetic Dental Crowns',
      nameTr: 'Tam Seramik Estetik Diş Kaplama',
      category: 'crowns',
      procedureType: 'ProstheticProcedure',
      bodyLocation: 'Tooth Crown',
      wikidata: ['https://www.wikidata.org/wiki/Q1439974'],
      duration: '5-6 Working Days (1 Visit)',
    },

    // 3. DENTAL VENEERS
    'dental-veneers': {
      nameEn: 'Cosmetic Dental Veneers Treatment',
      nameTr: 'Estetik Lamine Diş Kaplama Tedavisi',
      category: 'veneers',
      procedureType: 'CosmeticProcedure',
      bodyLocation: 'Anterior Teeth Enamel',
      wikidata: [
        'https://www.wikidata.org/wiki/Q1440026',
        'https://www.wikidata.org/wiki/Q180735',
      ],
      wikipedia: ['https://en.wikipedia.org/wiki/Veneer_(dentistry)'],
      duration: '5-7 Working Days (1 Visit)',
    },
    'porcelain-veneers': {
      nameEn: 'Ultra-Thin Porcelain Laminate Veneers',
      nameTr: 'Porselen Lamine Diş Kaplama (Yaprak Porselen)',
      category: 'veneers',
      procedureType: 'CosmeticProcedure',
      bodyLocation: 'Anterior Teeth Enamel',
      wikidata: ['https://www.wikidata.org/wiki/Q1440026'],
      duration: '5-7 Working Days (1 Visit)',
    },
    'emax-veneers': {
      nameEn: 'IPS e.max Press Aesthetic Laminate Veneers',
      nameTr: 'IPS e.max Estetik Lamine Kaplama',
      category: 'veneers',
      procedureType: 'CosmeticProcedure',
      bodyLocation: 'Anterior Teeth Enamel',
      wikidata: [
        'https://www.wikidata.org/wiki/Q1440026',
        'https://www.wikidata.org/wiki/Q423853',
      ],
      duration: '5-7 Working Days (1 Visit)',
    },
    'composite-veneers': {
      nameEn: 'Direct Composite Bonding Veneers',
      nameTr: 'Kompozit Bonding Lamine Kaplama',
      category: 'veneers',
      procedureType: 'CosmeticProcedure',
      bodyLocation: 'Tooth Enamel',
      wikidata: ['https://www.wikidata.org/wiki/Q1440026'],
      duration: '1-3 Working Days (1 Visit)',
    },
    'laminate-veneers': {
      nameEn: 'Minimal Prep Cosmetic Laminate Veneers',
      nameTr: 'Minimal İnvaziv Lamine Diş Kaplama',
      category: 'veneers',
      procedureType: 'CosmeticProcedure',
      bodyLocation: 'Anterior Teeth Enamel',
      wikidata: ['https://www.wikidata.org/wiki/Q1440026'],
      duration: '5-7 Working Days (1 Visit)',
    },

    // 4. DENTAL BRIDGES
    'dental-bridges': {
      nameEn: 'Fixed Dental Bridge Prosthetic Restoration',
      nameTr: 'Sabit Diş Köprüsü Tedavisi',
      category: 'bridges',
      procedureType: 'ProstheticProcedure',
      bodyLocation: 'Dental Arch Gap',
      wikidata: [
        'https://www.wikidata.org/wiki/Q1440003',
        'https://www.wikidata.org/wiki/Q749453',
      ],
      wikipedia: ['https://en.wikipedia.org/wiki/Bridge_(dentistry)'],
      duration: '5-7 Working Days (1 Visit)',
    },
    'traditional-bridges': {
      nameEn: 'Traditional Fixed Zirconia Dental Bridge',
      nameTr: 'Geleneksel Sabit Zirkonyum Diş Köprüsü',
      category: 'bridges',
      procedureType: 'ProstheticProcedure',
      bodyLocation: 'Abutment Teeth and Pontic Gap',
      wikidata: ['https://www.wikidata.org/wiki/Q1440003'],
      duration: '5-6 Working Days (1 Visit)',
    },
    'cantilever-bridges': {
      nameEn: 'Cantilever Fixed Dental Bridge',
      nameTr: 'Balkon (Cantilever) Diş Köprüsü',
      category: 'bridges',
      procedureType: 'ProstheticProcedure',
      bodyLocation: 'Single Abutment Tooth',
      wikidata: ['https://www.wikidata.org/wiki/Q1440003'],
      duration: '5-6 Working Days (1 Visit)',
    },
    'maryland-bridges': {
      nameEn: 'Resin-Bonded Maryland Dental Bridge',
      nameTr: 'Maryland (Kanatlı) Yapıştırma Diş Köprüsü',
      category: 'bridges',
      procedureType: 'ProstheticProcedure',
      bodyLocation: 'Anterior Teeth Gap',
      wikidata: ['https://www.wikidata.org/wiki/Q1440003'],
      duration: '3-5 Working Days (1 Visit)',
    },

    // 5. DENTURES
    'dentures': {
      nameEn: 'Removable and Fixed Prosthetic Dentures',
      nameTr: 'Tam ve Bölümlü Diş Protezi Tedavisi',
      category: 'dentures',
      procedureType: 'ProstheticProcedure',
      bodyLocation: 'Edentulous Ridge',
      wikidata: [
        'https://www.wikidata.org/wiki/Q731388',
        'https://www.wikidata.org/wiki/Q749453',
      ],
      wikipedia: ['https://en.wikipedia.org/wiki/Dentures'],
      duration: '5-7 Working Days (1 Visit)',
    },
    'full-dentures': {
      nameEn: 'Complete Full Arch Prosthetic Dentures',
      nameTr: 'Tam Çene Total Diş Protezi',
      category: 'dentures',
      procedureType: 'ProstheticProcedure',
      bodyLocation: 'Complete Upper/Lower Jaw',
      wikidata: ['https://www.wikidata.org/wiki/Q731388'],
      duration: '5-7 Working Days (1 Visit)',
    },
    'partial-dentures': {
      nameEn: 'Removable Partial Dental Prosthesis',
      nameTr: 'Hassas Bağlantılı Bölümlü Diş Protezi',
      category: 'dentures',
      procedureType: 'ProstheticProcedure',
      bodyLocation: 'Partial Edentulous Arch',
      wikidata: ['https://www.wikidata.org/wiki/Q731388'],
      duration: '5-7 Working Days (1 Visit)',
    },
    'flexible-dentures': {
      nameEn: 'Metal-Free Flexible Valplast Dentures',
      nameTr: 'Metalsiz Esnek Damak Protezi (Deflex/Valplast)',
      category: 'dentures',
      procedureType: 'ProstheticProcedure',
      bodyLocation: 'Dental Arch',
      wikidata: ['https://www.wikidata.org/wiki/Q731388'],
      duration: '4-6 Working Days (1 Visit)',
    },

    // 6. COSMETIC DENTISTRY
    'cosmetic-dentistry': {
      nameEn: 'Aesthetic Smile Makeover & Cosmetic Dentistry',
      nameTr: 'Estetik Diş Hekimliği & Gülüş Tasarımı',
      category: 'cosmetic',
      procedureType: 'CosmeticProcedure',
      bodyLocation: 'Smile Line Teeth',
      wikidata: [
        'https://www.wikidata.org/wiki/Q180735',
        'https://www.wikidata.org/wiki/Q36384',
      ],
      wikipedia: ['https://en.wikipedia.org/wiki/Cosmetic_dentistry'],
      duration: '3-7 Working Days (1 Visit)',
    },
    'teeth-whitening': {
      nameEn: 'Laser Clinical Teeth Whitening & Bleaching',
      nameTr: 'Lazerli Profesyonel Diş Beyazlatma (Bleaching)',
      category: 'cosmetic',
      procedureType: 'CosmeticProcedure',
      bodyLocation: 'Tooth Enamel',
      wikidata: ['https://www.wikidata.org/wiki/Q1143899'],
      duration: '1 Working Day (1 Visit)',
    },
    'smile-makeover': {
      nameEn: 'Digital Hollywood Smile Design & Reconstruction',
      nameTr: 'Dijital Hollywood Gülüş Tasarımı',
      category: 'cosmetic',
      procedureType: 'CosmeticProcedure',
      bodyLocation: 'Full Aesthetic Smile Zone',
      wikidata: ['https://www.wikidata.org/wiki/Q180735'],
      duration: '5-7 Working Days (1 Visit)',
    },
    'gum-contouring': {
      nameEn: 'Laser Gingival Aesthetic Gum Contouring',
      nameTr: 'Lazerli Pembe Estetik Diş Eti Şekillendirme',
      category: 'cosmetic',
      procedureType: 'SurgicalProcedure',
      bodyLocation: 'Gingiva (Gums)',
      wikidata: ['https://www.wikidata.org/wiki/Q180735'],
      duration: '1-2 Working Days (1 Visit)',
    },
    'gummy-smile-treatment': {
      nameEn: 'Aesthetic Gummy Smile Correction Treatment',
      nameTr: 'Gummy Smile (Diş Eti Görünürlüğü) Tedavisi',
      category: 'cosmetic',
      procedureType: 'SurgicalProcedure',
      bodyLocation: 'Gingiva and Upper Lip',
      wikidata: ['https://www.wikidata.org/wiki/Q180735'],
      duration: '1-2 Working Days (1 Visit)',
    },
    'tooth-contouring': {
      nameEn: 'Cosmetic Enamel Recontouring & Reshaping',
      nameTr: 'Kozmetik Diş Konturlama ve Şekillendirme',
      category: 'cosmetic',
      procedureType: 'CosmeticProcedure',
      bodyLocation: 'Incisal Edges',
      wikidata: ['https://www.wikidata.org/wiki/Q180735'],
      duration: '1 Working Day (1 Visit)',
    },

    // 7. GENERAL DENTISTRY
    'general-dentistry': {
      nameEn: 'Comprehensive General & Preventive Dentistry',
      nameTr: 'Genel Diş Hekimliği & Koruyucu Ağız Sağlığı',
      category: 'general',
      procedureType: 'MedicalProcedure',
      bodyLocation: 'Oral Cavity',
      wikidata: ['https://www.wikidata.org/wiki/Q36384'],
      duration: '1-3 Working Days (1 Visit)',
    },
    'dental-cleaning': {
      nameEn: 'Professional Ultrasonic Teeth Scaling & Airflow Polishing',
      nameTr: 'Ultrasonik Diş Taşı Temizliği ve Polisaj',
      category: 'general',
      procedureType: 'MedicalProcedure',
      bodyLocation: 'Teeth and Gumline',
      wikidata: ['https://www.wikidata.org/wiki/Q36384'],
      duration: '1 Working Day (1 Visit)',
    },
    'tooth-fillings': {
      nameEn: 'Biomimetic Tooth-Colored Composite Fillings & Inlays',
      nameTr: 'Biyomimetik Kompozit Dolgu ve İnley/Onley',
      category: 'general',
      procedureType: 'RestorativeProcedure',
      bodyLocation: 'Tooth Cavity',
      wikidata: ['https://www.wikidata.org/wiki/Q749453'],
      duration: '1-2 Working Days (1 Visit)',
    },
    'root-canal': {
      nameEn: 'Rotary Endodontic Root Canal Therapy',
      nameTr: 'Rotary Sistem Kanal Tedavisi (Endodonti)',
      category: 'general',
      procedureType: 'EndodonticProcedure',
      bodyLocation: 'Dental Pulp Canal',
      wikidata: ['https://www.wikidata.org/wiki/Q216503'],
      duration: '1-3 Working Days (1 Visit)',
    },
    'tooth-extraction': {
      nameEn: 'Painless Surgical Wisdom Tooth Extraction',
      nameTr: 'Ağrısız Cerrahi Yirmi Yaş Diş Çekimi',
      category: 'general',
      procedureType: 'SurgicalProcedure',
      bodyLocation: 'Alveolar Socket',
      wikidata: ['https://www.wikidata.org/wiki/Q841328'],
      duration: '1-2 Working Days (1 Visit)',
    },
  };

  const currentEntity = entityMap[slug] || entityMap['dental-implants'];
  const currentCategory = currentEntity.category || 'implants';

  // Category-specific rich defaults if customFaqs is not provided
  const categoryFaqs: Record<string, Array<{ q: string; a: string }>> = {
    implants: [
      {
        q:
          locale === 'tr'
            ? 'Antalya’da diş implantı fiyatları ve her şey dahil paket neleri kapsar?'
            : 'How much do dental implants cost in Antalya, Turkey and what is included in the package?',
        a:
          locale === 'tr'
            ? 'Master Smile Studio kliniğimizde diş implantı tedavileri kişiye özel planlanır. 5 yıldızlı otel konaklaması, VIP Mercedes transferler, 3D CBCT tomografi ve ömür boyu garanti içeren her şey dahil VIP paketlerimiz hakkında detaylı bilgi ve kişiye özel teklif almak için WhatsApp üzerinden iletişime geçebilirsiniz.'
            : 'At Master Smile Studio, dental implant treatments are tailored individually. We offer all-inclusive VIP packages (5-star luxury hotel accommodation, VIP Mercedes transfers, 3D CBCT tomographic scans, and international manufacturer lifetime warranties). Contact our patient coordinators on WhatsApp for a transparent quote.',
      },
      {
        q:
          locale === 'tr'
            ? 'Diş implantı tedavisi için Antalya’da kaç gün kalmam gerekir?'
            : 'How long do I need to stay in Antalya for dental implant treatment?',
        a:
          locale === 'tr'
            ? 'İmplant tedavisi genellikle 2 seans gerektirir: 1. Ziyaret (3-5 gün) cerrahi yerleşim ve geçici sabit dişler; ardından 3 aylık kemik kaynama süreci (osteointegrasyon); 2. Ziyaret (5-7 gün) kalıcı monolitik zirkonyum köprü provası.'
            : 'Dental implant treatment typically requires 2 visits: Visit 1 (3-5 days) for implant surgical placement and fixed temporary teeth; followed by a 3-month osseointegration period; Visit 2 (5-7 days) for permanent monolithic zirconia crown fitting.',
      },
      {
        q:
          locale === 'tr'
            ? 'Kullanılan implant markalarında garanti var mı?'
            : 'Do you provide official warranties on dental implants?',
        a:
          locale === 'tr'
            ? 'Evet! Kliniğimizde kullanılan tüm premium implant markaları (Straumann, DXL German, NucleOSS, Medentika) resmi ömür boyu üretici garantisi ve uluslararası implant pasaportu ile teslim edilir.'
            : 'Yes! All premium implant systems (Straumann, DXL German, NucleOSS, Medentika) come with international manufacturer lifetime warranties and official implant passport certificates.',
      },
      {
        q:
          locale === 'tr'
            ? 'İmplant cerrahisi sırasında ağrı hissedilir mi?'
            : 'Is dental implant surgery painful?',
        a:
          locale === 'tr'
            ? 'Hayır, operasyon gelişmiş lokal anestezi veya talebe göre sedasyon altında yapılır ve hasta hiçbir ağrı hissetmez.'
            : 'No, the procedure is carried out under advanced local anesthesia or conscious sedation and is completely painless. Mild post-operative swelling is controlled with prescribed medications.',
      },
    ],
    crowns: [
      {
        q:
          locale === 'tr'
            ? 'Zirkonyum kaplama dişlerin ömrü ne kadardır?'
            : 'How long do monolithic zirconia crowns last?',
        a:
          locale === 'tr'
            ? 'Kliniğimizde kullanılan 1200+ MPa Alman monolitik zirkonyum bloklar 25 yıldan uzun klinik ömre sahiptir, kırılmaya karşı ultra dirençlidir ve renk değiştirmez.'
            : 'Our 1200+ MPa German monolithic zirconia blocks have a clinical lifespan exceeding 20-25 years. They are ultra-resistant to chipping and 100% stain-resistant.',
      },
      {
        q:
          locale === 'tr'
            ? 'Antalya’da zirkonyum diş kaplama kaç günde tamamlanır?'
            : 'How many days are needed for zirconia crowns in Antalya?',
        a:
          locale === 'tr'
            ? 'CAD/CAM dijital laboratuvarımız sayesinde zirkonyum ve E-max kaplama tedavileri 5-6 iş günü (tek seyahat) içinde tamamlanır.'
            : 'Thanks to our in-house digital CAD/CAM laboratory, full zirconia or E-max crown smile restorations are completed in 5-6 working days within a single holiday visit.',
      },
      {
        q:
          locale === 'tr'
            ? 'Zirkonyum kuronlar diş etinde siyah çizgi yapar mı?'
            : 'Do zirconia crowns cause dark lines around the gumline?',
        a:
          locale === 'tr'
            ? 'Hayır. Zirkonyum %100 metalsiz ve biyouyumlu olduğu için geleneksel metal kaplamalardaki gibi diş eti kararması asla yaşanmaz.'
            : 'No. Zirconia is 100% metal-free and biocompatible, completely eliminating the dark grey gumline discoloration common with traditional metal-fused crowns.',
      },
    ],
    veneers: [
      {
        q:
          locale === 'tr'
            ? 'Porselen lamine kaplama yapılırken dişler ne kadar kesilir?'
            : 'How much tooth enamel is shaved for porcelain laminate veneers?',
        a:
          locale === 'tr'
            ? 'Master Smile Studio kliniğimizde biyomimetik yaklaşım uygulanır. E-max lamine kaplamalarda yalnızca 0.3 - 0.5 mm mikro aşındırma yapılır; diş asla küçültülmez.'
            : 'At Master Smile Studio, we practice conservative biomimetic dentistry. Only 0.3 - 0.5 mm of superficial enamel is refined for E-max veneers, preserving natural tooth structure without aggressive shaving.',
      },
      {
        q:
          locale === 'tr'
            ? 'Lamine kaplamalar çay, kahve veya sigarayla sararır mı?'
            : 'Do porcelain veneers stain with coffee, tea, or smoking?',
        a:
          locale === 'tr'
            ? 'Hayır. Ivoclar IPS e.max porselen camsı gözeneksiz yüzeye sahiptir; çay, kahve ve sigara lekelerine karşı %100 dirençlidir.'
            : 'No. Ivoclar IPS e.max lithium disilicate porcelain has a non-porous glazed surface that never absorbs food stains, coffee pigments, or nicotine.',
      },
    ],
    bridges: [
      {
        q:
          locale === 'tr'
            ? 'Diş köprüsü ile diş implantı arasındaki temel fark nedir?'
            : 'What is the main difference between a Dental Bridge and a Dental Implant?',
        a:
          locale === 'tr'
            ? 'İmplant boşluğa bağımsız yapay diş kökü yerleştirirken, geleneksel köprü boşluğun yanındaki komşu dişleri destek alarak boşluğu doldurur. Komşu dişlerde halihazırda dolgu veya kuron varsa köprü hızlı ve ekonomik bir çözümdür.'
            : 'A dental implant replaces the missing root independently in the bone, whereas a traditional bridge uses adjacent teeth as anchors. If adjacent teeth already need crowns, a bridge is a fast, highly aesthetic solution.',
      },
      {
        q:
          locale === 'tr'
            ? 'Antalya’da zirkonyum köprü tedavisi kaç gün sürer?'
            : 'How long does dental bridge treatment take in Antalya?',
        a:
          locale === 'tr'
            ? 'Ölçü, dijital CAD/CAM prova ve simantasyon dahil sabit diş köprüsü tedavileri 5-6 gün içinde tamamlanır.'
            : 'From digital scanning and CAD/CAM milling to final precision cementation, fixed dental bridge restorations are completed in 5-6 working days.',
      },
    ],
    dentures: [
      {
        q:
          locale === 'tr'
            ? 'Çıt çıtlı (implant destekli) protezler damaktan düşer mi?'
            : 'Do implant-supported snap-on dentures slip or fall out?',
        a:
          locale === 'tr'
            ? 'Hayır. Çene kemiğine yerleştirilen 2 veya 4 implant üzerine locator tutucularla kilitlenen overdenture protezler çiğneme ve konuşma sırasında asla oynamaz.'
            : 'No. Overdentures securely lock onto 2 or 4 dental implants with precision locator attachments, providing firm stability with zero slippage during eating and speaking.',
      },
    ],
    cosmetic: [
      {
        q:
          locale === 'tr'
            ? 'Hollywood Gülüş Tasarımı ne kadar sürer?'
            : 'How long does a Hollywood Smile makeover take in Antalya?',
        a:
          locale === 'tr'
            ? 'Dijital gülüş simülasyonu, 3D mock-up provası ve kalıcı kaplamaların teslimi toplamda 5-7 gün sürmektedir.'
            : 'Digital smile design, 3D temporary mock-up fitting, and final aesthetic veneer/crown placement take 5-7 working days in Antalya.',
      },
    ],
    general: [
      {
        q:
          locale === 'tr'
            ? 'Antalya’da genel diş tedavileri ve kontrol randevusu nasıl planlanır?'
            : 'How can I arrange a dental check-up and routine treatment in Antalya?',
        a:
          locale === 'tr'
            ? 'Kliniğimizde panoramik röntgen ve uzman hekim muayenesi ücretsizdir. WhatsApp üzerinden randevunuzu dakikalar içinde oluşturabilirsiniz.'
            : 'Comprehensive consultation, digital panoramic X-rays, and treatment planning are complimentary at our clinic. You can schedule your visit via WhatsApp.',
      },
    ],
  };

  const activeFaqs =
    customFaqs && customFaqs.length > 0 ? customFaqs : categoryFaqs[currentCategory] || categoryFaqs.implants;

  // Breadcrumbs
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: locale === 'tr' ? 'Ana Sayfa' : 'Home',
      item: `${siteUrl}/${locale}/`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: locale === 'tr' ? 'Tedaviler' : 'Treatments',
      item: `${siteUrl}/${locale}/treatments/`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: locale === 'tr' ? currentEntity.nameTr : currentEntity.nameEn,
      item: canonicalUrl,
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. MEDICAL CLINIC / DENTIST (LocalBusiness & MedicalOrganization)
      {
        '@type': ['Dentist', 'MedicalClinic', 'MedicalBusiness'],
        '@id': clinicId,
        name: 'Master Smile Studio',
        legalName: 'Master Smile Studio Diş Polikliniği',
        url: `${siteUrl}/${locale}/`,
        logo: `${siteUrl}/mastersmilestudio-logo.png`,
        image: `${siteUrl}/treatment-hero-bg.webp`,
        description:
          'Master Smile Studio is an international oral health and dental aesthetics clinic in Antalya, Turkey, certified by the Ministry of Health for International Health Tourism and specializing in dental implants, CAD/CAM zirconia restorations, and cosmetic smile design.',
        telephone: '+90 537 305 99 47',
        email: 'info@mastersmilestudio.com',
        priceRange: '$$',
        currenciesAccepted: 'EUR, GBP, USD, TRY, PLN',
        paymentAccepted: 'Cash, Credit Card, Bank Wire',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Güzeloba Mah. Çağlayangil Cad. No: 6-B',
          addressLocality: 'Muratpaşa',
          addressRegion: 'Antalya',
          postalCode: '07230',
          addressCountry: 'TR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 36.8525,
          longitude: 30.776,
        },
        hasMap:
          'https://www.google.com/maps/place//data=!4m2!3m1!1s0x14c39b68ac254dc9:0x2a34fa4a30ea77b2?sa=X&ved=1t:8290&ictx=111',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '19:00',
          },
        ],
        sameAs: [
          'https://www.trustpilot.com/review/mastersmilestudio.com',
          'https://www.instagram.com/mastersmilestudio/',
          'https://www.facebook.com/p/Mastersmilestudio-61569392717782/',
          'https://www.youtube.com/@dentmastersmile',
        ],
        medicalSpecialty: ['Dentistry', 'OralSurgery', 'CosmeticDentistry', 'Prosthodontics'],
        employee: [
          { '@id': `${siteUrl}/#physician-firat-iskender` },
          { '@id': `${siteUrl}/#physician-ozan-ozturk` },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.96',
          reviewCount: '348',
          bestRating: '5',
          worstRating: '1',
        },
      },

      // 2. PHYSICIANS (Doctors with verified affiliations)
      {
        '@type': 'Physician',
        '@id': `${siteUrl}/#physician-ozan-ozturk`,
        name: 'Dr. Ozan Öztürk',
        jobTitle: 'Founder & Prosthodontist | Specialist in Aesthetic Restorations',
        image: `${siteUrl}/team/ozan-ozturk.webp`,
        medicalSpecialty: 'Prosthodontics',
        worksFor: { '@id': clinicId },
        memberOf: [
          {
            '@type': 'Organization',
            name: 'Turkish Dental Association (TDB)',
            sameAs: 'https://www.wikidata.org/wiki/Q6053896',
          },
        ],
      },
      {
        '@type': 'Physician',
        '@id': `${siteUrl}/#physician-firat-iskender`,
        name: 'Dt. Fırat İskender',
        jobTitle: 'Oral & Maxillofacial Surgeon | Dental Implant Specialist',
        image: `${siteUrl}/team/firat-iskender.webp`,
        medicalSpecialty: 'OralSurgery',
        worksFor: { '@id': clinicId },
        memberOf: [
          {
            '@type': 'Organization',
            name: 'International Team for Implantology (ITI)',
            sameAs: 'https://www.wikidata.org/wiki/Q110903348',
          },
        ],
      },

      // 3. MEDICAL PROCEDURE (Semantic Entity Linking to Wikidata / Wikipedia)
      {
        '@type': 'MedicalProcedure',
        '@id': `${canonicalUrl}#procedure`,
        name: locale === 'tr' ? currentEntity.nameTr : currentEntity.nameEn,
        description: description,
        procedureType: currentEntity.procedureType,
        bodyLocation: currentEntity.bodyLocation,
        duration: currentEntity.duration,
        about: currentEntity.wikidata.map((wikiUri) => ({
          '@type': 'Thing',
          sameAs: wikiUri,
        })),
        offers: {
          '@type': 'Offer',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          seller: { '@id': clinicId },
        },
        provider: { '@id': clinicId },
        performer: [
          { '@id': `${siteUrl}/#physician-firat-iskender` },
          { '@id': `${siteUrl}/#physician-ozan-ozturk` },
        ],
      },

      // 4. FAQ PAGE SCHEMA
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: activeFaqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        })),
      },

      // 5. VERIFIED PATIENT REVIEWS
      {
        '@type': 'Review',
        '@id': `${canonicalUrl}#review-1`,
        itemReviewed: { '@id': clinicId },
        author: {
          '@type': 'Person',
          name: 'Malcolm Mallia',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5,
        },
        reviewBody:
          'Master Smile Studio is not just a clinic but it is filled with a relaxing atmosphere. The preciseness and skill of the surgeon were mind boggling. I highly recommend Master Smile Studio!',
      },
      {
        '@type': 'Review',
        '@id': `${canonicalUrl}#review-2`,
        itemReviewed: { '@id': clinicId },
        author: {
          '@type': 'Person',
          name: 'Rafael Rodriguez',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5,
        },
        reviewBody:
          'I came to Antalya to assist my father in law to do an all on 6 upper jaw. The clinic is modern, well equipped and beautiful. Much better than my own doctor in Canada.',
      },

      // 6. BREADCRUMBLIST
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: breadcrumbItems,
      },

      // 7. WEBPAGE
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description: description,
        inLanguage: locale,
        isPartOf: {
          '@type': 'WebSite',
          '@id': websiteId,
          url: siteUrl,
          name: 'Master Smile Studio',
        },
        about: { '@id': `${canonicalUrl}#procedure` },
        publisher: { '@id': clinicId },
      },
    ],
  };
}
