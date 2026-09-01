export interface MinimalNotFoundData {
  title: string;
  description: string;
  homeBtn: string;
  treatmentsBtn: string;
  whatsappBtn: string;
  whatsappMessage: string;
}

export const MINIMAL_NOT_FOUND_I18N: Record<string, MinimalNotFoundData> = {
  en: {
    title: 'Page Not Found',
    description: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
    homeBtn: 'Back to Homepage',
    treatmentsBtn: 'Explore Treatments',
    whatsappBtn: 'WhatsApp Support',
    whatsappMessage: 'Hello Master Smile Studio, I reached a 404 page on your website and need assistance.',
  },
  tr: {
    title: 'Sayfa Bulunamadı',
    description: 'Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanım dışı kalmış olabilir.',
    homeBtn: 'Ana Sayfaya Dön',
    treatmentsBtn: 'Tedavileri İncele',
    whatsappBtn: 'WhatsApp Destek',
    whatsappMessage: 'Merhaba Master Smile Studio, web sitenizde bir sayfaya ulaşamadım, yardımcı olabilir misiniz?',
  },
  de: {
    title: 'Seite nicht gefunden',
    description: 'Die angeforderte Seite wurde möglicherweise entfernt, umbenannt oder ist vorübergehend nicht erreichbar.',
    homeBtn: 'Zur Startseite',
    treatmentsBtn: 'Behandlungen ansehen',
    whatsappBtn: 'WhatsApp-Support',
    whatsappMessage: 'Hallo Master Smile Studio, ich habe eine 404-Seite erreicht und benötige Unterstützung.',
  },
  pl: {
    title: 'Nie znaleziono strony',
    description: 'Strona, której szukasz, mogła zostać usunięta, zmieniła nazwę lub jest chwilowo niedostępna.',
    homeBtn: 'Wróć do strony głównej',
    treatmentsBtn: 'Przeglądaj zabiegi',
    whatsappBtn: 'Wsparcie WhatsApp',
    whatsappMessage: 'Dzień dobry Master Smile Studio, trafiłem na stronę 404 na Państwa stronie i potrzebuję pomocy.',
  },
  pt: {
    title: 'Página não encontrada',
    description: 'A página que procura pode ter sido removida, renomeada ou encontrar-se temporariamente indisponível.',
    homeBtn: 'Voltar à página inicial',
    treatmentsBtn: 'Ver tratamentos',
    whatsappBtn: 'Suporte por WhatsApp',
    whatsappMessage: 'Olá Master Smile Studio, encontrei uma página 404 no vosso site e preciso de assistência.',
  },
  es: {
    title: 'Página no encontrada',
    description: 'Es posible que la página que busca haya sido eliminada, haya cambiado de nombre o no esté disponible temporalmente.',
    homeBtn: 'Volver a la página principal',
    treatmentsBtn: 'Ver tratamientos',
    whatsappBtn: 'Soporte por WhatsApp',
    whatsappMessage: 'Hola Master Smile Studio, he llegado a una página 404 en su sitio web y necesito asistencia.',
  },
  ru: {
    title: 'Страница не найдена',
    description: 'Запрашиваемая страница могла быть удалена, переименована или временно недоступна.',
    homeBtn: 'На главную страницу',
    treatmentsBtn: 'Наши услуги',
    whatsappBtn: 'Поддержка в WhatsApp',
    whatsappMessage: 'Здравствуйте, Master Smile Studio. Я перешел на страницу 404 на вашем сайте и мне нужна помощь.',
  },
};
