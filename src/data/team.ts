export interface TeamMemberConfig {
  id: number;
  docKey: string; // references messages/{locale}/team.json key (doc1, doc2, etc.)
  name: string;
  image: string;
  pastelBg: string;
  textColor: string;
  subColor: string;
  imageScale: number;
  imageOffsetY: string;
}

export const TEAM_MEMBERS: TeamMemberConfig[] = [
  {
    id: 1,
    docKey: 'doc1',
    name: 'Dr. Fırat İskender',
    image: '/team/firat-iskenderr.webp',
    pastelBg: '#FEF3C7',
    textColor: '#0f172a',
    subColor: '#475569',
    imageScale: 1.1,
    imageOffsetY: '0%',
  },
  {
    id: 2,
    docKey: 'doc2',
    name: 'Dr. Tülay Kaya',
    image: '/team/tulay.webp',
    pastelBg: '#F5F5F7',
    textColor: '#0f172a',
    subColor: '#475569',
    imageScale: 1.35,
    imageOffsetY: '-32%',
  },
  {
    id: 3,
    docKey: 'doc3',
    name: 'Dr. Ali Kemal Demir',
    image: '/team/ali-kemal.webp',
    pastelBg: '#E0E7FF',
    textColor: '#0f172a',
    subColor: '#475569',
    imageScale: 1.1,
    imageOffsetY: '0%',
  },
  {
    id: 4,
    docKey: 'doc4',
    name: 'Dr. Ozan Öztürk',
    image: '/team/dr-ozan-ozturk.jpg',
    pastelBg: '#FFEDD5',
    textColor: '#0f172a',
    subColor: '#475569',
    imageScale: 1.05,
    imageOffsetY: '0%',
  },
  {
    id: 5,
    docKey: 'doc5',
    name: 'Dr. Julia Rostova',
    image: '/team/julia.webp',
    pastelBg: '#D1FAE5',
    textColor: '#0f172a',
    subColor: '#475569',
    imageScale: 1.35,
    imageOffsetY: '-32%',
  },
  {
    id: 6,
    docKey: 'doc6',
    name: 'Dr. Abdullah Yılmaz',
    image: '/team/abdullah.webp',
    pastelBg: '#E0F2FE',
    textColor: '#0f172a',
    subColor: '#475569',
    imageScale: 1.25,
    imageOffsetY: '-22%',
  },
  {
    id: 7,
    docKey: 'doc7',
    name: 'Dt. Sude Demir',
    image: '/team/sude.webp',
    pastelBg: '#FCE7F3',
    textColor: '#0f172a',
    subColor: '#475569',
    imageScale: 1.3,
    imageOffsetY: '-25%',
  },
];
