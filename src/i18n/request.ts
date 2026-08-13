import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

// TR
import trCommon from '../../messages/tr/common.json';
import trHome from '../../messages/tr/home.json';
import trAbout from '../../messages/tr/about.json';
import trServices from '../../messages/tr/services.json';
import trContact from '../../messages/tr/contact.json';
import trProcess from '../../messages/tr/process.json';
import trTeam from '../../messages/tr/team.json';
import trBrands from '../../messages/tr/brands.json';
import trBlog from '../../messages/tr/blog.json';
import trFaq from '../../messages/tr/faq.json';
import trFooter from '../../messages/tr/footer.json';
import trGallery from '../../messages/tr/gallery.json';

// EN
import enCommon from '../../messages/en/common.json';
import enHome from '../../messages/en/home.json';
import enAbout from '../../messages/en/about.json';
import enServices from '../../messages/en/services.json';
import enContact from '../../messages/en/contact.json';
import enProcess from '../../messages/en/process.json';
import enTeam from '../../messages/en/team.json';
import enBrands from '../../messages/en/brands.json';
import enBlog from '../../messages/en/blog.json';
import enFaq from '../../messages/en/faq.json';
import enFooter from '../../messages/en/footer.json';
import enGallery from '../../messages/en/gallery.json';

// DE
import deCommon from '../../messages/de/common.json';
import deHome from '../../messages/de/home.json';
import deAbout from '../../messages/de/about.json';
import deServices from '../../messages/de/services.json';
import deContact from '../../messages/de/contact.json';
import deProcess from '../../messages/de/process.json';
import deTeam from '../../messages/de/team.json';
import deBrands from '../../messages/de/brands.json';
import deBlog from '../../messages/de/blog.json';
import deFaq from '../../messages/de/faq.json';
import deFooter from '../../messages/de/footer.json';
import deGallery from '../../messages/de/gallery.json';

// RU
import ruCommon from '../../messages/ru/common.json';
import ruHome from '../../messages/ru/home.json';
import ruAbout from '../../messages/ru/about.json';
import ruServices from '../../messages/ru/services.json';
import ruContact from '../../messages/ru/contact.json';
import ruProcess from '../../messages/ru/process.json';
import ruTeam from '../../messages/ru/team.json';
import ruBrands from '../../messages/ru/brands.json';
import ruBlog from '../../messages/ru/blog.json';
import ruFaq from '../../messages/ru/faq.json';
import ruFooter from '../../messages/ru/footer.json';
import ruGallery from '../../messages/ru/gallery.json';

// ES
import esCommon from '../../messages/es/common.json';
import esHome from '../../messages/es/home.json';
import esAbout from '../../messages/es/about.json';
import esServices from '../../messages/es/services.json';
import esContact from '../../messages/es/contact.json';
import esProcess from '../../messages/es/process.json';
import esTeam from '../../messages/es/team.json';
import esBrands from '../../messages/es/brands.json';
import esBlog from '../../messages/es/blog.json';
import esFaq from '../../messages/es/faq.json';
import esFooter from '../../messages/es/footer.json';
import esGallery from '../../messages/es/gallery.json';

// PT
import ptCommon from '../../messages/pt/common.json';
import ptHome from '../../messages/pt/home.json';
import ptAbout from '../../messages/pt/about.json';
import ptServices from '../../messages/pt/services.json';
import ptContact from '../../messages/pt/contact.json';
import ptProcess from '../../messages/pt/process.json';
import ptTeam from '../../messages/pt/team.json';
import ptBrands from '../../messages/pt/brands.json';
import ptBlog from '../../messages/pt/blog.json';
import ptFaq from '../../messages/pt/faq.json';
import ptFooter from '../../messages/pt/footer.json';
import ptGallery from '../../messages/pt/gallery.json';

// PL
import plCommon from '../../messages/pl/common.json';
import plHome from '../../messages/pl/home.json';
import plAbout from '../../messages/pl/about.json';
import plServices from '../../messages/pl/services.json';
import plContact from '../../messages/pl/contact.json';
import plProcess from '../../messages/pl/process.json';
import plTeam from '../../messages/pl/team.json';
import plBrands from '../../messages/pl/brands.json';
import plBlog from '../../messages/pl/blog.json';
import plFaq from '../../messages/pl/faq.json';
import plFooter from '../../messages/pl/footer.json';
import plGallery from '../../messages/pl/gallery.json';

const buildMessages = (
  commonData: any,
  homeData: any,
  aboutData: any,
  servicesData: any,
  contactData: any,
  processData: any,
  teamData: any,
  brandsData: any,
  blogData: any,
  faqData: any,
  footerData: any,
  galleryData: any
) => ({
  common: commonData,
  home: homeData,
  about: aboutData,
  services: servicesData,
  contact: contactData,
  process: processData,
  team: teamData,
  brands: brandsData,
  blog: blogData,
  faq: faqData,
  footer: footerData,
  gallery: galleryData,
});

const messagesMap: Record<string, any> = {
  tr: buildMessages(trCommon, trHome, trAbout, trServices, trContact, trProcess, trTeam, trBrands, trBlog, trFaq, trFooter, trGallery),
  en: buildMessages(enCommon, enHome, enAbout, enServices, enContact, enProcess, enTeam, enBrands, enBlog, enFaq, enFooter, enGallery),
  de: buildMessages(deCommon, deHome, deAbout, deServices, deContact, deProcess, deTeam, deBrands, deBlog, deFaq, deFooter, deGallery),
  ru: buildMessages(ruCommon, ruHome, ruAbout, ruServices, ruContact, ruProcess, ruTeam, ruBrands, ruBlog, ruFaq, ruFooter, ruGallery),
  es: buildMessages(esCommon, esHome, esAbout, esServices, esContact, esProcess, esTeam, esBrands, esBlog, esFaq, esFooter, esGallery),
  pt: buildMessages(ptCommon, ptHome, ptAbout, ptServices, ptContact, ptProcess, ptTeam, ptBrands, ptBlog, ptFaq, ptFooter, ptGallery),
  pl: buildMessages(plCommon, plHome, plAbout, plServices, plContact, plProcess, plTeam, plBrands, plBlog, plFaq, plFooter, plGallery),
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !hasLocale(routing.locales, locale)) {
    locale = routing.defaultLocale;
  }

  const messages = messagesMap[locale] || messagesMap[routing.defaultLocale];

  return {
    locale,
    messages,
  };
});
