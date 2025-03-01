import { create } from 'zustand';
import {
  addToCart,
  calculateTotal,
  getCart,
  removeFromCart,
} from '@/shared/api';
import { Cart, Product } from '@/shared/model';

type BagStore = {
  cart: Product[];
  getCart: () => Cart;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  total: (products: Product[]) => string;
};

export const useBagStore = create<BagStore>(() => ({
  cart: [],
  getCart: getCart,
  addToCart: addToCart,
  removeFromCart: removeFromCart,
  total: calculateTotal,
}));
