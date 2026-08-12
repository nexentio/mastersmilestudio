export const WHATSAPP_LINKS: Record<string, string> = {
  tr: 'https://api.whatsapp.com/send/?phone=905346963163&text=Merhaba%2C+web+siteniz+%C3%BCzerinden+ula%C5%9F%C4%B1yorum.+Bilgi+almak+istiyorum.&type=phone_number&app_absent=0',
  en: 'https://api.whatsapp.com/send/?phone=905373059947&text=Hello%2C+I+am+contacting+you+through+your+website.+I%27d+like+to+get+information.&type=phone_number&app_absent=0',
  de: 'https://api.whatsapp.com/send/?phone=905373059941&text=Hallo%2C+ich+kontaktiere+Sie+%C3%BCber+Ihre+Website.+Ich+m%C3%B6chte+gerne+Informationen+erhalten.&type=phone_number&app_absent=0',
  ru: 'https://api.whatsapp.com/send/?phone=905346963189&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+%D1%8F+%D0%BF%D0%B8%D1%88%D1%83+%D0%B2%D0%B0%D0%BC+%D1%81+%D0%B2%D0%B0%D1%88%D0%B5%D0%B3%D0%BE+%D1%81%D0%B0%D0%B9%D1%82%D0%B0.+%D0%AF+%D1%85%D0%BE%D1%82%D0%B5%D0%BB+%D0%B1%D1%8B+%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C+%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E.&type=phone_number&app_absent=0',
  pt: 'https://api.whatsapp.com/send/?phone=905373059947&text=Ol%C3%A1%2C+estou+entrando+em+contato+atrav%C3%A9s+do+seu+site.+Gostaria+de+obter+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0',
  es: 'https://api.whatsapp.com/send/?phone=905346963163&text=Hola%2C+me+pongo+en+contacto+con+usted+a+trav%C3%A9s+de+su+sitio+web.+Me+gustar%C3%ADa+recibir+informaci%C3%B3n.&type=phone_number&app_absent=0',
  pl: 'https://api.whatsapp.com/send/?phone=905331973907&text=Dzie%C5%84+dobry%2C+kontaktuj%C4%99+si%C4%99+przez+Pa%C5%84stwa+stron%C4%99+internetow%C4%85.+Chcia%C5%82bym+uzyska%C4%87+wi%C4%99cej+informacji.&type=phone_number&app_absent=0',
};

export function getWhatsAppLink(locale: string = 'tr'): string {
  return WHATSAPP_LINKS[locale] || WHATSAPP_LINKS['tr'];
}

export const SITE_CONFIG = {
  name: 'Master Smile Studio',
  domain: 'mastersmilestudio.com',
  email: 'info@mastersmilestudio.com',
  phone: '+90 543 456 80 80',
  socials: {
    facebook: 'https://www.facebook.com/p/Mastersmilestudio-61569392717782/',
    youtube: 'https://www.youtube.com/@dentmastersmile',
    instagram: 'https://www.instagram.com/mastersmilestudio/',
  },
} as const;
