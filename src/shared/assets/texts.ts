export const buttonTexts = {
  shop: 'Shop',
  blog: 'Blog',
  ourStory: 'Our Story',
  addToCart: 'ADD TO CART',
};

export const slideTexts = {
  tempData: [
    {
      title: 'Gold big hoops',
      price: '$ 68,00',
    },
    {
      title: 'Gold big hoops',
      price: '$ 68,00',
    },
    {
      title: 'Gold big hoops',
      price: '$ 68,00',
    },
    {
      title: 'Gold big hoops',
      price: '$ 68,00',
    },
    {
      title: 'Gold big hoops',
      price: '$ 68,00',
    },
  ],
  viewProduct: 'View ProductContent',
};

export const titles = {
  shopTheLatest: 'Shop The Latest',
};

export const linkTexts = {
  viewAll: 'View All',
};

export type CardType = {
  name: string;
  categories?: string[];
  materials?: string[];
  sizes?: number[];
  price: number;
  inStock: boolean;
  onSale: boolean;
  sale: number;
};

export const tempCards: CardType[] = [
  {
    name: 'Lira Earrings',
    price: 20,
    inStock: true,
    onSale: false,
    sale: 0,
  },
  {
    name: 'Hal Earrings',
    price: 25,
    inStock: true,
    onSale: true,
    sale: 20,
  },
  {
    name: 'Kaede Hair Pin Set Of 3 ',
    price: 30,
    inStock: true,
    onSale: true,
    sale: 30,
  },
  {
    name: 'Hair Pin Set of 3',
    price: 30,
    inStock: false,
    onSale: false,
    sale: 0,
  },
  {
    name: 'Plaine Necklace',
    price: 19,
    inStock: true,
    onSale: false,
    sale: 0,
  },
  {
    name: 'Yuki Hair Pin Set of 3',
    price: 29,
    inStock: false,
    onSale: false,
    sale: 0,
  },
  {
    name: 'Lira Earrings',
    price: 20,
    inStock: true,
    onSale: false,
    sale: 0,
  },
  {
    name: 'Lira Earrings',
    price: 20,
    inStock: true,
    onSale: false,
    sale: 0,
  },
  {
    name: 'Lira Earrings',
    price: 20,
    inStock: true,
    onSale: false,
    sale: 0,
  },
  {
    name: 'Lira Earrings',
    price: 20,
    inStock: true,
    onSale: false,
    sale: 0,
  },
  {
    name: 'Lira Earrings',
    price: 20,
    inStock: true,
    onSale: false,
    sale: 0,
  },
  {
    name: 'Lira Earrings',
    price: 20,
    inStock: true,
    onSale: false,
    sale: 0,
  },
];

export const footerLinks = {
  contacts: 'CONTACTS',
  termsOfServices: 'TERMS OF SERVICES',
  shippingAndReturns: 'SHIPPING AND RETURNS',
  termsOfUse: 'Terms of use',
  privacyPolicy: 'privacy policy',
  giveAnEmail: 'Give an email, get the newsletter.',
};
