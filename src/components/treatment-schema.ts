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

  // Entity-based knowledge graph mapping
  const entityMap: Record<
    string,
    {
      nameEn: string;
      nameTr: string;
      procedureType: string;
      lowPrice: number;
      highPrice: number;
      bodyLocation: string;
      wikidata: string[];
      wikipedia?: string[];
      risks?: string[];
      duration: string;
    }
  > = {
    'dental-implants': {
      nameEn: 'Dental Implant Surgery',
      nameTr: 'Diş İmplantı Cerrahisi',
      procedureType: 'SurgicalProcedure',
      lowPrice: 400,
      highPrice: 8000,
      bodyLocation: 'Tooth',
      wikidata: [
        'https://www.wikidata.org/wiki/Q1413157', // Dental Implant
        'https://www.wikidata.org/wiki/Q36384',   // Dentistry
        'https://www.wikidata.org/wiki/Q256722',  // Osseointegration
        'https://www.wikidata.org/wiki/Q406',     // Istanbul
      ],
      wikipedia: [
        'https://en.wikipedia.org/wiki/Dental_implant',
        'https://en.wikipedia.org/wiki/Implantology',
      ],
      risks: [
        'Minor post-operative swelling and discomfort',
        'Infection at implant site (rare, prevented via antibiotic protocol)',
      ],
      duration: '3+7 Working Days (2 Visits)',
    },
    'all-on-4-implants': {
      nameEn: 'All-on-4 Dental Implant Restoration',
      nameTr: 'All-on-4 Diş İmplantı Tedavisi',
      procedureType: 'SurgicalProcedure',
      lowPrice: 4200,
      highPrice: 8000,
      bodyLocation: 'Tooth',
      wikidata: [
        'https://www.wikidata.org/wiki/Q4727773', // All-on-4
        'https://www.wikidata.org/wiki/Q1413157', // Dental Implant
        'https://www.wikidata.org/wiki/Q749453',  // Prosthodontics
      ],
      wikipedia: ['https://en.wikipedia.org/wiki/All-on-4'],
      risks: [
        'Temporary sensitivity during osseointegration period',
        'Need for soft diet in the initial 2-3 months',
      ],
      duration: '3+7 Working Days (2 Visits)',
    },
    'all-on-6-implants': {
      nameEn: 'All-on-6 Full Arch Dental Implant Restoration',
      nameTr: 'All-on-6 Tam Çene Diş İmplantı',
      procedureType: 'SurgicalProcedure',
      lowPrice: 4700,
      highPrice: 10000,
      bodyLocation: 'Tooth',
      wikidata: [
        'https://www.wikidata.org/wiki/Q1413157', // Dental Implant
        'https://www.wikidata.org/wiki/Q749453',  // Prosthodontics
        'https://www.wikidata.org/wiki/Q406',     // Istanbul
      ],
      wikipedia: ['https://en.wikipedia.org/wiki/Prosthodontics'],
      risks: [
        'Mild post-op bruising and swelling',
        'Temporary dietary adjustments',
      ],
      duration: '3+7 Working Days (2 Visits)',
    },
    'immediate-implant-treatment': {
      nameEn: 'Immediate Same-Day Dental Implant Placement',
      nameTr: 'Aynı Gün İmplant Tedavisi (Immediate Implant)',
      procedureType: 'SurgicalProcedure',
      lowPrice: 450,
      highPrice: 1200,
      bodyLocation: 'Tooth',
      wikidata: [
        'https://www.wikidata.org/wiki/Q1413157', // Dental Implant
        'https://www.wikidata.org/wiki/Q256722',  // Osseointegration
      ],
      wikipedia: ['https://en.wikipedia.org/wiki/Dental_implant'],
      duration: '3-5 Working Days (1-2 Visits)',
    },
    'zygomatic-implants': {
      nameEn: 'Zygomatic Cheekbone Dental Implant Surgery',
      nameTr: 'Zigoma (Elmacık Kemiği) İmplantı Tedavisi',
      procedureType: 'SurgicalProcedure',
      lowPrice: 6000,
      highPrice: 14000,
      bodyLocation: 'Zygomatic Bone',
      wikidata: [
        'https://www.wikidata.org/wiki/Q163214',  // Zygomatic bone
        'https://www.wikidata.org/wiki/Q1413157', // Dental Implant
      ],
      wikipedia: ['https://en.wikipedia.org/wiki/Zygomatic_implant'],
      duration: '5-7 Working Days (2 Visits)',
    },
    'zirconium-implants': {
      nameEn: 'Metal-Free Ceramic Zirconia Dental Implants',
      nameTr: '%100 Metalsiz Zirkonyum Seramik Diş İmplantı',
      procedureType: 'SurgicalProcedure',
      lowPrice: 650,
      highPrice: 1500,
      bodyLocation: 'Tooth',
      wikidata: [
        'https://www.wikidata.org/wiki/Q410058',  // Zirconium dioxide
        'https://www.wikidata.org/wiki/Q1413157', // Dental Implant
      ],
      wikipedia: ['https://en.wikipedia.org/wiki/Zirconia_implant'],
      duration: '5 Working Days (2 Visits)',
    },
    'implant-supported-dentures': {
      nameEn: 'Implant-Supported Snap-On Overdentures',
      nameTr: 'İmplant Destekli Çıt Çıtlı Protez (Overdenture)',
      procedureType: 'SurgicalProcedure',
      lowPrice: 2200,
      highPrice: 4500,
      bodyLocation: 'Tooth',
      wikidata: [
        'https://www.wikidata.org/wiki/Q731388',  // Dentures
        'https://www.wikidata.org/wiki/Q1413157', // Dental Implant
      ],
      wikipedia: ['https://en.wikipedia.org/wiki/Overdenture'],
      duration: '5-7 Working Days (2 Visits)',
    },
    'sinus-lifting': {
      nameEn: 'Maxillary Sinus Floor Elevation & Bone Grafting',
      nameTr: 'Sinüs Lifting & Kemik Greftleme Cerrahisi',
      procedureType: 'SurgicalProcedure',
      lowPrice: 250,
      highPrice: 1200,
      bodyLocation: 'Maxillary Sinus',
      wikidata: [
        'https://www.wikidata.org/wiki/Q3961911', // Sinus lift
        'https://www.wikidata.org/wiki/Q892461',  // Bone grafting
      ],
      wikipedia: ['https://en.wikipedia.org/wiki/Sinus_lift'],
      duration: '3-5 Working Days (1-2 Visits)',
    },
  };

  const defaultEntity = entityMap['dental-implants'];
  const currentEntity = entityMap[slug] || defaultEntity;

  // Default Global FAQs if custom ones are not supplied
  const defaultFaqs = [
    {
      q:
        locale === 'tr'
          ? 'İstanbul’da diş implantı fiyatları ne kadar?'
          : 'How much do dental implants cost in Istanbul, Turkey?',
      a:
        locale === 'tr'
          ? 'Master Smile Studio kliniğimizde tek diş implant fiyatları €400’den başlar. All-on-4 tam çene paketleri €4,900, All-on-6 paketleri ise €5,500’den itibaren her şey dahil (otel konaklaması, VIP transferler, 3D CBCT röntgenler) olarak sunulmaktadır.'
          : 'At Master Smile Studio, single dental implants start from €400 (£350). All-on-4 full arch packages start from €4,900 (£4,200) and All-on-6 packages start from €5,500 (£4,700), including 4/5-star hotel stay, VIP transfers, and 3D CBCT scans.',
    },
    {
      q:
        locale === 'tr'
          ? 'Diş implantı tedavisi için İstanbul’da kaç gün kalmam gerekir?'
          : 'How long do I need to stay in Istanbul for dental implant treatment?',
      a:
        locale === 'tr'
          ? 'İmplant tedavisi genellikle 2 ziyaret gerektirir. 1. Ziyaret (3-5 gün): Cerrahi yerleşim ve geçici sabit dişlerin takılması. 3 aylık kemik kaynama (osteointegrasyon) sürecinin ardından 2. Ziyaret (5-7 gün): Kalıcı monolitik zirkonyum köprülerin takılması.'
          : 'Dental implant treatment typically requires 2 visits: Visit 1 (3-5 days) for implant placement and provisional teeth; followed by a 3-month healing period (osseointegration); Visit 2 (5-7 days) for permanent monolithic zirconia crown fitting.',
    },
    {
      q:
        locale === 'tr'
          ? 'Kullanılan implant markalarında garanti var mı?'
          : 'Do you offer a lifetime warranty on dental implants?',
      a:
        locale === 'tr'
          ? 'Evet! Kliniğimizde kullanılan tüm premium implant markaları (Straumann, DXL German, NucleOSS, Megagen) resmi ömür boyu üretici garantisi ve uluslararası implant pasaportu ile teslim edilir.'
          : 'Yes! All premium implant systems (Straumann, DXL German, NucleOSS, Megagen) come with international manufacturer lifetime warranties and official implant passport certificates.',
    },
    {
      q:
        locale === 'tr'
          ? 'İmplant ameliyatı ağrılı mıdır?'
          : 'Is dental implant surgery painful?',
      a:
        locale === 'tr'
          ? 'Hayır, işlem ileri lokal anestezi veya talep doğrultusunda sedasyon altında yapılır. Cerrahi sırasında hiçbir ağrı hissedilmez.'
          : 'No, the surgery is performed under advanced local anesthesia or conscious sedation and is completely painless. Post-operative discomfort is mild and managed with prescribed medications.',
    },
  ];

  const activeFaqs = customFaqs && customFaqs.length > 0 ? customFaqs : defaultFaqs;

  // Breadcrumbs
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: locale === 'tr' ? 'Ana Sayfa' : 'Home',
      item: `${siteUrl}/${locale}`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: locale === 'tr' ? 'Tedaviler' : 'Treatments',
      item: `${siteUrl}/${locale}/treatments`,
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
      // 1. MEDICAL CLINIC / DENTIST (LocalBusiness)
      {
        '@type': ['Dentist', 'MedicalClinic', 'MedicalBusiness'],
        '@id': clinicId,
        name: 'Master Smile Studio',
        legalName: 'Master Smile Studio Diş Polikliniği',
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/treatment-hero-bg.webp`,
        description:
          'Master Smile Studio is an international oral health and dental aesthetics clinic in Turkey, specializing in dental implants, full-arch restorations, and cosmetic smile design.',
        telephone: '+90 537 305 99 47',
        email: 'info@mastersmilestudio.com',
        priceRange: '$$$',
        currenciesAccepted: 'EUR, GBP, USD, TRY',
        paymentAccepted: 'Cash, Credit Card, Bank Wire',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Çağlayan Mah. 2053 Sok. No:19/A Muratpaşa',
          addressLocality: 'Antalya',
          addressRegion: 'Antalya',
          postalCode: '07230',
          addressCountry: 'TR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 36.8584,
          longitude: 30.7584,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '19:00',
          },
        ],
        sameAs: [
          'https://www.instagram.com/mastersmilestudio/',
          'https://www.facebook.com/mastersmilestudio/',
          'https://www.youtube.com/@mastersmilestudio',
          'https://www.wikidata.org/wiki/Q183',
        ],
        medicalSpecialty: ['Dentistry', 'OralSurgery', 'CosmeticDentistry', 'Prosthodontics'],
        employee: [
          { '@id': `${siteUrl}/#physician-onur-yuksel` },
          { '@id': `${siteUrl}/#physician-ufuk-agdasan` },
          { '@id': `${siteUrl}/#physician-serdar-unal` },
          { '@id': `${siteUrl}/#physician-cagatay-cakir` },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.96',
          reviewCount: '348',
          bestRating: '5',
          worstRating: '1',
        },
      },

      // 2. PHYSICIANS (Doctors)
      {
        '@type': 'Physician',
        '@id': `${siteUrl}/#physician-onur-yuksel`,
        name: 'Dr. Dt. Onur Utku Yüksel',
        jobTitle: 'Co-Founder & Specialist Oral Implantologist',
        image: 'https://sohodent.com/doc/data1/Dr.Dt.-Onur-Utku-Yuksel.jpg',
        medicalSpecialty: 'OralSurgery',
        worksFor: { '@id': clinicId },
      },
      {
        '@type': 'Physician',
        '@id': `${siteUrl}/#physician-ufuk-agdasan`,
        name: 'Dt. Ufuk Ağdaşan',
        jobTitle: 'Co-Founder & Aesthetic Dentist',
        image: 'https://sohodent.com/doc/data1/Dt.Ufuk-Agdasan.jpg',
        medicalSpecialty: 'CosmeticDentistry',
        worksFor: { '@id': clinicId },
      },
      {
        '@type': 'Physician',
        '@id': `${siteUrl}/#physician-serdar-unal`,
        name: 'MSc. Dt. Hakkı Serdar Ünal',
        jobTitle: 'Co-Founder & Prosthodontist',
        image: 'https://sohodent.com/doc/data1/Dt.Hakki-Serdar-unal.jpg',
        medicalSpecialty: 'Prosthodontics',
        worksFor: { '@id': clinicId },
      },
      {
        '@type': 'Physician',
        '@id': `${siteUrl}/#physician-cagatay-cakir`,
        name: 'Dt. Çağatay Çakır',
        jobTitle: 'Dentist',
        image: 'https://sohodent.com/doc/data1/cagatay-cakir.jpg',
        medicalSpecialty: 'Dentistry',
        worksFor: { '@id': clinicId },
      },

      // 3. MEDICAL PROCEDURE (Semantic Entity Linking to Wikidata / Wikipedia)
      {
        '@type': 'MedicalProcedure',
        '@id': `${canonicalUrl}#procedure`,
        name: locale === 'tr' ? currentEntity.nameTr : currentEntity.nameEn,
        description: description,
        procedureType: currentEntity.procedureType,
        bodyLocation: currentEntity.bodyLocation,
        preparation:
          locale === 'tr'
            ? '3D CBCT tomografik tarama, kemik yoğunluğu analizi ve dijital gülüş planlaması.'
            : '3D CBCT tomographic scan, bone density evaluation, and digital smile design.',
        followup:
          locale === 'tr'
            ? 'Seyahat süresince klinik kontrolleri, antibiyotik ve ağrı kesici kiti, 3 ay sonra kalıcı monolitik zirkonyum köprü provası.'
            : 'Follow-up checks during stay, post-op medication pack, and permanent monolithic zirconia teeth fitting after 3 months.',
        howPerformed:
          locale === 'tr'
            ? 'Gelişmiş lokal anestezi altında çene kemiğine titanyum veya seramik implant vidalarının hassas cerrahi kılavuzla yerleştirilmesi.'
            : 'Surgical insertion of medical-grade titanium or ceramic implant screws into the alveolar jawbone using 3D guided precision under local anesthesia.',
        about: currentEntity.wikidata.map((wikiUri) => ({
          '@type': 'Thing',
          sameAs: wikiUri,
        })),
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'EUR',
          lowPrice: currentEntity.lowPrice,
          highPrice: currentEntity.highPrice,
          offerCount: 6,
          seller: { '@id': clinicId },
        },
        provider: { '@id': clinicId },
        performer: [
          { '@id': `${siteUrl}/#physician-onur-yuksel` },
          { '@id': `${siteUrl}/#physician-ufuk-agdasan` },
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
          'I came to Istanbul to assist my father in law to do an all on 6 upper jaw. The clinic is modern, well equipped and beautiful. Much better than my own doctor in Canada.',
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
