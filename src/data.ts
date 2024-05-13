import { DataFormat } from './utils/types';
import image7 from './assets/backstagetalks_cover_issue_7.png';
import image6 from './assets/backstagetalks_cover_issue_6.png';
import image5 from './assets/backstagetalks_cover_issue_5.png';
import image4 from './assets/backstagetalks_cover_issue_4.png';
import image3 from './assets/backstagetalks_cover_issue_3.png';
import image2 from './assets/backstagetalks_cover_issue_2.png';
import image1 from './assets/backstagetalks_cover_issue_1.png';

const data: DataFormat[] = [
  {
    id: 7,
    item: 'Issue # 7',
    purchaseLinkEurope: 'https://brot.sk/products/backstage-talks-issue-7',
    purchaseLinkUK:
      'https://www.newsstand.co.uk/196-business-and-finance-magazines/33211-subscribe-to-backstage-talks-magazine-subscription.aspx',
    store: 'https://backstagetalks.com/stocklist.php',
    isSoldOut: false,
    mainColor: '#FF608C',
    secondColor: '#FFFFFF',
    coverImage: image7,
  },
  {
    id: 6,
    item: 'Issue # 6',
    purchaseLinkEurope:
      'https://brot.sk/products/backstage-talks-issue-6?_pos=2&_sid=1c5730cc8&_ss=r',
    purchaseLinkUK: '',
    store: 'https://backstagetalks.com/stocklist.php',
    isSoldOut: false,
    mainColor: '#FFFFFF',
    secondColor: '#E568AC',
    coverImage: image6,
  },
  {
    id: 5,
    item: 'Issue # 5',
    purchaseLinkEurope:
      'https://brot.sk/products/backstage-talks-5?_pos=3&_sid=1c5730cc8&_ss=r',
    purchaseLinkUK: '',
    store: 'https://backstagetalks.com/stocklist.php',
    isSoldOut: false,
    mainColor: '#00C1B5',
    secondColor: '#FFFFFF',
    coverImage: image5,
  },
  {
    id: 4,
    item: 'Issue # 4',
    purchaseLinkEurope: '',
    purchaseLinkUK: '',
    store: 'https://backstagetalks.com/stocklist.php',
    isSoldOut: true,
    mainColor: '#FF6519',
    secondColor: '#FFFFFF',
    coverImage: image4,
  },
  {
    id: 3,
    item: 'Issue # 3',
    purchaseLinkEurope: 'https://brot.sk/?_pos=4&_sid=1c5730cc8&_ss=r',
    purchaseLinkUK: '',
    store: 'https://backstagetalks.com/stocklist.php',
    isSoldOut: false,
    mainColor: '#FFBE00',
    secondColor: '#FFFFFF',
    coverImage: image3,
  },
  {
    id: 2,
    item: 'Issue # 2',
    purchaseLinkEurope:
      'https://brot.sk/products/backstage-talks-2?_pos=1&_sid=1c5730cc8&_ss=r',
    purchaseLinkUK: '',
    store: 'https://backstagetalks.com/stocklist.php',
    isSoldOut: false,
    mainColor: '#1D3FBB',
    secondColor: '#FFFFFF',
    coverImage: image2,
  },
  {
    id: 1,
    item: 'Issue # 1',
    purchaseLinkEurope: '',
    purchaseLinkUK: '',
    store: 'https://backstagetalks.com/stocklist.php',
    isSoldOut: true,
    mainColor: '#E30512',
    secondColor: '#FFFFFF',
    coverImage: image1,
  },
];
export default data;
