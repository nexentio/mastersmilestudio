export interface BlogCardConfig {
  id: string;
  titleKey: string;
  descKey: string;
  image: string;
  imageHeight: string;
}

export const BLOG_CARDS: BlogCardConfig[] = [
  {
    id: 'post1',
    titleKey: 'card1Title',
    descKey: 'card1Desc',
    image: '/e-max-lamine-treatment-mss.jpeg',
    imageHeight: '520px',
  },
  {
    id: 'post2',
    titleKey: 'card2Title',
    descKey: 'card2Desc',
    image: '/dental-implant-mss.jpeg',
    imageHeight: '340px',
  },
  {
    id: 'post3',
    titleKey: 'card3Title',
    descKey: 'card3Desc',
    image: '/smile-makeover.jpg',
    imageHeight: '440px',
  },
];
