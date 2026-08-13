export const siteConfig = {
  name: 'Master Smile Studio',
  legalName: 'Master Smile Studio Diş Polikliniği',
  domain: process.env.NEXT_PUBLIC_SITE_URL || 'https://mastersmilestudio.com',
  email: 'info@mastersmilestudio.com',
  phone: '+90 537 305 99 47',
  whatsapp: '+90 534 696 31 63',
  whatsappNumbers: {
    tr: '905346963163', // Türkçe
    en: '905373059947', // English
    de: '905373059941', // Deutsch
    ru: '905346963189', // Русский
    pl: '905331973907', // Polski (Dr. Julia)
    es: '905373059947', // Español
    pt: '905373059947', // Português
  } as Record<string, string>,
  address: {
    streetAddress: 'Güzeloba Mah. Çağlayangil Cad. No: 6-B',
    addressLocality: 'Muratpaşa',
    addressRegion: 'Antalya',
    postalCode: '07230',
    addressCountry: 'TR',
  },
  geo: {
    latitude: '36.8525',
    longitude: '30.7760',
    region: 'TR-07',
    placename: 'Güzeloba, Muratpaşa, Antalya',
  },
  openingHours: [
    'Monday 09:00-18:00',
    'Tuesday 09:00-18:00',
    'Wednesday 09:00-18:00',
    'Thursday 09:00-18:00',
    'Friday 09:00-18:00',
    'Saturday 09:00-16:00',
  ],
  socials: {
    instagram: 'https://www.instagram.com/mastersmilestudio/',
    facebook: 'https://www.facebook.com/p/Mastersmilestudio-61569392717782/',
    youtube: 'https://www.youtube.com/@dentmastersmile',
    googleMaps: 'https://maps.google.com/?q=Master+Smile+Studio+Guzeloba+Antalya',
  },
  priceRange: '$$$',
  currenciesAccepted: 'EUR, USD, GBP, TRY',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  languagesSpoken: ['Turkish', 'English', 'German', 'Russian', 'Spanish', 'Portuguese', 'Polish'],
};

export const SITE_CONFIG = siteConfig;

export function getWhatsAppLink(locale: string = 'tr', message?: string): string {
  const phone = siteConfig.whatsappNumbers[locale] || siteConfig.whatsappNumbers.en || '905346963163';
  
  const defaultMessages: Record<string, string> = {
    tr: 'Merhaba, Master Smile Studio hakkında bilgi ve randevu almak istiyorum.',
    en: 'Hello, I would like to get information and make an appointment at Master Smile Studio.',
    de: 'Hallo, ich möchte Informationen erhalten und einen Termin bei Master Smile Studio vereinbaren.',
    ru: 'Здравствуйте! Я хотел бы получить консультацию и записаться на прием в Master Smile Studio.',
    pl: 'Dzień dobry, chciałbym uzyskać informacje i umówić się na wizytę w Master Smile Studio.',
    es: 'Hola, me gustaría obtener información y solicitar una cita en Master Smile Studio.',
    pt: 'Olá, gostaria de obter informações e agendar uma consulta no Master Smile Studio.',
  };

  const text = message || defaultMessages[locale] || defaultMessages.en;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
